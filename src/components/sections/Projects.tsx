import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { projectsData, projectNav } from '../../data/projects';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="projects" ref={ref} className="section bg-white dark:bg-navy-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">My Projects</h2>
          <p className="text-slate-dark dark:text-slate max-w-2xl mx-auto">
            A showcase of my work across various platforms and technologies
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-100 dark:bg-navy-light p-1 rounded-md shadow-sm">
            {projectNav.map(filter => (
              <button
                key={filter.name}
                className={`px-4 py-2 rounded-md transition-all text-sm font-medium capitalize ${
                  activeFilter === filter.name
                    ? 'bg-primary-500 text-navy dark:text-white'
                    : 'text-slate-dark dark:text-slate hover:bg-white dark:hover:bg-navy'
                }`}
                onClick={() => setActiveFilter(filter.name)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg shadow-custom bg-white dark:bg-navy-light"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
                />
                {project.scrolling_image && (
                  <img 
                    src={project.scrolling_image}
                    alt={`${project.title} detailed view`}
                    className="absolute inset-0 w-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 group-hover:translate-y-[-70%]"
                    style={{ height: '200%' }}
                  />
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-500">
                    {project.category}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-slate-dark dark:text-slate">
                  <span>{project.company}</span>
                  <span>{project.location}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-navy">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    <span className="mr-2">Visit Website</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};