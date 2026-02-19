"use client";

import { useState } from "react";
import Image from "next/image";
import { technology } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Technology() {
    const [activeTech, setActiveTech] = useState(0);
    const tech = technology[activeTech];

    return (
        <main className="min-h-screen lg:h-full lg:min-h-0 w-full flex flex-col items-center justify-center pt-24 pb-12 lg:pl-24 relative z-10">
            <div className="w-full max-w-7xl flex flex-col h-full lg:h-auto">
                <h5 className="font-barlow text-white text-[16px] md:text-[20px] lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] uppercase mb-8 md:mb-6 text-center md:text-left px-6 lg:px-0">
                    <span className="font-bold text-white/25 mr-4">03</span> Space launch 101
                </h5>

                <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-6 lg:px-0 w-full lg:w-2/3">
                        <div className="flex flex-row lg:flex-col gap-4 md:gap-8">
                            {technology.map((item, index) => (
                                <button
                                    key={item.name}
                                    onClick={() => setActiveTech(index)}
                                    className={cn(
                                        "w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-full border border-white/25 text-white font-bellefair text-[16px] md:text-[24px] lg:text-[32px] hover:border-white transition-all",
                                        activeTech === index && "bg-white text-[#0b0d17] border-white"
                                    )}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <span className="font-barlow text-[#d0d6f9] text-[14px] md:text-[16px] tracking-[2.36px] uppercase mb-2 md:mb-4">
                                The terminology...
                            </span>
                            <h1 className="font-bellefair text-white text-[24px] md:text-[40px] lg:text-[56px] uppercase mb-4 md:mb-6">
                                {tech.name}
                            </h1>
                            <p className="font-barlow text-[#d0d6f9] text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] md:leading-[28px] lg:leading-[32px] max-w-[444px]">
                                {tech.description}
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:ml-8">
                        <div className="relative w-full h-[170px] md:h-[310px] lg:h-[527px]">
                            {tech.images.portrait && tech.images.landscape ? (
                                <>
                                    {/* Portrait Image for Desktop */}
                                    <div className="hidden lg:block w-full h-full relative">
                                        <Image
                                            src={tech.images.portrait}
                                            alt={tech.name}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    {/* Landscape Image for Mobile/Tablet */}
                                    <div className="block lg:hidden w-full h-full relative">
                                        <Image
                                            src={tech.images.landscape}
                                            alt={tech.name}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </>
                            ) : (
                                <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/20 text-lg">
                                    {tech.name}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
