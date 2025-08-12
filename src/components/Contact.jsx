import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            I'm currently looking for SWE/SDET new graduate positions and internships. 
            Whether you have a question, want to collaborate on a project, or just want to say hi, I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 glass-effect rounded-lg p-6"
              >
                <div className="p-3 bg-primary-600 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <a 
                    href="mailto:jimhanderson98@gmail.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    jimhanderson98@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 glass-effect rounded-lg p-6"
              >
                <div className="p-3 bg-primary-600 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                  <a 
                    href="tel:+17142904362"
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    (714) 290-4362
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 glass-effect rounded-lg p-6"
              >
                <div className="p-3 bg-primary-600 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                  <p className="text-primary-400">Tempe, Arizona</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-6">Connect With Me</h3>
            
            <div className="space-y-4">
              <motion.a
                href="https://github.com/jimmyhanderson"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 glass-effect rounded-lg p-6 hover:bg-primary-600/10 transition-all duration-300"
              >
                <div className="p-3 bg-primary-600 rounded-lg">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">GitHub</h4>
                  <p className="text-primary-400">@jimmyhanderson</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/jimmy-a-1b1b62240/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 glass-effect rounded-lg p-6 hover:bg-primary-600/10 transition-all duration-300"
              >
                <div className="p-3 bg-primary-600 rounded-lg">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">LinkedIn</h4>
                  <p className="text-primary-400">Jim Anderson</p>
                </div>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-8 mt-8"
            >
              <h4 className="text-xl font-bold text-primary-400 mb-4">Let's Work Together!</h4>
              <p className="text-dark-300 mb-6">
                I'm passionate about creating innovative solutions and always excited to work on new projects. 
                Whether it's a full-time position, internship, or collaboration, I'd love to connect!
              </p>
              <motion.a
                href="mailto:jimhanderson98@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Send Message
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
