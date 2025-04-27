import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'other';
};

const skills: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Vue.js', level: 80, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 80, category: 'backend' },
  { name: 'GraphQL', level: 75, category: 'backend' },
  { name: 'Docker', level: 70, category: 'backend' },
  { name: 'Git/GitHub', level: 85, category: 'other' },
  { name: 'CI/CD', level: 75, category: 'other' },
  { name: 'AWS', level: 70, category: 'other' },
  { name: 'Figma', level: 80, category: 'other' },
];

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
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

  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" ref={ref} className="section bg-slate-50 dark:bg-navy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Skills & Expertise</h2>
          <p className="text-slate-dark dark:text-slate max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here are my main areas of expertise and the technologies I use most frequently.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white dark:bg-navy-light p-1 rounded-md shadow-sm">
            {['all', 'frontend', 'backend', 'other'].map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md transition-all text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-primary-500 text-navy dark:text-white'
                    : 'text-slate-dark dark:text-slate hover:bg-slate-100 dark:hover:bg-navy-dark'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              variants={itemVariants}
              className="card"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-slate-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm text-primary-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-navy-dark rounded-full h-2.5">
                <motion.div 
                  className="bg-primary-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.05) }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};