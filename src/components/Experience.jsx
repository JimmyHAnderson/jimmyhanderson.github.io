import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Rockford Fosgate",
      location: "Tempe, AZ",
      period: "July 2025 – Present",
      description: "Developing an end-to-end automated test platform using C++ to replace legacy manual QA workflows for RFConnect mobile/embedded products.",
      achievements: [
        "Refactoring entire app business logic services from Node.js to C++ Turbo Modules and Expo for performance and maintainability",
        "Building modular black-box and integration test frameworks to validate firmware application interfaces",
        "Working cross-functionally with hardware, backend, and mobile teams to ensure seamless automation coverage and CI/CD readiness"
      ],
      technologies: ["C++", "Node.js", "Expo", "REST APIs", "CI/CD"]
    },
    {
      title: "Software Engineer Intern",
      company: "Madison Square Garden",
      location: "New York, NY",
      period: "May 2024 – August 2024",
      description: "Architected multi-user VR and desktop applications using C# and Unity 3D, enabling simultaneous media playback for 50+ concurrent users at live events.",
      achievements: [
        "Improved bug triage process by implementing structured JIRA workflows, processing 300+ tickets and accelerating resolution cycles by 15%",
        "Standardized QA checklists and escalation procedures, cutting average bug resolution time from 5 days to 3 days",
        "Improved software quality scores by 25% through enhanced developer-QA communication"
      ],
      technologies: ["C#", "Unity 3D", "JIRA", "VR Development", "Agile"]
    },
    {
      title: "Quality Engineer Intern",
      company: "Riot Games",
      location: "Santa Monica, CA",
      period: "May 2023 – August 2023",
      description: "Authored 2000+ unit tests with 99.9% coverage across critical modules using in-house tools, decreasing post-merge regressions by 80%.",
      achievements: [
        "Directed gameplay and VFX issue triage as Primary Emergent, collaborating with cross-functional teams to resolve 15+ critical pre-production bugs",
        "Collaborated and engineered a new League of Legends entity movement and attack systems scripting behavior",
        "Replaced legacy scripting architecture with modern event-driven patterns, reducing bugs by 90% and improving code maintainability by 75%"
      ],
      technologies: ["Unit Testing", "Game Development", "Scripting", "Bug Triage", "Automation"]
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            My professional journey in software engineering and quality assurance
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-8 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-400 mb-2">
                    {experience.title}
                  </h3>
                  <h4 className="text-xl font-semibold mb-2">{experience.company}</h4>
                  <div className="flex flex-wrap items-center space-x-4 text-dark-300 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-dark-300 mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="space-y-4">
                <h5 className="font-semibold text-white">Key Achievements:</h5>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start space-x-3">
                      <span className="text-primary-400 mt-1">•</span>
                      <span className="text-dark-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h5 className="font-semibold text-white mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
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
      </div>
    </section>
  )
}

export default Experience
