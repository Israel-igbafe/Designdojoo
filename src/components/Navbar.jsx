import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 sm:gap-2">
  <img
    src="/logo.svg"
    alt="DesignDojo"
    className="h-6 sm:h-7 w-auto"
  />
  <span className="text-base sm:text-lg font-semibold text-gray-900 whitespace-nowrap">
    DesignDojoo
  </span>
</Link>



        {/* Navigation */}
        <nav className="flex items-center gap-4 sm:gap-8">


          <a
            href="#program"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Program
          </a>

          <a
            href="#pricing"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            FAQ
          </a>

          <Link
            to="/apply"
            className="ml-2 inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition"
          >
            Apply Now
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
