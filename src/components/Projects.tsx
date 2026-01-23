"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2 } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 text-foreground"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground font-semibold max-w-xl mx-auto"
                    >
                        A showcase of my work in CDN optimization, backend engineering, and system design.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative h-full"
                        >
                            <div className="premium-glass h-full p-10 rounded-[2.5rem] border-white shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                    <Code2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight text-foreground transition-colors group-hover:text-primary">
                                    {project.name}
                                </h3>
                                <p className="text-foreground font-medium text-sm mb-8 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-primary/10">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-4 py-1.5 bg-primary/5 text-primary font-bold text-[10px] uppercase tracking-wider rounded-full border border-primary/10"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
