import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import CONFIG from '../data/config';

const Contact = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS Configuration
      // Sign up at https://www.emailjs.com/ and replace with your credentials
      await emailjs.send(
        CONFIG.emailjs.serviceId,
        CONFIG.emailjs.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        CONFIG.emailjs.publicKey
      );

      setStatus({
        type: 'success',
        message: '✅ Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: '❌ Failed to send message. Please email me directly at ' + CONFIG.social.email,
      });
    } finally {
      setLoading(false);
    }
  };

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
      id="contact"
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
              Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's discuss your next project or opportunity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Contact Information
                </h3>
                
                {/* Contact Cards */}
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className={`flex items-center gap-4 p-4 rounded-xl ${
                      darkMode ? 'bg-gray-900' : 'bg-white'
                    }`}
                  >
                    <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Email
                      </p>
                      <a
                        href={`mailto:${CONFIG.social.email}`}
                        className={`font-semibold hover:text-primary ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {CONFIG.social.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className={`flex items-center gap-4 p-4 rounded-xl ${
                      darkMode ? 'bg-gray-900' : 'bg-white'
                    }`}
                  >
                    <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Location
                      </p>
                      <p
                        className={`font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        Punjab, India
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4
                  className={`text-xl font-bold mb-4 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href={CONFIG.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-primary to-accent rounded-xl text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <Github size={28} />
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href={CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-primary to-accent rounded-xl text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <Linkedin size={28} />
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href={`mailto:${CONFIG.social.email}`}
                    className="p-4 bg-gradient-to-r from-primary to-accent rounded-xl text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <Mail size={28} />
                  </motion.a>
                </div>
              </div>

              {/* CTA Box */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl ${
                  darkMode
                    ? 'bg-gradient-to-r from-gray-900 to-gray-800'
                    : 'bg-gradient-to-r from-blue-50 to-purple-50'
                }`}
              >
                <p
                  className={`text-lg ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  💼 <strong>Open to opportunities!</strong>
                  <br />
                 Open to roles in Machine Learning Engineering, Data Science, Deep Learning, and Generative AI Development.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                className={`p-8 rounded-xl shadow-xl ${
                  darkMode
                    ? 'bg-gray-900 border border-gray-700'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <label
                      className={`block mb-2 font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-primary transition-colors ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white'
                          : 'bg-gray-50 border-gray-300 text-gray-900'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      className={`block mb-2 font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-primary transition-colors ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white'
                          : 'bg-gray-50 border-gray-300 text-gray-900'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      className={`block mb-2 font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-primary transition-colors ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white'
                          : 'bg-gray-50 border-gray-300 text-gray-900'
                      }`}
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      className={`block mb-2 font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-primary transition-colors resize-none ${
                        darkMode
                          ? 'bg-gray-800 border-gray-700 text-white'
                          : 'bg-gray-50 border-gray-300 text-gray-900'
                      }`}
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Status Message */}
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg flex items-center gap-2 ${
                        status.type === 'success'
                          ? 'bg-green-100 text-green-800 border border-green-300'
                          : 'bg-red-100 text-red-800 border border-red-300'
                      }`}
                    >
                      {status.type === 'success' ? (
                        <CheckCircle size={20} />
                      ) : (
                        <AlertCircle size={20} />
                      )}
                      <span>{status.message}</span>
                    </motion.div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
