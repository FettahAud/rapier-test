import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Borders from "./Borders";
import { Suspense } from "react";
import { Debug, Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";
import Balls from "./Balls";
import Mouse from "./Mouse";
import { useControls } from "leva";

export default function App() {
  const { debug } = useControls({
    debug: false,
  });
  return (
    <>
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
