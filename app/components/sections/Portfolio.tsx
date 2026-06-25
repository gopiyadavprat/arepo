"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "NEBULA\nFINANCE",
        category: "FINTECH",
        year: "2024",
        color: "from-blue-600/30 via-indigo-900/40 to-black",
        accent: "#6366f1",
    },
    {
        title: "CYBER\nPUNK",
        category: "GAMING",
        year: "2024",
        color: "from-purple-600/30 via-fuchsia-900/40 to-black",
        accent: "#a855f7",
    },
    {
        title: "ECO\nSYSTEM",
        category: "SUSTAINABILITY",
        year: "2023",
        color: "from-emerald-600/30 via-green-900/40 to-black",
        accent: "#10b981",
    },
    {
        title: "VOID\nARCHIVE",
        category: "FASHION",
        year: "2023",
        color: "from-orange-600/30 via-red-900/40 to-black",
        accent: "#f97316",
    },
];

function ProjectCard({
    project,
    index,
}: {
    project: (typeof projects)[0];
    index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const bgX = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), { stiffness: 100, damping: 20 });
    const bgY = useSpring(useTransform(mouseY, [0, 1], [-30, 30]), { stiffness: 100, damping: 20 });
    const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 200, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 200, damping: 30 });

    function handleMouseMove(e: MouseEvent) {
        if (!cardRef.current) return;
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
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="group relative h-[70vh] w-[80vw] shrink-0 cursor-pointer overflow-hidden md:w-[50vw]"
        >
            {/* Parallax background gradient */}
            <motion.div
                className={`absolute -inset-10 bg-gradient-to-br ${project.color}`}
                style={{ x: bgX, y: bgY }}
            />

            {/* Animated border glow on hover */}
            <div
                className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                    boxShadow: `inset 0 0 80px ${project.accent}22, 0 0 60px ${project.accent}11`,
                }}
            />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30"
                style={{
                    backgroundImage: `linear-gradient(${project.accent}15 1px, transparent 1px), linear-gradient(90deg, ${project.accent}15 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Large number watermark */}
            <motion.div
                className="absolute -right-4 -top-8 font-display text-[25vw] font-bold leading-none text-white/[0.02] md:text-[15vw]"
                style={{ x: bgX, y: bgY }}
            >
                {String(index + 1).padStart(2, "0")}
            </motion.div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                <div className="flex items-start justify-between">
                    <div>
                        <motion.span
                            className="inline-block rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-widest"
                            style={{ borderColor: `${project.accent}40`, color: project.accent }}
                        >
                            {project.category}
                        </motion.span>
                    </div>
                    <span className="font-mono text-sm text-silver/40">{project.year}</span>
                </div>

                <div>
                    <h3 className="font-display text-5xl uppercase leading-[0.9] text-silver md:text-7xl">
                        {project.title.split("\n").map((line, i) => (
                            <span key={i} className="block">
                                <motion.span
                                    className="inline-block"
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -5 }}
                                >
                                    {line}
                                </motion.span>
                            </span>
                        ))}
                    </h3>
                    <div className="mt-6 flex items-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-full"
                            style={{ backgroundColor: `${project.accent}20`, color: project.accent }}
                        >
                            <ArrowUpRight className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-sm uppercase tracking-widest" style={{ color: project.accent }}>
                            View Case Study
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Portfolio() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section id="portfolio" ref={targetRef} className="relative h-[300vh] bg-void">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 px-10">
                    {/* Title Card */}
                    <div className="flex h-[70vh] w-[80vw] shrink-0 flex-col justify-center md:w-[40vw]">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="font-mono text-sm uppercase tracking-widest text-lime">
                                // Portfolio
                            </span>
                            <h2 className="mt-4 font-display text-8xl uppercase leading-none text-silver md:text-[10vw]">
                                Selected <br />
                                <span className="text-lime">Works</span>
                            </h2>
                            <p className="mt-8 max-w-md font-mono text-sm text-gray-500">
                                A curated gallery of our most ambitious projects.
                                Every pixel placed with intent. Every interaction crafted with purpose.
                            </p>
                            <div className="mt-8 flex items-center gap-3">
                                <div className="h-px w-12 bg-lime/30" />
                                <span className="font-mono text-xs uppercase tracking-widest text-gray-600">
                                    Drag or scroll →
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Project Cards with parallax hover */}
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
