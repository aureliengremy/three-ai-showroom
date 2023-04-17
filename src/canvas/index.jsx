import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import ElementTShirt from "./ElementTShirt";
import ElementGuitarPick from './ElementGuitarPick'
import BackDrop from "./BackDrop";
import CameraRig from "./CameraRig";
import { lazy, Suspense } from 'react'

const CanvasModel = () => {

  // const ModelComponent = lazy(() => import('./ElementThreeDim'))
  
  return (
    // <Suspense fallback={"loading"}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov:25  }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
          <CameraRig>
          <BackDrop />
            <Center>
              {/* <ModelComponent /> */}
              <ElementTShirt />
            </Center>
        </CameraRig>
      </Canvas>
    // </Suspense>
  )
}

export default CanvasModel