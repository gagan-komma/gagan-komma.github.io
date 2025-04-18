import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  // Filter projects by category
  const filteredProjects = category && category !== 'All'
    ? projects.filter(p => p.category === category)
    : projects;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            My Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 bg-blue-600 mx-auto mt-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Explore my portfolio of firmware projects across various domains
          </motion.p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat === 'All' ? null : cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                (cat === 'All' && !category) || cat === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </motion.div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;