// 1️⃣ IMPORT (TOP OF FILE)
import { useNavigate } from "react-router-dom";

function CTASection() {
  // 2️⃣ HOOK (INSIDE COMPONENT)
  const navigate = useNavigate();

  return (
    <section className="bg-red-600 px-6 md:px-12 py-20 text-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What’s stopping you right now?
        </h2>

        {/* Subtext */}
        <p className="text-red-100 max-w-2xl mx-auto mb-10">
          You don’t need another course. You need accountability, real projects,
          and a clear path forward. This is your sign to stop waiting.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* 3️⃣ APPLY BUTTON */}
          <button
            onClick={() => navigate("/apply")}
            className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Apply for Scholarship
          </button>

          {/* WhatsApp button (next step) */}
          <button className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-red-700 transition">
            Chat on WhatsApp
          </button>
        </div>

        {/* Small reassurance */}
        <p className="mt-6 text-sm text-red-200">
          Limited slots • Application takes less than 10 minutes
        </p>
      </div>
    </section>
  );
}

export default CTASection;
