import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Brand */}
        <a href="#hero" className="flex items-center space-x-2 text-white font-space font-bold text-xl tracking-tight group">
          <Terminal className="w-5 h-5 text-accent group-hover:text-primary transition-colors duration-300" />
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
            Kathermytheen
          </span>
          <span className="text-primary text-2xl leading-none animate-pulse-slow">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white border border-primary/40 rounded-full hover:border-accent hover:bg-accent/10 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass border-b border-white/10 px-6 py-4 absolute top-full left-0 right-0 animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block text-center px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-accent rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
