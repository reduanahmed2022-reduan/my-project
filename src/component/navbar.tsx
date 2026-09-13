import { useState } from 'react';
import logo from '../assets/logo-text.png'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-gray-700"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>  
       <div className="flex items-center gap-2">
        <img 
         src={logo} 
         alt="DevStack Logo" 
         className="h-8 md:h-9 w-auto object-contain" 
       />
     </div>

       
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
          <a href="" className="text-pink-600 font-semibold">Home</a>
          <a href="" className="hover:text-gray-900">Technologies</a>
          <a href="" className="hover:text-gray-900">Projects</a>
          <a href="" className="hover:text-gray-900">About</a>
          <a href="" className="hover:text-gray-900">Contact</a>
        </div>

      
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Sign In
          </button>
          <button className="text-sm font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-5 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>

     
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