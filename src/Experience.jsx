import React from 'react'
import { Float, OrbitControls } from '@react-three/drei'
import { Shattered } from './Shattered'

const Experience = () => {
	return (
		<>
			<Float rotationIntensity={2}>
				<Shattered />
			</Float>
		</>
	)
}

export default Experience