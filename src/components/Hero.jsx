import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Code, Gamepad2 } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary-600 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary-300 rounded-full animate-pulse"></div>
        
        {/* Floating code symbols */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-32 left-1/4 text-primary-400/20 text-2xl"
        >
          &lt;/&gt;
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-32 right-1/4 text-primary-400/20 text-2xl"
        >
          { }
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/3 text-primary-400/10 text-4xl"
        >
          ⚡
        </motion.div>
      </div>

      <div className="container-max text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Profile Picture */}
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-primary-500/30">
                <img 
                  src="./images/yuta-yuta-okkotsu.gif" 
                  alt="Jim Anderson" 
                  className="w-full h-full object-cover"
                  style={{ display: 'block', zIndex: 10, position: 'relative' }}
                  onLoad={() => {
                    console.log('GIF loaded successfully!');
                    console.log('Image dimensions:', document.querySelector('img[src="./images/yuta-yuta-okkotsu.gif"]').naturalWidth, 'x', document.querySelector('img[src="./images/yuta-yuta-okkotsu.gif"]').naturalHeight);
                  }}
                />
              </div>
              {/* Animated border - positioned behind the image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 bg-clip-border"
                style={{ zIndex: 5 }}
              />
              {/* Gaming controller icon overlay */}
              <div className="absolute -bottom-4 -right-4 bg-dark-800 p-3 rounded-full border-2 border-primary-500">
                <Gamepad2 className="w-6 h-6 text-primary-400" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="gradient-text">Jim Anderson</span>
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <Code className="w-8 h-8 text-primary-400" />
                <h2 className="text-2xl md:text-3xl text-white font-semibold">
                  Software Engineer
                </h2>
                <Gamepad2 className="w-8 h-8 text-primary-400" />
              </div>
              <p className="text-xl text-dark-300 mb-8 max-w-lg mx-auto">
                Crafting code by day, conquering games by night. 
                Full-stack developer with a passion for clean architecture and epic solutions.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-6 mb-8"
            >
              <motion.a
                href="https://github.com/jimmyhanderson"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-dark-800 hover:bg-primary-600/20 rounded-full transition-colors duration-300 border border-primary-500/30"
              >
                <Github className="w-6 h-6 text-primary-400" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jimmy-a-1b1b62240/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-dark-800 hover:bg-primary-600/20 rounded-full transition-colors duration-300 border border-primary-500/30"
              >
                <Linkedin className="w-6 h-6 text-primary-400" />
              </motion.a>
              <motion.a
                href="mailto:jimhanderson98@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-dark-800 hover:bg-primary-600/20 rounded-full transition-colors duration-300 border border-primary-500/30"
              >
                <Mail className="w-6 h-6 text-primary-400" />
              </motion.a>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="https://drive.google.com/file/d/1uPF3CSpDRwZ7bN_W4utqT3VC_wPmQ8Ir/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
