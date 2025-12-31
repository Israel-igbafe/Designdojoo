import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";



function CertificateCard({ name, image }) {
  return (
    <div className="relative min-w-[320px] bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-center justify-center">

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

  // ✅ ADD THIS BLOCK RIGHT HERE
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };

   const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -360,
      behavior: "smooth",
    });
  };

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

        {/* Carousel wrapper */}
<div className="relative">

  {/* Scrollable certificates */}
  <div
    ref={scrollRef}
    className="flex gap-8 overflow-x-hidden scroll-smooth"
  >
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

    {/* EXTRA certificates (hidden until scroll) */}
    <CertificateCard
      name="Kwosah Eugie"
      image="/images/certificates/certificates-4.svg"
    />

    <CertificateCard
      name="Adegoke Korede"
      image="/images/certificates/certificates-5.svg"
    />
  </div>

  {/* LEFT ARROW */}
<button
  onClick={scrollLeft}
  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 transition z-10"
>
  <ChevronLeft className="w-5 h-5 text-gray-700" />
</button>


  {/* RIGHT ARROW */}
  <button
    onClick={scrollRight}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 transition"
  >
    <ChevronRight className="w-5 h-5 text-gray-700" />
  </button>

</div>


      </div>
    </section>
  );
}

export default HallOfCertificates;
