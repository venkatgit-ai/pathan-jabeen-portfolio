import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// 3D Miniature Stylized Female Biotech & Pharmaceutical Scientist Avatar
function ScientistCharacter({ mousePos }: { mousePos: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Natural idle breathing & gentle floating sway
    if (groupRef.current) {
      groupRef.current.position.y = -1.2 + Math.sin(t * 1.8) * 0.05;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePos.x * 0.35,
        0.05
      );
    }

    // Head smoothly tracks cursor position
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        mousePos.x * 0.5,
        0.1
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        -mousePos.y * 0.3,
        0.1
      );
    }

    // Natural arm movement (holding biotech tablet / scientific gesturing)
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = -0.35 + Math.sin(t * 2.2) * 0.08;
      leftArmRef.current.rotation.z = 0.25 + Math.cos(t * 1.4) * 0.04;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = -0.45 + Math.sin(t * 2.6 + 1) * 0.1;
      rightArmRef.current.rotation.z = -0.25 - Math.cos(t * 1.4) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]} scale={[1.1, 1.1, 1.1]}>
      
      {/* --- LAB COAT / TECH BLAZER --- */}
      <mesh position={[0, 1.15, 0]}>
        <cylinderGeometry args={[0.34, 0.38, 0.8, 16]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Lab Coat Inner Top */}
      <mesh position={[0, 1.25, 0.18]}>
        <boxGeometry args={[0.16, 0.4, 0.04]} />
        <meshStandardMaterial color="#0f172a" roughness={0.5} />
      </mesh>
      {/* Neon Emerald Trim on Lab Coat (Representing Green Chemistry & Pharma) */}
      <mesh position={[-0.14, 1.15, 0.19]}>
        <boxGeometry args={[0.02, 0.75, 0.02]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={1.2} />
      </mesh>
      <mesh position={[0.14, 1.15, 0.19]}>
        <boxGeometry args={[0.02, 0.75, 0.02]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.2} />
      </mesh>
      {/* Pharma Research Badge */}
      <mesh position={[0.12, 1.35, 0.2]}>
        <boxGeometry args={[0.06, 0.08, 0.02]} />
        <meshStandardMaterial color="#9d4edd" emissive="#9d4edd" emissiveIntensity={1.2} />
      </mesh>

      {/* --- LEGS & TROUSERS --- */}
      {/* Left Leg */}
      <mesh position={[-0.14, 0.42, 0]}>
        <cylinderGeometry args={[0.1, 0.08, 0.75, 16]} />
        <meshStandardMaterial color="#1e293b" roughness={0.6} />
      </mesh>
      {/* Left Shoe */}
      <mesh position={[-0.14, 0.05, 0.05]}>
        <boxGeometry args={[0.11, 0.09, 0.22]} />
        <meshStandardMaterial color="#0f172a" roughness={0.3} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.14, 0.42, 0]}>
        <cylinderGeometry args={[0.1, 0.08, 0.75, 16]} />
        <meshStandardMaterial color="#1e293b" roughness={0.6} />
      </mesh>
      {/* Right Shoe */}
      <mesh position={[0.14, 0.05, 0.05]}>
        <boxGeometry args={[0.11, 0.09, 0.22]} />
        <meshStandardMaterial color="#0f172a" roughness={0.3} />
      </mesh>

      {/* --- ARMS & LAB SLEEVES --- */}
      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.38, 1.45, 0]}>
        <mesh position={[0, -0.28, 0]}>
          <cylinderGeometry args={[0.075, 0.065, 0.55, 16]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.3} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.58, 0.05]}>
          <sphereGeometry args={[0.065, 12, 12]} />
          <meshStandardMaterial color="#fcd34d" roughness={0.3} />
        </mesh>
      </group>

      {/* Right Arm holding Holographic Lab Glass / Pipette */}
      <group ref={rightArmRef} position={[0.38, 1.45, 0]}>
        <mesh position={[0, -0.28, 0]}>
          <cylinderGeometry args={[0.075, 0.065, 0.55, 16]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.3} />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.58, 0.05]}>
          <sphereGeometry args={[0.065, 12, 12]} />
          <meshStandardMaterial color="#fcd34d" roughness={0.3} />
        </mesh>
        {/* Holographic Glowing Micro-Flask */}
        <mesh position={[0.02, -0.68, 0.12]}>
          <coneGeometry args={[0.06, 0.12, 16]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={2}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>

      {/* --- HEAD & HAIR (STYLIZED FEMALE SCIENTIST) --- */}
      <group ref={headRef} position={[0, 1.72, 0]}>
        {/* Neck */}
        <mesh position={[0, -0.12, 0]}>
          <cylinderGeometry args={[0.07, 0.08, 0.15, 16]} />
          <meshStandardMaterial color="#fcd34d" roughness={0.3} />
        </mesh>

        {/* Head Base */}
        <mesh position={[0, 0.1, 0]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial color="#fcd34d" roughness={0.3} />
        </mesh>

        {/* Hair - Main Sleek Silhouette */}
        <mesh position={[0, 0.18, -0.06]}>
          <sphereGeometry args={[0.28, 24, 24]} />
          <meshStandardMaterial color="#1c1917" roughness={0.8} />
        </mesh>
        {/* Hair - Stylish Ponytail */}
        <mesh position={[0, 0.22, -0.32]} rotation={[0.4, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.12, 0.35, 16]} />
          <meshStandardMaterial color="#1c1917" roughness={0.8} />
        </mesh>
        {/* Hair Ribbon / Accent Band */}
        <mesh position={[0, 0.3, -0.22]} rotation={[0.4, 0, 0]}>
          <torusGeometry args={[0.09, 0.02, 16, 32]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={1} />
        </mesh>

        {/* Smart Safety Glasses / Cyber Visor */}
        <mesh position={[0, 0.11, 0.19]}>
          <boxGeometry args={[0.32, 0.08, 0.1]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={1.8}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.85}
          />
        </mesh>
        {/* Visor HUD indicator */}
        <mesh position={[0.08, 0.11, 0.24]}>
          <boxGeometry args={[0.05, 0.02, 0.01]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={2.5} />
        </mesh>
      </group>

      {/* --- MOLECULAR PEDESTAL --- */}
      <mesh position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.7, 0.85, 0.08, 32]} />
        <meshStandardMaterial color="#0f172a" roughness={0.2} metalness={0.9} />
      </mesh>
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.62, 0.68, 32]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.42, 0.46, 32]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.5} />
      </mesh>
    </group>
  );
}

