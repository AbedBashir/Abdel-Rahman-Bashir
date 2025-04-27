import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Store, Globe, Smartphone, Headphones, HelpCircle, ClipboardList } from 'lucide-react';

const services = [
  {
    icon: Store,
    title: 'Shopify Store',
    description: 'Custom Shopify store development with unique features and optimized performance.',
    link: '#'
  },
  {
    icon: Globe,
    title: 'WordPress Website',
    description: 'Professional WordPress websites with custom themes and functionality.',
    link: '#'
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile app development for iOS and Android.',
    link: '#'
  },
  {
    icon: Headphones,
    title: 'Online Private Tutor',
    description: 'One-on-one mentoring and guidance for aspiring developers.',
    link: '#'
  },
  {
    icon: HelpCircle,
    title: 'Website Consultation',
    description: 'Expert advice on web development, SEO, and digital strategy.',
    link: '#'
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    description: 'Efficient project management and team coordination services.',
    link: '#'
  }
];

export const Services: React.FC = () => {
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
    <section id="services" ref={ref} className="section bg-slate-50 dark:bg-navy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Services</h2>
          <p className="text-slate-dark dark:text-slate max-w-2xl mx-auto">
            What I Offer
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-custom hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-slate-dark dark:text-slate mb-4">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
              >
                View More →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};