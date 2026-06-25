"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealSectionProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "left" | "right" | "scale";
    delay?: number;
}

export function RevealSection({
    children,
    className = "",
    direction = "up",
    delay = 0,
}: RevealSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const variants = {
        up: {
            hidden: { opacity: 0, y: 80, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        },
        left: {
            hidden: { opacity: 0, x: -80, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
        },
        right: {
            hidden: { opacity: 0, x: 80, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.9, filter: "blur(6px)" },
            visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[direction]}
            transition={{
                duration: 0.9,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

// Stagger children wrapper — each child animates in sequence
export function StaggerReveal({
    children,
    className = "",
    staggerDelay = 0.08,
}: {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

// Individual stagger item
export function StaggerItem({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