// Floating Molecular Geometries & Active Formulation Nodes
function MolecularOrbitals() {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef1.current) {
      meshRef1.current.rotation.x = t * 0.4;
      meshRef1.current.rotation.y = t * 0.3;
      meshRef1.current.position.y = Math.sin(t * 1.2) * 0.2 + 1.2;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = -t * 0.5;
      meshRef2.current.rotation.z = t * 0.35;
      meshRef2.current.position.y = Math.cos(t * 1.5) * 0.2 - 0.4;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.y = t * 0.6;
      meshRef3.current.position.y = Math.sin(t * 1.4 + 2) * 0.15 + 0.8;
    }
  });

  return (
    <>
      {/* Green Solvent Chemistry Ring */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh ref={meshRef1} position={[-2.2, 1.2, -1]}>
          <octahedronGeometry args={[0.45]} />
          <MeshDistortMaterial color="#10b981" speed={2} distort={0.2} emissive="#10b981" emissiveIntensity={0.6} wireframe />
        </mesh>
      </Float>

      {/* Pharmaceutical Synthesis Dodecahedron */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={meshRef2} position={[2.4, -0.4, -0.5]}>
          <dodecahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#00f0ff" wireframe emissive="#00f0ff" emissiveIntensity={0.8} />
        </mesh>
      </Float>

      {/* GenAI Molecular Graph Node */}
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1}>
        <mesh ref={meshRef3} position={[2.2, 1.4, -1.2]}>
          <icosahedronGeometry args={[0.35]} />
          <meshStandardMaterial color="#ec4899" wireframe emissive="#ec4899" emissiveIntensity={0.7} />
        </mesh>
      </Float>
    </>
  );
}

// Particle Constellation (Drug Molecules & Lab Bio-Aerosol)
function Particles({ count = 130 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#10b981"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

interface HeroSceneProps {
  mousePos: { x: number; y: number };
}

export default function HeroScene({ mousePos }: HeroSceneProps) {
  return (
    <div className="w-full h-full min-h-[480px] lg:min-h-[580px] relative">
      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[5, 6, 4]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-4, 3, -2]} intensity={2.5} color="#10b981" />
        <pointLight position={[4, 2, -1]} intensity={2.2} color="#00f0ff" />
        <spotLight
          position={[0, 6, 2]}
          angle={0.6}
          penumbra={0.8}
          intensity={2.8}
          color="#ffffff"
          castShadow
        />

        <ScientistCharacter mousePos={mousePos} />
        <MolecularOrbitals />
        <Particles count={140} />

        <ContactShadows
          position={[0, -1.25, 0]}
          opacity={0.6}
          scale={5}
          blur={2.4}
          far={3}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}
