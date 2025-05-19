
import { useEffect, useRef } from 'react';

type Education = {
  institution: string;
  degree: string;
  period: string;
  description: string;
  achievements?: string[];
};

const educationHistory: Education[] = [
  {
    institution: "African Leadership University (ALU)",
    degree: "BSc. (Hons) Software Engineering",
    period: "2025 - 2027",
    description: "Currently pursuing a Bachelor's degree with focus on Artificial Intelligence and machine learning. Learning problem-solving approaches and systems thinking methodology.",
    achievements: [
      "Expected graduation: 2027",
      "Focusing on AI/ML specialization",
      "Developing strong technical and soft skills",
      "Building a foundation for innovative software engineering"
    ]
  },
  {
    institution: "Collegio SAMZ TSS",
    degree: "High School Diploma in Software Development",
    period: "2021 - 2023",
    description: "Gained fundamental programming knowledge and developed leadership and teamwork skills. Established a solid foundation in software development principles.",
    achievements: [
      "Learned programming fundamentals",
      "Developed leadership capabilities",
      "Gained teamwork experience through collaborative projects",
      "Built core problem-solving skills"
    ]
  },
  {
    institution: "FreeCodeCamp",
    degree: "Web Development Certifications",
    period: "2023",
    description: "Self-paced online curriculum covering front-end development, algorithms, and data structures. Demonstrated ability to learn independently and apply knowledge to real projects.",
    achievements: [
      "Front-End Libraries Certification",
      "JavaScript Algorithms & Data Structures Certification",
      "Applied practical web development skills",
      "Built multiple portfolio projects"
    ]
  }
];

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          
          // Animate timeline items with delay
          timelineRefs.current.forEach((item, index) => {
            if (item) {
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
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
    <section id="education" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-[#c0b283] pb-2 mb-8">Education & Training</h2>
        
        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200"></div>
          
          {educationHistory.map((edu, index) => (
            <div 
              key={index}
              className="relative mb-12 md:mb-16"
              ref={el => timelineRefs.current[index] = el}
              style={{ 
                opacity: 0, 
                transform: 'translateY(20px)', 
                transition: 'all 0.5s ease-out' 
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-1 w-5 h-5 rounded-full bg-[#c0b283] border-4 border-white z-10"></div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <div className="inline-block px-3 py-1 text-sm bg-gray-100 text-[#c0b283] rounded-full mb-2">
                    {edu.period}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                  <p className="text-[#c0b283] font-medium mb-3">{edu.degree}</p>
                  
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  
                  {edu.achievements && (
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="text-[#c0b283] mt-1 mr-2">▹</div>
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
