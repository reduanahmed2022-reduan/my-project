import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-gray-700"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Brand Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-b to-purple-600 from-orange-400 via-pink-500  text-white font-bold px-2 py-1 rounded text-sm">
          DS
         </div>
          {/* <div className="w-7 h-7 bg-gradient-to-r bg-pink-600 rounded flex items-center justify-center text-white text-xs font-bold">
            DS
          </div> */}
          <span className="text-xl font-bold text-gray-900">
            Dev<span className="text-red-600"> Stack</span>
          </span>
        </div>

        {/* Menu Links for Desktop */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
          <a href="#home" className="text-pink-600 font-semibold">Home</a>
          <a href="#tech" className="hover:text-gray-900">Technologies</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Sign In
          </button>
          <button className="text-sm font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-5 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col space-y-2 text-sm text-gray-600">
          <a href="#home" className="py-1">Home</a>
          <a href="#tech" className="py-1">Technologies</a>
          <a href="#projects" className="py-1">Projects</a>
          <a href="#about" className="py-1">About</a>
          <a href="#contact" className="py-1">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;