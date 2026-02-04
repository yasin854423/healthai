"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls, Float, Text } from "@react-three/drei";
import * as THREE from "three";

// Generate points inside a Cylinder volume (Local space)
function generateLocalCylinderPoints(radius: number, height: number, count: number) {
    const points = [];
    const colors = [];
    const c1 = new THREE.Color("#00f3ff"); // Cyan
    const c2 = new THREE.Color("#ff3333"); // Red/Orange glitch

    for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const r = Math.sqrt(Math.random()) * radius;
        const h = (Math.random() - 0.5) * height; // Centered at 0

        points.push(r * Math.cos(theta), h, r * Math.sin(theta));

        // Mixed colors based on probability (glitch effect)
        const isGlitch = Math.random() < 0.15; // 15% chance of red
        const color = isGlitch ? c2 : c1;
        colors.push(color.r, color.g, color.b);
    }
    return { positions: new Float32Array(points), colors: new Float32Array(colors) };
}

interface BodyPartProps {
    position: [number, number, number];
    rotation?: [number, number, number];
    args: {
        radius: number;
        height: number;
        count: number;
    };
    animRef?: React.RefObject<THREE.Group>;
}

function BodyPart({ position, rotation, args, animRef }: BodyPartProps) {
    const { radius, height, count } = args;
    const { positions, colors } = useMemo(() => generateLocalCylinderPoints(radius, height, count), [radius, height, count]);

    return (
        <group position={position} rotation={rotation} ref={animRef}>
            <Points positions={positions} colors={colors} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.025}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

function WalkingHuman() {
    const group = useRef<THREE.Group>(null);
    const leftArm = useRef<THREE.Group>(null);
    const rightArm = useRef<THREE.Group>(null);
    const leftLeg = useRef<THREE.Group>(null);
    const rightLeg = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        const t = state.clock.elapsedTime * 4; // Walk speed

        if (group.current) {
            group.current.rotation.y += delta * 0.2; // Slow body rotation
            group.current.position.y = -0.5 + Math.sin(t * 2) * 0.05; // Bobbing
        }

        // Arm Swing (Opposite to legs)
        if (leftArm.current) leftArm.current.rotation.x = Math.sin(t) * 0.6;
        if (rightArm.current) rightArm.current.rotation.x = -Math.sin(t) * 0.6;

        // Leg Swing
        if (leftLeg.current) leftLeg.current.rotation.x = -Math.sin(t) * 0.6;
        if (rightLeg.current) rightLeg.current.rotation.x = Math.sin(t) * 0.6;
    });

    return (
        <group ref={group}>
            {/* Head */}
            <BodyPart position={[0, 1.7, 0]} args={{ radius: 0.25, height: 0.5, count: 600 }} />

            {/* Torso */}
            <BodyPart position={[0, 1.0, 0]} args={{ radius: 0.28, height: 1.0, count: 1800 }} />

            {/* Left Arm (Pivot at Shoulder) */}
            <group position={[-0.45, 1.45, 0]} ref={leftArm}>
                <BodyPart position={[0, -0.35, 0]} args={{ radius: 0.08, height: 0.7, count: 400 }} /> {/* Upper */}
                <BodyPart position={[0, -0.9, 0]} args={{ radius: 0.07, height: 0.6, count: 300 }} /> {/* Lower */}
            </group>

            {/* Right Arm */}
            <group position={[0.45, 1.45, 0]} ref={rightArm}>
                <BodyPart position={[0, -0.35, 0]} args={{ radius: 0.08, height: 0.7, count: 400 }} />
                <BodyPart position={[0, -0.9, 0]} args={{ radius: 0.07, height: 0.6, count: 300 }} />
            </group>

            {/* Left Leg (Pivot at Hip) */}
            <group position={[-0.2, 0.5, 0]} ref={leftLeg}>
                <BodyPart position={[0, -0.4, 0]} args={{ radius: 0.11, height: 0.8, count: 500 }} /> {/* Thigh */}
                <BodyPart position={[0, -1.0, 0]} args={{ radius: 0.09, height: 0.8, count: 400 }} /> {/* Calf */}
            </group>

            {/* Right Leg */}
            <group position={[0.2, 0.5, 0]} ref={rightLeg}>
                <BodyPart position={[0, -0.4, 0]} args={{ radius: 0.11, height: 0.8, count: 500 }} />
                <BodyPart position={[0, -1.0, 0]} args={{ radius: 0.09, height: 0.8, count: 400 }} />
            </group>
        </group>
    );
}

function HologramText() {
    return (
        <group position={[0, -2.2, 0]}>
            <Text
                fontSize={0.6}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#00f3ff"
                rotation={[-Math.PI / 6, 0, 0]} // Slight tilt up
            >
                HEALTH AI
            </Text>
            {/* Floor Grid Effect */}
            <gridHelper args={[10, 20, 0x00f3ff, 0x111111]} position={[0, -0.4, 0]} />
        </group>
    )
}

export default function ThreeHealthHuman() {
    return (
        <div className="w-full h-full relative cursor-move bg-black/40">
            <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
                <fog attach="fog" args={['#000000', 3, 15]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#00f3ff" />
                <pointLight position={[-10, 5, -10]} intensity={1} color="#ff3333" />

                <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
                    <WalkingHuman />
                    <HologramText />
                </Float>

                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.6} minPolarAngle={Math.PI / 3} />
            </Canvas>
        </div>
    );
}
