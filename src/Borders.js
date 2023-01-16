import { CuboidCollider, RigidBody } from "@react-three/rapier";

export default function Borders() {
  return (
    <RigidBody type="fixed">
      <CuboidCollider args={[5, 15, 0.5]} position={[0.5, 10, -5.5]} />
      <CuboidCollider args={[5, 15, 0.5]} position={[0.5, 10, 5.5]} />
      <CuboidCollider
        args={[5, 15, 0.5]}
        rotation={[0, Math.PI * -0.5, 0]}
        position={[6, 10, 0]}
      />
      <CuboidCollider
        args={[5, 15, 0.5]}
        rotation={[0, Math.PI * -0.5, 0]}
        position={[-5, 10, 0]}
      />
      <CuboidCollider
        args={[10, 10, 0.5]}
        rotation={[Math.PI * -0.5, 0, 0]}
        position={[0, -5, 0]}
      />
      <CuboidCollider
        args={[2.5, 2.5, 0.5]}
        // rotation={[Math.PI * -0.5, 0, 0]}
        position={[0, 2.5, 0]}
      />
    </RigidBody>
  );
}
