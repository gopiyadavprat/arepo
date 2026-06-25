"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    { value: 8, suffix: "+", label: "Years of Experience" },
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 25, suffix: "+", label: "Team Experts" },
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

export function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="border-y border-white/10 bg-void py-20">
            <div ref={ref} className="container mx-auto px-4 md:px-10">
                <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="font-mono text-sm uppercase tracking-widest text-lime">Why Us</span>
                        <h2 className="mt-2 font-display text-4xl uppercase text-silver md:text-6xl">
                            Numbers Don&apos;t <span className="text-lime">Lie</span>
                        </h2>
                    </div>
                    <p className="max-w-sm font-mono text-sm text-gray-400">
                        We let our track record speak. Every project is a testament to our relentless pursuit of excellence.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group bg-void p-8 text-center transition-colors hover:bg-white/5 md:p-12"
                        >
                            <div className="font-display text-5xl font-bold text-lime md:text-7xl">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                            </div>
                            <div className="mt-4 font-mono text-xs uppercase tracking-widest text-gray-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
