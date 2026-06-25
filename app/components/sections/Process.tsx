"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SpotlightCard } from "@/app/components/ui/SpotlightCard";
import { useRef } from "react";

const steps = [
    {
        phase: "01",
        name: "DISCOVERY",
        details: ["Stakeholder Interviews", "Market Analysis", "Technical Feasibility"],
        description: "We dig deep into your world to understand what makes your business tick.",
    },
    {
        phase: "02",
        name: "ARCHITECTURE",
        details: ["System Design", "Database Schema", "API Specification"],
        description: "We design the blueprint before writing a single line of code.",
    },
    {
        phase: "03",
        name: "DEVELOPMENT",
        details: ["Frontend Implementation", "Backend Integration", "Performance Tuning"],
        description: "Where code meets craft. We build with obsessive attention to detail.",
    },
    {
        phase: "04",
        name: "DEPLOYMENT",
        details: ["CI/CD Pipeline", "Security Audit", "Global CDN Setup"],
        description: "Launch day is just the beginning. We ensure everything runs flawlessly.",
    },
];

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

    return (
        <section id="process" ref={containerRef} className="relative border-y border-white/10 bg-graphite py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end"
                >
                    <div>
                        <span className="font-mono text-sm uppercase tracking-widest text-lime">
                            // How we work
                        </span>
                        <h2 className="mt-2 font-display text-6xl uppercase text-silver md:text-8xl">
                            The <span className="text-lime">Blueprint</span>
                        </h2>
                    </div>
                    <p className="max-w-md font-mono text-sm text-gray-500">
                        Our methodology is rigorous, transparent, and designed for velocity. No black boxes. No surprises.
                    </p>
                </motion.div>

                {/* Timeline layout */}
                <div className="relative">
                    {/* Vertical connecting line (desktop) */}
                    <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-white/5 md:block">
                        <motion.div
                            className="w-full bg-lime origin-top"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="relative md:pl-24"
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    className="absolute left-[26px] top-10 hidden h-4 w-4 items-center justify-center md:flex"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                                >
                                    <div className="h-3 w-3 rounded-full border-2 border-lime bg-graphite" />
                                </motion.div>

                                <SpotlightCard className="rounded-xl">
                                    <div className="p-8 md:p-10">
                                        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                            <div className="flex-1">
                                                <div className="mb-2 font-mono text-xs text-lime/60">
                                                    PHASE // {step.phase}
                                                </div>
                                                <h3 className="mb-3 font-display text-4xl uppercase text-silver md:text-5xl">
                                                    {step.name}
                                                </h3>
                                                <p className="mb-6 max-w-md font-mono text-sm text-gray-500">
                                                    {step.description}
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
                                                {step.details.map((detail, i) => (
                                                    <span
                                                        key={i}
                                                        className="flex items-center gap-2 font-mono text-sm text-gray-600 transition-colors group-hover:text-gray-300"
                                                    >
                                                        <span className="h-1 w-1 rounded-full bg-lime/40" />
                                                        {detail}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Progress bar */}
                                        <div className="mt-6 h-px w-full overflow-hidden bg-white/5">
                                            <div className="h-full w-0 bg-gradient-to-r from-lime/50 to-lime transition-all duration-1000 group-hover:w-full" />
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
