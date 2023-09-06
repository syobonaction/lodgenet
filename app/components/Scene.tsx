import { PerspectiveCamera } from 'three'
import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Suspense } from 'react'

const Scene = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const cameraSettings = {
    fov: 45,
    aspect: 1920 / 1080,
    near: 1.0,
    far: 1000.0,
  }

  const camera = new PerspectiveCamera(cameraSettings.fov, cameraSettings.aspect, cameraSettings.near, cameraSettings.far)

  camera.position.set(0, 0, 3);

  return (
    <Canvas
      shadows
      camera={camera}
      gl={{ antialias: false }}
      dpr={2}
      style={{ imageRendering: 'pixelated' }}
    >
      <Suspense>
        <ambientLight intensity={5} />
        {children}
      </Suspense>
    </Canvas>
  )
}

export default Scene