import {
  getClientIp,
  handleCorsPreflight,
  methodNotAllowed,
  readJsonBody,
  sendJson,
  setCorsHeaders,
} from "../_lib/http.js";
import { enforceRateLimit } from "../_lib/rateLimit.js";
import { getSupabaseAdmin } from "../_lib/supabaseAdmin.js";
import { validateApplicationPayload } from "../_lib/validation.js";
import { Resend } from "resend";

const APPLICATION_LIMIT = Number(process.env.APPLICATION_RATE_LIMIT || 5);
const APPLICATION_WINDOW_MINUTES = Number(
  process.env.APPLICATION_RATE_WINDOW_MINUTES || 60
);

function isNoSlotError(error) {
  const message = error?.message || "";
  return message.includes("NO_SLOTS_AVAILABLE");
}

function isDuplicateApplicationError(error) {
  const message = error?.message || "";
  return message.includes("DUPLICATE_APPLICATION");
}

export default async function handler(req, res) {
  if (handleCorsPreflight(req, res)) {
    return;
  }
  setCorsHeaders(req, res);

  if (req.method !== "POST") {
    methodNotAllowed(res, ["POST", "OPTIONS"]);
    return;
  }

  const clientIp = getClientIp(req);

  let payload;
  try {
    payload = readJsonBody(req);
  } catch (error) {
    sendJson(res, 400, {
      ok: false,
      error: "Invalid request body",
      details: error.message,
    });
    return;
  }

  const validation = validateApplicationPayload(payload);
  if (!validation.isValid) {
    sendJson(res, 422, {
      ok: false,
      error: "Validation failed",
      details: validation.errors,
    });
    return;
  }

  try {
    const supabase = getSupabaseAdmin();
    const rateLimitResult = await enforceRateLimit({
      supabase,
      action: "application_submit",
      clientIp,
      maxRequests: APPLICATION_LIMIT,
      windowMinutes: APPLICATION_WINDOW_MINUTES,
    });

    if (rateLimitResult.limited) {
      sendJson(
        res,
        429,
        {
          ok: false,
          error: "Too many submissions. Please try again later.",
        },
        { "Retry-After": String(rateLimitResult.retryAfterSeconds) }
      );
      return;
    }

    const submission = validation.data;
    const { data, error } = await supabase.rpc("submit_application_with_slot", {
      p_full_name: submission.full_name,
      p_email: submission.email,
      p_phone: submission.phone,
      p_social_handle: submission.social_handle,
      p_city: submission.city,
      p_country: submission.country,
      p_portfolio: submission.portfolio || null,
      p_track: submission.track,
      p_referral: submission.referral,
      p_blocker: submission.blocker,
      p_accountability: submission.accountability,
      p_commitment: submission.commitment,
      p_client_ip: clientIp,
    });

    if (error) {
      if (isNoSlotError(error)) {
        sendJson(res, 409, {
          ok: false,
          error: "No scholarship slots left",
        });
        return;
      }

      if (isDuplicateApplicationError(error)) {
        sendJson(res, 409, {
          ok: false,
          error: "Application already exists for this email",
        });
        return;
      }

      sendJson(res, 500, {
        ok: false,
        error: "Failed to submit application",
        details: error.message,
      });
      return;
    }

    const result = Array.isArray(data) ? data[0] : data;

    sendJson(res, 201, {
      ok: true,
      application_id: result?.application_id ?? null,
      slots_left: result?.slots_left ?? null,
    });

    // Send email directly via Resend
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const recipientName = submission.full_name || "there";
      const today = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date());

      await resend.emails.send({
        from: process.env.REMINDER_EMAIL_FROM || "DesignDojoo <noreply@designdojoo.com>",
        to: submission.email,
        subject: process.env.REMINDER_EMAIL_SUBJECT || "Congratulations! Your Scholarship award 🎓",
        html: `
<div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:40px;">
  <div style="max-width:500px; margin:auto; background:#ffffff; padding:40px; border-radius:6px;">
    <div style="text-align:center;">
      <img src="https://designdojoo.com/logo.svg" width="120"/>
      <h2 style="margin:10px 0 0 0;">DesignDojoo Institute</h2>
      <p style="color:#777; font-size:14px;">School of Product Design</p>
    </div>
    <p style="text-align:right; font-size:14px; color:#777;">${today}</p>
    <h3 style="text-align:center;">SCHOLARSHIP ADMISSION OFFER</h3>
    <p>Dear <strong>${recipientName}</strong>,</p>
    <p>We saw your application come through our partnership with <strong>Aligntraits.</strong></p>
    <p>Because of this partnership, your application was fast-tracked. We are impressed by your drive to become a world-class UI Designer / Product Manager, and we want to remove every barrier to your entry.</p>
    <p><strong>Scholarship Decision: DISTINCTION (75% COVERED)</strong></p>
    <p>You have been awarded our highest tier Partner Scholarship.</p>
    <ul style="padding-left:20px; line-height:1.8;">
      <li><strong>Original Tuition:</strong> ₦83,659</li>
      <li><strong>Paid Scholarship Fee:</strong> ₦62,744</li>
      <li><strong>Expected Fee:</strong> ₦20,915</li>
    </ul>
    <div style="text-align:center; margin:30px 0;">
      <a href="https://designdojoo.com/sales" style="background:#e50914;color:#ffffff;padding:14px 28px;text-decoration:none;font-weight:bold;display:block;width:100%;box-sizing:border-box;text-align:center;border-radius:4px;">
        Secure My Spot
      </a>
    </div>
    <p><strong>Secure Your Seat:</strong> This exclusive rate is reserved for Aligntraits community members and expires in <strong>72 hours.</strong></p>
    <p>Congratulations on being selected. We are ready to build your portfolio.</p>
    <p>Best regards,</p>
    <br/>
    <p><strong>Mr. A. O. Samuel.</strong><br/>Designdojoo's Principal</p>
    <br/>
    <p style="font-size:12px; color:#999;">Design Dojo Institute • Lagos, Nigeria<br/>Admission ID: #JD-2024-892 • Valid until Month 30, 2024</p>
  </div>
</div>`,
      });
    } catch (emailError) {
      console.error("Email send failed:", emailError.message);
    }

  } catch (error) {
    sendJson(res, 500, {
      ok: false,
      error: "Unexpected server error",
      details: error.message,
    });
  }
}
