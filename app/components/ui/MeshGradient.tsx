"use client";

import { motion } from "framer-motion";

export function MeshGradient() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden opacity-30">
            {/* Orb 1 — large lime */}
            <motion.div
                className="absolute h-[60vw] w-[60vw] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(204, 255, 0, 0.08) 0%, transparent 70%)",
                    top: "-10%",
                    right: "-20%",
                }}
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 20, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Orb 2 — medium white */}
            <motion.div
                className="absolute h-[40vw] w-[40vw] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
                    bottom: "10%",
                    left: "-10%",
                }}
                animate={{
                    x: [0, -40, 30, 0],
                    y: [0, 30, -40, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Orb 3 — small accent */}
            <motion.div
                className="absolute h-[30vw] w-[30vw] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(204, 255, 0, 0.04) 0%, transparent 70%)",
                    top: "50%",
                    left: "40%",
                }}
                animate={{
                    x: [0, 60, -20, 0],
                    y: [0, -30, 50, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
