'use client'

import { motion } from 'framer-motion'

const techCategories = [
  {
    title: "Frontend",
    description: "Building beautiful, responsive user interfaces with modern frameworks and cutting-edge design systems",
    icons: "ts,js,react,nextjs,tailwind"
  },
  {
    title: "Backend", 
    description: "Crafting robust server-side applications with scalable databases and efficient data processing",
    icons: "nodejs,express,mongodb,postgres,redis,prisma"
  },
  {
    title: "DevOps & Deployment",
    description: "Streamlining development workflows with containerization and cloud deployment strategies",
    icons: "docker,vercel,git,github"
  },
  {
    title: "AI & Analytics",
    description: "Integrating intelligent features with LLMs and creating insightful data visualizations",
    icons: "ai,py"
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            My arsenal of technologies and tools that I use to bring ideas to life
          </p>
          
          {/* Animated Tech Icons */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://skillicons.dev/icons?i=ts,js,react,nextjs,nodejs,express,mongodb,postgres,redis,docker,tailwind,prisma,vercel,git,github,ai,py" 
                alt="Tech Stack"
                className="max-w-full h-auto rounded-2xl shadow-2xl border-4 border-white/50"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="text-center mb-6">
                  <motion.div
                    className="inline-block mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src={`https://skillicons.dev/icons?i=${category.icons}`}
                      alt={category.title}
                      className="mx-auto h-16 w-auto"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">
                  {category.description}
                </p>
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
        
        </motion.div>
      </div>
    </section>
  )
}

