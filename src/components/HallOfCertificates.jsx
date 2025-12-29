function CertificateCard({ name, image }) {
  return (
    <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-center justify-center">
      {/* Quote badge */}
      <span className="absolute -top-3 -right-3 w-8 h-8 bg-red-600 text-white text-lg flex items-center justify-center rounded-full">
        “
      </span>

      {/* Certificate image placeholder */}
     <img
  src={image}
  alt={`Certificate issued to ${name}`}
  className="w-full aspect-[4/3] object-contain border border-gray-200 rounded-md bg-gray-50"
/>

    </div>
  );
}

function HallOfCertificates() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hall of <span className="text-red-600">Certificates</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Join our growing community of certified professionals who’ve launched
            their careers through DesignDojoo.
          </p>
        </div>

        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CertificateCard
  name="Komoda Roy"
  image="/images/certificates/certificates-1.svg"
/>

<CertificateCard
  name="Kuforiji Abraham"
  image="/images/certificates/certificates-2.svg"
/>

<CertificateCard
  name="Olorunsomo Tolulope"
  image="/images/certificates/certificates-3.svg"
/>

        </div>

      </div>
    </section>
  );
}

export default HallOfCertificates;
