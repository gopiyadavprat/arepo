"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = "We don't chase trends — we set them. Every project is a chance to prove that the best digital experiences are born from obsession with craft, relentless iteration, and the audacity to build what no one else will.";

export function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.2"],
    });

    const wordArray = words.split(" ");

    return (
        <section ref={containerRef} className="relative bg-void py-40 md:py-60">
            {/* Background accent */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.02] blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="font-mono text-sm uppercase tracking-widest text-lime">
                        // Our Philosophy
                    </span>
                </motion.div>

                {/* Large scroll-driven word reveal */}
                <p className="flex flex-wrap font-display text-4xl uppercase leading-[1.3] tracking-tight md:text-6xl lg:text-7xl">
                    {wordArray.map((word, i) => {
                        const start = i / wordArray.length;
                        const end = start + 1 / wordArray.length;
                        return (
                            <PhilosophyWord
                                key={i}
                                progress={scrollYProgress}
                                range={[start, end]}
                            >
                                {word}
                            </PhilosophyWord>
                        );
                    })}
                </p>

                {/* Bottom signature */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-20 flex items-center gap-6"
                >
                    <div className="h-px w-16 bg-lime/30" />
                    <span className="font-mono text-sm uppercase tracking-widest text-gray-600">
                        — The STT Team
                    </span>
                </motion.div>
            </div>
        </section>
    );
}

function PhilosophyWord({
    children,
    progress,
    range,
}: {
    children: string;
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
    range: [number, number];
}) {
    const opacity = useTransform(progress, range, [0.1, 1]);
    const color = useTransform(
        progress,
        [range[0], range[1]],
        ["rgb(75, 75, 75)", "rgb(226, 226, 226)"]
    );

    return (
        <motion.span className="mr-[0.3em] mt-2 inline-block" style={{ opacity, color }}>
            {children}
        </motion.span>
    );
}
