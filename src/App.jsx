import { Box, Loader, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"

function App() {

  return (
    <>
      <Canvas>
        <OrbitControls />
        <color args={['#000000']} attach={'background'} />
        {/* <Box/> */}
        <Experience />
      </Canvas>
      <Loader />
    </>
  )
}

export default App
