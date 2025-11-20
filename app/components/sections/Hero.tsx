"use client";

import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { InteractiveGrid } from "@/app/components/ui/InteractiveGrid";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-4 pt-20 md:px-10">
            <InteractiveGrid />
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(204, 255, 0, 0.15), transparent 80%)`
                }}
            />
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10"
                >
                    <h1 className="font-display text-[12vw] leading-[0.8] tracking-tighter text-silver mix-blend-difference md:text-[10vw]">
                        DIGITAL <br />
                        <span className="ml-[10vw] text-lime">ALCHEMY</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-10 flex flex-col items-start justify-between gap-10 border-t border-white/10 pt-10 md:flex-row md:items-center"
                >
                    <p className="max-w-md font-mono text-sm uppercase tracking-widest text-gray-400">
                        We transmute raw code into <br />
                        immersive digital experiences.
                    </p>

                    <MagneticButton>
                        START PROJECT <ArrowDownRight className="ml-2 inline-block h-4 w-4" />
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Background Elements */}
            <motion.div
                style={{ y, opacity }}
                className="absolute -right-[10%] top-[20%] -z-10 h-[50vw] w-[50vw] rounded-full bg-lime blur-[150px] opacity-20 mix-blend-screen"
            />
            <motion.div
                style={{ y: useTransform(scrollY, [0, 1000], [0, -200]) }}
                className="absolute -left-[10%] bottom-[10%] -z-10 h-[40vw] w-[40vw] rounded-full bg-white blur-[150px] opacity-10"
            />
        </section>
    );
}
