"use client";

export function NoiseOverlay() {
    return (
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]">
            <div className="absolute inset-0 h-[200%] w-[200%] animate-grain bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
        </div>
    );
}
