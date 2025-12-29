import {
  Instagram,
  Twitter,
  Linkedin,
  Mail
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0B0F14] text-gray-400 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">

        {/* LEFT: LOGO + TEXT */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logo.svg"
              alt="DesignDojoo Logo"
              className="h-6 w-auto"
            />
            <span className="text-white font-semibold text-lg">
              DesignDojoo
            </span>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed max-w-xs mb-6">
            Transforming aspiring designers and product managers into
            industry-ready professionals through accountability, real
            projects, and career support.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
            <Mail className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* MIDDLE: PROGRAM */}
        <div className= "md:ml-24">
          <h4 className="text-white font-semibold mb-4">
            Program
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">
              UI Design Track
            </li>
            <li className="hover:text-white cursor-pointer">
              PM Track
            </li>
            <li className="hover:text-white cursor-pointer">
              Curriculum
            </li>
            <li className="hover:text-white cursor-pointer">
              Scholarship
            </li>
          </ul>
        </div>

        {/* RIGHT: RESOURCES */}
        <div className = "md:ml-16">
          <h4 className="text-white font-semibold mb-4">
            Resources
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">
              Blog
            </li>
            <li className="hover:text-white cursor-pointer">
              FAQ
            </li>
            <li className="hover:text-white cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        © 2025 DesignDojoo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
