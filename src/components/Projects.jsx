import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Database, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "ShieldAPI – Scalable RESTful API with Auth & Rate Limiting",
      description: "A comprehensive REST API with JWT authentication, refresh tokens, and session management for secure access. Integrated Redis-based rate limiting and IP logging middleware to prevent abuse.",
      features: [
        "JWT authentication and refresh tokens",
        "Redis-based rate limiting (100 requests/minute)",
        "Swagger UI documentation for easy onboarding",
        "Session management and IP logging"
      ],
      technologies: ["Node.js", "Redis", "MongoDB", "Swagger", "JWT"],
      github: "https://github.com/jimmyhanderson/shieldapi",
      live: null,
      icon: Database
    },
    {
      title: "Race to Challenger – Statistical Tracker Tool",
      description: "A web application that allows users to link their Riot Games accounts to a leaderboard that sorts by highest rank. Features real-time stat updates after each match.",
      features: [
        "Riot Games API integration",
        "Real-time leaderboard updates",
        "15% API response time optimization",
        "Responsive React frontend"
      ],
      technologies: ["JavaScript", "React", "Python", "Flask", "RESTful API"],
      github: "https://github.com/jimmyhanderson/race-to-challenger",
      live: null,
      icon: Globe
    },
    {
      title: "Taidx – Revamped Product Management Tool",
      description: "Refactored a 7-year-old legacy application (Memoranda) to utilize the Taiga API, transforming it into a modernized project management tool with simplified user interface.",
      features: [
        "Taiga API integration",
        "Agile framework implementation",
        "Simplified user interface",
        "Team collaboration features"
      ],
      technologies: ["Java", "Gradle", "Swing", "Taiga API", "Agile"],
      github: "https://github.com/jimmyhanderson/taidx",
      live: null,
      icon: Code
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A collection of my recent work showcasing full-stack development and problem-solving skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-8 card-hover"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary-600 rounded-lg">
                  <project.icon size={24} />
                </div>
                <div className="flex space-x-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-2 glass-effect rounded-lg hover:bg-primary-500/20 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-2 glass-effect rounded-lg hover:bg-primary-500/20 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-primary-400">
                {project.title}
              </h3>
              
              <p className="text-dark-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-white">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <span className="text-primary-400 mt-1">•</span>
                      <span className="text-dark-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="font-semibold text-white mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/jimmyhanderson"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-3 glass-effect rounded-lg font-medium hover:bg-white/20 transition-colors duration-200"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
