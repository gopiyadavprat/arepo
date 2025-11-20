"use client";

import { cn } from "@/app/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface SectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn("relative w-full py-24 md:py-32", className)}
            {...props}
        >
            {children}
        </motion.section>
    );
}
