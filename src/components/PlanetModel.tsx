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
          child.material.metalness = 0.7;
          child.material.roughness = 0.8;
          child.material.envMapIntensity = 0.4;
        }
      }
    });
  }, [scene, modelPath]);

  return <primitive object={scene} scale={[scale, scale, scale]} {...props} />;
}
