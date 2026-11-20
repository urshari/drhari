import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Profile', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Experience', href: '#experience' },
  { name: 'Industry Events', href: '#speaking' },
  { name: 'Impact', href: '#impact' },
  { name: 'Credentials', href: '#certifications' },
  { name: 'Research', href: '#research' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solid = isScrolled || isOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid
            ? 'bg-white/95 backdrop-blur border-b border-slate-200 py-3 shadow-[0_1px_12px_rgba(15,23,42,0.06)]'
            : 'bg-transparent border-b border-white/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center gap-6">
          <a href="#" className="flex items-center gap-3" aria-label="Dr. Harihara Gopalan S — home">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold tracking-wide ${
                solid ? 'bg-navy-950 text-white' : 'bg-white/10 text-white ring-1 ring-white/20'
              }`}
            >
              HG
            </span>
            <span className="leading-tight">
              <span className={`block text-[15px] font-semibold ${solid ? 'text-navy-950' : 'text-white'}`}>
                Dr. Harihara Gopalan S
              </span>
              <span className={`hidden sm:block text-xs ${solid ? 'text-slate-500' : 'text-slate-300'}`}>
                Cybersecurity Strategy · GRC · Digital Trust
              </span>
            </span>
          </a>

          <div className="hidden xl:flex gap-7 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  solid ? 'text-slate-600 hover:text-navy-950' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                solid ? 'bg-navy-950 text-white hover:bg-navy-800' : 'bg-white text-navy-950 hover:bg-slate-100'
              }`}
            >
              Get in touch
            </a>
          </div>

          <button
            className={`xl:hidden ${solid ? 'text-navy-950' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 z-40 bg-white pt-24 pb-8 px-6 border-b border-slate-200 shadow-lg xl:hidden"
          >
            <div className="flex flex-col gap-1 max-w-7xl mx-auto">
              {[...navLinks, { name: 'Get in touch', href: '#contact' }].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-lg font-medium text-slate-700 hover:text-teal-700 border-b border-slate-100 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
