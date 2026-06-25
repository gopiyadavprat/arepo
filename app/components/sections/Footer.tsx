"use client";

import { ArrowUpRight } from "lucide-react";

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
                {/* Top Section */}
                <div className="mb-16 grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <a href="#" className="font-display text-3xl font-bold uppercase tracking-tighter text-silver">
                            STT<span className="text-lime">.</span>
                        </a>
                        <p className="mt-4 max-w-xs font-mono text-sm text-gray-500">
                            Engineering digital excellence. We build what others can&apos;t — from idea to production, flawlessly.
                        </p>
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-lime">
                                {group.title}
                            </h4>
                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center gap-2 font-mono text-sm text-gray-400 transition-colors hover:text-silver"
                                        >
                                            {link.label}
                                            <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Row */}
                <div className="mb-16 grid gap-8 border-y border-white/10 py-10 md:grid-cols-3">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Email</span>
                        <a href="mailto:hello@stt.dev" className="mt-1 block font-display text-xl text-silver transition-colors hover:text-lime">
                            hello@stt.dev
                        </a>
                    </div>
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Phone</span>
                        <a href="tel:+919999999999" className="mt-1 block font-display text-xl text-silver transition-colors hover:text-lime">
                            +91 99999 99999
                        </a>
                    </div>
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Location</span>
                        <p className="mt-1 font-display text-xl text-silver">
                            India 🇮🇳
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="font-mono text-xs text-gray-600">
                        © {new Date().getFullYear()} STT. All rights reserved.
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-500 transition-colors hover:text-lime"
                    >
                        Back to top
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-lime group-hover:bg-lime/10">
                            ↑
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
