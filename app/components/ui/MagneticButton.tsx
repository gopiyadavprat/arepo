"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
    onClick?: () => void;
}

export function MagneticButton({ children, className, strength = 0.5, onClick }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [ripple, setRipple] = useState<{ x: number; y: number; key: number } | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        setPosition({ x: x * strength, y: y * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const handleClick = (e: React.MouseEvent) => {
        const { left, top } = ref.current!.getBoundingClientRect();
        setRipple({ x: e.clientX - left, y: e.clientY - top, key: Date.now() });
        onClick?.();
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "group relative overflow-hidden rounded-full bg-lime px-8 py-4 font-bold text-void transition-colors",
                className
            )}
        >
            {/* Hover shine effect */}
            <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ translateX: position.x !== 0 ? "200%" : "-100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Ripple effect on click */}
            {ripple && (
                <motion.span
                    key={ripple.key}
                    className="absolute rounded-full bg-white/30"
                    style={{ left: ripple.x, top: ripple.y }}
                    initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 1 }}
                    animate={{ width: 300, height: 300, x: -150, y: -150, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    onAnimationComplete={() => setRipple(null)}
                />
            )}

            <span className="relative z-10 flex items-center">{children}</span>
        </motion.button>
    );
}
