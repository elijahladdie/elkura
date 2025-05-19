
import { useState } from "react";
import { Briefcase, BookOpen, GraduationCap, User, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import { Suspense, lazy } from "react";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";

// Load Three.js components dynamically to avoid build issues
const LazySimpleBox = lazy(() => import("@/components/ThreeJsComponents").then(module => ({ default: module.SimpleBox })));
const LazyTechScene = lazy(() => import("@/components/ThreeJsComponents").then(module => ({ default: module.TechScene })));

// Define interfaces
interface NavItem {
  id: string;
  icon: JSX.Element;
  label: string;
}

interface TechSceneProps {
  technologies: Array<{ name: string; icon: string }>;
}

const resumeData = {
  contact: {
    name: "Elie Kuradusenge",
    location: "Kigali, Rwanda",
    email: "elkuradusenge@gmail.com",
    phone: "+250792568899"
  },
  work: [
    {
      title: "Full-stack Software Engineer",
      company: "Mvend Limited",
      period: "Jan 2024 – Present",
      description: "Collaborating with talented full stack engineers in developing financial microservice based solutions to make payments easier. Building Gwiza using PHP/Laravel, NodeJS, TypeScript, and MySQL."
    },
    {
      title: "Software Engineer",
      company: "Andela",
      period: "Jan 2024 – Nov 2024",
      description: "Worked with technical leaders in the Andela Technical Leadership Program to build DevPulse using Apollo, PostgreSQL, NodeJS, and React with TypeScript."
    },
    {
      title: "Software Developer",
      company: "Inocul8",
      period: "Oct 2024 – Dec 2024",
      description: "Contributed to development of Cowva, a vaccination and immunization platform for Nigerian health centers, using Python and ReactJS."
    },
    {
      title: "Junior Software Developer",
      company: "KLAB",
      period: "Oct 2023 – Mar 2024",
      description: "Worked with aspiring software developers to create an online subscription library using ReactJS and TypeScript."
    },
    {
      title: "Intern Software Developer",
      company: "Mvend Ltd",
      period: "Apr 2022 – May 2022",
      description: "Earned certifications via FreeCodeCamp and improved frontend skills."
    }
  ],
  education: [
    {
      school: "ALU Rwanda",
      degree: "BSc. (Hons) Software Engineering",
      period: "2025 – 2027",
      description: "Currently pursuing degree with a focus on Artificial Intelligence, machine learning, problem solving, and systems thinking."
    },
    {
      school: "Collegio SAMZ TSS",
      degree: "High School Diploma in Software Development",
      period: "2021 – 2023",
      description: "Acquired fundamentals in software development and leadership skills."
    }
  ],
  certificates: [
    "Andela ATLP Certificate",
    "FreeCodeCamp – Front-End Libraries",
    "FreeCodeCamp – JavaScript Algorithms & Data Structures"
  ],
  projects: [
    { name: "Gwiza", link: "https://gwiza.co/" },
    { name: "DevPulse", link: "https://metron-devpulse.vercel.app" },
    { name: "Cowva", link: "https://cowva.com" }
  ],
  objective: "Experienced full-stack software engineer committed to creating efficient, innovative software solutions. Continuously learning new technologies, sharing knowledge, and a strong team player with practical experience."
};

const techStack = {
  frontend: [
    { name: "ReactJS", icon: "React" },
    { name: "NextJS", icon: "Next" },
    { name: "Vue.js", icon: "Vue" },
    { name: "React Native", icon: "RN" },
    { name: "Three.js", icon: "3JS" },
    { name: "HTML", icon: "HTML" },
    { name: "CSS", icon: "CSS" },
    { name: "TailwindCSS", icon: "TW" },
    { name: "Bootstrap", icon: "BS" }
  ],
  backend: [
    { name: "NodeJS", icon: "Node" },
    { name: "Fastify", icon: "Fast" },
    { name: "PHP/Laravel", icon: "PHP" },
    { name: "SpringBoot", icon: "SB" },
    { name: "JavaScript", icon: "JS" },
    { name: "TypeScript", icon: "TS" },
    { name: "Python", icon: "Py" },
    { name: "Java", icon: "Java" }
  ],
  database: [
    { name: "MySQL", icon: "SQL" },
    { name: "PostgreSQL", icon: "PG" },
    { name: "MongoDB", icon: "Mongo" }
  ],
  tools: [
    { name: "Prisma", icon: "Pris" },
    { name: "RESTful APIs", icon: "REST" },
    { name: "TensorFlow", icon: "TF" },
    { name: "Git", icon: "Git" }
  ]
};

// Fallback component for when Three.js is loading
const TechBoxes = ({ technologies }: TechSceneProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-3 bg-gray-200 rounded-lg hover:bg-[#c0b283] hover:text-white transition-colors duration-300"
        >
          <div className="text-2xl font-bold">{tech.icon}</div> 
          <p className="mt-2 text-sm">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

// Simple box fallback
const SimpleBoxFallback = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gray-200 border border-[#c0b283] rounded-lg">
      <div className="w-32 h-32 bg-[#c0b283] animate-pulse rounded-lg"></div>
    </div>
  );
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [activeTech, setActiveTech] = useState("frontend");
  const [isThreeJsLoaded, setIsThreeJsLoaded] = useState(true);
  
  const navItems: NavItem[] = [
    { id: "about", icon: <User />, label: "About" },
    { id: "experience", icon: <Briefcase />, label: "Experience" },
    { id: "education", icon: <GraduationCap />, label: "Education" },
    { id: "skills", icon: <BookOpen />, label: "Skills" },
    { id: "contact", icon: <Phone />, label: "Contact" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen relative overflow-hidden">
      {/* Tablet Frame */}
      <div className="max-w-4xl mx-auto my-10 bg-gray-200 rounded-3xl shadow-xl overflow-hidden border-8 border-gray-300">
        {/* Tablet Header */}
        <div className="bg-gray-300 p-2 flex justify-center items-center">
          <div className="w-20 h-1 bg-gray-400 rounded-full"></div>
        </div>
        
        {/* Content Area */}
        <div className="flex h-[700px]">
          {/* Side Navigation */}
          <div className="w-20 bg-gray-800 p-4 flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`p-3 rounded-full ${
                  activeSection === item.id 
                    ? "bg-[#c0b283] text-gray-800" 
                    : "bg-gray-700 text-[#dcd0c0] hover:bg-gray-600"
                } transition-all duration-300`}
                title={item.label}
              >
                {item.icon}
              </button>
            ))}
          </div>
          
          {/* Main Content */}
          <div className="flex-1 bg-gray-100 overflow-y-auto p-6">
            {/* About Section */}
            {activeSection === "about" && (
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl font-bold text-gray-800">
                  <span className="text-[#c0b283]">E</span>lie <span className="text-[#c0b283]">K</span>uradusenge
                </h1>
                <p className="text-xl text-gray-600">Full Stack Software Engineer</p>
                
                <div className="relative h-64 w-full mt-6 mb-10 border border-[#dcd0c0] rounded-lg overflow-hidden">
                  <Suspense fallback={<SimpleBoxFallback />}>
                    {isThreeJsLoaded && <LazySimpleBox />}
                  </Suspense>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {resumeData.objective}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {resumeData.projects.map((project, index) => (
                    <a
                      key={index}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 bg-gray-200 rounded-lg hover:bg-[#c0b283] hover:text-white transition-colors duration-300"
                    >
                      {project.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
            
            {/* Experience Section */}
            {activeSection === "experience" && <ExperienceSection />}
            
            {/* Education Section */}
            {activeSection === "education" && <EducationSection />}
            
            {/* Skills Section */}
            {activeSection === "skills" && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-[#c0b283] pb-2">Technical Skills</h2>
                <SkillsSection/>
                <div className="flex space-x-2 mb-6 overflow-x-auto py-2">
                  {Object.keys(techStack).map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveTech(category)}
                      className={`px-4 py-2 rounded-full whitespace-nowrap ${
                        activeTech === category
                          ? "bg-[#c0b283] text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      } transition-colors duration-300`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
                
                {/* <div className="h-64 border border-[#dcd0c0] rounded-lg overflow-hidden"> */}
                <div className="h-[600px] border border-[#dcd0c0] rounded-lg overflow-hidden">

                  <Suspense fallback={
                    <div className="flex items-center justify-center h-full bg-gray-200">
                      <p className="text-gray-500">Loading skills visualization...</p>
                    </div>
                  }>
                    {isThreeJsLoaded ? (
                      <LazyTechScene technologies={techStack[activeTech as keyof typeof techStack]} />
                    ) : (
                      <TechBoxes technologies={techStack[activeTech as keyof typeof techStack]} />
                    )}
                  </Suspense>
                </div>
              </div>
            )}
            
            {/* Contact Section */}
            {activeSection === "contact" && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-[#c0b283] pb-2">Contact Me</h2>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-[#c0b283]" />
                      <span className="text-gray-700">{resumeData.contact.name}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c0b283]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9l-4.9 4.9a1 1 0 01-1.414 0l-4.9-4.9a7 7 0 010-9.9zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{resumeData.contact.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c0b283]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a href={`mailto:${resumeData.contact.email}`} className="text-gray-700 hover:text-[#c0b283]">
                        {resumeData.contact.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c0b283]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <a href={`tel:${resumeData.contact.phone}`} className="text-gray-700 hover:text-[#c0b283]">
                        {resumeData.contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <form className="mt-8 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0b283]"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0b283]"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#c0b283]"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#c0b283] text-white rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c0b283]"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
