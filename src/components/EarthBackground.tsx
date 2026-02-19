"use client";

import { Suspense, useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

/* ─── Earth mesh ─────────────────────────────────────────────── */
function Earth() {
    const { scene } = useGLTF("/models/earth.glb") as any;
    const ref = useRef<THREE.Group>(null!);

    const cloned = useMemo(() => scene.clone(true), [scene]);

    // Replace every mesh material with a bright MeshPhongMaterial
    // so it's guaranteed to be visible regardless of the original texture
    useEffect(() => {
        cloned.traverse((child: any) => {
            if (child.isMesh) {
                const oldMat = Array.isArray(child.material)
                    ? child.material[0]
                    : child.material;

                // Keep the original texture map if it exists
                const map = oldMat?.map ?? null;

                child.material = new THREE.MeshPhongMaterial({
                    map,
                    color: map ? new THREE.Color("#ffffff") : new THREE.Color("#1a6fa8"),
                    emissive: new THREE.Color("#0a1a2e"),
                    emissiveIntensity: 0.15,
                    shininess: 25,
                    specular: new THREE.Color("#4488cc"),
                });
                child.material.needsUpdate = true;
            }
        });
    }, [cloned]);

    // Slow self-rotation
    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <primitive
            ref={ref}
            object={cloned}
            scale={[4, 4, 4]}
            position={[3.2, -0.6, -0.5]}
        />
    );
}

/* ─── Animated camera ────────────────────────────────────────── */
function AnimatedCamera() {
    const { camera } = useThree();
    const t = useRef(0);

    useFrame((_, delta) => {
        t.current += delta;
        const time = t.current;

        // Zoom: FOV breathes between 40° and 58°
        (camera as THREE.PerspectiveCamera).fov =
            49 + Math.sin(time * 0.25) * 9;
        (camera as THREE.PerspectiveCamera).updateProjectionMatrix();

        // Gentle drift around the Earth
        camera.position.x = Math.sin(time * 0.10) * 0.7;
        camera.position.y = Math.sin(time * 0.07) * 0.45;
        camera.position.z = 7 + Math.cos(time * 0.13) * 0.9;

        camera.lookAt(3.2, -0.6, -0.5);
    });

    return null;
}

/* ─── Lighting ───────────────────────────────────────────────── */
function Lighting() {
    return (
        <>
            {/* Primary sun — strong warm light from upper-left */}
            <directionalLight position={[-10, 8, 12]} intensity={4} color="#fff8e8" />
            {/* Secondary fill from right to illuminate the other side */}
            <directionalLight position={[8, -2, 6]} intensity={1.2} color="#ffffff" />
            {/* Soft blue rim from behind */}
            <directionalLight position={[4, -5, -10]} intensity={0.6} color="#3a6ea5" />
            {/* Ambient so dark side isn't pure black */}
            <ambientLight intensity={0.25} />
        </>
    );
}

/* ─── Public component ───────────────────────────────────────── */
export default function EarthBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ fov: 49, position: [0, 0, 7], near: 0.1, far: 800 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <Lighting />
                    <Earth />
                    <AnimatedCamera />
                </Suspense>
            </Canvas>
        </div>
    );
}
