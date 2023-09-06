import { useLoader, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh, Euler } from "three"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

interface ModelProps {
  rotation: number[],
  url: string
  spin?: boolean
}

const Model: React.FC<ModelProps> = ({
  rotation,
  url,
  spin,
}) => {
  const gltf = useLoader(GLTFLoader, url)
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if(meshRef.current.rotation.y && spin) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <>
      <primitive ref={meshRef} rotation={rotation} object={gltf.scene} />
    </>
  )
}

export default Model