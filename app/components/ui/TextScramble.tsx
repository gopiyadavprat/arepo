"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface TextScrambleProps {
    children: string;
    className?: string;
    speed?: number;
    scrambleChars?: string;
}

export function TextScramble({
    children,
    className = "",
    speed = 30,
    scrambleChars = "!@#$%^&*()_+{}|:<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
}: TextScrambleProps) {
    const [displayText, setDisplayText] = useState(children);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const iterationRef = useRef(0);

    const scramble = useCallback(() => {
        iterationRef.current = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(
                children
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (index < iterationRef.current) return children[index];
                        return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                    })
                    .join("")
            );

            iterationRef.current += 1 / 3;

            if (iterationRef.current >= children.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setDisplayText(children);
            }
        }, speed);
    }, [children, speed, scrambleChars]);

    useEffect(() => {
        if (isHovering) {
            scramble();
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setDisplayText(children);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovering, scramble, children]);

    const containerRef = useRef<HTMLSpanElement>(null);
    const hasPlayedRef = useRef(false);

    // Trigger scramble on first scroll into view (mobile)
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasPlayedRef.current) {
                    hasPlayedRef.current = true;
                    scramble();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [scramble]);

    const handleTap = () => {
        scramble();
    };

    return (
        <span
            ref={containerRef}
            className={className}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={handleTap}
        >
            {displayText}
        </span>
    );
}
