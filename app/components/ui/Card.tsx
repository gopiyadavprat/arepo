"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    tilt?: boolean;
}

export function Card({ children, className, tilt = true }: CardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        if (!tilt) return;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function onMouseLeave() {
        if (!tilt) return;
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    return (
        <motion.div
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                rotateX: tilt ? rotateX : 0,
                rotateY: tilt ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "glass relative overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-white/20",
                className
            )}
        >
            <div style={{ transform: "translateZ(50px)" }}>{children}</div>
        </motion.div>
    );
}
