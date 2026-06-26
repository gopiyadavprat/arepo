"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/app/hooks/useDevice";

const projects = [
    {
        title: "NEBULA\nFINANCE",
        category: "FINTECH",
        year: "2024",
        image: "/projects/nebula-v4.png",
        accent: "#6366f1",
    },
    {
        title: "CYBER\nPUNK",
        category: "GAMING",
        year: "2024",
        image: "/projects/cyberpunk-v4.png",
        accent: "#a855f7",
    },
    {
        title: "ECO\nSYSTEM",
        category: "SUSTAINABILITY",
        year: "2023",
        image: "/projects/ecosystem-v4.png",
        accent: "#10b981",
    },
    {
        title: "VOID\nARCHIVE",
        category: "FASHION",
        year: "2023",
        image: "/projects/voidarchive.png",
        accent: "#f97316",
    },
];

function ProjectCard({
    project,
    index,
    isMobile,
}: {
    project: (typeof projects)[0];
    index: number;
    isMobile: boolean;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const bgX = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), { stiffness: 100, damping: 20 });
    const bgY = useSpring(useTransform(mouseY, [0, 1], [-30, 30]), { stiffness: 100, damping: 20 });
    const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 200, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 200, damping: 30 });

    function handleMouseMove(e: MouseEvent) {
        if (isMobile || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    }

    function handleMouseLeave() {
        mouseX.set(0.5);
        mouseY.set(0.5);
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={isMobile ? {} : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="group relative flex h-[70vh] w-[80vw] shrink-0 cursor-pointer flex-col overflow-hidden rounded-lg border border-white/5 bg-[#0a0a0a] md:w-[50vw]"
        >
            {/* Screenshot image — properly contained */}
            <motion.div
                className="relative flex-1 overflow-hidden"
                style={isMobile ? {} : { x: bgX, y: bgY }}
            >
                <Image
                    src={project.image}
                    alt={project.title.replace("\n", " ")}
                    fill
                    className="object-contain object-top p-4 opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 80vw, 50vw"
                    priority={index < 2}
                />

                {/* Grid overlay on hover (desktop only) */}
                {!isMobile && (
                    <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-15"
                        style={{
                            backgroundImage: `linear-gradient(${project.accent}20 1px, transparent 1px), linear-gradient(90deg, ${project.accent}20 1px, transparent 1px)`,
                            backgroundSize: "40px 40px",
                        }}
                    />
                )}
            </motion.div>

            {/* Bottom info bar */}
            <div className="relative z-10 flex items-end justify-between border-t border-white/5 p-6 md:p-8">
                <div>
                    <span
                        className="mb-2 inline-block rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest"
                        style={{ borderColor: `${project.accent}60`, color: project.accent }}
                    >
                        {project.category}
                    </span>
                    <h3 className="font-display text-3xl uppercase leading-[0.9] text-silver md:text-5xl">
                        {project.title.split("\n").map((line, i) => (
                            <span key={i} className="block">{line}</span>
                        ))}
                    </h3>
                </div>
                <div className="flex flex-col items-end gap-3">
                    <span className="font-mono text-xs text-silver/30">{project.year}</span>
                    <div
                        className="flex h-10 w-10 items-center justify-center rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100 max-md:opacity-100"
                        style={{ backgroundColor: `${project.accent}20`, color: project.accent }}
                    >
                        <ArrowUpRight className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Portfolio() {
    const isMobile = useIsMobile();
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section id="portfolio" ref={targetRef} className="relative h-[300vh] bg-void">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-6 px-6 md:gap-10 md:px-10">
                    {/* Title Card */}
                    <div className="flex h-[70vh] w-[80vw] shrink-0 flex-col justify-center md:w-[40vw]">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="font-mono text-sm uppercase tracking-widest text-lime">// Portfolio</span>
                            <h2 className="mt-4 font-display text-7xl uppercase leading-none text-silver md:text-[10vw]">
                                Selected <br /><span className="text-lime">Works</span>
                            </h2>
                            <p className="mt-8 max-w-md font-mono text-sm text-gray-500">
                                A curated gallery of our most ambitious projects.
                                Every pixel placed with intent. Every interaction crafted with purpose.
                            </p>
                            <div className="mt-8 flex items-center gap-3">
                                <div className="h-px w-12 bg-lime/30" />
                                <span className="font-mono text-xs uppercase tracking-widest text-gray-600">
                                    {isMobile ? "Swipe →" : "Scroll to explore →"}
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} isMobile={isMobile} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
