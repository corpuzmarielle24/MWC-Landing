
import { useVisitorCounter } from "@/utils/visitorCounter";

const Footer = () => {
  const visitorCount = useVisitorCounter();

  return (
    <footer className="bg-secondary py-12">
      <div className="container px-4 mx-auto text-center">
        <h3 className="text-xl font-bold mb-4">Contact Us At:</h3>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
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
        
        <div className="border-t border-t-gray-300/30 pt-4 flex flex-col items-center">
          <p className="mb-3">© CODE-ADA 2025. All Rights Reserved</p>
          <div className="bg-white/20 py-1 px-4 rounded-full animate-pulse">
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
