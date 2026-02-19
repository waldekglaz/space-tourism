import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Galaxy from "@/components/Galaxy";
import Navbar from "@/components/Navbar";
import PlanetScene from "@/components/PlanetScene";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Experience space travel like never before",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlowCondensed.variable} bg-[#0b0d17] text-white antialiased overflow-x-hidden lg:h-screen lg:overflow-hidden relative`}
      >
        <Navbar />
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -3,
          }}
        >
          <Galaxy
            mouseRepulsion
            mouseInteraction={false}
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
          />
        </div>
        <div className="absolute w-[105vw] -right-[58vw] top-[50%] -translate-y-1/2  pointer-events-none h-[140vh] -z-2 hidden lg:block">
          <PlanetScene modelPath="/models/earth.glb" scale={1.01} />
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <Galaxy
            mouseRepulsion
            mouseInteraction={false}
            density={0.1}
            glowIntensity={0.1}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
          />
        </div>

        {children}
      </body>
    </html>
  );
}
