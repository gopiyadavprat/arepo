"use client";

import { motion } from "framer-motion";

const clients = [
    "GOOGLE",
    "STRIPE",
    "VERCEL",
    "FIGMA",
    "NOTION",
    "LINEAR",
    "SUPABASE",
    "RAILWAY",
    "PLANETSCALE",
    "RESEND",
];

export function ClientMarquee() {
    return (
        <section className="border-y border-white/5 bg-void py-12 overflow-hidden">
            <div className="mb-6 text-center font-mono text-xs uppercase tracking-[0.3em] text-gray-600">
                Trusted By Industry Leaders
            </div>
            <div className="relative flex overflow-hidden">
                {/* Gradient masks */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-void to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-void to-transparent" />

                {/* First strip */}
                <motion.div
                    className="flex shrink-0 items-center gap-16"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {[...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="flex shrink-0 items-center gap-3 whitespace-nowrap px-4"
                        >
                            <div className="h-2 w-2 rounded-full bg-lime/30" />
                            <span className="font-display text-2xl font-bold tracking-wider text-white/10 transition-colors duration-300 hover:text-white/30">
                                {client}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
