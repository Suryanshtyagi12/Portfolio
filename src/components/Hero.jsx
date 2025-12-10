import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import CONFIG from '../data/config';

const Hero = ({ darkMode }) => {
  const [text, setText] = useState('');
  const fullText = CONFIG.personal.tagline;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index]);

  const scrollToProjects = () => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-5xl md:text-7xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {CONFIG.personal.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`text-2xl md:text-3xl mb-6 h-20 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`text-lg mb-8 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {CONFIG.personal.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Explore My Work
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={CONFIG.personal.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 border-2 rounded-full font-semibold transition-all ${
                  darkMode
                    ? 'border-white text-white hover:bg-white hover:text-gray-900'
                    : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors ${
                  darkMode
                    ? 'bg-gray-800 text-white hover:bg-primary'
                    : 'bg-gray-200 text-gray-900 hover:bg-primary hover:text-white'
                }`}
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors ${
                  darkMode
                    ? 'bg-gray-800 text-white hover:bg-primary'
                    : 'bg-gray-200 text-gray-900 hover:bg-primary hover:text-white'
                }`}
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={`mailto:${CONFIG.social.email}`}
                className={`p-3 rounded-full transition-colors ${
                  darkMode
                    ? 'bg-gray-800 text-white hover:bg-primary'
                    : 'bg-gray-200 text-gray-900 hover:bg-primary hover:text-white'
                }`}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-50" />
              <img
                src={CONFIG.personal.profileImage}
                alt={CONFIG.personal.name}
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToProjects}
      >
        <ChevronDown
          size={32}
          className={darkMode ? 'text-white' : 'text-gray-900'}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
