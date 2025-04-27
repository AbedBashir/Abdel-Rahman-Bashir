import React from "react";
import sohati__scroll from "../assets/sohati__scroll.png";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";
import { ParticlesBackground } from "../ui/ParticlesBackground";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <ParticlesBackground />

      <div className="container-custom z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-primary-500 font-mono">Hi, my name is</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-slate-900 dark:text-slate-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatedText text="Abdel Rahman Bashir" />
          </motion.h1>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-dark dark:text-slate"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatedText text="I Build Websites" />
          </motion.h2>

          <motion.p
            className="text-lg text-slate-dark dark:text-slate mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I am highly organized, efficient and proactive Senior Web Developer.
            I deliver high-quality work consistently while meeting deadlines and
            maintaining confidentiality. Owner of
            <motion.a
              href="https://bashfusion.com"
              className="nav-link active"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={(e) => {
                window.location.href = "https://bashfusion.com"; // manually redirect if you want
              }}
            >
              BashFusion
            </motion.a>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="btn-primary">
              Check out my work!
            </a>
          </motion.div>
        </div>

        <div className="max-w-3xl">
          <img
            src={sohati__scroll}
            className="absolute inset-0 w-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 group-hover:translate-y-[-70%]"
            style={{ height: "200%" }}
          />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-slate-dark dark:text-slate hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};
