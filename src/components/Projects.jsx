import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Gamepad2, Zap, Database } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "ShieldAPI",
      description: "A production-ready REST API built with Node.js, featuring JWT authentication, Redis-based rate limiting, MongoDB integration, and comprehensive API documentation.",
      features: [
        "JWT Authentication & Authorization",
        "Redis-based Rate Limiting",
        "MongoDB Integration",
        "Swagger API Documentation",
        "Comprehensive Testing Suite"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "Jest", "Swagger"],
      github: "https://github.com/JimmyHAnderson/ShieldAPI",
      live: null,
      icon: Database,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Race to Challenger",
      description: "A comprehensive League of Legends statistics tracker and analysis tool. Track your ranked progress, analyze performance metrics, and optimize your gameplay.",
      features: [
        "Real-time Match Data Integration",
        "Advanced Performance Analytics",
        "Personalized Improvement Tips",
        "Rank Progress Tracking",
        "Interactive Dashboard"
      ],
      technologies: ["React", "Python", "Riot API", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/JimmyHAnderson/RacetoChall/tree/main/RaceToChall",
      live: null,
      icon: Gamepad2,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "TaidX",
      description: "A comprehensive Java-based project management system with user authentication, task management, and team collaboration tools. Built with modern software engineering practices.",
      features: [
        "User Authentication & Authorization",
        "Task Management & Assignment",
        "Team Collaboration Features",
        "Project Progress Tracking",
        "Quality Assurance Integration"
      ],
      technologies: ["Java", "Gradle", "CSS", "Software Engineering", "UML Design"],
      github: "https://github.com/kescob0825/TaidX",
      live: null,
      icon: Code,
      color: "from-green-500 to-emerald-500"
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
            From APIs to gaming tools, here are some of my favorite projects that showcase 
            my passion for building innovative software solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-primary-400 text-sm font-medium">
                          Featured Project
                        </span>
                        <span className="text-dark-400 text-sm">
                          {index + 1} of {projects.length}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-dark-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-sm text-dark-300"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-dark-800 hover:bg-primary-600/20 rounded-lg transition-all duration-300 border border-primary-500/30"
                      >
                        <Github className="w-5 h-5 text-primary-400" />
                        <span className="text-white font-medium">Code</span>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="font-medium">Live Demo</span>
                      </motion.a>
                    )}
                    {!project.github && !project.live && (
                      <div className="flex items-center gap-2 px-6 py-3 bg-dark-800/50 rounded-lg border border-primary-500/20">
                        <span className="text-dark-400 font-medium">Coming Soon</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Visual */}
                <div className="relative">
                  <div className={`w-full h-64 rounded-lg bg-gradient-to-br ${project.color} opacity-20 flex items-center justify-center`}>
                    <project.icon className="w-24 h-24 text-white opacity-50" />
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4 text-primary-400/30 text-2xl"
                  >
                    &lt;/&gt;
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute bottom-4 left-4 text-primary-400/30 text-xl"
                  >
                    { }
                  </motion.div>
                  
                  {/* Status indicator */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400 font-medium">Live</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary-400">
              Want to see more?
            </h3>
            <p className="text-dark-300 mb-6">
              Check out my GitHub for more projects, experiments, and contributions to open source.
            </p>
            <motion.a
              href="https://github.com/jimmyhanderson"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
