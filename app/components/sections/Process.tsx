"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/app/components/ui/SpotlightCard";

const steps = [
    {
        phase: "01",
        name: "DISCOVERY",
        details: ["Stakeholder Interviews", "Market Analysis", "Technical Feasibility"],
    },
    {
        phase: "02",
        name: "ARCHITECTURE",
        details: ["System Design", "Database Schema", "API Specification"],
    },
    {
        phase: "03",
        name: "DEVELOPMENT",
        details: ["Frontend Implementation", "Backend Integration", "Performance Tuning"],
    },
    {
        phase: "04",
        name: "DEPLOYMENT",
        details: ["CI/CD Pipeline", "Security Audit", "Global CDN Setup"],
    },
];

export function Process() {
    return (
        <section id="process" className="border-y border-white/10 bg-graphite py-32">
            <div className="container mx-auto px-4 md:px-10">
                <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
                    <h2 className="font-display text-6xl uppercase text-silver md:text-8xl">
                        The <span className="text-lime">Blueprint</span>
                    </h2>
                    <p className="max-w-md font-mono text-sm text-gray-400">
                        Our methodology is rigorous, transparent, and designed for velocity. No black boxes.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                            <SpotlightCard className="h-full rounded-xl">
                                <div className="p-8">
                                    <div className="mb-10 font-mono text-xs text-lime">PHASE // {step.phase}</div>

                                    <h3 className="mb-8 font-display text-3xl uppercase text-silver">{step.name}</h3>

                                    <ul className="space-y-4">
                                        {step.details.map((detail, i) => (
                                            <li key={i} className="flex items-center gap-3 font-mono text-sm text-gray-500 transition-colors group-hover:text-gray-300">
                                                <span className="h-1 w-1 rounded-full bg-lime" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Progress line at bottom */}
                                    <div className="mt-8 h-px w-full overflow-hidden bg-white/5">
                                        <div className="h-full w-0 bg-lime transition-all duration-700 group-hover:w-full" />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
