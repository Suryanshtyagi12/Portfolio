import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Wrench, Brain } from 'lucide-react';
import CONFIG from '../data/config';
import PropTypes from 'prop-types';

const Skills = ({ darkMode }) => {
  // Debugging: show what props and config look like in the console
  console.log('Skills props:', { darkMode });
  console.log('CONFIG (skills):', CONFIG?.skills);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Safely read CONFIG.skills — default to empty object to avoid undefined errors
  const skillsConfig = CONFIG?.skills ?? {};

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: skillsConfig.languages ?? [],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Wrench,
      skills: skillsConfig.frameworks ?? [],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Tools & Technologies',
      icon: Database,
      skills: skillsConfig.tools ?? [],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Concepts & Domains',
      icon: Brain,
      skills: skillsConfig.concepts ?? [],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Skills &{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => {
              const Icon = category.icon; // render variable component safely
              const skillsList = category.skills ?? [];

              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`p-6 rounded-xl shadow-xl ${
                    darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                  }`}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mb-4 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center`}
                  >
                    {Icon ? <Icon className="text-white" size={32} /> : null}
                  </motion.div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {category.title}
                  </h3>

                  {/* Skills List (safe) */}
                  <div className="space-y-2">
                    {skillsList.length === 0 ? (
                      <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>No skills added.</p>
                    ) : (
                      skillsList.map((skill, idx) => (
                        <motion.div
                          key={skill?.id ?? `${skill}-${idx}`}
                          whileHover={{ x: 5 }}
                          className={`flex items-center gap-2 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`} />
                          <span>{typeof skill === 'string' ? skill : skill?.name ?? JSON.stringify(skill)}</span>
                        </motion.div>
                      ))
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className={`mt-12 text-center p-8 rounded-xl ${
              darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-50 to-purple-50'
            }`}
          >
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              🚀 Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  darkMode: PropTypes.bool,
};

export default Skills;
