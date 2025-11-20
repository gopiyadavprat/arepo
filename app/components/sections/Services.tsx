"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        id: "01",
        title: "Creative Development",
        description: "WebGL, Three.js, and custom shaders for immersive web experiences.",
        tags: ["React", "WebGL", "GSAP"],
    },
    {
        id: "02",
        title: "Digital Product Design",
        description: "User-centric interfaces with avant-garde aesthetics and fluid motion.",
        tags: ["UI/UX", "Figma", "Motion"],
    },
    {
        id: "03",
        title: "Technical Strategy",
        description: "Scalable architecture and performance optimization for high-traffic apps.",
        tags: ["Next.js", "Cloud", "Security"],
    },
    {
        id: "04",
        title: "Brand Identity",
        description: "Visual systems that cut through the noise and define market leaders.",
        tags: ["Branding", "3D", "Typography"],
    },
];

export function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-32">
            <div className="container mx-auto px-4 md:px-10">
                <div className="mb-20 border-b border-white/10 pb-10">
                    <h2 className="font-display text-6xl uppercase text-silver md:text-8xl">
                        Our <span className="text-lime">Craft</span>
                    </h2>
                </div>

                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative cursor-pointer border-b border-white/10 py-12 transition-colors hover:bg-white/5"
                        >
                            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                                <span className="font-mono text-xl text-lime">({service.id})</span>

                                <h3 className="font-display text-4xl uppercase text-silver transition-transform group-hover:translate-x-4 md:text-6xl">
                                    {service.title}
                                </h3>

                                <div className="flex items-center gap-4 md:ml-auto">
                                    <p className="hidden max-w-xs font-mono text-sm text-gray-400 md:block">
                                        {service.description}
                                    </p>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-void transition-colors group-hover:bg-lime group-hover:text-void">
                                        <ArrowUpRight className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>

                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="flex gap-4 pt-6 md:pl-[100px]">
                                            {service.tags.map((tag, i) => (
                                                <span key={i} className="rounded-full border border-white/10 px-4 py-1 font-mono text-xs uppercase text-gray-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
