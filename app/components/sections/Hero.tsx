"use client";

import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { InteractiveGrid } from "@/app/components/ui/InteractiveGrid";
import { motion, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from "framer-motion";
import { ArrowDownRight, ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/app/hooks/useDevice";

// Floating geometric shapes that respond to cursor
function FloatingShape({
    size,
    initialX,
    initialY,
    rotation,
    delay,
    mouseX,
    mouseY,
    shape,
}: {
    size: number;
    initialX: string;
    initialY: string;
    rotation: number;
    delay: number;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    shape: "circle" | "square" | "triangle" | "ring";
}) {
    const x = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), { stiffness: 50, damping: 20 });
    const y = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), { stiffness: 50, damping: 20 });

    const shapeElement = () => {
        switch (shape) {
            case "circle":
                return <div className="h-full w-full rounded-full border border-lime/20" />;
            case "square":
                return <div className="h-full w-full border border-white/10" style={{ transform: `rotate(${rotation}deg)` }} />;
            case "triangle":
                return (
                    <div
                        className="h-0 w-0"
                        style={{
                            borderLeft: `${size / 2}px solid transparent`,
                            borderRight: `${size / 2}px solid transparent`,
                            borderBottom: `${size}px solid rgba(204, 255, 0, 0.1)`,
                            transform: `rotate(${rotation}deg)`,
                        }}
                    />
                );
            case "ring":
                return <div className="h-full w-full rounded-full border-2 border-dashed border-white/5" />;
        }
    };

    return (
        <motion.div
            className="pointer-events-none absolute"
            style={{
                left: initialX,
                top: initialY,
                width: size,
                height: size,
                x,
                y,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: 1,
                rotate: [0, 360],
            }}
            transition={{
                opacity: { delay, duration: 1 },
                scale: { delay, duration: 1, ease: [0.22, 1, 0.36, 1] },
                rotate: { duration: 60 + Math.random() * 40, repeat: Infinity, ease: "linear" },
            }}
        >
            {shapeElement()}
        </motion.div>
    );
}

export function Hero() {
    const isMobile = useIsMobile();
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, isMobile ? 1 : 0.9]);
    const textY = useTransform(scrollY, [0, 500], [0, isMobile ? 50 : 150]);

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isMobile) return;
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY, isMobile]);

    // Character animation for main heading
    const line1 = "WE BUILD";
    const line2 = "WHAT OTHERS";
    const line3 = "CAN'T";

    return (
        <section ref={containerRef} className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-4 pt-24 md:px-10">
            <InteractiveGrid />

            {/* Cursor-following gradient */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(204, 255, 0, 0.08), transparent 70%)`
                }}
            />

            {/* Floating geometric shapes — hidden on mobile via CSS */}
            <div className="hidden md:block">
                <FloatingShape shape="circle" size={80} initialX="85%" initialY="15%" rotation={0} delay={1.5} mouseX={mouseX} mouseY={mouseY} />
                <FloatingShape shape="square" size={60} initialX="10%" initialY="20%" rotation={45} delay={1.7} mouseX={mouseX} mouseY={mouseY} />
                <FloatingShape shape="triangle" size={50} initialX="75%" initialY="70%" rotation={15} delay={1.9} mouseX={mouseX} mouseY={mouseY} />
                <FloatingShape shape="ring" size={120} initialX="90%" initialY="60%" rotation={0} delay={2.0} mouseX={mouseX} mouseY={mouseY} />
                <FloatingShape shape="square" size={40} initialX="5%" initialY="75%" rotation={30} delay={2.1} mouseX={mouseX} mouseY={mouseY} />
                <FloatingShape shape="circle" size={30} initialX="50%" initialY="10%" rotation={0} delay={2.2} mouseX={mouseX} mouseY={mouseY} />
            </div>

            <motion.div style={{ y: textY, scale }} className="container mx-auto relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 1.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8 inline-flex items-center gap-3 rounded-full border border-lime/20 bg-lime/5 px-5 py-2 backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-lime/80">
                        Available for new projects
                    </span>
                </motion.div>

                {/* Main heading with stagger per character */}
                <h1 className="font-display leading-[0.85] tracking-tighter mix-blend-difference">
                    {[line1, line2, line3].map((line, lineIndex) => (
                        <span
                            key={lineIndex}
                            className={`block ${lineIndex === 1 ? "ml-[8vw] text-lime" : "text-silver"} ${lineIndex === 2 ? "ml-[4vw]" : ""}`}
                            style={{ fontSize: lineIndex === 2 ? "14vw" : "11vw" }}
                        >
                            {line.split("").map((char, charIndex) => (
                                <motion.span
                                    key={`${lineIndex}-${charIndex}`}
                                    className="inline-block"
                                    initial={{
                                        opacity: 0,
                                        y: 120,
                                        rotateX: -80,
                                        filter: "blur(8px)",
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        rotateX: 0,
                                        filter: "blur(0px)",
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 2.0 + lineIndex * 0.15 + charIndex * 0.04,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    style={{ display: char === " " ? "inline" : "inline-block" }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </h1>

                {/* Subtext row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-12 flex flex-col items-start justify-between gap-10 border-t border-white/10 pt-10 md:flex-row md:items-center"
                >
                    <div className="max-w-md">
                        <p className="font-mono text-sm uppercase tracking-widest text-gray-500">
                            Engineering digital excellence —
                        </p>
                        <p className="mt-1 font-mono text-sm uppercase tracking-widest text-gray-400">
                            from idea to production, flawlessly.
                        </p>
                    </div>

                    <MagneticButton>
                        START PROJECT <ArrowDownRight className="ml-2 inline-block h-4 w-4" />
                    </MagneticButton>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
                style={{ opacity }}
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="h-4 w-4 text-lime/50" />
                </motion.div>
            </motion.div>

            {/* Background glow orbs */}
            <motion.div
                style={{ y, opacity }}
                className="absolute -right-[10%] top-[15%] -z-10 h-[60vw] w-[60vw] rounded-full bg-lime blur-[200px] opacity-[0.07]"
            />
            <motion.div
                style={{ y: useTransform(scrollY, [0, 1000], [0, -200]) }}
                className="absolute -left-[15%] bottom-[5%] -z-10 h-[50vw] w-[50vw] rounded-full bg-white blur-[200px] opacity-[0.03]"
            />
        </section>
    );
}
