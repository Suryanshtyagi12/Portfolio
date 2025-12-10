import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Target, Code } from 'lucide-react';
import CONFIG from '../data/config';

const About = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio Section */}
            <motion.div variants={itemVariants}>
              <h3
                className={`text-2xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Who I Am
              </h3>
              <p
                className={`text-lg mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {CONFIG.personal.bio}
              </p>
              <p
                className={`text-lg ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                I love exploring new technologies, building projects that make a difference, and continuously learning to stay ahead in the fast-evolving tech landscape.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Education Card */}
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className={`p-6 rounded-xl shadow-lg ${
                  darkMode
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h4
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Education
                    </h4>
                    <p
                      className={`font-semibold ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {CONFIG.education.degree}
                    </p>
                    <p
                      className={darkMode ? 'text-gray-400' : 'text-gray-600'}
                    >
                      {CONFIG.education.university}
                    </p>
                    <p
                      className={`text-sm ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}
                    >
                      {CONFIG.education.year} {CONFIG.education.cgpa}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Goal Card */}
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className={`p-6 rounded-xl shadow-lg ${
                  darkMode
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-lg">
                    <Target className="text-white" size={24} />
                  </div>
                  <div>
                    <h4
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Career Goal
                    </h4>
                    <p
                      className={darkMode ? 'text-gray-300' : 'text-gray-700'}
                    >
                      {CONFIG.personal.goal}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Passion Card */}
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className={`p-6 rounded-xl shadow-lg ${
                  darkMode
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-gradient-to-br from-green-50 to-blue-50 border border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <h4
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      What I Do
                    </h4>
                    <p
                      className={darkMode ? 'text-gray-300' : 'text-gray-700'}
                    >
                      Building AI-powered applications, solving complex data problems, and creating intuitive web experiences.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
