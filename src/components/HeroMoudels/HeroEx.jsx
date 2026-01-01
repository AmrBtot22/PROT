import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroLi from "./HeroLi";
import { Room } from "./Room";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <OrbitControls
        enablePan={false} 
        enableZoom={!isTablet} 
        maxDistance={23} 
        minDistance={13} 
        minPolarAngle={Math.PI / 5} 
        maxPolarAngle={Math.PI / 2} 
      />

      <Suspense fallback={null}>
        <HeroLi />
        <Particles count={150} />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -4, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;