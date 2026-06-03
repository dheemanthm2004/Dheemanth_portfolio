'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Database, Wrench, TestTube2 } from 'lucide-react'

const techCategories = [
  {
    title: "Languages",
    description: "Core programming languages for systems, backend, and frontend development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ]
  },
  {
    title: "Frontend", 
    description: "Building responsive, modern user interfaces with React ecosystem and design systems",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" }
    ]
  },
  {
    title: "Backend & Databases",
    description: "Building scalable server-side applications with Node.js, Express, and robust data persistence",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ]
  },
  {
    title: "Tools & Infrastructure",
    description: "DevOps, containerization, version control, and cloud deployment workflows",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ]
  },
  {
    title: "Testing & Protocols",
    description: "End-to-end testing, microservices communication, and API development",
    icon: TestTube2,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
      { name: "gRPC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg" },
      { name: "Protocol Buffers", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/protobuf/protobuf-original.svg" }
    ]
  }
]

export default function TechStack() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            🛠 Tech Toolbox
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            My arsenal of technologies and tools that I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Category Icon */}
                <div className="text-center mb-6">
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 mb-4 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed text-center mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {category.description}
                </p>
                
                {/* Technology Icons Grid */}
                <div className="flex flex-wrap gap-3 justify-center mb-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center gap-1"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                        <img 
                          src={skill.icon}
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      {/* Tech Name - Always Visible */}
                      <span className="text-xs font-medium text-gray-700 text-center max-w-[60px] leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Details */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">💡 Currently Learning & Exploring</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Distributed Systems", "Microservices Architecture", "System Design", "Advanced Go", "Cloud Native"].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 text-sm font-semibold rounded-full border border-orange-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
