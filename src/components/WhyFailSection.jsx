function WhyFailSection() {
  return (
    <section className="bg-gray-50 px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Most Product Builders <span className="text-red-600">Fail</span> to Launch
          </h2>

          <p className="mt-4 text-gray-600">
            We’ve identified the three biggest obstacles holding talented
            professionals back from their dream careers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-full mb-4">
              📉
            </div>

            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              The Consistency Trap
            </h3>

            <p className="text-gray-600 text-sm">
              You start strong but lose momentum. Without structure and
              accountability, progress slows and eventually stops.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-full mb-4">
              🧩
            </div>

            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              The Experience Gap
            </h3>

            <p className="text-gray-600 text-sm">
              You learn the theory, but you don’t build real products.
              Employers want experience — not just certificates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-full mb-4">
              👤
            </div>

            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              The Invisible Professional
            </h3>

            <p className="text-gray-600 text-sm">
              No portfolio, weak personal brand, and no visibility.
              Great skills don’t matter if nobody sees your work.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyFailSection;
