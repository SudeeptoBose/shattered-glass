import React, { useRef } from 'react'
import * as THREE from 'three'
import { Float, useGLTF, useVideoTexture } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/shatter.glb')

  const videoTexture = useVideoTexture('/vid.mp4')
  videoTexture.flipY = false

//   const newMaterial = <meshBasicMaterial map={videoTexture}/>

  const newMaterial = new THREE.MeshBasicMaterial({
    map:videoTexture
})
  return (
    <group {...props} dispose={null}>
        <Float rotationIntensity={0.5}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane005.geometry}
                material={newMaterial}
                position={[0, 0.011, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 1, 2]}
            />
        </Float>
        <Float rotationIntensity={0.5}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane001.geometry}
                material={newMaterial}
                position={[0.255, 0.011, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 1, 2]}
            />
        </Float>
        <Float rotationIntensity={0.5}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane002.geometry}
                material={newMaterial}
                position={[0.198, 0.103, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 1, 2]}
            />
        </Float>

        <Float rotationIntensity={0.5}>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane003.geometry}
                material={newMaterial}
                position={[0, 0.258, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 1, 2]}
            />

        </Float>
        <Float rotationIntensity={0.5}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane004.geometry}
                material={newMaterial}
                position={[0.085, 0.138, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 1, 2]}
            />
        </Float>
    </group>
  )
}

useGLTF.preload('/shatter.glb')