"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Wave() {
  const meshRef = useRef();

  const geom = new THREE.PlaneGeometry(60, 60, 150, 150);
  geom.rotateX(-Math.PI / 2);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pos = geom.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      const wave =
        Math.sin(x * 0.3 + t * 1.2) * 0.6 +
        Math.cos(z * 0.3 + t * 0.8) * 0.6;

      pos.setY(i, wave);
    }

    pos.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} geometry={geom} position={[0, -2, 0]}>
      <meshBasicMaterial
        wireframe
        color="#6ea8ff"
        opacity={0.25}
        transparent
      />
    </mesh>
  );
}

export default function WaveMesh() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 12, 22], fov: 45 }}
    >
      <ambientLight intensity={0.3} />
      <Wave />
    </Canvas>
  );
}
