"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface TextProps {
    children: React.ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    variant?: "fade" | "slide" | "gradient";
    delay?: number;
}

export function Text({
    children,
    className,
    as: Component = "p",
    variant = "fade",
    delay = 0,
}: TextProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" as any });

    const variants = {
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        slide: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
        },
        gradient: {
            hidden: { opacity: 0, backgroundPosition: "0% 50%" },
            visible: {
                opacity: 1,
                backgroundPosition: "100% 50%",
                transition: { duration: 1.5, ease: "easeOut" },
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[variant] as any}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            <Component
                className={cn(
                    variant === "gradient" && "text-gradient bg-[length:200%_auto]",
                    className
                )}
            >
                {children}
            </Component>
        </motion.div>
    );
}
