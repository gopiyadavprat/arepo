"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["DIGITAL", "ALCHEMY", "PRECISION", "MOTION", "FUTURE"];

export function Preloader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index === words.length - 1) {
            setTimeout(() => setIsLoading(false), 1000);
            return;
        }
        const timeout = setTimeout(
            () => {
                setIndex(index + 1);
            },
            index === 0 ? 1000 : 150
        );
        return () => clearTimeout(timeout);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    } as any;

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    variants={{
                        initial: { opacity: 1 },
                        exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 } }, // Fade out container
                    }}
                    initial="initial"
                    exit="exit"
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-void"
                >
                    {/* Text Animation */}
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 font-display text-4xl text-silver md:text-6xl"
                    >
                        {words[index]}
                    </motion.p>

                    {/* SVG Curve Curtain */}
                    <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none">
                        <motion.path
                            variants={curve}
                            initial="initial"
                            exit="exit"
                            fill="#050505" // Same as bg-void
                        />
                    </svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
