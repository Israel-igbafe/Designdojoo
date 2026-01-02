import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center text-white">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What’s Stopping You Right Now?
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-red-100 max-w-2xl mx-auto mb-10">
          Don’t let another week go by stuck in tutorial hell. Join a community
          of accountability partners and launch your career in just 8 weeks.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {/* Apply Button */}
          <button
            onClick={() => navigate("/apply")}
            className="flex items-center gap-2 bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-red-50 transition"
          >
            Apply for Scholarship
            <ArrowRight size={18} />
          </button>

          {/* WhatsApp Button */}
          <a
  href="https://wa.me/2349162682043?text=Hello%20DesignDojoo%20team%20%F0%9F%91%8B%0AI'm%20interested%20in%20the%20Product%20Experience%20Scholarship%20and%20would%20like%20more%20details."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center border border-white-600 text-white-600 font-semibold px-6 py-3 rounded-lg hover:bg-white-50 transition"
>
  Chat on WhatsApp
</a>

        </div>

        {/* Small Text */}
        <p className="text-xs text-red-100">
          Limited spots available. Applications close soon.
        </p>
      </div>
    </section>
  );
}

export default CTASection;
