import { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import Avatar from './Avatar'

function CameraMotion() {
  const { camera } = useThree()
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    const update = () => setScroll(Math.min(window.scrollY / Math.max(window.innerHeight, 1), 2.5))
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useFrame((_, delta) => {
    const phase = THREE.MathUtils.smoothstep(scroll, .35, 1.5)
    const targetX = phase * .18
    const targetY = .55 + phase * .04
    const targetZ = 2.16 + phase * .32
    const k = 1 - Math.exp(-3 * Math.min(delta, .05))
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, k)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, k)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, k)
    camera.lookAt(0, .53, 0)
  })
  return null
}

export default function Scene() {
  return <Canvas
    className="portrait-canvas"
    camera={{ position: [0, .55, 2.16], fov: 31, near: .01, far: 30 }}
    dpr={[1, 2]}
    gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
  >
    <ambientLight intensity={1.5} color="#d9e8ff" />
    <directionalLight position={[-2, 4, 4]} intensity={2.2} color="#fff2dc" />
    <directionalLight position={[3, 2, -2]} intensity={2.4} color="#9bbbf5" />
    <Suspense fallback={null}>
      <Avatar />
    </Suspense>
    <CameraMotion />
  </Canvas>
}
