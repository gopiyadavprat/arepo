"use client";

export function Footer() {
    return (
        <footer className="bg-void pb-10 pt-20">
            <div className="container mx-auto px-4 md:px-10">
                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    <div className="flex flex-col gap-4">
                        <a href="#" className="font-display text-6xl uppercase text-silver transition-colors hover:text-lime md:text-8xl">
                            INSTAGRAM
                        </a>
                        <a href="#" className="font-display text-6xl uppercase text-silver transition-colors hover:text-lime md:text-8xl">
                            TWITTER
                        </a>
                        <a href="#" className="font-display text-6xl uppercase text-silver transition-colors hover:text-lime md:text-8xl">
                            LINKEDIN
                        </a>
                    </div>

                    <div className="flex flex-col justify-end text-right">
                        <div className="font-mono text-sm text-gray-500">
                            © 2025 DIGITAL ALCHEMY <br />
                            ALL RIGHTS RESERVED
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
