'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, Code2, Database, Zap, Users, FileText, BarChart3 } from 'lucide-react'

const projects = [
  {
    title: "DheeSpace",
    subtitle: "Real-time Collaborative Editor with AI + Multiplayer Magic",
    description: "Notion meets Google Docs — reimagined with AI, live presence, and Gen-Z aesthetics. Built from scratch using bleeding-edge full-stack tools. Features real-time multiplayer editing with CRDT sync (Liveblocks + Yjs), AI chat assistant powered by Gemini Pro 1.5, instant translation with formatting preservation, version history with diff-restore, beautiful PDF/DOCX export, and role-based access control with temporary document sharing.",
    tech: ["Next.js 15", "Liveblocks", "Yjs", "Firebase Firestore", "Gemini 1.5 Pro", "Clerk Auth", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
    liveUrl: "https://dheespace.vercel.app",
    githubUrl: "https://github.com/dheemanthm2004/DheeSpace.",
    gradient: "from-violet-500 to-purple-600",
    features: ["Live Cursors & Avatars", "AI Chat & Translate", "Version History with Diffs", "PDF/DOCX Export", "Temporary Public Docs", "RBAC Invite System"],
    icon: Code2,
    stats: "200+ docs created • 50+ users • Live production",
    highlights: ["Real-time CRDT sync", "AI-powered workflows", "Production-grade auth", "Temporary sharing"],
    image: "https://i.ibb.co/LHqXhN8/Screenshot-2025-06-25-012039.png"
  },
  {
    title: "ResuScanX",
    subtitle: "AI-Powered Resume vs Job Description Analyzer + ATS Checker",
    description: "Smart web application that empowers job seekers by comparing their resume to any job description using AI, NLP, and ATS simulation. Delivers realistic match scores, identifies skill gaps, and gives actionable improvement tips. Features multi-AI provider orchestration (Gemini, Mistral, Cohere, OpenRouter) with fallback chains, ATS compatibility checker that simulates real parsing, visual analytics with Chart.js, and context-aware AI career coaching.",
    tech: ["Next.js 14", "Node.js", "MongoDB", "Mongoose", "Gemini API", "Mistral AI", "Cohere", "OpenRouter", "Chart.js", "JWT", "Natural NLP", "pdf-parse"],
    liveUrl: "https://resuscanx.vercel.app",
    githubUrl: "https://github.com/dheemanthm2004/resuscanx",
    gradient: "from-emerald-500 to-teal-600",
    features: ["Multi-AI Analysis", "ATS Compatibility Simulation", "Skill Gap Analysis", "AI Career Coaching", "Visual Analytics", "Free Public ATS Checker"],
    icon: Zap,
    stats: "100+ users analyzed • 4 AI providers • Free ATS tools",
    highlights: ["Multi-LLM orchestration", "Real ATS simulation", "Career insights", "Fallback AI chains"],
    image: "https://i.ibb.co/TMVbBS1d/image.png"
  },
  {
    title: "DheeNotifications",
    subtitle: "Scalable Email & SMS Notification Infrastructure",
    description: "Full-stack, production-ready notification platform for sending, scheduling, and managing email/SMS notifications at scale. Built using Node.js, Redis, PostgreSQL, and Next.js with clean authentication, background job processing, and analytics. Features Redis-backed BullMQ engine with retry logic, exponential backoff, CRON-based scheduling, real-time analytics dashboard, CSV bulk upload, and comprehensive API documentation.",
    tech: ["Node.js", "Express.js", "Redis", "BullMQ", "PostgreSQL", "Prisma ORM", "Twilio", "SMTP", "Docker", "Railway", "Next.js", "Chart.js"],
    liveUrl: "https://dheenotifications.vercel.app",
    githubUrl: "https://github.com/dheemanthm2004/notification_system",
    gradient: "from-blue-500 to-cyan-600",
    features: ["Background Job Queues", "CRON Scheduling", "Real-time Analytics", "CSV Bulk Upload", "Multi-channel Delivery", "Retry & Rate Limiting"],
    icon: Database,
    stats: "1000+ messages processed • Live API • Swagger docs",
    highlights: ["Fault-tolerant queues", "Real-time dashboard", "Scalable architecture", "Production deployment"],
    image: "https://i.ibb.co/21nN5LWS/image.png"
  }
]

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
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
            Live applications built with modern technologies, showcasing full-stack development and AI integration
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Info */}
              <div className="flex-1 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-purple-600 font-semibold mb-2">{project.subtitle}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      <Users className="w-3 h-3 mr-1" />
                      {project.stats}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <BarChart3 className="w-4 h-4 mr-2 text-purple-600" />
                    Key Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <span key={highlightIndex} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-blue-600" />
                    Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold`}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Project Visual */}
              <div className="flex-1 max-w-lg">
                <motion.div
                  className={`relative p-4 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-2xl`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden">
                    {/* Browser Header */}
                    <div className="flex items-center space-x-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-white rounded px-3 py-1 ml-4">
                        <div className="text-xs text-gray-500 truncate">{project.liveUrl}</div>
                      </div>
                    </div>
                    
                    {/* Real Project Screenshot */}
                    <div className="relative">
                      <img 
                        src={project.image}
                        alt={`${project.title} Screenshot`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-gray-600" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}