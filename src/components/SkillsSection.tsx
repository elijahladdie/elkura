
import { Suspense, useEffect, useRef, useState } from 'react';
import { 
  Code2, Server, Database, Wrench, BrainCircuit, FileCode, 
  Blocks, Bot, Layout, Cpu
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TechSphere } from './ThreeJsComponents';

type SkillCategory = {
  name: string;
  icon: JSX.Element;
  skills: {
    name: string;
    level: number; // 0-100
    icon?: string;
  }[];
};
  export const getTechIcon = (tech: string) => {
    switch (tech) {
      case "React":
      case "RN":
        return <Code2 className="w-5 h-5" />;
      case "TypeScript":
      case "JavaScript":
        return <FileCode className="w-5 h-5" />;
      case "Python":
        return <FileCode className="w-5 h-5" />;
      case "NodeJS":
        return <Server className="w-5 h-5" />;
      case "AI":
      case "ML":
      case "TensorFlow":
        return <BrainCircuit className="w-5 h-5" />;
      case "MySQL":
      case "PostgreSQL":
      case "MongoDB":
        return <Database className="w-5 h-5" />;
      case "Tailwind":
      case "HTML":
      case "Vue":
        return <Layout className="w-5 h-5" />;
      case "Git":
        return <Blocks className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };
const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Layout className="w-6 h-6 text-teal" />,
    skills: [
      { name: "React/Next.js", level: 95, icon: "React" },
      { name: "TypeScript", level: 90, icon: "TypeScript" },
      { name: "JavaScript", level: 95, icon: "JavaScript" },
      { name: "HTML/CSS", level: 92, icon: "HTML" },
      { name: "Tailwind CSS", level: 88, icon: "Tailwind" },
      { name: "Three.js", level: 80, icon: "3JS" },
    ]
  },
  {
    name: "Backend",
    icon: <Server className="w-6 h-6 text-teal" />,
    skills: [
      { name: "Node.js", level: 88, icon: "NodeJS" },
      { name: "Python", level: 85, icon: "Python" },
      { name: "PHP/Laravel", level: 82, icon: "PHP" },
      { name: "RESTful APIs", level: 90, icon: "API" },
      { name: "GraphQL", level: 85, icon: "GraphQL" },
    ]
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6 text-teal" />,
    skills: [
      { name: "MySQL", level: 92, icon: "MySQL" },
      { name: "PostgreSQL", level: 88, icon: "PostgreSQL" },
      { name: "MongoDB", level: 80, icon: "MongoDB" },
      { name: "Prisma ORM", level: 85, icon: "Prisma" },
    ]
  },
  {
    name: "Tools & Others",
    icon: <Wrench className="w-6 h-6 text-teal" />,
    skills: [
      { name: "Git/GitHub", level: 92, icon: "Git" },
      { name: "AI/ML/TensorFlow", level: 75, icon: "AI" },
      { name: "React Native", level: 80, icon: "RN" },
      { name: "Vue.js/Quasar", level: 78, icon: "Vue" },
      { name: "Responsive Design", level: 95, icon: "RD" },
    ]
  }
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeSkills = skillCategories[activeCategoryIndex].skills;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Get icon for a specific technology


  return (
      <section id="skills" className="py-16 md:py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-[#c0b283] pb-2 mb-8">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name} 
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-500"
              style={{ 
                transitionDelay: `${categoryIndex * 200}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1 bg-gray-100 rounded-full text-[#c0b283]">
                          {skill.icon && getTechIcon(skill.icon)}
                        </span>
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-gray-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          skill.level > 90 ? 'bg-green-500' : 
                          skill.level > 80 ? 'bg-[#c0b283]' : 
                          skill.level > 70 ? 'bg-blue-500' : 'bg-amber-500'
                        }`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-16 bg-white p-8 rounded-lg shadow-md transition-all duration-500"
          style={{ 
            transitionDelay: '800ms',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center flex items-center justify-center gap-2">
            <Cpu className="text-[#c0b283]" />
            <span>Technical Stack</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {[
              { name: "React", color: "#61DAFB", icon: <Code2 /> },
              { name: "TypeScript", color: "#3178C6", icon: <FileCode /> },
              { name: "Next.js", color: "#000000", icon: <Code2 /> },
              { name: "Node.js", color: "#339933", icon: <Server /> },
              { name: "Python", color: "#3776AB", icon: <FileCode /> },
              { name: "PHP", color: "#777BB4", icon: <FileCode /> },
              { name: "Laravel", color: "#FF2D20", icon: <Code2 /> },
              { name: "Vue.js", color: "#4FC08D", icon: <Layout /> },
              { name: "MongoDB", color: "#47A248", icon: <Database /> },
              { name: "MySQL", color: "#4479A1", icon: <Database /> },
              { name: "PostgreSQL", color: "#336791", icon: <Database /> },
              { name: "TensorFlow", color: "#FF6F00", icon: <BrainCircuit /> }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="flex flex-col items-center justify-center"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-transform hover:scale-110"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  <span className="text-2xl" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

    