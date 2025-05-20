
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

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

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/3a9f1d9f-e4ae-46e2-a0af-6a044a0d6d7c.png" 
            alt="Mental Well Connect Logo" 
            className="w-10 h-10"
          />
          <h1 className="text-xl md:text-2xl font-bold text-primary">Mental Well Connect</h1>
        </div>
        <div className="flex gap-4">
          <Button 
            variant="outline"
            className="hidden md:flex"
            onClick={() => window.open("https://www.mentalwellconnect.online/", "_blank")}
          >
            Get Started
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => window.open("https://www.mentalwellconnect.online/", "_blank")}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
