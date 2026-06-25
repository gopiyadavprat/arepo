"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealTextProps {
    children: string;
    className?: string;
}

export function ScrollRevealText({ children, className = "" }: ScrollRevealTextProps) {
    const containerRef = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.25"],
    });

    const words = children.split(" ");

    return (
        <p ref={containerRef} className={`flex flex-wrap ${className}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}

function Word({
    children,
    progress,
    range,
}: {
    children: string;
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
    range: [number, number];
}) {
    const opacity = useTransform(progress, range, [0.15, 1]);
    const y = useTransform(progress, range, [2, 0]);

    return (
        <span className="relative mr-[0.4em] mt-1 inline-block">
            {/* Ghost text for layout */}
            <span className="invisible">{children}</span>
            {/* Animated text */}
            <motion.span
                className="absolute left-0 top-0"
                style={{ opacity, y }}
            >
                {children}
            </motion.span>
        </span>
    );
}
