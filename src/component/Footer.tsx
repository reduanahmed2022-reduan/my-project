const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-500 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-pink-600 rounded flex items-center justify-center text-white text-[9px] font-bold">
              DS
            </div>
            <span className="text-sm font-bold text-gray-900">Dev Stack</span>
          </div>
          <p className="text-xs text-gray-400">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex space-x-3 text-xs text-gray-400 pt-1">
            <a href="#github">GitHub</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-900 uppercase mb-3">Product</h4>
          <ul className="space-y-1 text-xs text-gray-400">
            <li><a href="#home">Home</a></li>
            <li><a href="#tech">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-900 uppercase mb-3">Company</h4>
          <ul className="space-y-1 text-xs text-gray-400">
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-900 uppercase mb-3">Legal</h4>
          <ul className="space-y-1 text-xs text-gray-400">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 border-t border-gray-100 text-[11px] text-gray-400 flex justify-between">
        <p>© {new Date().getFullYear()} DevStack. All rights reserved. </p>
        <div className="flex space-x-3">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;