"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TextScramble } from "@/app/components/ui/TextScramble";
import { SpotlightCard } from "@/app/components/ui/SpotlightCard";

const services = [
    {
        id: "01",
        title: "Creative Development",
        description: "WebGL, Three.js, and custom shaders for immersive web experiences that push the boundaries of what's possible in a browser.",
        tags: ["React", "WebGL", "GSAP", "Three.js"],
        icon: "◆",
    },
    {
        id: "02",
        title: "Digital Product Design",
        description: "User-centric interfaces with avant-garde aesthetics and fluid motion design that converts visitors into customers.",
        tags: ["UI/UX", "Figma", "Motion", "Prototyping"],
        icon: "◇",
    },
    {
        id: "03",
        title: "Technical Strategy",
        description: "Scalable architecture and performance optimization for high-traffic applications that need to handle millions of users.",
        tags: ["Next.js", "Cloud", "Security", "DevOps"],
        icon: "○",
    },
    {
        id: "04",
        title: "Brand Identity",
        description: "Visual systems that cut through the noise and define market leaders. From logo to full brand ecosystems.",
        tags: ["Branding", "3D", "Typography", "Animation"],
        icon: "□",
    },
];

export function Services() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="services" className="py-32">
            <div className="container mx-auto px-4 md:px-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <span className="font-mono text-sm uppercase tracking-widest text-lime">
                            // What we do
                        </span>
                        <h2 className="mt-2 font-display text-6xl uppercase text-silver md:text-8xl">
                            Our <span className="text-lime">Craft</span>
                        </h2>
                    </div>
                    <p className="max-w-sm font-mono text-sm text-gray-500">
                        We don&apos;t just build products. We engineer experiences that people remember.
                    </p>
                </motion.div>

                {/* Services List */}
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                            className="group relative border-b border-white/5 transition-colors"
                        >
                            {/* Hover background glow */}
                            <motion.div
                                className="absolute inset-0 -z-10 bg-gradient-to-r from-lime/[0.03] to-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            />

                            <div className="cursor-pointer py-10 md:py-14">
                                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                                    {/* Number + Icon */}
                                    <div className="flex items-center gap-6">
                                        <span className="font-mono text-lg text-lime/40 transition-colors group-hover:text-lime">
                                            ({service.id})
                                        </span>
                                        <motion.span
                                            className="text-2xl text-white/10 transition-colors group-hover:text-lime"
                                            animate={{
                                                rotate: activeIndex === index ? 180 : 0,
                                            }}
                                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            {service.icon}
                                        </motion.span>
                                    </div>

                                    {/* Title with scramble */}
                                    <h3 className="flex-1 font-display text-4xl uppercase text-silver transition-all duration-500 group-hover:translate-x-4 group-hover:text-white md:text-6xl">
                                        <TextScramble className="inline-block">
                                            {service.title}
                                        </TextScramble>
                                    </h3>

                                    {/* Arrow */}
                                    <motion.div
                                        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-lime group-hover:bg-lime group-hover:text-void"
                                        animate={{
                                            rotate: activeIndex === index ? 45 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ArrowUpRight className="h-6 w-6" />
                                    </motion.div>
                                </div>

                                {/* Expanded content */}
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-end md:pl-[120px]">
                                                <p className="max-w-md font-mono text-sm leading-relaxed text-gray-400">
                                                    {service.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.tags.map((tag, i) => (
                                                        <motion.span
                                                            key={i}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: i * 0.05 }}
                                                            className="rounded-full border border-lime/20 bg-lime/5 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-lime/70"
                                                        >
                                                            {tag}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Active line indicator */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-[2px] bg-lime"
                                initial={{ width: "0%" }}
                                animate={{ width: activeIndex === index ? "100%" : "0%" }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
