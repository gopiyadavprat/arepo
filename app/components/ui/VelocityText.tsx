"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8]">
            <motion.div className="flex flex-nowrap text-9xl font-black uppercase text-silver/20" style={{ x }}>
                <span className="mr-8 block">{children} </span>
                <span className="mr-8 block">{children} </span>
                <span className="mr-8 block">{children} </span>
                <span className="mr-8 block">{children} </span>
            </motion.div>
        </div>
    );
}

export function VelocityText({ text }: { text: string }) {
    return (
        <section className="py-10">
            <ParallaxText baseVelocity={-5}>{text}</ParallaxText>
            <ParallaxText baseVelocity={5}>{text}</ParallaxText>
        </section>
    );
}
