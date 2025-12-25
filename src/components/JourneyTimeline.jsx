function JourneyTimeline() {
  return (
    <section className="bg-white px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Journey to <span className="text-red-600">Career Launch</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A carefully structured program designed to transform you from learner
            to professional in just 8 weeks.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

          {/* Item 1 */}
          <div className="relative mb-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 text-right">
              <h3 className="font-semibold text-lg text-gray-900">
                Weeks 1–2: The Bootcamp Refresher
              </h3>
              <p className="text-gray-600 mt-2">
                UI Track & Product Management Track separate learning.
                Master the fundamentals with structured curriculum.
              </p>
            </div>

            <div className="w-10 h-10 bg-red-600 rounded-full border-4 border-white z-10"></div>

            <div className="md:w-1/2 md:pl-12"></div>
          </div>

          {/* Item 2 */}
          <div className="relative mb-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12"></div>

            <div className="w-10 h-10 bg-red-600 rounded-full border-4 border-white z-10"></div>

            <div className="md:w-1/2 md:pl-12 text-left">
              <h3 className="font-semibold text-lg text-gray-900">
                Weeks 3–5: The Accountability Sprints
              </h3>
              <p className="text-gray-600 mt-2">
                Designers paired with Product Managers.  
                Build real products in 3 weeks. Your PM manages timelines,
                your UI delivers execution.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative mb-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 text-right">
              <h3 className="font-semibold text-lg text-gray-900">
                Weeks 6–7: The Branding Overhaul
              </h3>
              <p className="text-gray-600 mt-2">
                Social media optimization, CV restructuring,
                and client acquisition scripts. Become visible.
              </p>
            </div>

            <div className="w-10 h-10 bg-red-600 rounded-full border-4 border-white z-10"></div>

            <div className="md:w-1/2 md:pl-12"></div>
          </div>

          {/* Item 4 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12"></div>

            <div className="w-10 h-10 bg-red-600 rounded-full border-4 border-white z-10"></div>

            <div className="md:w-1/2 md:pl-12 text-left">
              <h3 className="font-semibold text-lg text-gray-900">
                Week 8: The Agency Launch
              </h3>
              <p className="text-gray-600 mt-2">
                Go-to-market strategy. DesignDojoo acts as the agency.
                You get real gigs. Start earning.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default JourneyTimeline;
