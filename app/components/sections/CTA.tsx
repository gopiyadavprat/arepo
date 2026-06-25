"use client";

import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef, MouseEvent } from "react";

// Animated floating orb
function FloatingOrb({ size, x, y, color, delay }: {
    size: number; x: string; y: string; color: string; delay: number;
}) {
    return (
        <motion.div
            className="absolute rounded-full"
            style={{ left: x, top: y, width: size, height: size, background: color }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            animate={{
                y: [0, -20, 0, 20, 0],
                x: [0, 10, 0, -10, 0],
            }}
        />
    );
}

export function CTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const bgX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), { stiffness: 50, damping: 20 });
    const bgY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), { stiffness: 50, damping: 20 });

    function handleMouseMove(e: MouseEvent) {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden border-t border-white/10 bg-void py-40"
        >
            {/* Animated background orbs */}
            <FloatingOrb size={300} x="10%" y="20%" color="rgba(204, 255, 0, 0.03)" delay={0.2} />
            <FloatingOrb size={200} x="70%" y="30%" color="rgba(204, 255, 0, 0.04)" delay={0.4} />
            <FloatingOrb size={150} x="80%" y="70%" color="rgba(255, 255, 255, 0.02)" delay={0.6} />

            {/* Cursor-following glow */}
            <motion.div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `radial-gradient(600px at calc(50% + ${bgX}px) calc(50% + ${bgY}px), rgba(204, 255, 0, 0.05), transparent 70%)`,
                }}
            />

            <div className="container relative z-10 mx-auto px-4 text-center md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="mb-8 inline-block font-mono text-sm uppercase tracking-[0.3em] text-lime/60">
                        // Ready to start?
                    </span>

                    <h2 className="mb-6 font-display text-[10vw] leading-[0.85] text-silver">
                        {"LET'S BUILD".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                className="inline-block"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.3 + i * 0.04,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <br />
                        {"SOMETHING".split("").map((char, i) => (
                            <motion.span
                                key={`s-${i}`}
                                className="inline-block text-lime"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.6 + i * 0.04,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        <br />
                        {"GREAT".split("").map((char, i) => (
                            <motion.span
                                key={`g-${i}`}
                                className="inline-block"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.9 + i * 0.04,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h2>

                    <motion.p
                        className="mx-auto mb-14 max-w-lg font-mono text-sm text-gray-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        Have a project in mind? We&apos;d love to hear about it.
                        Let&apos;s turn your vision into a digital masterpiece.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <MagneticButton className="h-24 px-12 text-xl">
                        START YOUR PROJECT <ArrowRight className="ml-2 inline-block h-6 w-6" />
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    );
}
