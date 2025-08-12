import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jimmyhanderson98@gmail.com",
      href: "mailto:jimmyhanderson98@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "714-290-4362",
      href: "tel:714-290-4362"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tempe, AZ",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/jimmyhanderson",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/jimmyhanderson",
      color: "hover:text-blue-400"
    }
  ]

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
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary-400">
                Let's Connect
              </h3>
              <p className="text-dark-300 leading-relaxed mb-8">
                I'm currently looking for SWE/SDET new graduate positions and internships. 
                Whether you have a question, want to collaborate on a project, or just want to say hi, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-3 bg-primary-600 rounded-lg">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-dark-300 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-primary-400 transition-colors duration-200 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-3 glass-effect rounded-lg transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-400">
              Quick Links
            </h3>
            <div className="space-y-4">
              <motion.a
                href="/Jim_s_Resumenewgrad.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-primary-600/20 rounded-lg hover:bg-primary-600/30 transition-colors duration-200"
              >
                <div>
                  <h4 className="font-semibold text-white">Download Resume</h4>
                  <p className="text-dark-300 text-sm">View my detailed resume</p>
                </div>
                <ExternalLink size={20} className="text-primary-400" />
              </motion.a>

              <motion.a
                href="https://github.com/jimmyhanderson"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-primary-600/20 rounded-lg hover:bg-primary-600/30 transition-colors duration-200"
              >
                <div>
                  <h4 className="font-semibold text-white">GitHub Profile</h4>
                  <p className="text-dark-300 text-sm">Check out my projects</p>
                </div>
                <ExternalLink size={20} className="text-primary-400" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/jimmyhanderson"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-primary-600/20 rounded-lg hover:bg-primary-600/30 transition-colors duration-200"
              >
                <div>
                  <h4 className="font-semibold text-white">LinkedIn</h4>
                  <p className="text-dark-300 text-sm">Connect professionally</p>
                </div>
                <ExternalLink size={20} className="text-primary-400" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-dark-300">
            © 2024 Jim Anderson. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
