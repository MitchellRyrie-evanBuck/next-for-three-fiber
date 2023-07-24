
import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'


function Box(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += delta))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const ScaleFiber = () => {
  return (
    <div data-aos="fade-right">
      <Canvas>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Box position={[-1.2, 0, 0]}  />
        <Box position={[1.2, 0, 0]}  />
      </Canvas>
    </div>
  )
}

export default ScaleFiber