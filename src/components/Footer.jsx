function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            DesignDojoo
          </h3>
          <p className="text-sm text-gray-400">
            Building the next generation of product designers and managers
            through accountability, real projects, and community.
          </p>
        </div>

        {/* Program */}
        <div>
          <h4 className="text-white font-semibold mb-4">Program</h4>
          <ul className="space-y-2 text-sm">
            <li>Product Experience Scholarship</li>
            <li>UI/UX Design Track</li>
            <li>Product Management Track</li>
            <li>Agency Projects</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>FAQs</li>
            <li>Pricing</li>
            <li>Application Process</li>
            <li>Terms & Privacy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>WhatsApp</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DesignDojoo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
