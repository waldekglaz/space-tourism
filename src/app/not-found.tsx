"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const PlanetScene = dynamic(() => import("@/components/PlanetScene"), {
  ssr: false,
});

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24 overflow-hidden relative">
      <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-8">
        {/* Left 4 */}
        <h1 className="font-bellefair text-white text-[120px] md:text-[200px] lg:text-[280px] leading-none">
          4
        </h1>

        {/* Earth Model in the middle */}
        <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]">
          <PlanetScene modelPath="/models/earth.glb" scale={1.2} />
        </div>

        {/* Right 4 */}
        <h1 className="font-bellefair text-white text-[120px] md:text-[200px] lg:text-[280px] leading-none">
          4
        </h1>
      </div>

      {/* Error Message */}
      <div className="text-center max-w-[500px] mb-12">
        <h2 className="font-barlow text-[#d0d6f9] text-[20px] md:text-[28px] tracking-[2px] md:tracking-[3px] uppercase mb-4">
          Page Not Found
        </h2>
        <p className="font-barlow text-[#d0d6f9] text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] mb-8">
          Houston, we have a problem. The page you're looking for has drifted
          into the vast cosmos. Let's get you back on course.
        </p>
      </div>

      {/* Return Button */}
      <div className="relative group">
        <div className="absolute -inset-0 bg-white/10 rounded-full blur transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110"></div>
        <Link
          href="/"
          className="relative px-8 md:px-12 py-4 md:py-6 bg-white text-[#0b0d17] font-bellefair text-[16px] md:text-[18px] uppercase tracking-[1px] md:tracking-[1.5px] rounded-full hover:ring-[20px] md:hover:ring-[30px] hover:ring-white/10 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
