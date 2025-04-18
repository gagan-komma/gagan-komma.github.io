import React from 'react';
import { ChevronDown, Cpu, Zap, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 opacity-10 dark:opacity-5">
          <Cpu className="w-96 h-96 text-blue-600" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 dark:opacity-5">
          <Code className="w-72 h-72 text-blue-600" />
        </div>
        
        {/* Circuit pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Gagan Karthik Komma<span className="text-blue-600 dark:text-blue-400"></span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              Developing robust, efficient, and innovative firmware solutions for next-generation embedded systems and IoT devices.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-colors duration-200"
              >
                Explore Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:text-lg transition-colors duration-200"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500">
              <div className="rounded-full overflow-hidden bg-white dark:bg-gray-900 p-2">
                <img 
                  src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Circuit board" 
                  className="w-full h-auto rounded-full"
                />
              </div>
              
              {/* Small floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
              >
                <Zap className="w-6 h-6 text-yellow-500" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-2 -left-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
              >
                <Cpu className="w-6 h-6 text-blue-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;