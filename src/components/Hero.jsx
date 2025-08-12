import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-max text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Jim Anderson</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto"
          >
            Computer Science student with hands-on experience in full-stack development 
            and automated testing. Looking for SWE/SDET new graduate positions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/jimmyhanderson"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 glass-effect rounded-full hover:bg-primary-500/20 transition-colors duration-200"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/jimmyhanderson"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 glass-effect rounded-full hover:bg-primary-500/20 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:jimmyhanderson98@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 glass-effect rounded-full hover:bg-primary-500/20 transition-colors duration-200"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-4 pt-8"
          >
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-colors duration-200"
            >
              Learn More
            </motion.button>
            <motion.a
              href="/Jim_s_Resumenewgrad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass-effect rounded-lg font-medium hover:bg-white/20 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Resume</span>
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-dark-400 hover:text-primary-400 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
