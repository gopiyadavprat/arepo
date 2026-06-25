"use client";

import { cn } from "@/app/lib/utils";

interface GlowingBorderProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export function GlowingBorder({ children, className, glowColor = "rgba(204, 255, 0, 1)" }: GlowingBorderProps) {
    return (
        <div className={cn("glowing-border-wrapper group relative", className)}>
            {/* Animated border */}
            <div
                className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: `conic-gradient(from var(--glow-angle, 0deg), transparent 60%, ${glowColor} 80%, transparent 100%)`,
                    animation: "glow-rotate 3s linear infinite",
                }}
            />
            {/* Inner mask to show only the border */}
            <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: `conic-gradient(from var(--glow-angle, 0deg), transparent 60%, ${glowColor}33 80%, transparent 100%)`,
                    animation: "glow-rotate 3s linear infinite",
                    filter: "blur(15px)",
                }}
            />
            {/* Content with solid background */}
            <div className="relative rounded-[inherit] bg-void">
                {children}
            </div>
        </div>
    );
}
