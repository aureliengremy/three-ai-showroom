import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import ElementThreeDim from "./ElementThreeDim";
// import BackDrop from "./BackDrop";
import CameraRig from "./CameraRig";
import { lazy, Suspense } from 'react'

const CanvasModel = () => {

  // const ModelComponent = lazy(() => import('./ElementThreeDim'))
  
  return (
    // <Suspense fallback={"loading"}>
      <Canvas>
        {/* <ambiantLight intensity={0.5} /> */}
        <Environment preset="city" />
          <CameraRig>
          {/* <BackDrop /> */}
            <Center>
              {/* <ModelComponent /> */}
              <ElementThreeDim />
            </Center>
        </CameraRig>
      </Canvas>
    // </Suspense>
  )
}

export default CanvasModel