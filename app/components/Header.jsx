'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'; // Toggle scroll lock
  };

  return (
    <header className="bg-teal-800 shadow-md sticky top-0 z-50">
    

      {/* Main Navigation */}
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/" className="h-20 w-40 md:h-24 md:w-52 flex items-center">
          <img 
            src="/prime_earth_logo.png" 
            alt="Prime Earth Realty Logo"
            className="w-full h-full object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-teal-200 font-medium transition">Home</a>
          <a href="#about" className="text-white hover:text-teal-200 font-medium transition">About Us</a>
          <a href="#invest" className="text-white hover:text-teal-200 font-medium transition">Why Invest</a>
          <a href="#faq" className="text-white hover:text-teal-200 font-medium transition">FAQ</a>
          <a 
            href="#contact" 
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-sm"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-teal-800/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-white text-xl transition-all duration-300 ease-in-out md:hidden z-40 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <a 
          href="#home" 
          onClick={handleLinkClick} 
          className="hover:text-teal-200 transition transform hover:scale-105"
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={handleLinkClick} 
          className="hover:text-teal-200 transition transform hover:scale-105"
        >
          About Us
        </a>
        
        <a 
          href="#invest" 
          onClick={handleLinkClick} 
          className="hover:text-teal-200 transition transform hover:scale-105"
        >
          Why Invest
        </a>
        <a 
          href="#faq" 
          onClick={handleLinkClick} 
          className="hover:text-teal-200 transition transform hover:scale-105"
        >
          FAQ
        </a>
        <a 
          href="#contact" 
          onClick={handleLinkClick} 
          className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-sm"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}