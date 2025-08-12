import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

const About = () => {
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
            I'm a passionate Computer Science student at Arizona State University with a strong foundation 
            in software engineering and a proven track record of delivering scalable solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            
            <div className="glass-effect rounded-lg p-6 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary-600 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">Arizona State University</h4>
                  <p className="text-dark-300">Bachelor of Science in Computer Science</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-dark-400">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>Tempe, AZ</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>Expected Spring 2026</span>
                    </div>
                  </div>
                  <p className="text-primary-400 font-medium mt-2">GPA: 3.87</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Relevant Coursework</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Data Structures & Algorithms',
                  'Operating Systems',
                  'Object-Oriented Programming',
                  'Computer Systems',
                  'Software Engineering'
                ].map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-effect rounded-lg p-3 text-center"
                  >
                    <span className="text-sm font-medium">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">What I Do</h3>
            
            <div className="space-y-6">
              <div className="glass-effect rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-primary-400">Full-Stack Development</h4>
                <p className="text-dark-300">
                  I build scalable web applications using modern technologies like React, Node.js, 
                  and Python. From frontend interfaces to backend APIs, I enjoy creating complete solutions.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-primary-400">Automated Testing</h4>
                <p className="text-dark-300">
                  I specialize in creating comprehensive test suites and automation frameworks. 
                  My experience includes unit testing, integration testing, and CI/CD pipeline development.
                </p>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-primary-400">Problem Solving</h4>
                <p className="text-dark-300">
                  I approach complex technical challenges with a systematic mindset, breaking down 
                  problems into manageable components and implementing efficient solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
