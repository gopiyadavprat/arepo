"use client";

import { VelocityText } from "@/app/components/ui/VelocityText";

export function TechStack() {
    return (
        <section className="overflow-hidden bg-lime py-20 text-void">
            <div className="mb-10 text-center font-mono text-sm font-bold uppercase tracking-widest">
                Powered By Modern Technologies
            </div>
            <VelocityText text="NEXT.JS REACT TYPESCRIPT TAILWIND FRAMER WEBGL THREE.JS" />
        </section>
    );
}
