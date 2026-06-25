"use client";

import { motion } from "framer-motion";

const clients = [
    "GOOGLE", "STRIPE", "VERCEL", "FIGMA", "NOTION",
    "LINEAR", "SUPABASE", "RAILWAY", "PLANETSCALE", "RESEND",
];

export function ClientMarquee() {
    return (
        <section className="border-y border-white/5 bg-void py-10 overflow-hidden">
            <div className="relative flex overflow-hidden">
                {/* Edge gradient masks */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-void to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-void to-transparent" />

                {/* First marquee strip */}
                <motion.div
                    className="flex shrink-0 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" },
                    }}
                >
                    {[...clients, ...clients].map((client, index) => (
                        <div key={index} className="flex shrink-0 items-center px-8 md:px-12">
                            <span className="whitespace-nowrap font-display text-xl font-bold tracking-[0.15em] text-white/[0.07] transition-colors duration-500 hover:text-white/20 md:text-2xl">
                                {client}
                            </span>
                            <span className="ml-8 h-1 w-1 rounded-full bg-lime/20 md:ml-12" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
