"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const startTime = useRef(Date.now());

    useEffect(() => {
        const duration = 2800; // total load time in ms
        let rafId: number;

        const update = () => {
            const elapsed = Date.now() - startTime.current;
            // Eased progress: fast start, slow middle, fast end
            const linear = Math.min(elapsed / duration, 1);
            const eased = linear < 0.5
                ? 4 * linear * linear * linear
                : 1 - Math.pow(-2 * linear + 2, 3) / 2;

            setProgress(Math.floor(eased * 100));

            if (linear < 1) {
                rafId = requestAnimationFrame(update);
            } else {
                setProgress(100);
                setTimeout(() => setIsComplete(true), 400);
                setTimeout(() => setIsVisible(false), 1400);
            }
        };

        rafId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(rafId);
    }, []);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {!isComplete ? (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-void"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Brand mark */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-16"
                    >
                        <span className="font-display text-5xl font-bold tracking-tighter text-silver md:text-7xl">
                            STT<span className="text-lime">.</span>
                        </span>
                    </motion.div>

                    {/* Progress bar */}
                    <div className="relative w-[280px] md:w-[400px]">
                        <div className="h-[1px] w-full bg-white/10">
                            <motion.div
                                className="h-full bg-lime"
                                style={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>

                        {/* Counter */}
                        <div className="mt-6 flex items-baseline justify-between">
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500">
                                Loading
                            </span>
                            <div className="font-display text-6xl font-bold tabular-nums text-silver md:text-8xl">
                                {String(progress).padStart(3, "\u00A0")}
                                <span className="text-lime">%</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom tag */}
                    <motion.div
                        className="absolute bottom-10 font-mono text-[10px] uppercase tracking-[0.4em] text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Engineering Digital Excellence
                    </motion.div>
                </motion.div>
            ) : (
                /* Curtain reveal — two halves split apart */
                <motion.div
                    key="curtain"
                    className="pointer-events-none fixed inset-0 z-[9999] flex"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                >
                    <motion.div
                        className="h-full w-1/2 bg-void"
                        initial={{ x: "0%" }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    />
                    <motion.div
                        className="h-full w-1/2 bg-void"
                        initial={{ x: "0%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
