"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > 100 && latest > previous) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
        setIsScrolled(latest > 50);
    });

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.header
                animate={{ y: isHidden ? "-100%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed left-0 right-0 top-0 z-[999] transition-all duration-300 ${
                    isScrolled
                        ? "border-b border-white/10 bg-void/80 backdrop-blur-xl"
                        : "bg-transparent"
                }`}
            >
                <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-10">
                    {/* Logo */}
                    <a href="#" className="font-display text-2xl font-bold uppercase tracking-tighter text-silver">
                        STT<span className="text-lime">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNavClick(link.href)}
                                className="group relative font-mono text-sm uppercase tracking-widest text-gray-400 transition-colors hover:text-silver"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <MagneticButton className="px-6 py-2 text-sm" strength={0.3}>
                            Let&apos;s Talk
                        </MagneticButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex h-10 w-10 items-center justify-center text-silver md:hidden"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[998] flex flex-col items-center justify-center gap-8 bg-void/95 backdrop-blur-xl md:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <motion.button
                                key={link.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => handleNavClick(link.href)}
                                className="font-display text-4xl uppercase text-silver transition-colors hover:text-lime"
                            >
                                {link.label}
                            </motion.button>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <MagneticButton className="mt-4 px-8 py-4 text-lg">
                                Let&apos;s Talk
                            </MagneticButton>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
