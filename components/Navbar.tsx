
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#/about' },
    { name: 'Products', href: '#/products' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/" className="flex items-center space-x-2">
          <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center font-bold text-white text-xl">E</div>
          <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-slate-900'}`}>
            EDEN <span className="text-eden-gold">BUSINESS</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-eden-gold ${isScrolled ? 'text-slate-200' : 'text-slate-700'}`}
            >
              {link.name.toUpperCase()}
            </a>
          ))}
          <a
            href="#/contact"
            className="px-6 py-2.5 gold-gradient text-white text-sm font-bold rounded-full shadow-lg shadow-amber-500/30 hover:scale-105 transition-transform"
          >
            REQUEST A QUOTE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-slate-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900 z-40 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-eden-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-4 gold-gradient text-white text-xl font-bold rounded-full shadow-xl"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
