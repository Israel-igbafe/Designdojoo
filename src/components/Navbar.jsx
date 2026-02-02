import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

function Navbar({ hideFAQ = false }) {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="DesignDojo" className="h-6 w-6" />
          <span className="text-lg font-semibold text-gray-900">
            DesignDojo
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium">

          <a href="#program" className="text-gray-700 hover:text-gray-900">
            Program
          </a>

          <Link to="/shop" className="text-gray-700 hover:text-gray-900">
            Shop
          </Link>

          {/* Conditional nav item */}
             {!hideFAQ && (

             
            <a href="#faq" className="text-gray-700 hover:text-gray-900">
              FAQ
            </a>
             )}

          <Link
            to="/apply"
            className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-white hover:bg-red-700"
          >
            Apply Now
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
