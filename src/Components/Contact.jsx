import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, 
  CheckCircle, Clock, Sparkles, Heart, Zap
} from 'lucide-react';
import LoadingSpinner from './Loading.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'raghavbaheti1224@gmail.com',
      link: 'mailto:raghavbaheti1224@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 773396XXXX',
      link: 'tel:+91773396XXXX',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Udaipur, Rajasthan, India',
      link: 'https://maps.google.com/?q=Udaipur,Rajasthan,India',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Raghavendrabaheti',
      color: 'hover:text-gray-300',
      bgColor: 'hover:bg-gray-500/20'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/raghavendra-baheti-909109244',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-500/20'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/raghavendra',
      color: 'hover:text-cyan-400',
      bgColor: 'hover:bg-cyan-500/20'
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      url: 'https://discord.com/users/ig_Goro',
      color: 'hover:text-purple-400',
      bgColor: 'hover:bg-purple-500/20'
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative min-h-screen bg-gradient-main grid-bg py-20 px-6 overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.4, 0.15],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-card px-6 py-3 rounded-full border border-pink-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-5 h-5 text-pink-400" />
            <span className="text-pink-300 font-medium">Let's connect</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something <span className="text-indigo-400 font-medium">amazing</span> together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-card rounded-2xl p-6 backdrop-blur-lg border border-white/10 hover:border-indigo-500/30 transition-all duration-500 block group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <info.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 text-lg group-hover:text-indigo-400 transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="bg-gradient-card rounded-2xl p-8 backdrop-blur-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-indigo-400" />
                Follow My Journey
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${social.color} ${social.bgColor} hover:border-white/20`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                    <span className="font-medium text-sm">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              className="bg-gradient-card rounded-2xl p-8 backdrop-blur-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <motion.div 
                  className="w-4 h-4 bg-green-400 rounded-full mt-1"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Available for Opportunities</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Currently open to full-time positions, freelance projects, and exciting collaborations. 
                    Let's build something incredible together!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            className="bg-gradient-card rounded-3xl p-8 backdrop-blur-lg border border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  className="absolute inset-0 bg-gradient-to-br from-green-500/90 to-emerald-600/90 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20"
                >
                  <div className="text-center text-white">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-green-100">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Send className="w-6 h-6 text-indigo-400" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 px-6 rounded-xl inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div 
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Enhanced Response Promise */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <div className="bg-gradient-card rounded-2xl p-8 backdrop-blur-lg border border-white/10 max-w-2xl mx-auto">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Clock className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-white font-semibold mb-4 text-xl">Quick Response Guaranteed</h3>
            <p className="text-gray-400 leading-relaxed">
              I typically respond to emails within <span className="text-indigo-400 font-medium">24 hours</span>. 
              For urgent matters, feel free to reach out via phone or connect with me on social media. 
              I'm always excited to discuss new opportunities and interesting projects!
            </p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;