"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
    {
        title: "Navigation",
        links: [
            { label: "Services", href: "#services" },
            { label: "Work", href: "#portfolio" },
            { label: "Process", href: "#process" },
            { label: "Testimonials", href: "#testimonials" },
        ],
    },
    {
        title: "Connect",
        links: [
            { label: "Instagram", href: "#" },
            { label: "Twitter / X", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
        ],
    },
];

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-white/10 bg-void pb-8 pt-20">
            <div className="container mx-auto px-4 md:px-10">
                {/* Top Section with stagger animation */}
                <div className="mb-16 grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <a href="#" className="font-display text-3xl font-bold uppercase tracking-tighter text-silver transition-colors hover:text-lime">
                            STT<span className="text-lime">.</span>
                        </a>
                        <p className="mt-4 max-w-xs font-mono text-sm text-gray-600">
                            Engineering digital excellence. We build what others can&apos;t — from idea to production, flawlessly.
                        </p>
                    </motion.div>

                    {/* Link Columns with stagger */}
                    {footerLinks.map((group, groupIndex) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ delay: (groupIndex + 1) * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-lime">
                                {group.title}
                            </h4>
                            <ul className="space-y-3">
                                {group.links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.label}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (groupIndex + 1) * 0.15 + linkIndex * 0.05, duration: 0.5 }}
                                    >
                                        <a
                                            href={link.href}
                                            className="group flex items-center gap-2 font-mono text-sm text-gray-500 transition-all duration-300 hover:text-silver hover:translate-x-1"
                                        >
                                            {link.label}
                                            <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Row with reveal */}
                <motion.div
                    className="mb-16 grid gap-8 border-y border-white/5 py-10 md:grid-cols-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-600">Email</span>
                        <a href="mailto:hello@stt.dev" className="group mt-1 flex items-center gap-2 font-display text-xl text-silver transition-colors hover:text-lime">
                            hello@stt.dev
                            <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-600">Phone</span>
                        <a href="tel:+919999999999" className="group mt-1 flex items-center gap-2 font-display text-xl text-silver transition-colors hover:text-lime">
                            +91 99999 99999
                            <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-600">Location</span>
                        <p className="mt-1 font-display text-xl text-silver">
                            India 🇮🇳
                        </p>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className="flex flex-col items-center justify-between gap-4 md:flex-row"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="font-mono text-xs text-gray-700">
                        © {new Date().getFullYear()} STT. All rights reserved.
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-600 transition-colors hover:text-lime"
                    >
                        Back to top
                        <motion.span
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-lime group-hover:bg-lime/10"
                            whileHover={{ y: -3 }}
                        >
                            ↑
                        </motion.span>
                    </button>
                </motion.div>
            </div>
        </footer>
    );
}
