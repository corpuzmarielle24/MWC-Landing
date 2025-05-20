
import { useVisitorCounter } from "@/utils/visitorCounter";

const Footer = () => {
  const visitorCount = useVisitorCounter();

  return (
    <footer className="bg-secondary py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/3a9f1d9f-e4ae-46e2-a0af-6a044a0d6d7c.png" 
              alt="Mental Well Connect Logo" 
              className="w-10 h-10"
            />
            <h2 className="text-xl font-bold">Mental Well Connect</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a 
              href="https://www.facebook.com/MentalWellConnect" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <i className="fa-brands fa-facebook text-xl"></i>
              <span>Mental Well Connect</span>
            </a>
            <a 
              href="mailto:mentalwellconnect@gmail.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <i className="fa-regular fa-envelope text-xl"></i>
              <span>mentalwellconnect@gmail.com</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-t-gray-300/30 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p>© CODE-ADA 2025. All Rights Reserved</p>
          <div className="mt-2 md:mt-0 bg-white/20 py-1 px-4 rounded-full animate-pulse">
            <p className="flex items-center gap-2">
              <span className="font-semibold">Total Visitors:</span>
              <span className="bg-primary text-white py-0.5 px-3 rounded-full">{visitorCount}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
