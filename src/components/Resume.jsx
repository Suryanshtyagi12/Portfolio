import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import CONFIG from '../data/config';

const Resume = ({ darkMode }) => {
  // Debug: show props and config shape
  console.log('Resume props:', { darkMode });
  console.log('CONFIG (resume):', CONFIG);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Safe defaults (avoid undefined)
  const personal = CONFIG?.personal ?? {};
  const education = CONFIG?.education ?? {};
  const projects = CONFIG?.projects ?? [];
  const certificates = CONFIG?.certificates ?? [];
  const skillsConfig = CONFIG?.skills ?? {};
  const languages = skillsConfig.languages ?? [];
  const frameworks = skillsConfig.frameworks ?? [];
  // resume link may be undefined
  const resumeLink = personal.resumeLink ?? '';

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Helper to safely build preview URL for iframe if possible
  const buildPreviewSrc = (link) => {
    if (!link) return null;
    try {
      // common Google Drive share links end with /view - convert to preview
      if (typeof link === 'string' && link.includes('/view')) {
        return link.replace('/view', '/preview');
      }
      // if it's a direct PDF link or already embeddable, return as-is
      return link;
    } catch (e) {
      return null;
    }
  };

  const previewSrc = buildPreviewSrc(resumeLink);

  return (
    <section id="resume" ref={ref} className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={itemVariants}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              My{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Download or view my complete resume</p>
          </div>

          {/* Resume Container */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`p-8 rounded-xl shadow-xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: Icon & Info */}
              <div className="flex items-center gap-6">
                <div className="p-6 bg-gradient-to-r from-primary to-accent rounded-2xl shadow-lg">
                  <FileText className="text-white" size={48} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {personal.name ?? 'Your Name'}
                  </h3>
                  <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {personal.tagline ?? 'A short tagline about you'}
                  </p>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {education?.degree ?? 'Degree'} • {education?.university ?? 'University'}
                  </p>
                </div>
              </div>

              {/* Right: Download Button */}
              {resumeLink ? (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Download size={24} />
                  Download Resume
                </motion.a>
              ) : (
                <div className="text-sm italic text-gray-500">Resume link not provided.</div>
              )}
            </div>
          </motion.div>

          {/* Resume Embed (Optional) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.3 }}
            className={`mt-8 p-4 rounded-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}
          >
            <div className="aspect-[8.5/11] w-full">
              {previewSrc ? (
                <iframe src={previewSrc} className="w-full h-full rounded-lg" title="Resume Preview" />
              ) : (
                <div className={`w-full h-full flex items-center justify-center rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Resume preview not available. Use the download button above to view the resume.
                  </p>
                </div>
              )}
            </div>

            {/* Info */}
            <div className={`mt-4 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              💡 <strong>Tip:</strong> If the preview doesn't load, click the "Download Resume" button above
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Projects', value: `${projects.length}+` },
              { label: 'Certificates', value: `${certificates.length}+` },
              { label: 'Skills', value: `${languages.length + frameworks.length}+` },
              { label: 'Experience', value: '1 Year' },
            ].map((stat) => (
              <div key={stat.label} className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

Resume.propTypes = {
  darkMode: PropTypes.bool,
};

export default Resume;
