export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Brand Section */}
      <div className="col-span-1 md:col-span-1">
        <h3 className="text-white text-2xl font-bold mb-4">CloudSync Pro</h3>
        <p className="text-sm text-gray-400">
          Professional cloud synchronization and data management solutions for modern businesses.
        </p>
      </div>

      {/* Product Links */}
      <div>
        <h4 className="text-white font-semibold mb-4">Product</h4>
        <ul className="space-y-2">
          <li><a href="#features" className="text-sm hover:text-white transition-colors">Features</a></li>
          <li><a href="#pricing" className="text-sm hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#integrations" className="text-sm hover:text-white transition-colors">Integrations</a></li>
          <li><a href="#security" className="text-sm hover:text-white transition-colors">Security</a></li>
        </ul>
      </div>

      {/* Company Links */}
      <div>
        <h4 className="text-white font-semibold mb-4">Company</h4>
        <ul className="space-y-2">
          <li><a href="#about" className="text-sm hover:text-white transition-colors">About Us</a></li>
          <li><a href="#careers" className="text-sm hover:text-white transition-colors">Careers</a></li>
          <li><a href="#blog" className="text-sm hover:text-white transition-colors">Blog</a></li>
          <li><a href="#contact" className="text-sm hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Support Links */}
      <div>
        <h4 className="text-white font-semibold mb-4">Support</h4>
        <ul className="space-y-2">
          <li><a href="#help" className="text-sm hover:text-white transition-colors">Help Center</a></li>
          <li><a href="#documentation" className="text-sm hover:text-white transition-colors">Documentation</a></li>
          <li><a href="#api" className="text-sm hover:text-white transition-colors">API Reference</a></li>
          <li><a href="#status" className="text-sm hover:text-white transition-colors">System Status</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} CloudSync Pro. All rights reserved.
      </p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
        <a href="#terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
        <a href="#cookies" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>
  );
}