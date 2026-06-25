"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState, MouseEvent } from "react";

const stats = [
    { value: 8, suffix: "+", label: "Years of Experience", icon: "◎" },
    { value: 150, suffix: "+", label: "Projects Delivered", icon: "◈" },
    { value: 98, suffix: "%", label: "Client Satisfaction", icon: "◇" },
    { value: 25, suffix: "+", label: "Team Experts", icon: "○" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [inView, value]);

    return (
        <span className="tabular-nums">
            {count}{suffix}
        </span>
    );
}

function StatCard({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const spotlightX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const spotlightY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    function handleMouseMove(e: MouseEvent) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden bg-void p-8 text-center transition-colors hover:bg-white/[0.03] md:p-12"
        >
            {/* Spotlight follow effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(250px circle at ${spotlightX}px ${spotlightY}px, rgba(204, 255, 0, 0.06), transparent 80%)`,
                }}
            />

            {/* Icon */}
            <motion.div
                className="mb-4 text-2xl text-lime/20 transition-colors group-hover:text-lime/40"
                animate={{ rotate: inView ? 360 : 0 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                {stat.icon}
            </motion.div>

            <div className="relative z-10 font-display text-5xl font-bold text-lime md:text-7xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
            </div>
            <div className="relative z-10 mt-4 font-mono text-xs uppercase tracking-widest text-gray-500 transition-colors group-hover:text-gray-300">
                {stat.label}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden bg-white/5">
                <motion.div
                    className="h-full bg-lime/30"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>
        </motion.div>
    );
}

export function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="border-y border-white/10 bg-void py-20">
            <div ref={ref} className="container mx-auto px-4 md:px-10">
                <motion.div
                    className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
                    initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div>
                        <span className="font-mono text-sm uppercase tracking-widest text-lime">// Why Us</span>
                        <h2 className="mt-2 font-display text-4xl uppercase text-silver md:text-6xl">
                            Numbers Don&apos;t <span className="text-lime">Lie</span>
                        </h2>
                    </div>
                    <p className="max-w-sm font-mono text-sm text-gray-500">
                        We let our track record speak. Every project is a testament to our relentless pursuit of excellence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} inView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
