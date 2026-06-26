"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { ArrowRight, Send, CheckCircle } from "lucide-react";
import { SpotlightCard } from "@/app/components/ui/SpotlightCard";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        project: "",
        budget: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // In production, you'd send this to your backend
    };

    const budgetOptions = ["< $5K", "$5K - $15K", "$15K - $50K", "$50K+"];

    if (isSubmitted) {
        return (
            <section className="py-32">
                <div className="container mx-auto px-4 md:px-10">
                    <motion.div
                        className="flex flex-col items-center justify-center py-20 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                            <CheckCircle className="mb-6 h-16 w-16 text-lime" />
                        </motion.div>
                        <h3 className="mb-4 font-display text-4xl uppercase text-silver md:text-6xl">
                            Message <span className="text-lime">Sent</span>
                        </h3>
                        <p className="max-w-md font-mono text-sm text-gray-500">
                            Thank you for reaching out. We&apos;ll get back to you within 24 hours with a detailed response.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-32">
            <div className="container mx-auto px-4 md:px-10">
                <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">
                    {/* Left column — info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="font-mono text-sm uppercase tracking-widest text-lime">
                            // Get in touch
                        </span>
                        <h2 className="mt-2 font-display text-5xl uppercase text-silver md:text-7xl">
                            Let&apos;s <span className="text-lime">Talk</span>
                        </h2>
                        <p className="mt-6 max-w-sm font-mono text-sm leading-relaxed text-gray-500">
                            Have a project in mind? Fill out the form and we&apos;ll get back to you within 24 hours. Or just say hi — we don&apos;t bite.
                        </p>

                        <div className="mt-12 space-y-6">
                            <div>
                                <span className="font-mono text-xs uppercase tracking-widest text-gray-600">Email</span>
                                <a href="mailto:hello@stt.dev" className="mt-1 block font-display text-lg text-silver transition-colors hover:text-lime">
                                    hello@stt.dev
                                </a>
                            </div>
                            <div>
                                <span className="font-mono text-xs uppercase tracking-widest text-gray-600">Based in</span>
                                <p className="mt-1 font-display text-lg text-silver">India 🇮🇳</p>
                            </div>
                            <div>
                                <span className="font-mono text-xs uppercase tracking-widest text-gray-600">Response time</span>
                                <p className="mt-1 font-display text-lg text-silver">&lt; 24 hours</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column — form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <SpotlightCard className="rounded-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6 p-6 md:p-10">
                                {/* Name & Email row */}
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="relative">
                                        <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-gray-600">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            onFocus={() => setFocusedField("name")}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full border-b border-white/10 bg-transparent py-3 font-mono text-sm text-silver outline-none transition-colors focus:border-lime"
                                            placeholder="John Doe"
                                        />
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-px bg-lime"
                                            animate={{ width: focusedField === "name" ? "100%" : "0%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-gray-600">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            onFocus={() => setFocusedField("email")}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full border-b border-white/10 bg-transparent py-3 font-mono text-sm text-silver outline-none transition-colors focus:border-lime"
                                            placeholder="john@company.com"
                                        />
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-px bg-lime"
                                            animate={{ width: focusedField === "email" ? "100%" : "0%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </div>

                                {/* Project type */}
                                <div className="relative">
                                    <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-gray-600">
                                        Project Type
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.project}
                                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                                        onFocus={() => setFocusedField("project")}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full border-b border-white/10 bg-transparent py-3 font-mono text-sm text-silver outline-none transition-colors focus:border-lime"
                                        placeholder="Web App, E-Commerce, SaaS..."
                                    />
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-px bg-lime"
                                        animate={{ width: focusedField === "project" ? "100%" : "0%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>

                                {/* Budget */}
                                <div>
                                    <label className="mb-3 block font-mono text-xs uppercase tracking-widest text-gray-600">
                                        Budget Range
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {budgetOptions.map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, budget: option })}
                                                className={`rounded-full border px-4 py-2 font-mono text-xs transition-all ${
                                                    formData.budget === option
                                                        ? "border-lime bg-lime/10 text-lime"
                                                        : "border-white/10 text-gray-500 hover:border-white/20 hover:text-gray-300"
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-gray-600">
                                        Tell us about your project *
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        onFocus={() => setFocusedField("message")}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full resize-none border-b border-white/10 bg-transparent py-3 font-mono text-sm text-silver outline-none transition-colors focus:border-lime"
                                        placeholder="Describe your project, goals, and timeline..."
                                    />
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-px bg-lime"
                                        animate={{ width: focusedField === "message" ? "100%" : "0%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>

                                {/* Submit */}
                                <div className="pt-4">
                                    <MagneticButton className="w-full justify-center py-5 text-base md:w-auto">
                                        <Send className="mr-2 h-4 w-4" />
                                        Send Message
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </MagneticButton>
                                </div>
                            </form>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
