import React from 'react';
import { Cpu, TerminalSquare, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skills = [
    {
      name: "Embedded Systems",
      description: "Expert in developing firmware for resource-constrained embedded systems across multiple architectures.",
      icon: <Cpu className="h-6 w-6 text-blue-500" />,
    },
    {
      name: "Low-Level Programming",
      description: "Proficient in C/C++ development with deep understanding of hardware interfaces and memory optimization.",
      icon: <TerminalSquare className="h-6 w-6 text-green-500" />,
    },
    {
      name: "RTOS & Bare-metal",
      description: "Experience with various real-time operating systems and bare-metal programming for critical applications.",
      icon: <Layers className="h-6 w-6 text-purple-500" />,
    },
    {
      name: "Power Optimization",
      description: "Specialized in creating ultra-low power firmware solutions for battery-operated and energy-harvesting devices.",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 bg-blue-600 mx-auto mt-4"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Firmware Engineer with a Passion for Innovation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Hey, I’m Gagan! I’m a Firmware Engineer with a knack for turning complex hardware into smooth, efficient software. Whether it’s mastering Embedded C, optimizing ARM architecture, or getting wireless communication protocols to play nice, I love finding innovative solutions to real‑world challenges
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            With hands‑on experience in real‑time operating systems and a passion for creating reliable, high‑performance firmware, I’m ready to bring fresh ideas and technical expertise to your next big project. Let’s build something awesome together!
            </p>
            <div className="flex flex-wrap gap-3">
              {["C", "C++", "ARM", "RTOS", "Bluetooth LE", "Embedded Linux", "IoT", "PCB Design"].map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full inline-block mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;