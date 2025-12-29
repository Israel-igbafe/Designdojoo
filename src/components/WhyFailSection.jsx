import { Clock, Briefcase, EyeOff } from "lucide-react";


function WhyFailSection() {
  return (
    <section className="bg-gray-50 px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
  Why Most Product Builders{" "}
  <span className="text-red-600">Fail to Launch</span>
</h2>


          <p className="mt-4 text-gray-600">
            We’ve identified the three biggest obstacles holding talented
            professionals back from their dream careers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl border p-6 shadow-sm">
  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
    <Clock className="w-5 h-5 text-red-600" />
  </div>

  <h4 className="font-semibold text-gray-900 mb-2">
    The Consistency Trap
  </h4>

  <p className="text-sm text-gray-600 leading-relaxed">
  <span className="bg-red-100 text-red-700 px-1 rounded-sm">
    Tutorial hell is real.
  </span>{" "}
  You learn, but you don’t build. DesignDojoo fixes this with{" "}
  <span className="bg-red-100 text-red-700 px-1 rounded-sm">
    mandatory accountability partners
  </span>{" "}
  who keep you on track.
</p>

</div>


          {/* Card 2 */}
          <div className="bg-white rounded-xl border p-6 shadow-sm">
  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
    <Briefcase className="w-5 h-5 text-red-600" />
  </div>

  <h4 className="font-semibold text-gray-900 mb-2">
    The Experience Gap
  </h4>

  <p className="text-sm text-gray-600 leading-relaxed">
  You need a{" "}
  <span className="bg-red-100 text-red-700 px-1 rounded-sm">
    portfolio
  </span>
  , but you have no projects. We give you{" "}
  <span className="bg-red-100 text-red-700 px-1 rounded-sm">
    3 real-world projects
  </span>{" "}
  in{" "}
  <span className="bg-red-100 text-red-700 px-1 rounded-sm">
    3 weeks with actual clients
  </span>.
</p>

</div>


          {/* Card 3 */}
          <div className="bg-white rounded-xl border p-6 shadow-sm">
  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
    <EyeOff className="w-5 h-5 text-red-600" />
  </div>

  <h4 className="font-semibold text-gray-900 mb-2">
    The Invisible Professional
  </h4>

  <p className="text-sm text-gray-600 leading-relaxed">
  You have the{" "}
  <span className="bg-red-100 text-red-700 px-1 rounded-sm">
    skills
  </span>
  , but no one knows you. We dedicate{" "}
  <span className="bg-red-100 text-red-700 px-1 rounded-sm">
    2 weeks
  </span>{" "}
  strictly to your{" "}
  <span className="bg-red-100 text-red-700 px-1 rounded-sm">
    Branding, LinkedIn, and CV optimization
  </span>.
</p>

</div>


        </div>
      </div>
    </section>
  );
}

export default WhyFailSection;
