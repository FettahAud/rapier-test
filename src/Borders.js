import { CuboidCollider, RigidBody } from "@react-three/rapier";

export default function Borders() {
  return (
    <RigidBody type="fixed">
      <CuboidCollider args={[5, 15, 0]} position={[0, 10, -5]} />
      <CuboidCollider args={[5, 15, 0]} position={[0, 10, 5]} />
      <CuboidCollider
        args={[5, 15, 0]}
        rotation={[0, Math.PI * -0.5, 0]}
        position={[5, 10, 0]}
      />
      <CuboidCollider
        args={[5, 15, 0]}
        rotation={[0, Math.PI * -0.5, 0]}
        position={[-5, 10, 0]}
      />
      <CuboidCollider
        args={[5, 5, 0]}
        rotation={[Math.PI * -0.5, 0, 0]}
        position={[0, -5, 0]}
      />
      <CuboidCollider
        args={[2.5, 2.5, 0]}
        // rotation={[Math.PI * -0.5, 0, 0]}
        position={[0, 2.5, 0]}
      />
    </RigidBody>
  );
}
