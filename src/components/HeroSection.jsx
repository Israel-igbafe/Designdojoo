// 1️⃣ IMPORTS (TOP OF FILE)
import { useNavigate } from "react-router-dom";

function HeroSection() {
  // 2️⃣ HOOKS (INSIDE COMPONENT, BEFORE RETURN)
  const navigate = useNavigate();

  return (
    <section className="bg-white px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-block mb-4 text-xs font-semibold text-red-600 bg-red-100 px-4 py-1 rounded-full">
            Limited Scholarship Spots Available
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            The 8-Week <br />
            <span className="text-red-600">Product Experience</span> <br />
            Scholarship
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Stop learning alone. Start building together. Join an elite cohort of
            designers and product managers and launch your career in just 8 weeks.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* 3️⃣ APPLY BUTTON (ROUTES TO /apply) */}
            <button
              onClick={() => navigate("/apply")}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Apply for Scholarship
            </button>

            {/* WhatsApp button (leave for later) */}
            <button className="border border-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Chat on WhatsApp
            </button>
          </div>

          {/* Social proof */}
          <p className="mt-4 text-sm text-gray-500">
            Join 500+ Nigerian creatives already building with DesignDojoo
          </p>
        </div>

        {/* RIGHT CONTENT (IMAGE PLACEHOLDER) */}
        <div className="w-full h-72 md:h-96 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
          Hero Image Placeholder
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
