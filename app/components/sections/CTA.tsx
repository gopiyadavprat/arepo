"use client";

import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="relative overflow-hidden border-t border-white/10 bg-void py-40">
            <div className="container mx-auto px-4 text-center md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="mb-6 inline-block font-mono text-sm uppercase tracking-widest text-lime">
                        Ready to start?
                    </span>
                    <h2 className="mb-4 font-display text-[10vw] leading-[0.85] text-silver">
                        LET&apos;S BUILD <br />
                        <span className="text-lime">SOMETHING</span> <br />
                        GREAT
                    </h2>
                    <p className="mx-auto mb-12 max-w-lg font-mono text-sm text-gray-400">
                        Have a project in mind? We&apos;d love to hear about it. 
                        Let&apos;s turn your vision into a digital masterpiece.
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <MagneticButton className="h-24 px-12 text-xl">
                        START YOUR PROJECT <ArrowRight className="ml-2 inline-block h-6 w-6" />
                    </MagneticButton>
                </div>
            </div>

            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/5 blur-[120px]" />
            </div>
        </section>
    );
}
