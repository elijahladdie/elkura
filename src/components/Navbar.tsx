
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-bold text-navy flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <span className="text-teal">E</span>K
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {[
            { label: 'About', id: 'about' },
            { label: 'Experience', id: 'experience' },
            { label: 'Skills', id: 'skills' },
            { label: 'Education', id: 'education' },
            { label: 'Contact', id: 'contact' }
          ].map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              <span className="text-teal mr-1">{index + 1}.</span> {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy p-2 focus:outline-none transition-transform duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-navy transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-navy my-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-navy transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-4 bg-white shadow-md' : 'max-h-0'}`}>
        <div className="container mx-auto px-4">
          <nav className="flex flex-col space-y-4">
            {[
              { label: 'About', id: 'about' },
              { label: 'Experience', id: 'experience' },
              { label: 'Skills', id: 'skills' },
              { label: 'Education', id: 'education' },
              { label: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                <span className="text-teal mr-1">{index + 1}.</span> {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
