import { useFrame, useThree } from "@react-three/fiber";
import { BallCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

export default function Mouse() {
  const { viewport } = useThree();
  const mouseSphere = useRef();
  useFrame((state) => {
    mouseSphere.current.setNextKinematicTranslation({
      x: (state.mouse.x * viewport.width) / 2,
      y: (state.mouse.y * viewport.height) / 2,
      z: 2,
    });
  });
  return (
    <>
      <RigidBody colliders={false} ref={mouseSphere} type="kinematicPosition">
        <BallCollider args={[2, 2, 0]} />
      </RigidBody>
    </>
  );
}
