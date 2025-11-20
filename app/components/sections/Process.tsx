"use client";

import { motion } from "framer-motion";

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
        <section className="border-y border-white/10 bg-graphite py-32">
            <div className="container mx-auto px-4 md:px-10">
                <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
                    <h2 className="font-display text-6xl uppercase text-silver md:text-8xl">
                        The <span className="text-lime">Blueprint</span>
                    </h2>
                    <p className="max-w-md font-mono text-sm text-gray-400">
                        Our methodology is rigorous, transparent, and designed for velocity. No black boxes.
                    </p>
                </div>

                <div className="grid gap-px bg-white/10 md:grid-cols-4">
                    {steps.map((step, index) => (
                        <div key={index} className="group relative bg-void p-8 transition-colors hover:bg-white/5">
                            <div className="mb-10 font-mono text-xs text-lime">PHASE // {step.phase}</div>

                            <h3 className="mb-8 font-display text-3xl uppercase text-silver">{step.name}</h3>

                            <ul className="space-y-4">
                                {step.details.map((detail, i) => (
                                    <li key={i} className="flex items-center gap-3 font-mono text-sm text-gray-500 transition-colors group-hover:text-gray-300">
                                        <span className="h-1 w-1 bg-lime" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime transition-all duration-500 group-hover:w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
