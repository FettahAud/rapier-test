import Borders from "./Borders";
import { Suspense } from "react";
import { Debug, Physics } from "@react-three/rapier";
import { OrbitControls } from "@react-three/drei";
import Balls from "./Balls";
import Mouse from "./Mouse";
import { useControls } from "leva";

export default function App() {
  const { debug, controls } = useControls({
    debug: false,
    controls: false,
  });
  return (
    <>
      {controls ? <OrbitControls /> : null}
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <Suspense>
        <Physics>
          {debug ? <Debug /> : ""}
          <Balls />
          <Mouse />
          <Borders />
        </Physics>
      </Suspense>
    </>
  );
}
