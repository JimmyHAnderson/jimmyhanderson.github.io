import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
import { useRef } from 'react'

const BackgroundAnimation = () => {
  const sphereRef = useRef()

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <motion.mesh
          ref={sphereRef}
          animate={{
            rotateX: [0, Math.PI * 2],
            rotateY: [0, Math.PI * 2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <meshStandardMaterial
              color="#3b82f6"
              wireframe
              transparent
              opacity={0.1}
            />
          </Sphere>
        </motion.mesh>

        <motion.mesh
          animate={{
            rotateX: [0, -Math.PI * 2],
            rotateY: [0, -Math.PI * 2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sphere args={[1.5, 50, 100]} scale={1.8}>
            <meshStandardMaterial
              color="#60a5fa"
              wireframe
              transparent
              opacity={0.05}
            />
          </Sphere>
        </motion.mesh>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  )
}

export default BackgroundAnimation
