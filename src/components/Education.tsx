"use client";

import { motion } from "framer-motion";

export default function Education() {
    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "BRAC University",
            date: "Sep 2023 – Sep 2027 (Expected)",
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            school: "Dhaka College",
            date: "Sep 2020 – Oct 2022",
        },
        {
            degree: "Secondary School Certificate (SSC)",
            school: "Government Laboratory High School",
            date: "Jan 2010 – Feb 2020",
        }
    ];

    return (
        <section id="education" className="bg-[#121212] text-white py-32 px-8 md:px-16 w-full relative z-20 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center"
                >
                    Education
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="flex flex-col p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 relative group overflow-hidden cursor-default"
                        >
                            {/* Subtle hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <time className="text-xs tracking-widest uppercase text-white/40 mb-4">{edu.date}</time>
                            <h4 className="text-xl font-bold text-white/90 mb-2 leading-snug">{edu.degree}</h4>
                            <p className="text-sm font-medium text-white/60 mt-auto pt-6">{edu.school}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
