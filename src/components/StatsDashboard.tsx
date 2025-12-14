'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function StatsDashboard() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            📈 By the Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LeetCode Stats */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">LeetCode Progress</h3>
              <a 
                href="https://leetcode.com/u/dhee_vampire/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 text-sm"
              >
                View Profile →
              </a>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://leetcard.jacoblin.cool/dhee_vampire?theme=unicorn&ext=contest" 
                alt="LeetCode Stats"
                className="rounded-lg shadow-md max-w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="text-center mt-4">
              <div className="text-sm text-gray-600">
                <strong>400+ Problems Solved</strong> • Strong DSA Foundation
              </div>
            </div>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub Activity</h3>
              <a 
                href="https://github.com/dheemanthm2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                View Profile →
              </a>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=dheemanthm2004&show_icons=true&theme=tokyonight&hide_border=true" 
                alt="GitHub Stats"
                className="rounded-lg shadow-md max-w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* GitHub Streak */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Coding Streak</h3>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=dheemanthm2004&theme=tokyonight&hide_border=true" 
                alt="GitHub Streak"
                className="rounded-lg shadow-md max-w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Top Languages</h3>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=dheemanthm2004&layout=compact&theme=tokyonight&hide_border=true" 
                alt="Top Languages"
                className="rounded-lg shadow-md max-w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}