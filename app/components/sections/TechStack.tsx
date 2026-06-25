"use client";

import { VelocityText } from "@/app/components/ui/VelocityText";
import { motion } from "framer-motion";

const technologies = [
    "Next.js", "React", "TypeScript", "Tailwind", "Framer Motion",
    "WebGL", "Three.js", "Node.js", "PostgreSQL", "AWS",
];

export function TechStack() {
    return (
        <section className="overflow-hidden bg-lime py-20 text-void">
            <motion.div
                className="mb-10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-void/50">
                    // Our Arsenal
                </span>
                <h3 className="mt-2 font-display text-3xl font-bold uppercase text-void md:text-4xl">
                    Powered By Modern Technologies
                </h3>
            </motion.div>

            <VelocityText text="NEXT.JS  REACT  TYPESCRIPT  TAILWIND  FRAMER  WEBGL  THREE.JS" />

            {/* Tech grid with stagger animation */}
            <div className="container mx-auto mt-12 px-4 md:px-10">
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {technologies.map((tech, i) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{
                                delay: i * 0.06,
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(5, 5, 5, 1)",
                                color: "rgba(204, 255, 0, 1)",
                            }}
                            className="cursor-default rounded-full border border-void/20 bg-void/10 px-5 py-2 font-mono text-sm font-bold text-void transition-all"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
