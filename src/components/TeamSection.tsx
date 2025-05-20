
const team = [
  {
    image: "/lovable-uploads/cc2a534c-aa27-4d66-86e7-2cc42e921710.png",
    name: "Marielle Corpuz",
    role: "Leader/Hustler & Front-end Developer"
  },
  {
    image: "/lovable-uploads/cacc244a-bf18-4cad-9a27-a28889735549.png",
    name: "John Gabriel Orbeta",
    role: "Hacker & Back-end Developer"
  },
  {
    image: "/lovable-uploads/cc05ec1e-6840-489d-81d4-169eb009eefd.png",
    name: "John Alsherette Ramos",
    role: "Hipster & Front-end Developer"
  },
  {
    image: "/lovable-uploads/cdcc138b-68fd-4372-86ff-d8dad6761e92.png",
    name: "Mr. Chris Allen Pineda",
    role: "Project Adviser"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-white py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet the Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-40 h-40 rounded-full mb-4 object-cover border-4 border-primary/20"
              />
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
