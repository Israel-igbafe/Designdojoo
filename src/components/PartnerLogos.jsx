function PartnerLogos() {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Subtle divider */}
        <div className="border-t border-gray-200 mb-8" />

        {/* Logos */}
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-90">
          <img
            src="/images/partners/pediforte.svg"
            alt="Pediforte"
            className="h-8 md:h-10 object-contain"
          />

          <img
            src="/images/partners/aligntraits.svg"
            alt="AlignTraits"
            className="h-8 md:h-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default PartnerLogos;
