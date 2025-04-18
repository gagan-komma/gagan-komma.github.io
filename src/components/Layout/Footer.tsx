import React from 'react';
import { Github as GitHub, Linkedin, Mail, CircuitBoard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <CircuitBoard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">FirmwareEng</span>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <GitHub className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} FirmwareEng. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;