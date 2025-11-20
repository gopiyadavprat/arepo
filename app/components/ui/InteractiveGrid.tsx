"use client";

import { useEffect, useRef } from "react";

export function InteractiveGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const spacing = 50;
        const cols = Math.floor(width / spacing);
        const rows = Math.floor(height / spacing);

        const mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"; // Increased from 0.05
            ctx.lineWidth = 1;

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    const x = i * spacing;
                    const y = j * spacing;

                    // Calculate distance to mouse
                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 250; // Increased range

                    if (dist < maxDist) {
                        const alpha = 1 - dist / maxDist;
                        ctx.fillStyle = `rgba(204, 255, 0, ${alpha})`; // Increased opacity
                        ctx.fillRect(x - 1.5, y - 1.5, 3, 3); // Larger points
                    }

                    // Draw grid points
                    ctx.fillStyle = "rgba(255, 255, 255, 0.2)"; // Increased from 0.1
                    ctx.fillRect(x, y, 1, 1);
                }
            }

            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 -z-10 h-full w-full pointer-events-none"
        />
    );
}
