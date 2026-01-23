"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-purple-bg relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 text-foreground"
                    >
                        Professional <span className="text-gradient">Journey</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground font-semibold max-w-xl mx-auto"
                    >
                        My career path from building robust backend systems to ensuring customer success at scale.
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${index}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                            className={`relative mb-12 md:mb-20 flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg shadow-primary/20 z-20 hidden md:block"></div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 px-8">
                                <div className="premium-glass p-10 rounded-[2.5rem] border-white shadow-2xl hover:shadow-primary/10 transition-all duration-500 group">
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase mb-4">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                    <h3 className="text-2xl font-black text-foreground mb-2 leading-tight">{exp.role}</h3>
                                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm mb-6 font-bold">
                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                                            <Briefcase className="w-3.5 h-3.5" />
                                            {exp.company}
                                        </span>
                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                                            <MapPin className="w-3.5 h-3.5" />
                                            {exp.location}
                                        </span>
                                    </div>
                                    <ul className="space-y-4">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="text-sm text-foreground font-medium leading-relaxed flex gap-3">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-50"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Empty Side (Desktop) */}
                            <div className="hidden md:block w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
