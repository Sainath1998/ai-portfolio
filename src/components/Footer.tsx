"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Linkedin, Github, Phone, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="py-24 bg-primary text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -mr-48 -mt-48"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Let&apos;s <span className="text-accent underline decoration-white/20">Connect</span></h2>
                        <p className="text-purple-100/70 text-lg mb-8 max-w-md">
                            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>
                        <div className="space-y-6">
                            <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-5 text-white hover:text-accent transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 border border-white/10 shadow-lg">
                                    <Mail className="w-7 h-7" />
                                </div>
                                <span className="text-xl font-bold tracking-tight">{portfolioData.email}</span>
                            </a>
                            <a href={`tel:${portfolioData.phone}`} className="flex items-center gap-5 text-white hover:text-accent transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 border border-white/10 shadow-lg">
                                    <Phone className="w-7 h-7" />
                                </div>
                                <span className="text-xl font-bold tracking-tight">{portfolioData.phone}</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-end"
                    >
                        <div className="flex gap-4 mb-10">
                            <a
                                href={portfolioData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/10 shadow-lg group"
                            >
                                <Linkedin className="w-7 h-7 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href={portfolioData.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/10 shadow-lg group"
                            >
                                <Code2 className="w-7 h-7 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                        <div className="premium-glass rounded-[2rem] p-10 border-white/10 shadow-2xl">
                            <p className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-3">Current Mission</p>
                            <p className="text-white text-2xl font-black leading-tight mb-2">{portfolioData.role}</p>
                            <p className="text-white/40 text-sm font-medium">@ {portfolioData.experience[0].company}</p>
                        </div>
                    </motion.div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-purple-100/40 text-sm">
                    <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart className="w-3 h-3 fill-accent text-accent" /> by Sainath
                    </p>
                </div>
            </div>
        </footer>
    );
}

function Code2(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
        </svg>
    )
}
