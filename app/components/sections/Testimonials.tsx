"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ScrollRevealText } from "@/app/components/ui/ScrollRevealText";

const testimonials = [
    {
        quote: "They didn't just build a website — they built a digital monument. The attention to detail is terrifyingly good.",
        author: "ALEX RIVERA",
        role: "CEO, NEXUS",
    },
    {
        quote: "Absolute wizards. Our conversion rate tripled overnight. The motion design is unlike anything we've seen.",
        author: "SARAH CHEN",
        role: "CMO, VELOCITY",
    },
    {
        quote: "From day one they understood our vision. The final product exceeded every expectation. Truly world-class engineering.",
        author: "MARCUS JOHNSON",
        role: "CTO, QUANTUM LABS",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-32">
            <div className="container mx-auto px-4 md:px-10">
                <div className="mb-20">
                    <span className="font-mono text-sm uppercase tracking-widest text-lime">
                        // What they say
                    </span>
                    <h2 className="mt-2 font-display text-6xl uppercase text-silver md:text-8xl">
                        Client <span className="text-lime">Voices</span>
                    </h2>
                </div>

                <div className="space-y-24">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative border-l-2 border-lime/30 pl-8 md:pl-12"
                        >
                            <div className="mb-6 flex gap-1">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="h-4 w-4 fill-lime text-lime" />
                                ))}
                            </div>

                            {/* Scroll-triggered word-by-word reveal */}
                            <ScrollRevealText className="mb-8 font-display text-3xl uppercase leading-tight text-silver md:text-5xl">
                                {`"${t.quote}"`}
                            </ScrollRevealText>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <div className="font-bold text-white">{t.author}</div>
                                <div className="font-mono text-sm text-gray-500">{t.role}</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
