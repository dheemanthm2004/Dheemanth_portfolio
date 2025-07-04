'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Palette, Zap, Users, Brain, ChevronDown, Star, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'

const skills = {
  "Frontend": ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN UI"],
  "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Prisma"],
  "AI/ML": ["Gemini Pro", "OpenRouter", "Mistral", "Cohere", "NLP", "LLM Integration"],
  "DevOps": ["Docker", "Railway", "Vercel", "Firebase", "JWT", "RBAC"]
}

const projects = [
  {
    title: "DheeSpace",
    subtitle: "Real-time Collaborative Editor with AI",
    description: "Notion-style editor with CRDT sync, AI chat/translate, version history, and PDF/DOCX export. Built with Liveblocks + Yjs for real-time collaboration.",
    tech: ["Next.js 15", "Liveblocks", "Firestore", "Gemini AI", "Clerk Auth"],
    liveUrl: "https://dheespace.vercel.app",
    githubUrl: "https://github.com/dheemanthm2004/DheeSpace.",
    stats: "200+ docs created by 50+ users",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "DheeNotifications",
    subtitle: "Scalable Notification Infrastructure",
    description: "Production-grade messaging platform with Redis-backed BullMQ, email/SMS delivery, analytics dashboard, and CSV bulk operations.",
    tech: ["Node.js", "Redis", "BullMQ", "PostgreSQL", "Twilio", "Docker"],
    liveUrl: "https://dheenotifications.vercel.app",
    githubUrl: "https://github.com/dheemanthm2004/notification_system",
    stats: "1000+ messages processed",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "ResuScanX",
    subtitle: "AI Resume Analyzer + ATS Checker",
    description: "Multi-AI platform using Gemini, Mistral, and Cohere to analyze resume-job compatibility with ATS simulation and career coaching.",
    tech: ["Next.js", "MongoDB", "Gemini API", "NLP", "Chart.js"],
    liveUrl: "https://resuscanx.vercel.app",
    githubUrl: "https://github.com/dheemanthm2004/resuscanx",
    stats: "100+ users analyzed",
    gradient: "from-emerald-500 to-teal-500"
  }
]

const achievements = [
  { number: "300+", label: "LeetCode Problems", icon: Code },
  { number: "3", label: "Production Apps", icon: Zap },
  { number: "9.08", label: "CGPA", icon: Star },
  { number: "350+", label: "Active Users", icon: Users }
]

export default function Portfolio() {
  const [activeSkill, setActiveSkill] = useState("Frontend")
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
              Full-Stack Developer crafting AI-powered, real-time web experiences
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
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm a Computer Science student at <strong>BMS College of Engineering</strong> (CGPA: 9.08/10) 
                with a passion for building production-grade applications that solve real problems. 
                My expertise spans from AI-powered platforms to real-time collaborative systems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Currently maintaining <strong>3 live applications</strong> with <strong>350+ active users</strong>, 
                I focus on creating scalable, user-centric solutions using modern technologies like Next.js, 
                AI/ML APIs, and distributed systems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From Bangalore, India 🇮🇳 • Solved <strong>300+ LeetCode problems</strong> • 
                Former School Vice Captain & Cultural Secretary • IEEE Volunteer at BMSCE
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <achievement.icon className="w-8 h-8 mx-auto mb-4 text-purple-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-sm text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveSkill(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeSkill === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {skills[activeSkill as keyof typeof skills].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-white/20 text-gray-700 font-medium"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Production-grade applications built with modern technologies, serving real users worldwide.
            </p>
          </motion.div>

          <div className="grid gap-8 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-1">
                  <div className={`p-8 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-2xl`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-purple-600 font-semibold mb-4">{project.subtitle}</p>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 font-medium">{project.stats}</span>
                        <div className="flex gap-3">
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                  href="https://leetcode.com/u/7e231YE1V6/" 
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
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Dheemanth M. Built with Next.js, TypeScript, and lots of ☕
          </p>
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