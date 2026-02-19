"use client";

import dynamic from "next/dynamic";

const EarthBackground = dynamic(() => import("./EarthBackground"), {
    ssr: false,
});

export default function EarthBackgroundWrapper() {
    return <EarthBackground />;
}
