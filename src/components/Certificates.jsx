import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import CONFIG from '../data/config';

const Certificates = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="certificates"
      ref={ref}
      className={`py-20 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
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
              Training & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certificates</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Professional certifications and completed training programs
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(CONFIG.certificates ?? []).map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`rounded-xl overflow-hidden shadow-xl ${
                  darkMode
                    ? 'bg-gray-900 border border-gray-700'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {/* Certificate Image */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  {/* Award Icon */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
                      <Award className="text-white" size={20} />
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p
                    className={`text-sm mb-4 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Issued by: <span className="font-semibold">{cert.issuer}</span>
                  </p>

                  {/* View Certificate Link */}
                  {cert.link && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/*
            Achievement Summary removed as requested.
            If you want to re-enable it later, uncomment the block below.
          
          <motion.div
            variants={itemVariants}
            className={`mt-12 text-center p-8 rounded-xl ${
              darkMode
                ? 'bg-gradient-to-r from-gray-800 to-gray-900'
                : 'bg-gradient-to-r from-purple-50 to-blue-50'
            }`}
          >
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div
                  className={`text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent`}
                >
                  {CONFIG.certificates.length}+
                </div>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Certifications
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent`}
                >
                  {CONFIG.projects.length}+
                </div>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent`}
                >
                
                </div>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              
                </div>
              </div>
            </div>
          </motion.div>
          
          */}

        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
