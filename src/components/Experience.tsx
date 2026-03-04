"use client";

import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            role: "Research Contributor",
            company: "BRACU Mongol Tori",
            date: "June 2025 – Present | Dhaka, Bangladesh",
            points: [
                "Conducting research on AI-autonomous robotics systems within the Macrover pipeline for Mars exploration.",
                "Developing firmware for autonomous navigation and environmental data interpretation.",
                "Designing ML models for sensor pattern recognition and decision-making automation.",
                "Implementing computer vision algorithms for terrain mapping and obstacle detection.",
                "Collaborating across multidisciplinary engineering teams on integration and testing."
            ],
            current: true,
        },
        {
            role: "Member",
            company: "Dhaka College Science Club (DCSC)",
            date: "Sep 2021 – June 2022 | Dhaka, Bangladesh",
            points: [
                "Participated in science communication and outreach initiatives.",
                "Contributed to collaborative STEM projects and national competitions."
            ],
            current: false,
        },
        {
            role: "Head of Operations",
            company: "Science Club of the Laboratorians (SCL)",
            date: "June 2018 – Feb 2020 | Dhaka, Bangladesh",
            points: [
                "Led operations for over 500 active members.",
                "Oversaw event planning, logistics, and resource management.",
                "Built leadership and organizational skills through large-scale academic coordination."
            ],
            current: false,
        }
    ];

    return (
        <section id="experience" className="bg-[#121212] text-white py-32 px-8 md:px-16 w-full relative z-20 border-t border-white/5">
            <div className="max-w-4xl mx-auto">

                {/* Experience Column */}
                <div className="lg:col-span-8 space-y-16">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-12"
                    >
                        Experience
                    </motion.h3>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                            >
                                {/* Timeline Dot */}
                                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#121212] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10
                                    ${exp.current ? 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]' : 'bg-[#121212] border-white/20'}`}
                                >
                                    {exp.current && <div className="w-3 h-3 bg-black rounded-full" />}
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                                >
                                    <div className="flex flex-col mb-4">
                                        <time className="text-xs tracking-widest uppercase text-white/40 mb-2">{exp.date}</time>
                                        <h4 className="text-xl font-bold text-white/90">{exp.role}</h4>
                                        <h5 className="text-base text-white/60">{exp.company}</h5>
                                    </div>
                                    <ul className="space-y-3 text-sm text-white/70 font-light list-disc pl-4 marker:text-white/20">
                                        {exp.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
