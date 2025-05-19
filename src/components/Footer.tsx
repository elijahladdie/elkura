
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-silver py-8 absolute bottom-0 w-full hidden block lg:block">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              <span className="text-gold">E</span>lie <span className="text-gold">K</span>uradusenge
            </div>
            <p className="text-gray-400 text-sm">
              Software Engineer | Backend Specialist | Full-Stack Developer
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Elie Kuradusenge. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React + Three.js + Tailwind CSS by Elie Kuradusenge
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
