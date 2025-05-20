import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-white pt-28 pb-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left content */}
          <div className="w-full md:w-1/2 animate-slide-in-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Your Path to <span className="text-primary">Mental Well-Being</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Welcome to Mental Well Connect! In partnership with Mondriaan Aura College Psychology Students, our platform is dedicated to providing accessible support, trusted resources, and professional guidance for your mental well-being. Together, we aim to create a safe, supportive space where mental health truly matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base flex gap-2 items-center"
                onClick={() => window.open("https://www.mentalwellconnect.online/", "_blank")}
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-6 text-base"
                onClick={() => window.open("https://drive.google.com", "_blank")}
              >
                User's Manual
              </Button>
            </div>
          </div>
          
          {/* Right content */}
          <div className="w-full md:w-1/2 animate-slide-in-right">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30"></div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/d83a6fcf-3507-4076-9cca-d9eb0bed7e89.png" 
                  alt="Mental Well Connect App" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
