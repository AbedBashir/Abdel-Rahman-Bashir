import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    title: 'Technical Lead',
    company: 'Growth Hacker - Montreal, Quebec',
    period: '04/2023 - Present'
  },
  {
    title: 'Senior Web Developer',
    company: 'Growth Hacker - Montreal, Quebec',
    period: '10/2022 - 04/2023'
  },
  {
    title: 'Senior Shopify Developer',
    company: 'Parallel Beauty LTD - Lebanon, Beirut',
    period: '01/2022 - 10/2022'
  },
  {
    title: 'Freelancer Developer',
    company: 'Webtags - Lebanon, Beirut',
    period: '10/2021 - 04/2022'
  },
  {
    title: 'WordPress Developer',
    company: 'Securealm - Lebanon, Beirut',
    period: '07/2021 - 10/2021'
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Productra - Lebanon, Beirut',
    period: '05/2021 - 07/2021'
  }
];

const education = [
  {
    title: 'Computer Science',
    institution: 'Stanford University',
    period: '2017 - 2021'
  },
  {
    title: 'Web Development Bootcamp',
    institution: 'Tech Academy',
    period: '2020 - 2021'
  }
];

export const Qualification: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
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

  return (
    <section id="qualification" ref={ref} className="section bg-white dark:bg-navy-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Qualification</h2>
          <p className="text-slate-dark dark:text-slate max-w-2xl mx-auto">
            My Personal Journey
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-100 dark:bg-navy-light p-1 rounded-md">
            <button
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                activeTab === 'experience'
                  ? 'bg-primary-500 text-white'
                  : 'text-slate-dark dark:text-slate hover:bg-white dark:hover:bg-navy'
              }`}
              onClick={() => setActiveTab('experience')}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Experience
            </button>
            <button
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                activeTab === 'education'
                  ? 'bg-primary-500 text-white'
                  : 'text-slate-dark dark:text-slate hover:bg-white dark:hover:bg-navy'
              }`}
              onClick={() => setActiveTab('education')}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </button>
          </div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-slate-200 dark:bg-navy-light"></div>

            {/* Timeline items */}
            {(activeTab === 'experience' ? experience : education).map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-end md:justify-start' : 'justify-start md:justify-end'
                } mb-8`}
              >
                <div
                  className={`w-full md:w-[calc(50%-20px)] ${
                    index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                  }`}
                >
                  <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-custom">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-dark dark:text-slate mb-2">
                      {activeTab === 'experience' ? item.company : item.institution}
                    </p>
                    <p className="text-sm text-primary-500">
                      {item.period}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};