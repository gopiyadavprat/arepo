"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useRef } from "react";

const testimonials = [
    {
        quote: "They didn't just build a website — they built a digital monument. The attention to detail is terrifyingly good.",
        author: "ALEX RIVERA",
        role: "CEO, NEXUS",
        highlight: "digital monument",
    },
    {
        quote: "Absolute wizards. Our conversion rate tripled overnight. The motion design is unlike anything we've seen.",
        author: "SARAH CHEN",
        role: "CMO, VELOCITY",
        highlight: "tripled overnight",
    },
    {
        quote: "From day one they understood our vision. The final product exceeded every expectation. Truly world-class engineering.",
        author: "MARCUS JOHNSON",
        role: "CTO, QUANTUM LABS",
        highlight: "world-class",
    },
];

function TestimonialCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start 0.9", "start 0.3"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const lineWidth = useTransform(scrollYProgress, [0.3, 1], ["0%", "100%"]);

    return (
        <motion.div
            ref={cardRef}
            style={{ x, opacity }}
            className="relative py-20 md:py-28"
        >
            {/* Separator line with scroll animation */}
            {i > 0 && (
                <motion.div
                    className="absolute top-0 left-0 right-0 h-px bg-white/5"
                >
                    <motion.div className="h-full bg-lime/20" style={{ width: lineWidth }} />
                </motion.div>
            )}

            <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
                {/* Left column — author info */}
                <div>
                    <div className="mb-4 flex gap-1">
                        {[...Array(5)].map((_, j) => (
                            <Star key={j} className="h-3 w-3 fill-lime text-lime" />
                        ))}
                    </div>
                    <div className="font-display text-xl font-bold uppercase text-white">
                        {t.author}
                    </div>
                    <div className="mt-1 font-mono text-xs uppercase tracking-widest text-gray-600">
                        {t.role}
                    </div>
                    <div className="mt-4 h-px w-12 bg-lime/20" />
                </div>

                {/* Right column — quote */}
                <blockquote className="font-display text-3xl uppercase leading-[1.2] text-silver/80 md:text-5xl">
                    &ldquo;{t.quote.split(t.highlight).map((part, idx, arr) => (
                        <span key={idx}>
                            {part}
                            {idx < arr.length - 1 && (
                                <span className="text-lime">{t.highlight}</span>
                            )}
                        </span>
                    ))}&rdquo;
                </blockquote>
            </div>
        </motion.div>
    );
}

export function Testimonials() {
    return (
        <section id="testimonials" className="py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="font-mono text-sm uppercase tracking-widest text-lime">
                        // What they say
                    </span>
                    <h2 className="mt-2 font-display text-6xl uppercase text-silver md:text-8xl">
                        Client <span className="text-lime">Voices</span>
                    </h2>
                </motion.div>

                <div>
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} t={t} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
