/* eslint-disable react-hooks/purity */
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 300 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const color = new THREE.Color(
        `hsl(${Math.random() * 360}, 100%, 85%)`
      );

      temp.push({
        position: [
          (Math.random() - 0.5) * 15,
          Math.random() * 10 + 5,
          (Math.random() - 0.5) * 15,
        ],
        speed: 0.002 + Math.random() * 0.003,
        drift: (Math.random() - 0.5) * 0.002,
        color,
      });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      arr[i * 3] = p.position[0];
      arr[i * 3 + 1] = p.position[1];
      arr[i * 3 + 2] = p.position[2];
    });
    return arr;
  }, [particles, count]);

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      arr[i * 3] = p.color.r;
      arr[i * 3 + 1] = p.color.g;
      arr[i * 3 + 2] = p.color.b;
    });
    return arr;
  }, [particles, count]);

  useFrame(() => {
    const positionAttr = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      let x = positionAttr[i * 3];
      let y = positionAttr[i * 3 + 1];
      let z = positionAttr[i * 3 + 2];

      y -= particles[i].speed;
      x += particles[i].drift;

      if (y < -2) {
        y = Math.random() * 10 + 5;
        x = (Math.random() - 0.5) * 15;
        z = (Math.random() - 0.5) * 15;
      }

      positionAttr[i * 3] = x;
      positionAttr[i * 3 + 1] = y;
      positionAttr[i * 3 + 2] = z;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        vertexColors
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
