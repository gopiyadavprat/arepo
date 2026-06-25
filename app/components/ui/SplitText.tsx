"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextProps {
    children: string;
    className?: string;
    delay?: number;
    staggerSpeed?: number;
}

export function SplitText({ children, className = "", delay = 0, staggerSpeed = 0.03 }: SplitTextProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    // Split into lines by <br> markers, then into characters
    const words = children.split(" ");

    return (
        <span ref={ref} className={`inline ${className}`}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, charIndex) => {
                        const totalIndex = words
                            .slice(0, wordIndex)
                            .reduce((acc, w) => acc + w.length + 1, 0) + charIndex;

                        return (
                            <motion.span
                                key={`${wordIndex}-${charIndex}`}
                                className="inline-block"
                                initial={{ opacity: 0, y: 80, rotateX: -90 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0, rotateX: 0 }
                                        : { opacity: 0, y: 80, rotateX: -90 }
                                }
                                transition={{
                                    duration: 0.6,
                                    delay: delay + totalIndex * staggerSpeed,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {char}
                            </motion.span>
                        );
                    })}
                    {wordIndex < words.length - 1 && (
                        <span className="inline-block">&nbsp;</span>
                    )}
                </span>
            ))}
        </span>
    );
}
