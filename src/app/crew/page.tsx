"use client";

import { useState } from "react";
import Image from "next/image";
import { crew } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Crew() {
    const [activeCrew, setActiveCrew] = useState(0);
    const member = crew[activeCrew];

    return (
        <main className="min-h-screen lg:h-full lg:min-h-0 w-full flex flex-col items-center justify-end pt-24 pb-0 px-6 lg:px-24 relative z-10">
            <div className="w-full max-w-6xl flex flex-col h-full lg:h-auto">
                <h5 className="font-barlow text-white text-[16px] md:text-[20px] lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] uppercase mb-8 md:mb-16 text-center md:text-left self-start w-full">
                    <span className="font-bold text-white/25 mr-4">02</span> Meet your crew
                </h5>

                <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full lg:h-[600px]">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 pt-8 lg:pt-0">
                        <h4 className="font-bellefair text-white/50 text-[16px] md:text-[24px] lg:text-[32px] uppercase mb-2 md:mb-4">
                            {member.role}
                        </h4>
                        <h2 className="font-bellefair text-white text-[24px] md:text-[40px] lg:text-[56px] uppercase mb-6 md:mb-8 whitespace-nowrap">
                            {member.name}
                        </h2>
                        <p className="font-barlow text-[#d0d6f9] text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] md:leading-[28px] lg:leading-[32px] max-w-[458px] mb-8 md:mb-12 min-h-[100px] lg:min-h-[160px]">
                            {member.bio}
                        </p>

                        <div className="flex gap-4 mb-8 lg:mb-0">
                            {crew.map((item, index) => (
                                <button
                                    key={item.name}
                                    onClick={() => setActiveCrew(index)}
                                    className={cn(
                                        "w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full bg-white/20 transition-all hover:bg-white/50",
                                        activeCrew === index && "bg-white"
                                    )}
                                    aria-label={`Select crew member ${item.name}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end border-b border-[#383b4b] lg:border-none self-end">
                        <div className="relative w-[327px] h-[350px] md:w-[456px] md:h-[572px] lg:w-[568px] lg:h-[712px]">
                            <Image
                                src={member.images.png}
                                alt={member.name}
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-transparent to-transparent lg:hidden pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
