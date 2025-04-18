import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
  setSelectedProject: (project: Project | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, setSelectedProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span 
              key={i}
              className="inline-block px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="inline-block px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <button
          onClick={() => setSelectedProject(project)}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
        >
          View details <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;