import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import CONFIG from '../data/config';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 ${
        darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-100 border-t border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`text-center md:text-left ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <p>
              © {currentYear} <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{CONFIG.personal.name}</span>
            </p>
            <p className="text-sm flex items-center justify-center md:justify-start gap-1">
           
            </p>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`hover:text-primary transition-colors ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href={CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-primary hover:text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-primary hover:text-white'
              }`}
            >
              <Github size={20} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href={CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-primary hover:text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-primary hover:text-white'
              }`}
            >
              <Linkedin size={20} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href={`mailto:${CONFIG.social.email}`}
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-primary hover:text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-primary hover:text-white'
              }`}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
