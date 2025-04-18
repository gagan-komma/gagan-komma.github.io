import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, type: 'spring' }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden z-10 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="h-64 sm:h-72 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full mb-2">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h2>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-18rem)]">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="inline-block px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Overview</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.detailedDescription}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Challenges</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {project.challenges}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Solutions</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {project.solutions}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Outcomes</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {project.outcomes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;