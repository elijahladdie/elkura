
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

type Experience = {
  company: string;
  title: string;
  period: string;
  description: string[];
  technologies?: string[];
  project?: {
    name: string;
    description: string;
    link?: string;
    tech: string;
  };
};

const experiences: Experience[] = [
  {
    company: "Mvend Limited",
    title: "Full-stack Software Engineer",
    period: "January 2024 - Present",
    description: [
      "Collaborating with talented engineers to develop financial microservice-based solutions",
      "Building Gwiza for managing savings and loans using PHP/Laravel, NodeJS, and TypeScript",
      "Implementing responsive interfaces and backend services for streamlined payment processes",
      "Working with MySQL database to optimize financial data management"
    ],
    technologies: ["React", "TypeScript", "PHP/Laravel", "NodeJS", "MySQL"],
    project: {
      name: "Gwiza",
      description: "A comprehensive platform for managing savings and loans, making payments easier across countries",
      link: "https://gwiza.co/",
      tech: "PHP/LARAVEL, NodeJS, TypeScript, MySQL"
    }
  },
  {
    company: "Andela",
    title: "Software Engineer",
    period: "January 2024 - November 2024",
    description: [
      "Participated in the Andela Technical Leadership Program to develop real-world solutions",
      "Built DevPulse using Apollo GraphQL, Postgres, Node.js and React with TypeScript",
      "Collaborated in cross-functional teams following agile methodologies",
      "Contributed to knowledge-sharing sessions and mentorship activities"
    ],
    technologies: ["React", "TypeScript", "Apollo GraphQL", "PostgreSQL", "Node.js"],
    project: {
      name: "DevPulse",
      description: "A platform developed with technical leaders for providing real-world problem solutions",
      link: "https://metron-devpulse.vercel.app",
      tech: "Apollo GraphQL, PostgreSQL, Node.js"
    }
  },
  {
    company: "Inocul8",
    title: "Software Developer",
    period: "October 2024 - December 2024",
    description: [
      "Contributed to the development of Cowva vaccination and immunization platform",
      "Built features to help Nigerian health centers manage patient vaccinations",
      "Implemented functionality to keep users updated on their health conditions",
      "Used Python for backend services and ReactJS for frontend interfaces"
    ],
    technologies: ["Python", "ReactJS", "RESTful APIs", "Database Management"],
    project: {
      name: "Cowva",
      description: "A vaccination and immunization platform for helping Nigerian health centers manage patient vaccinations",
      link: "https://cowva.com",
      tech: "Python, ReactJS"
    }
  },
  {
    company: "KLAB",
    title: "Junior Software Developer",
    period: "October 2023 - March 2024",
    description: [
      "Worked with aspiring software developers to create an online subscription library",
      "Developed digital solutions using ReactJS and TypeScript",
      "Participated in the High School Leavers Program to excel coding skills",
      "Contributed to projects focused on solving community problems"
    ],
    technologies: ["ReactJS", "TypeScript", "HTML/CSS", "Responsive Design"],
    project: {
      name: "Digital Library",
      description: "An online subscription library designed to help the community access digital resources",
      tech: "ReactJS, TypeScript"
    }
  }
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation class when section is in view
          entry.target.classList.add('animate-fadeIn');
          
          // Make the container visible immediately
          if (entry.target.firstElementChild) {
            (entry.target.firstElementChild as HTMLElement).style.opacity = '1';
          }
          
          // Add animation to each card with delay
          cardRefs.current.forEach((card, index) => {
            if (card) {
              setTimeout(() => {
                card.classList.add('animate-slideUp');
                card.style.opacity = '1';
              }, 300 + index * 200);
            }
          });
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

  return (
    <section id="experience" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-[#c0b283] pb-2 mb-8">Work Experience</h2>
        
        <div className="mt-8 md:mt-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tabs for Desktop */}
            <div className="hidden md:flex flex-col border-l border-slate-200">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={cn(
                    "py-3 px-5 text-left transition-all border-l-2 -ml-[2px]",
                    activeTab === index 
                      ? "border-[#c0b283] text-[#c0b283] font-medium" 
                      : "border-transparent hover:border-slate-300 hover:bg-slate-50 text-slate"
                  )}
                  onClick={() => setActiveTab(index)}
                >
                  {exp.company}
                </button>
              ))}
            </div>
            
            {/* Dropdown for Mobile */}
            <div className="md:hidden w-full mb-6">
              <select 
                className="w-full p-3 border border-slate-200 rounded-md bg-white"
                value={activeTab}
                onChange={(e) => setActiveTab(parseInt(e.target.value))}
              >
                {experiences.map((exp, index) => (
                  <option key={index} value={index}>
                    {exp.company} - {exp.title}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Experience Details */}
            <div className="flex-1 md:pl-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "transition-all duration-300",
                    activeTab === index ? "block" : "hidden"
                  )}
                  ref={el => cardRefs.current[index] = el}
                  style={{ opacity: 0 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.title} <span className="text-[#c0b283]">@ {exp.company}</span>
                  </h3>
                  <p className="text-gray-500 mt-1">{exp.period}</p>
                  
                  <ul className="mt-4 space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-[#c0b283] mt-1.5 mr-2">▹</div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.technologies && (
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Project Card */}
                  {exp.project && (
                    <Card className="mt-6 bg-gray-50 border border-gray-200">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-medium text-[#c0b283]">Featured Project: {exp.project.name}</h4>
                          {exp.project.link && (
                            <a 
                              href={exp.project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-[#c0b283]"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                        <p className="mt-2 text-gray-700">{exp.project.description}</p>
                        <p className="mt-2 text-sm text-gray-500">
                          <span className="font-medium">Tech stack:</span> {exp.project.tech}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
