"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "NEBULA FINANCE",
        category: "FINTECH",
        year: "2024",
        image: "bg-gradient-to-br from-blue-900 to-black",
    },
    {
        title: "CYBER PUNK",
        category: "GAMING",
        year: "2024",
        image: "bg-gradient-to-br from-purple-900 to-black",
    },
    {
        title: "ECO SYSTEM",
        category: "SUSTAINABILITY",
        year: "2023",
        image: "bg-gradient-to-br from-green-900 to-black",
    },
    {
        title: "VOID ARCHIVE",
        category: "FASHION",
        year: "2023",
        image: "bg-gradient-to-br from-gray-900 to-black",
    },
];

export function Portfolio() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-void">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 px-10">
                    {/* Title Card */}
                    <div className="flex h-[70vh] w-[80vw] shrink-0 flex-col justify-center md:w-[40vw]">
                        <h2 className="font-display text-8xl uppercase leading-none text-silver md:text-[10vw]">
                            Selected <br />
                            <span className="text-lime">Works</span>
                        </h2>
                        <p className="mt-8 max-w-md font-mono text-gray-400">
                            A curated gallery of our most ambitious projects. We push pixels until they break.
                        </p>
                    </div>

                    {/* Project Cards */}
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative h-[70vh] w-[80vw] shrink-0 overflow-hidden bg-white/5 md:w-[50vw]"
                        >
                            <div className={`absolute inset-0 ${project.image} opacity-50 transition-opacity duration-500 group-hover:opacity-80`} />

                            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                                <div className="flex justify-between border-b border-white/10 pb-4">
                                    <span className="font-mono text-sm text-lime">{project.category}</span>
                                    <span className="font-mono text-sm text-silver">{project.year}</span>
                                </div>

                                <div>
                                    <h3 className="font-display text-4xl uppercase text-silver md:text-6xl">
                                        {project.title}
                                    </h3>
                                    <div className="mt-4 flex items-center gap-2 text-lime opacity-0 transition-opacity group-hover:opacity-100">
                                        <span className="font-mono text-sm uppercase">View Case Study</span>
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
