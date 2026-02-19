"use client";

import { useEffect } from "react";
import { Mesh, Color } from "three";
import { useGLTF } from "@react-three/drei";

export default function PlanetModel({ modelPath, scale = 1, ...props }: any) {
    const { scene } = useGLTF(modelPath) as any;

    useEffect(() => {
        scene.traverse((child: any) => {
            if (child.isMesh) {
                // Better material settings for better visibility
                if (child.material) {
                    // Standard material properties for all planets
                    child.material.metalness = 0.1;
                    child.material.roughness = 0.8;
                    child.material.envMapIntensity = 0.2;

                    // Mars: Force red/orange if untextured or just to ensure look
                    // if (modelPath.toLowerCase().includes('mars')) {
                    //     child.material.color = new Color('#E15F41');
                    // }

                    // // Neptune: Force deep blue
                    // if (modelPath.toLowerCase().includes('neptune')) {
                    //     child.material.color = new Color('#4F6A9C'); // Neptune blue
                    // }

                    // // Saturn: Force pale gold
                    // if (modelPath.toLowerCase().includes('saturn')) {
                    //     child.material.color = new Color('#EBD7B6');
                    //     child.material.emissiveIntensity = 0;
                    // }

                    // // Venus: Force pale yellow
                    // if (modelPath.toLowerCase().includes('venus')) {
                    //     child.material.color = new Color('#E6DBB8');
                    // }
                }
            }
        });
    }, [scene, modelPath]);

    return <primitive object={scene} scale={[scale, scale, scale]} {...props} />;
}
