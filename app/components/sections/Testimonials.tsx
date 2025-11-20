"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "They didn't just build a website; they built a digital monument. The attention to detail is terrifyingly good.",
        author: "ALEX RIVERA",
        role: "CEO, NEXUS",
    },
    {
        quote: "Absolute wizards. Our conversion rate tripled overnight. The motion design is unlike anything we've seen.",
        author: "SARAH CHEN",
        role: "CMO, VELOCITY",
    },
];

export function Testimonials() {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4 md:px-10">
                <div className="grid gap-20 md:grid-cols-2">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative border-l border-lime pl-8"
                        >
                            <div className="mb-6 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-lime text-lime" />
                                ))}
                            </div>
                            <p className="mb-8 font-display text-3xl uppercase leading-tight text-silver md:text-4xl">
                                "{t.quote}"
                            </p>
                            <div>
                                <div className="font-bold text-white">{t.author}</div>
                                <div className="font-mono text-sm text-gray-500">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
