// 1️⃣ IMPORT (TOP OF FILE)
import { useNavigate } from "react-router-dom";

function PricingSection() {
  // 2️⃣ HOOK (INSIDE COMPONENT)
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Invest in Your <span className="text-red-600">Future</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We believe talent shouldn’t be limited by finances.
            That’s why we offer significant scholarships to qualified applicants.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* UI/UX Card */}
          <div className="bg-white text-black rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              UI/UX Design Track
            </h3>

            <p className="text-3xl font-bold text-red-600 mb-6">
              ₦83,695 <span className="text-sm text-gray-500">/ one-time</span>
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Complete UI/UX curriculum</li>
              <li>• Design tools mastery</li>
              <li>• 3 portfolio projects</li>
              <li>• Paired with PM partner</li>
              <li>• LinkedIn optimization</li>
              <li>• Agency job opportunities</li>
            </ul>

            {/* 3️⃣ ENROLL BUTTON */}
            <button
              onClick={() => navigate("/apply")}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition"
            >
              Enroll Now
            </button>
          </div>

          {/* PM Card */}
          <div className="bg-white text-black rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Product Management Track
            </h3>

            <p className="text-3xl font-bold text-red-600 mb-6">
              ₦136,895 <span className="text-sm text-gray-500">/ one-time</span>
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Full PM methodology training</li>
              <li>• Product & strategy skills</li>
              <li>• 3 product case studies</li>
              <li>• Paired with UI partner</li>
              <li>• LinkedIn optimization</li>
              <li>• Agency job opportunities</li>
            </ul>

            {/* 3️⃣ ENROLL BUTTON */}
            <button
              onClick={() => navigate("/apply")}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition"
            >
              Enroll Now
            </button>
          </div>

        </div>

        {/* Scholarship Notice */}
        <div className="text-center mt-10">
          <span className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">
            🎓 Free LLM & Branding training included
          </span>
        </div>

      </div>
    </section>
  );
}

export default PricingSection;
