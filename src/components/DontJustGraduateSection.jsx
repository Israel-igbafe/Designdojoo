import { Briefcase, Building2, Award } from "lucide-react";

function DontJustGraduateSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-block mb-4 text-xs font-semibold text-red-600 bg-red-100 px-4 py-1 rounded-full">
            THE DESIGNDOJOO ADVANTAGE
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Don&apos;t Just Graduate—
            <br />
            <span className="text-red-600">Get Hired</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 max-w-lg">
            Top performers in the scholarship don&apos;t just get a certificate.
            Our unique agency model means you transition directly from learning
            to earning.
          </p>

          {/* Feature List */}
          <div className="mt-10 space-y-6">

            {/* Item 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Earn While You Learn
                </h4>
                <p className="text-sm text-gray-600">
                  We offer low-cost, high-quality agency gigs to students in
                  Week 8. Start earning before you even graduate.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Agency Employment
                </h4>
                <p className="text-sm text-gray-600">
                  Best graduates get offers to join the DesignDojoo Agency team.
                  Transition directly from student to professional.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                <Award className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Partner Certificates
                </h4>
                <p className="text-sm text-gray-600">
                  Receive credentials co-signed by our hiring partners.
                  Industry-recognized certification for your portfolio.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT STATS CARD */}
        <div className="bg-gray-50 rounded-2xl p-10 shadow-sm">

          <div className="grid grid-cols-2 gap-y-10 gap-x-8 text-center">

            <div>
              <p className="text-3xl font-bold text-red-600">100%</p>
              <p className="text-sm text-gray-600 mt-1">
                Placement Rate
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-red-600">8</p>
              <p className="text-sm text-gray-600 mt-1">
                Week Program
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-red-600">3+</p>
              <p className="text-sm text-gray-600 mt-1">
                Portfolio Projects
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-red-600">
                50 – 75%
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Scholarship Available
              </p>
            </div>

          </div>

          {/* Partners */}
          <div className="mt-10 pt-8 border-t border-gray-200 text-center">
            <p className="text-xs font-semibold text-gray-500 mb-4">
              IN PARTNERSHIP WITH
            </p>

            <div className="flex items-center justify-center gap-6">
              {/* Replace with real logos if available */}
              <img
  src="/images/partners/pediforte.svg"
  alt="Pediforte"
  className="h-6 object-contain opacity-80"
/>

<img
  src="/images/partners/aligntraits.svg"
  alt="AlignTraits"
  className="h-6 object-contain opacity-80"
/>

            </div>

            {/* CTA */}
            <button className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition">
              Check Eligibility
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DontJustGraduateSection;
