import { CheckCircle, Instagram, Facebook, MessageCircle, Download, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";



  export default function ConfirmationPage() {
  const navigate = useNavigate();

  const slotsLeft = Number(localStorage.getItem("slotsLeft")) || 15;


  // ✅ ADD THIS
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      alert("Link copied to clipboard!");
    } catch (err) {
      alert("Failed to copy link");
    }
  };

  const handleShareInvite = async () => {
  const message = `I just applied to the DesignDojoo Product Experience Scholarship.
There are only ${slotsLeft} spots remaining.

Join me – let’s stay accountable and grow together
https://www.designdojoo.com/`;

  const shareData = {
    title: "DesignDojoo Product Experience Scholarship",
    text: message,
    url: "https://www.designdojoo.com/",
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log("Share cancelled", err);
    }
  } else {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }
};



  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 space-y-6">

        {/* Check Icon */}
        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
            <CheckCircle className="w-7 h-7 text-red-500" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-xl font-bold text-gray-900">
            Application Submitted. Now,<br /> Finalize Your Entry.
          </h1>
          <p className="text-sm text-gray-500">
            We have received your details. However, due to the high volume of
            applicants, we prioritize those who are active in our ecosystem.
          </p>
        </div>

        {/* Step 2 Black Box */}
        <div className="bg-black text-white rounded-lg px-6 py-4 flex flex-col items-center text-center space-y-2 mt-6">
          <p className="text-red-500 text-sm font-semibold">
            Step 2 (Required)
          </p>
          <p className="text-sm text-gray-400">
            Follow DesignDojoo on social media to verify your application. We
            check.
          </p>

          <div className="flex gap-4">
  <SocialIcon
    icon={<Instagram />}
    link="https://www.instagram.com/designdojoo"
  />

  <SocialIcon
  icon={<Facebook />}
  link="https://web.facebook.com/profile.php?id=61573099574018&sk=map"
/>


  <SocialIcon
  icon={<MessageCircle />}
  link="https://chat.whatsapp.com/EZnugdO99R5Hv5AEuKU6II"
/>

</div>

        </div>

        {/* Boost Acceptance */}
        <div className="bg-red-50 rounded-xl p-5 space-y-4 text-center">
          <h3 className="text-red-600 font-semibold">
            Boost Your Acceptance Probability
          </h3>
          <p className="text-sm text-gray-600">
            This scholarship relies on accountability. Applicants who bring
            their own “Accountability Partner” (a UI Designer or PM friend) get
            priority review.
          </p>

          <div className="flex gap-3">
           <button
  onClick={handleShareInvite}
  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium"
>
  Send Invite to a Partner
</button>

            <button
  onClick={handleCopyLink}
  className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg text-sm font-medium hover:bg-red-100"
>
  Copy Link
</button>

          </div>
        </div>

        {/* While You Wait */}
        <div className="text-center space-y-3">
          <h4 className="font-semibold text-gray-900">While You Wait</h4>
          <p className="text-sm text-gray-500">
            Get a head start! Download the Week 1–8 Curriculum Roadmap and
            prepare for the journey ahead.
          </p>

        <button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/resources/DesignDojoo-UI-Guide.pdf";
    link.download = "DesignDojoo-UI-Guide.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900"
>
  <Download className="w-4 h-4" />
  Download Free Resource
</button>



        </div>

        {/* Back Home */}
        <div className="flex justify-center">
          <button
  onClick={() => navigate("/")}
  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
>

            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>

      </div>
    </div>
  );
}

function SocialIcon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800"
    >
      {icon}
    </a>
  );
}
