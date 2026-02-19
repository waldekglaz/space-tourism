"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/lib/data";
import { cn } from "@/lib/utils";
import PlanetScene from "@/components/PlanetScene";

const modelPaths: Record<string, string> = {
    Moon: "/models/moon.glb",
    Mars: "/models/mars.glb",
    Europa: "/models/europa.glb",
    Neptune: "/models/neptune.glb",
};

export default function Destination() {
    const [activeDestination, setActiveDestination] = useState(0);
    const destination = destinations[activeDestination];

    return (
        <main className="min-h-screen lg:h-full lg:min-h-0 w-full flex flex-col items-center justify-center pt-24 pb-12 px-6 lg:px-24 relative z-10">
            <div className="w-full max-w-6xl flex flex-col justify-center h-full">
                <h5 className="font-barlow text-white text-[16px] md:text-[20px] lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] uppercase mb-8 md:mb-16 text-center md:text-left">
                    <span className="font-bold text-white/25 mr-4">01</span> Pick your destination
                </h5>

                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-0">
                    <div className="w-full flex justify-center lg:justify-start lg:w-1/2">
                        <div className="relative w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]">
                            {modelPaths[destination.name] ? (
                                <PlanetScene key={destination.name} modelPath={modelPaths[destination.name]} scale={0.01} />
                            ) : (
                                <div className="relative w-full h-full">
                                    <Image
                                        src={destination.images.png}
                                        alt={destination.name}
                                        fill
                                        className="object-contain animate-spin-slow"
                                        priority
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full lg:w-[445px] flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex gap-8 mb-8">
                            {destinations.map((dest, index) => (
                                <button
                                    key={dest.name}
                                    onClick={() => setActiveDestination(index)}
                                    className={cn(
                                        "font-barlow text-[14px] md:text-[16px] tracking-[2.36px] md:tracking-[2.7px] uppercase pb-3 border-b-[3px] border-transparent transition-all hover:border-white/50 text-[#d0d6f9]",
                                        activeDestination === index && "border-white text-white"
                                    )}
                                >
                                    {dest.name}
                                </button>
                            ))}
                        </div>

                        <h1 className="font-bellefair text-white text-[56px] md:text-[80px] lg:text-[100px] uppercase leading-none mb-4">
                            {destination.name}
                        </h1>

                        <p className="font-barlow text-[#d0d6f9] text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] md:leading-[28px] lg:leading-[32px] mb-8 lg:mb-12 min-h-[100px] lg:min-h-[128px]">
                            {destination.description}
                        </p>

                        <div className="w-full h-[1px] bg-[#383b4b] mb-8"></div>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-24 w-full justify-center lg:justify-start">
                            <div className="flex flex-col gap-3">
                                <span className="font-barlow text-[#d0d6f9] text-[14px] tracking-[2.36px] uppercase">
                                    Avg. distance
                                </span>
                                <span className="font-bellefair text-white text-[28px] uppercase">
                                    {destination.distance}
                                </span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="font-barlow text-[#d0d6f9] text-[14px] tracking-[2.36px] uppercase">
                                    Est. travel time
                                </span>
                                <span className="font-bellefair text-white text-[28px] uppercase">
                                    {destination.travel}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
