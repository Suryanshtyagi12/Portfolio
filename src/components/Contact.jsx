import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import emailjs from 'emailjs-com';
import CONFIG from '../data/config';

const Contact = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // 🔹 SUBJECT ADDED HERE
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
      await emailjs.send(
        CONFIG.emailjs.serviceId,
        CONFIG.emailjs.templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject, // 🔹 SUBJECT PASSED
          message: formData.message,
        },
        CONFIG.emailjs.publicKey
      );

      setStatus({
        type: 'success',
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'Failed to send message. Please email me directly at ' +
          CONFIG.social.email,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <div className="text-center mb-16">
            <h2
              className={`text-4xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p
              className={`mt-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Let’s discuss opportunities or collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT */}
            <div className="space-y-8">
              <div>
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div
                    className={`flex items-center gap-4 p-4 rounded-xl ${
                      darkMode ? 'bg-gray-900' : 'bg-white'
                    }`}
                  >
                    <Mail className="text-primary" />
                    <a
                      href={`mailto:${CONFIG.social.email}`}
                      className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {CONFIG.social.email}
                    </a>
                  </div>

                  <div
                    className={`flex items-center gap-4 p-4 rounded-xl ${
                      darkMode ? 'bg-gray-900' : 'bg-white'
                    }`}
                  >
                    <MapPin className="text-primary" />
                    <span
                      className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Punjab, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={CONFIG.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-primary text-white rounded-xl"
                >
                  <Github />
                </a>
                <a
                  href={CONFIG.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-primary text-white rounded-xl"
                >
                  <Linkedin />
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-xl shadow-xl ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full p-3 rounded border"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full p-3 rounded border"
                />

                {/* 🔹 SUBJECT INPUT ADDED */}
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-3 rounded border"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-3 rounded border"
                />

                {status.message && (
                  <div
                    className={`flex items-center gap-2 p-3 rounded ${
                      status.type === 'success'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle size={18} />
                    ) : (
                      <AlertCircle size={18} />
                    )}
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 rounded flex justify-center gap-2"
                >
                  {loading ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
