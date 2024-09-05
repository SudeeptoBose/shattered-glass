import React from 'react'
import { Model } from './Model'

const Experience = () => {
  return (
    <>
        <ambientLight/>
        <Model scale={[2,2,2]} rotation={[0,Math.PI,0]} position={[0,-2,0]}/>
    </>
  )
}

export default Experience