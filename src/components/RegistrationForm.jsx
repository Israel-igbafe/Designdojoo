import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm px-6 py-8 md:px-10">

        {/* Header */}
        <div className="mb-8">
          <div className="bg-black rounded-lg px-6 py-5">
            <div className="flex items-center gap-2 text-red-500 text-xs mb-2">
              ⏱ Takes 8 minutes
            </div>

            <h1 className="text-white text-xl font-bold">
              The DesignDojoo Product Launchpad
            </h1>

            <p className="text-gray-300 text-sm mt-1">
              Stop learning alone. Start building together.
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="text-sm text-gray-600 space-y-4 mb-10">
          <p>
            <strong>Welcome!</strong> We have <strong>limited scholarship spots</strong> for this
            8-week cohort. This is a hands-on, high-intensity career accelerator.
          </p>

          <p>
            We’re selecting designers and product managers ready to do the work
            and launch their careers.
          </p>

          <p>
            <strong>Authenticity over perfection.</strong> Answer honestly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Personal Details */}
          <section>
            <h2 className="font-semibold mb-4">Personal Details</h2>

            <div className="space-y-4">
              <input className="input" placeholder="Full Name *" />
              <input className="input" placeholder="Portfolio / LinkedIn Profile *" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="input" placeholder="City *" />
                <input className="input" placeholder="Country *" />
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section>
            <h2 className="font-semibold mb-4">Contact Info</h2>

            <div className="space-y-4">
              <input className="input" placeholder="Email Address *" />
              <input className="input" placeholder="Phone Number (WhatsApp) *" />
              <input className="input" placeholder="Social Media Handle (Twitter / IG / LinkedIn) *" />
            </div>
          </section>

          {/* Program Details */}
          <section>
            <h2 className="font-semibold mb-4">Program Details</h2>

            <div className="space-y-4">
              <label className="flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer">
                <input type="radio" name="track" defaultChecked />
                <span>Combined Scholarship (UI/UX + PM) – 8 Weeks</span>
              </label>

              <label className="flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer">
                <input type="radio" name="track" />
                <span>UI/UX Design Only – 8 Weeks</span>
              </label>

              <label className="flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer">
                <input type="radio" name="track" />
                <span>Product Management Only – 8 Weeks</span>
              </label>
            </div>

            {/* How did you hear */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                How did you hear about us?
              </label>

              <select className="input">
                <option value="">Select an option</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>WhatsApp</option>
                <option>Aligntraits</option>
                <option>From a friend</option>
                <option>Other</option>
              </select>
            </div>
          </section>

          {/* Qualifying Questions */}
          <section>
            <h2 className="font-semibold mb-4">Qualifying Questions</h2>

            <div className="space-y-4">
              <textarea
                rows="3"
                className="input resize-none"
                placeholder="What is the ONE thing blocking your career growth right now?"
              />

              <textarea
                rows="3"
                className="input resize-none"
                placeholder="Why do you need an accountability partner right now?"
              />

              <div>
                <label className="block text-sm font-medium mb-2">
                  Commitment Pledge: Can you dedicate 10–15 hrs/week?
                </label>

                <select className="input">
                  <option value="">Select your commitment level</option>
                  <option>Yes, I can</option>
                  <option>Tight schedule, but I’ll try</option>
                  <option>No, I can’t</option>
                </select>
              </div>
            </div>
          </section>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition"
          >
            Submit Application
          </button>

          <p className="text-xs text-gray-400 text-center">
            By submitting, you agree to our Terms of Service and Privacy Policy.
          </p>

        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
