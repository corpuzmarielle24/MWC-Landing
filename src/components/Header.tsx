
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Info, LayoutGrid, Users, Mail } from "lucide-react";

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

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/3a9f1d9f-e4ae-46e2-a0af-6a044a0d6d7c.png" 
            alt="Mental Well Connect Logo" 
            className="w-10 h-10"
          />
          <h1 className="text-xl md:text-2xl font-bold text-primary">Mental Well Connect</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection("hero")} 
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Info className="w-4 h-4" />
            <span>About</span>
          </button>
          
          <button 
            onClick={() => scrollToSection("features")} 
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Features</span>
          </button>
          
          <button 
            onClick={() => scrollToSection("team")} 
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Users className="w-4 h-4" />
            <span>Team</span>
          </button>
          
          <button 
            onClick={() => scrollToSection("contact")} 
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Us</span>
          </button>
        </div>
        
        <Button 
          className="bg-primary hover:bg-primary/90"
          onClick={() => window.open("https://www.mentalwellconnect.online/", "_blank")}
        >
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
