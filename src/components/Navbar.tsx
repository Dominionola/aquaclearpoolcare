'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-navy-deep text-white shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-24 flex items-center justify-between">
        <a href="/" className="font-serif text-2xl md:text-3xl tracking-wide flex items-center gap-2">
          <span className="text-aqua">Aqua</span> Clear
        </a>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-[12px] uppercase tracking-[0.15em] font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-aqua transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+15126583922"
            className="flex items-center gap-2 text-white/90 hover:text-aqua transition-colors duration-200 text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            (512) 658-3922
          </a>
          <a
            href="/contact"
            className="bg-aqua text-navy-deep px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-cyan transition-colors duration-200"
          >
            Get a Quote
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 right-0 bg-navy-deep border-t border-navy-pool shadow-xl">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-4 text-sm uppercase tracking-[0.15em] border-b border-navy-pool/50 hover:text-aqua transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-6 pb-4">
              <a
                href="/contact"
                className="block w-full text-center bg-aqua text-navy-deep px-6 py-4 text-sm font-bold uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
