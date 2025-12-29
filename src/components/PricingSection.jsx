import { Check } from "lucide-react";
import { Gift } from "lucide-react";


function PricingSection() {
  return (
    <section className="bg-black py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Pricing pill */}
       <span className="inline-block mb-6 text-xs font-medium 
  text-red-400 bg-[#1F2937] px-4 py-1 rounded-full">
  Pricing
</span>




        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Invest in Your <span className="text-red-600">Future</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
          We believe talent shouldn&apos;t be limited by finances. That&apos;s why we
          offer significant scholarships to qualified applicants.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* UI/UX DESIGN TRACK */}
          <div className="bg-white rounded-2xl p-8 text-left shadow-lg">
            <h3 className="font-bold text-xl text-gray-900 mb-2">
              UI/UX Design Track
            </h3>

            {/* Old price */}
            <p className="text-sm text-gray-400 line-through">
              ₦150,000
            </p>

            {/* New price */}
            <p className="text-2xl font-bold text-red-600 mt-1">
              ₦83,695 <span className="text-sm text-gray-500 font-medium">/ one-time</span>
            </p>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {[
                "Complete UI/UX curriculum",
                "Design tools mastery",
                "3 portfolio projects",
                "Paired with PM partner",
                "LinkedIn optimization",
                "Agency job opportunities",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-red-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition">
              Enroll Now
            </button>
          </div>

          {/* PRODUCT MANAGEMENT TRACK */}
          <div className="bg-white rounded-2xl p-8 text-left shadow-lg">
            <h3 className="font-bold text-xl text-gray-900 mb-2">
              Product Management Track
            </h3>

            {/* Old price */}
            <p className="text-sm text-gray-400 line-through">
              ₦180,000
            </p>

            {/* New price */}
            <p className="text-2xl font-bold text-red-600 mt-1">
              ₦136,895 <span className="text-sm text-gray-500 font-medium">/ one-time</span>
            </p>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {[
                "Full PM methodology training",
                "Roadmap & strategy skills",
                "3 product case studies",
                "Paired with UI partner",
                "LinkedIn optimization",
                "Agency job opportunities",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-red-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition">
              Enroll Now
            </button>
          </div>

        </div>

        {/* Free LLM Banner */}
      <div className="mt-12 flex justify-center">
  <div className="flex items-center gap-2 
    bg-[#1F2937] px-4 py-2 rounded-full">

    {/* Gift icon */}
    <Gift className="w-4 h-4 text-red-400" />

    {/* Text */}
    <p className="text-xs text-red-400 font-medium">
      Free LLM AI Bootcamp coming up soon
    </p>
  </div>
</div>



      </div>
    </section>
  );
}

export default PricingSection;
