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

    return (
        <span
            className={className}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {displayText}
        </span>
    );
}
