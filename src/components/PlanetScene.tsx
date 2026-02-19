"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Html } from "@react-three/drei";
import PlanetModel from "./PlanetModel";

function Loader() {
    return <Html center><div className="text-white">Loading...</div></Html>
}

export default function PlanetScene({ modelPath, scale = 0.01 }: { modelPath: string; scale?: number }) {
    return (
        <div className="w-full h-full">
            <Canvas shadows="soft" dpr={[1, 2]} camera={{ fov: 55 }}>
                <ambientLight intensity={0.1} />
                <directionalLight position={[8, 3, 5]} intensity={3.5} />
                <Suspense fallback={<Loader />}>
                    <Stage environment="city" intensity={0.1} shadows={false}>
                        <PlanetModel modelPath={modelPath} scale={scale} />
                    </Stage>
                </Suspense>
                <OrbitControls autoRotate enableZoom={false} />
            </Canvas>
        </div>
    );
}
