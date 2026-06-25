"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
}

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const spotlightX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const spotlightY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    function handleMouseMove(e: MouseEvent) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden rounded-xl border border-white/5 bg-void transition-border duration-500 hover:border-white/10 ${className}`}
        >
            {/* Spotlight follow effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(350px circle at ${spotlightX}px ${spotlightY}px, rgba(204, 255, 0, 0.06), transparent 80%)`,
                }}
            />
            {/* Top edge highlight */}
            <motion.div
                className="pointer-events-none absolute -top-px left-0 right-0 z-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(200px at ${spotlightX}px 0px, rgba(204, 255, 0, 0.3), transparent 80%)`,
                }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
