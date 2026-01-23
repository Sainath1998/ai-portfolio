"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const fullText = portfolioData.tagline;

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setDisplayText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 30); // Speed of typing
        return () => clearInterval(timer);
    }, [fullText]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
            {/* Background Blobs - Lightened and more subtle */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container relative mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] text-primary uppercase bg-purple-50 border border-purple-100 rounded-full shadow-sm">
                        Available for new opportunities
                    </span> */}
                    <h1 className="text-6xl md:text-9xl font-black mb-8 text-foreground tracking-tighter leading-[0.9]">
                        Hi, I&apos;m <span className="text-gradient font-black">Sainath</span>
                    </h1>
                    <div className="max-w-3xl mx-auto min-h-[6rem] flex items-center justify-center">
                        <p className="text-xl md:text-3xl text-foreground mb-12 leading-tight font-bold opacity-90">
                            {displayText}
                            <span className="inline-block w-1.5 h-8 ml-1 bg-primary animate-pulse align-middle"></span>
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
                >
                    <a
                        href="#projects"
                        className="group px-10 py-5 bg-primary text-white rounded-full font-bold flex items-center gap-2 transition-all hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1"
                    >
                        View Projects
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href={portfolioData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-5 bg-white text-primary border-2 border-primary/20 rounded-full font-bold flex items-center gap-2 transition-all hover:bg-purple-50 hover:border-primary/40 hover:-translate-y-1"
                    >
                        LinkedIn
                        <Linkedin className="w-5 h-5" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20 flex items-center justify-center gap-10 text-foreground/30 font-bold tracking-widest uppercase text-[10px]"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-black text-foreground mb-1">3+</span>
                        <span>Years Exp</span>
                    </div>
                    <div className="h-10 w-px bg-foreground/10"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-black text-foreground mb-1">100+</span>
                        <span>APIs Built</span>
                    </div>
                    <div className="h-10 w-px bg-foreground/10"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-black text-foreground mb-1">CDN</span>
                        <span>Expert</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
