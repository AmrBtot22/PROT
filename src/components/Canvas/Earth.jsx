/* eslint-disable react-hooks/purity */
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Points, PointMaterial } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return <primitive object={earth.scene} scale={2.9} position-y={0} rotation-y={0} />;
};

const Particles = () => {
  const particlesRef = useRef();
  const count = 500;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={particlesRef} positions={positions}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors={false}
        color={new THREE.Color("cyan")}
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      style={{ background: "#000" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Earth />
        <Particles />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
