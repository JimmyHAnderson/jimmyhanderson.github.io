import { motion } from 'framer-motion'
import { Code, Database, Cloud, TestTube, Tools } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C++", level: 75 },
        { name: "Go", level: 70 },
        { name: "C#", level: 70 }
      ]
    },
    {
      title: "Web & Frameworks",
      icon: Code,
      skills: [
        { name: "React", level: 85 },
        { name: "HTML/CSS", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "React Native", level: 70 },
        { name: "Flask", level: 70 },
        { name: ".NET", level: 65 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Redis", level: 65 }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: [
        { name: "AWS (S3, EC2, Lambda, RDS)", level: 75 },
        { name: "Azure", level: 65 },
        { name: "Google Cloud Platform", level: 60 }
      ]
    },
    {
      title: "Testing & Tools",
      icon: TestTube,
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git", level: 85 },
        { name: "Jenkins", level: 70 },
        { name: "Gradle", level: 75 },
        { name: "GitHub Actions", level: 70 },
        { name: "JUnit", level: 85 },
        { name: "PyTest", level: 80 },
        { name: "Selenium", level: 75 },
        { name: "Postman", level: 80 },
        { name: "Swagger", level: 70 }
      ]
    },
    {
      title: "Other Tools",
      icon: Tools,
      skills: [
        { name: "Perforce", level: 70 },
        { name: "Jira", level: 80 },
        { name: "Confluence", level: 75 },
        { name: "TestRail", level: 70 },
        { name: "Linux", level: 75 },
        { name: "Bash", level: 70 },
        { name: "Agile/Scrum", level: 80 },
        { name: "REST APIs", level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            My technical expertise across various programming languages, frameworks, and tools
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary-600 rounded-lg">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary-400">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
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
          <div className="glass-effect rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary-400">
              AI/ML & Additional Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "NumPy", "Pandas", "TensorFlow", "Machine Learning",
                "Data Analysis", "API Development", "System Design", "Performance Optimization"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-lg text-center font-medium"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
