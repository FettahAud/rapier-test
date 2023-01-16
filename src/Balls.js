import { InstancedRigidBodies, RigidBody } from "@react-three/rapier";
import { useMemo } from "react";
import { useRef } from "react";

export default function Balls() {
  const balls = useRef();
  const ballsCount = 300;

  const ballsTransforms = useMemo(() => {
    const pos = [];
    const scales = [];
    for (let i = 0; i < ballsCount; i++) {
      pos.push([
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
      ]);
      scales.push([0.75, 0.75, 0.75]);
    }
    return { pos, scales };
  }, []);

  return (
    <>
      <RigidBody position={[0, 2, 0]} colliders="ball">
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="tomato" />
        </mesh>
      </RigidBody>
      <InstancedRigidBodies
        colliders="ball"
        positions={ballsTransforms.pos}
        scales={ballsTransforms.scales}
      >
        <instancedMesh ref={balls} args={[null, null, ballsCount]}>
          <sphereGeometry />
          <meshStandardMaterial />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
