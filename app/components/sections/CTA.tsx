"use client";

import { MagneticButton } from "@/app/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="relative overflow-hidden border-t border-white/10 bg-void py-40">
            <div className="container mx-auto px-4 text-center md:px-10">
                <h2 className="mb-10 font-display text-[10vw] leading-[0.8] text-silver">
                    READY TO <br />
                    <span className="text-lime">ASCEND?</span>
                </h2>

                <div className="flex justify-center">
                    <MagneticButton className="h-24 px-12 text-xl">
                        INITIATE PROJECT <ArrowRight className="ml-2 inline-block h-6 w-6" />
                    </MagneticButton>
                </div>
            </div>

            {/* Background Noise */}
            <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </section>
    );
}
