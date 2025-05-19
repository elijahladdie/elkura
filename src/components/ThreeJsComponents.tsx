
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text, Html } from "@react-three/drei";
import { FC } from "react";
import { LucideIcon } from "lucide-react";

// Simple rotating box for About section
export const SimpleBox: FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="#c0b283" metalness={0.7} roughness={0.2} />
      </mesh>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
};

// Tech sphere component for Skills section
import {  useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { getTechIcon } from "./SkillsSection";


type TechSphereProps = {
  position: [number, number, number];
  name: string;
  color?: string;
  icon?: JSX.Element;
};

const BOUNDS = {
  x: [-8, 8],
  y: [-5, 5],
  z: [-2, 2], 
};


export const TechSphere: FC<TechSphereProps> = ({
  position,
  name,
  color = "#c0b283",
  icon,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  const velocity = useRef<THREE.Vector3>(
    new THREE.Vector3(
      (Math.random() - 0.5) * 0.1, // vx
      (Math.random() - 0.5) * 0.1, // vy
      (Math.random() - 0.5) * 0.05 // vz
    )
  );

  const [size] = useState(0.7); // sphere radius

  useFrame(() => {
    const ref = groupRef.current;
    if (!ref) return;

    // Update position
    ref.position.add(velocity.current);

    // Bouncing logic
    if (
      ref.position.x - size < BOUNDS.x[0] ||
      ref.position.x + size > BOUNDS.x[1]
    ) {
      velocity.current.x *= -1;
    }

    if (
      ref.position.y - size < BOUNDS.y[0] ||
      ref.position.y + size > BOUNDS.y[1]
    ) {
      velocity.current.y *= -1;
    }

    if (
      ref.position.z - size < BOUNDS.z[0] ||
      ref.position.z + size > BOUNDS.z[1]
    ) {
      velocity.current.z *= -1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {icon && (
        <Html center position={[0, 0, size + 0.2]}>
          <div className="text-white w-6 h-6">{icon}</div>
        </Html>
      )}

      <Text
        position={[0, size + 0.6, 0]}
        fontSize={0.3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
};


// Technical skills scene
export const TechScene: FC<{
  technologies: Array<{ name: string; icon: string }>;
}> = ({ technologies }) => {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      {/* Optional: Remove OrbitControls if you want a fixed camera */}
      <OrbitControls enableZoom={false} />

      {technologies.map((tech) => (
        <TechSphere
          key={tech.name}
          name={tech.name}
          icon={getTechIcon(tech.icon)}
          position={[
            (Math.random() - 0.5) * 14, // x between -7 and 7
            (Math.random() - 0.5) * 10, // y between -5 and 5
            (Math.random() - 0.5) * 4   // z between -2 and 2
          ]}
        />
      ))}
    </Canvas>
  );
};