import React from 'react'
import { Model } from './Model'
import { Float, OrbitControls } from '@react-three/drei'
import { Shattered } from './Shattered'

const Experience = () => {
	return (
		<>
			<OrbitControls enableZoom={false} />
			<ambientLight />
			{/* <Model scale={[2,2,2]} rotation={[0,Math.PI,0]} position={[0,-2,0]}/> */}
			<Float rotationIntensity={2}>
				<Shattered />
			</Float>
		</>
	)
}

export default Experience