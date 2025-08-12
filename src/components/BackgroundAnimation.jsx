import { motion } from 'framer-motion'

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Video/GIF Background */}
      <div className="absolute inset-0">
        {/* You can replace this with your own video/GIF */}
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          {/* Animated gradient overlay */}
          <motion.div
            animate={{ 
              background: [
                'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(99, 102, 241, 0.1))',
                'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(99, 102, 241, 0.1), rgba(59, 130, 246, 0.1))'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0"
          />
        </div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating tech elements */}
      <div className="absolute inset-0">
        {/* Binary rain effect */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{ 
              y: window.innerHeight + 100,
              x: Math.random() * window.innerWidth 
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3
            }}
            className="absolute text-primary-400/40 text-sm font-mono"
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}

        {/* Floating code symbols */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3
            }}
            className="absolute text-primary-400/30 text-xl"
          >
            {['</>', '{ }', '()', '[]', '&&', '||', '=>', '++', '--', '==', '!='][Math.floor(Math.random() * 11)]}
          </motion.div>
        ))}

        {/* Gaming controller icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`game-${i}`}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
            className="absolute text-primary-400/20 text-2xl"
          >
            🎮
          </motion.div>
        ))}

        {/* Animated circles */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-40 h-40 border border-primary-500/20 rounded-full"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-primary-400/20 rounded-full"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 right-1/3 w-20 h-20 border border-primary-600/20 rounded-full"
        />

        {/* Glowing orbs */}
        <motion.div
          animate={{ 
            x: [0, 120, 0],
            y: [0, -60, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-20 w-4 h-4 bg-primary-500/40 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 80, 0]
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-32 right-32 w-3 h-3 bg-primary-400/50 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            x: [0, 80, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary-600/60 rounded-full blur-sm"
        />

        {/* Particle effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3
            }}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
          />
        ))}
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/30 to-dark-900/60" />
    </div>
  )
}

export default BackgroundAnimation

