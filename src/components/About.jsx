import { motion } from 'framer-motion'
import { Code, Gamepad2, Zap, Brain } from 'lucide-react'

const About = () => {

  const whatIDo = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern frameworks and clean architecture. From frontend to backend, I craft seamless user experiences."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing code for speed and efficiency. I love making applications lightning-fast and resource-efficient."
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Tackling complex technical challenges with creative solutions. Every bug is just a puzzle waiting to be solved."
    },
    {
      icon: Gamepad2,
      title: "Gaming & Tech",
      description: "When I'm not coding, I'm gaming. This passion for gaming drives my interest in real-time systems and interactive experiences."
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Computer Science student at Arizona State University with a passion for building 
            innovative software solutions and conquering virtual worlds.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-lg p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-600 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-400">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Arizona State University
                </h4>
                <p className="text-dark-300 mb-1">Bachelor of Science in Computer Science</p>
                <p className="text-primary-400 text-sm">Expected Graduation: May 2024</p>
              </div>
              <div className="pt-4 border-t border-dark-700">
                <h5 className="text-lg font-semibold text-white mb-2">Relevant Coursework</h5>
                <div className="grid grid-cols-2 gap-2 text-sm text-dark-300">
                  <span>• Data Structures & Algorithms</span>
                  <span>• Software Engineering</span>
                  <span>• Database Systems</span>
                  <span>• Computer Networks</span>
                  <span>• Operating Systems</span>
                  <span>• Machine Learning</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What I Do */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-6">
              What I <span className="gradient-text">Do</span>
            </h3>
            {whatIDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-600/20 rounded-lg flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-dark-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-primary-400">
              Fun <span className="gradient-text">Facts</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Lines of Code", value: "50K+", icon: "💻" },
                { label: "Games Completed", value: "100+", icon: "🎮" },
                { 
                  label: "TFT Profile", 
                  value: "View Stats", 
                  icon: "🏆",
                  link: "https://lolchess.gg/profile/na/Possibly%20Broth-Soup/set15"
                },
                { label: "Bugs Fixed", value: "1000+", icon: "🐛" }
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {fact.link ? (
                    <motion.a
                      href={fact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block"
                    >
                      <div className="text-3xl mb-2">{fact.icon}</div>
                      <div className="text-2xl font-bold text-primary-400 mb-1">
                        {fact.value}
                      </div>
                      <div className="text-sm text-dark-300">{fact.label}</div>
                    </motion.a>
                  ) : (
                    <>
                      <div className="text-3xl mb-2">{fact.icon}</div>
                      <div className="text-2xl font-bold text-primary-400 mb-1">
                        {fact.value}
                      </div>
                      <div className="text-sm text-dark-300">{fact.label}</div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
