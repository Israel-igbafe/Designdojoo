// 1️⃣ IMPORTS (TOP OF FILE)
import { useNavigate } from "react-router-dom";
import { Users, Briefcase, BadgeCheck } from "lucide-react";



function HeroSection() {
  // 2️⃣ HOOKS (INSIDE COMPONENT, BEFORE RETURN)
  const navigate = useNavigate();

  return (
    <section className="bg-white px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badges */}
<div className="flex flex-wrap items-center gap-3 mb-6">
  {/* Limited Scholarship */}
  <div className="flex items-center gap-2 bg-white border border-red-200 text-red-600 text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
    <span className="w-2 h-2 bg-red-600 rounded-full" />
    Limited Scholarship Spots Available
  </div>

  {/* Only 15 Slots */}
  <div className="flex items-center gap-2 bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
  <span>⏱</span>
  Only 15 Slots Left
</div>

</div>


          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            The 8-Week <br />
            <span className="text-red-600">Product Experience</span> <br />
            Scholarship
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-xl">
  Stop learning alone, start building together. Join an elite cohort of UI Designers
  and Product Managers. Get paired with an accountability partner, build 3 live
  projects, and launch your career with real agency experience.
</p>
 
{/* Stats */}
<div className="flex flex-wrap items-center gap-6 mt-8">
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
  <Users className="w-4 h-4 text-red-600" />
</div>

    <div className="text-sm">
      <p className="font-semibold text-gray-900">1:1</p>
      <p className="text-gray-500 text-xs">Paired Coaching</p>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
  <Briefcase className="w-4 h-4 text-red-600" />
</div>

    <div className="text-sm">
      <p className="font-semibold text-gray-900">3+</p>
      <p className="text-gray-500 text-xs">Real Projects</p>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
  <BadgeCheck className="w-4 h-4 text-red-600" />
</div>


    <div className="text-sm">
      <p className="font-semibold text-gray-900">8</p>
      <p className="text-gray-500 text-xs">Week Program</p>
    </div>
  </div>
</div>


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
            <button className="border border-red-600 text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-red-50 transition">
  Chat on WhatsApp
</button>

          </div>

          {/* Social proof */}
          <p className="mt-4 text-sm text-red-600 font-medium">
  Be one of 500+ Nigerian creatives
</p>

        </div>

        {/* RIGHT CONTENT (IMAGE PLACEHOLDER) */}
       {/* RIGHT CONTENT (HERO IMAGE) */}
<div className="w-full h-80 md:h-96 flex items-center justify-end">
  <img
    src="/images/hero/hero-image.svg"
    alt="DesignDojoo Hero"
    className="w-full h-full object-cover"
  />
</div>


      </div>
    </section>
  );
}

export default HeroSection;
