
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/3a9f1d9f-e4ae-46e2-a0af-6a044a0d6d7c.png" 
            alt="Mental Well Connect Logo" 
            className="w-10 h-10"
          />
          <h1 className="text-xl md:text-2xl font-bold text-primary">Mental Well Connect</h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('team')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Team
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile menu button - This would be expanded in a real implementation */}
        <button className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
