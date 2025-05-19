
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
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
    <section id="about" className="py-16 md:py-24 bg-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <div className="space-y-4 opacity-0 transition-opacity duration-700 ease-in-out" style={{ transitionDelay: '200ms' }}>
            <p>
              Hello! I'm Elie, a dedicated frontend engineer passionate about creating innovative solutions that positively impact communities. 
              My journey in technology is driven by a curiosity for how things work and a desire to build beautiful, functional interfaces.
            </p>
            
            <p>
              With experience at companies like Mvend, Andela, and KLAB, I've developed a strong foundation in 
              React/Next.js, TypeScript, and various UI frameworks. I'm known for my organizational abilities, leadership qualities, 
              and commitment to excellence in every project I undertake.
            </p>
            
            <p>
              When I'm not coding, I'm constantly learning new technologies, contributing to open-source projects, 
              and mentoring aspiring developers. I believe in technology as a force for positive change and strive to 
              create solutions that are not only technically robust but also accessible and user-centered.
            </p>
            
            <p>
              My goal is to continue growing as a developer and leader, taking on challenges that push me beyond my 
              comfort zone, and collaborating with like-minded individuals who share my passion for innovation and quality.
            </p>
          </div>
          
          <div className="opacity-0 transition-opacity duration-700 ease-in-out" style={{ transitionDelay: '400ms' }}>
            <div className="card h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4 text-navy">My Mission</h3>
              
              <blockquote className="border-l-4 border-teal pl-4 italic text-slate">
                "To leverage technology in creating innovative solutions that positively impact communities while maintaining 
                excellent performance and responsiveness."
              </blockquote>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3 text-navy">Core Values</h4>
                <ul className="space-y-2">
                  {['Innovation', 'Collaboration', 'Quality', 'Continuous Learning', 'Empathy'].map((value, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-teal mr-3"></div>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
