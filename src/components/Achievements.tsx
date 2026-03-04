"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Achievements() {
    const achievements = [
        {
            title: "Introduction to Research Career in Machine Learning & XAI",
            issuer: "Google Research",
            description: "Explored the fundamentals of machine learning research and explainable AI (XAI). Gained insights into how Google Research approaches ML research, model interpretability, and transparency. Learned about research methodologies, ethical AI principles, and emerging trends shaping the future of AI innovation."
        },
        {
            title: "Introduction to Generative AI Studio",
            issuer: "Google Cloud",
            description: "Gained hands-on experience using Google Cloud’s Generative AI Studio to build, customize, and deploy AI models. Learned how to leverage Vertex AI tools for prompt design, model evaluation, and real-world AI applications."
        },
        {
            title: "Data Fundamentals",
            issuer: "IBM",
            description: "Developed a strong foundation in data concepts, structures, and lifecycle management. Learned how organizations use data to drive insights and decision-making through data collection, processing, and visualization techniques."
        },
        {
            title: "Python",
            issuer: "HackerRank",
            description: "Earned certification in Python programming fundamentals, demonstrating proficiency in data structures, functions, loops, and algorithmic problem-solving through hands-on coding challenges."
        },
        {
            title: "Data Analytics Job Simulation",
            issuer: "Accenture",
            description: "Completed a professional simulation replicating a data analyst role at Accenture. Practiced data cleaning, visualization, and storytelling using real-world business datasets to generate actionable insights and client-ready reports."
        },
        {
            title: "Artificial Intelligence Fundamentals",
            issuer: "IBM",
            description: "Gained a foundational understanding of AI concepts, machine learning, neural networks, and natural language processing. Explored ethical AI practices and the future impact of AI on industries and society."
        }
    ];

    return (
        <section id="achievements" className="bg-[#121212] text-white py-20 md:py-32 px-6 md:px-16 w-full relative z-20 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center"
                >
                    Achievements & <span className="text-blue-400">Certifications</span>
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col p-8 rounded-3xl bg-[#1A1A1A] border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
                        >
                            {/* Decorative Icon */}
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors shrink-0">
                                <Award className="w-6 h-6 text-blue-400" />
                            </div>

                            <h4 className="text-xl font-bold text-white/90 mb-2 leading-snug">{achievement.title}</h4>
                            <p className="text-sm font-medium text-blue-400/80 tracking-widest uppercase mb-4">{achievement.issuer}</p>
                            <p className="text-sm text-white/60 leading-relaxed mt-auto">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
