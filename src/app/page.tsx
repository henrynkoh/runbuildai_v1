'use client';

import { motion, Variants } from "framer-motion";
import { ArrowRightIcon, BeakerIcon, CodeBracketIcon, CpuChipIcon } from "@heroicons/react/24/outline";

const fadeIn: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const stagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const slideIn: Variants = {
  initial: { 
    opacity: 0, 
    x: -20 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background-dark to-background-light"></div>
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-5xl sm:text-7xl font-bold mb-8 text-gradient"
          >
            Master AI Development
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl sm:text-2xl mb-12 text-text-dim"
          >
            Build cutting-edge AI applications through practical examples and real-world case studies
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary"
            >
              Start Learning
              <ArrowRightIcon className="w-5 h-5 ml-2 inline-block" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary bg-white/10 hover:bg-white/20"
            >
              View Courses
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="py-32 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-4xl font-bold mb-16 text-gradient text-center"
          >
            Featured Courses
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CpuChipIcon className="w-8 h-8" />,
                title: "ChatGPT Integration",
                description: "Learn to integrate ChatGPT into your applications for enhanced user experiences."
              },
              {
                icon: <BeakerIcon className="w-8 h-8" />,
                title: "AI Model Development",
                description: "Master the fundamentals of AI model development and deployment."
              },
              {
                icon: <CodeBracketIcon className="w-8 h-8" />,
                title: "Real-world Applications",
                description: "Explore practical case studies and build production-ready AI applications."
              }
            ].map((course, index) => (
              <motion.div
                key={course.title}
                variants={slideIn}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative glass-card rounded-2xl p-8"
              >
                <div className="card-highlight"></div>
                <div className="relative z-10">
                  <div className="text-primary mb-6">{course.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                  <p className="text-text-dim mb-6">{course.description}</p>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="text-primary hover:text-accent flex items-center gap-2"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-primary/5 backdrop-blur-3xl"
        ></motion.div>
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-4xl font-bold mb-16 text-gradient text-center"
          >
            Case Studies
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Language Learning AI",
                description: "Discover how AI is revolutionizing language learning through personalized tutoring and real-time feedback."
              },
              {
                title: "AI in Business Analytics",
                description: "Explore how businesses are leveraging AI for data analysis and decision-making."
              }
            ].map((study) => (
              <motion.div
                key={study.title}
                variants={slideIn}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-8 group"
              >
                <div className="card-highlight"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <p className="text-text-dim mb-6">{study.description}</p>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="text-primary hover:text-accent flex items-center gap-2"
                  >
                    View Case Study <ArrowRightIcon className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-32 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-4xl font-bold mb-16 text-gradient text-center"
          >
            Learning Resources
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Documentation', 'Tutorials', 'Community', 'Tools'].map((resource) => (
              <motion.div
                key={resource}
                variants={slideIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="glass-card rounded-xl p-6 text-center group"
              >
                <div className="card-highlight"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">{resource}</h3>
                  <p className="text-text-dim">
                    Access comprehensive {resource.toLowerCase()} to support your learning journey.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
