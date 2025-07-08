'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code, Database, Palette, Zap, Brain, ChevronDown, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import TechStack from '../components/TechStack'
import ProjectShowcase from '../components/ProjectShowcase'
import StatsDashboard from '../components/StatsDashboard'







export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-32 h-32 mx-auto">
                <img 
                  src="https://lnk.ink/Rm7MD"
                  alt="Dheemanth M"
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Dheemanth M
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              CSE undergrad building production-grade fullstack projects with AI/NLP, real-time collaboration, and scalable infrastructure
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                { icon: Brain, text: "AI Integration" },
                { icon: Zap, text: "Real-time Systems" },
                { icon: Database, text: "Scalable Backend" },
                { icon: Palette, text: "Modern UI/UX" }
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                  <item.icon className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <a 
                href="#projects" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-full border border-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">👨‍💻</span>
                  Who I Am
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  I'm a passionate Computer Science student at <strong>BMS College of Engineering, Bangalore</strong>, 
                  currently in my 3rd year with a CGPA of <strong>9.08/10</strong>. What sets me apart is my hands-on 
                  approach to learning - I don't just study concepts, I build real applications that solve actual problems.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My journey in tech started with curiosity about how things work behind the scenes. Today, I've 
                  transformed that curiosity into <strong>3 production-grade applications</strong> serving real users worldwide, 
                  with expertise spanning full-stack development, AI integration, and scalable system architecture.
                </p>
              </div>
            </motion.div>

            {/* Right side - Skills & Interests */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🚀</span>
                  What I Do
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <p className="text-gray-700"><strong>Full-Stack Development:</strong> Building end-to-end applications with modern frameworks like Next.js, React, and Node.js</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700"><strong>AI Integration:</strong> Implementing LLM-powered features using Gemini, OpenAI, and other cutting-edge AI APIs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-700"><strong>System Architecture:</strong> Designing scalable backends with Redis, PostgreSQL, and queue-based processing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700"><strong>Problem Solving:</strong> Solved 300+ LeetCode problems with strong DSA foundation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom section - Personal touch */}
          
        </div>
      </section>

      {/* Enhanced Tech Stack Component */}
      <TechStack />

      {/* Enhanced Projects Section */}
      <ProjectShowcase />

      {/* Stats Dashboard */}
      <StatsDashboard />

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">B.E. in Computer Science & Engineering</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-2">B.M.S. College of Engineering, Bangalore</p>
                  <p className="text-gray-600">2022 – 2026</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="text-3xl font-bold text-green-600">9.08</div>
                  <div className="text-sm text-gray-600">CGPA / 10</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pre-University Course (PUC)</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-2">Sadvidya PU College, Mysore</p>
                  <p className="text-gray-600">2020 – 2022 • Karnataka State Board</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="text-3xl font-bold text-green-600">96.4%</div>
                  <div className="text-sm text-gray-600">Percentage</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Class X (CBSE)</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-2">Christ Public School, Mysore</p>
                  <p className="text-gray-600">2010 – 2020</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="text-3xl font-bold text-green-600">90%</div>
                  <div className="text-sm text-gray-600">Percentage</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              I'm seeking backend/fullstack SDE roles with scale, ownership, and system-level problem solving. 
              Let's connect and create something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a 
                href="mailto:dheemanthm.official@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-3" />
                dheemanthm.official@gmail.com
              </a>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/dheemanthm2004" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                >
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/dheemanth-madaiah-484a43327/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a 
                  href="https://leetcode.com/u/dhee_vampire/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                >
                  <Code className="w-6 h-6 text-orange-600" />
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">📍 Bangalore, India • 📱 +91 96864 90654</p>
              <p className="text-sm text-gray-500">Open to internships and full-time opportunities</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-100 text-gray-800 relative overflow-hidden">
  {/* Soft background glow */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-3xl animate-blob"></div>
  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000"></div>

  <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center gap-5">
    
    {/* Instagram Only */}
    <a 
      href="https://www.instagram.com/dheemanth._m" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-pink-500 transition duration-300"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Z" />
        <path d="M15.25 11.25a3.75 3.75 0 1 1-6.5 2.651 3.75 3.75 0 0 1 6.5-2.651Z" />
        <path d="M17.5 6.51v.008h.01v-.009h-.01Z" />
      </svg>
    </a>

    {/* Signature */}
    <p className="text-sm italic font-serif text-gray-600 tracking-wide">
      Made with <span className="text-red-500">❤️</span> by <span className="text-gray-800">Dheem</span>
    </p>

    {/* Back to top */}
    <a href="#home" className="text-xs text-gray-500 hover:text-gray-800 transition duration-300 underline">
      Back to top ↑
    </a>
  </div>
</footer>


      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}