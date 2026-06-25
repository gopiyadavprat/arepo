"use client";

import { VelocityText } from "@/app/components/ui/VelocityText";

export function TechStack() {
    return (
        <section className="overflow-hidden bg-lime py-20 text-void">
            <div className="mb-10 text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-void/60">
                    // Our Arsenal
                </span>
                <h3 className="mt-2 font-display text-3xl font-bold uppercase text-void md:text-4xl">
                    Powered By Modern Technologies
                </h3>
            </div>
            <VelocityText text="NEXT.JS REACT TYPESCRIPT TAILWIND FRAMER WEBGL THREE.JS" />
        </section>
    );
}
