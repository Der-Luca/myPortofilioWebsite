"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Wave() {
  const meshRef = useRef();

  const geom = new THREE.PlaneGeometry(12, 12, 80, 80);
  geom.rotateX(-Math.PI / 2);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pos = geom.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      const wave =
        Math.sin(x * 0.6 + t * 0.8) * 0.25 +
        Math.cos(z * 0.5 + t * 0.6) * 0.25;

      pos.setY(i, wave);
    }

    pos.needsUpdate = true;
    meshRef.current.rotation.y = 0.15;
  });

  return (
    <mesh ref={meshRef} geometry={geom}>
      <meshBasicMaterial
        color="white"
        wireframe
        transparent
        opacity={0.18}  // schön subtil
      />
    </mesh>
  );
}

export default function WaveMesh() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 2.8, 4.8], fov: 40 }}>
        
        <Wave />
      </Canvas>
    </div>
  );
}
