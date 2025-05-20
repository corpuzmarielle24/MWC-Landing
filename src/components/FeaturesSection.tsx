
import { MessageSquare, Book, Bot, MessageCircle, Activity } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    emoji: "💭",
    title: "Discussion Forums",
    description: "Engage with a community and share experiences."
  },
  {
    icon: <Book className="w-8 h-8" />,
    emoji: "📚",
    title: "Guided Activities",
    description: "Access informative articles and guides."
  },
  {
    icon: <Bot className="w-8 h-8" />,
    emoji: "🤖",
    title: "AI Chatbot",
    description: "Instant, 24/7 support powered by smart automation."
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    emoji: "💬",
    title: "Messaging",
    description: "Secure conversations with professionals and peers."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    emoji: "🧘",
    title: "Consultation",
    description: "Easily schedule and attend virtual consultations with licensed professionals."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-secondary py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">Features</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <span className="text-4xl">{feature.emoji}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-700 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
