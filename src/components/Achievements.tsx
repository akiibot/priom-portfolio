"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";

export default function Achievements() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const achievements = [
        {
            title: "Introduction to Research Career in Machine Learning & XAI",
            issuer: "Neural Research",
            description: "Explored the fundamentals of machine learning research and explainable AI. Gained insights into model interpretability, transparency, and ethical AI principles. Learned about methodologies and emerging trends shaping AI innovation.",
            image: "/cert-neural-research.png"
        },
        {
            title: "Introduction to Generative AI Studio",
            issuer: "Google Cloud",
            description: "Gained hands-on experience using Generative AI Studio to build, customize, and deploy AI models. Learned to leverage Vertex AI tools for prompt design, evaluation, and real-world applications.",
            image: "/cert-genai.png"
        },
        {
            title: "Data Fundamentals",
            issuer: "IBM",
            description: "Developed a strong foundation in data concepts, structures, and lifecycle management. Learned how organizations utilize data to drive strategic insights through collection, processing, and visualization techniques.",
            image: "/cert-data-fundamentals.png"
        },
        {
            title: "Python",
            issuer: "HackerRank",
            description: "Earned certification in Python programming fundamentals. Demonstrated proficiency in data structures, essential functions, loops, and algorithmic problem-solving by successfully completing advanced, interactive coding challenges.",
            image: "/cert-python.png"
        },
        {
            title: "Data Analytics Job Simulation",
            issuer: "Deloitte",
            description: "Completed a professional simulation replicating a data analyst role at Deloitte. Practiced data cleaning, visualization, and storytelling using business datasets to generate actionable, client-ready reports.",
            image: "/cert-data-analytics.png"
        },
        {
            title: "Artificial Intelligence Fundamentals",
            issuer: "IBM",
            description: "Gained foundational understanding of AI concepts, machine learning, neural networks, and natural language processing. Explored ethical AI practices, algorithm biases, and the future impact of AI on society.",
            image: "/cert-ai-fundamentals.png"
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
                            {achievement.image ? (
                                <div
                                    className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-black/40 border border-white/10 shrink-0 p-4 cursor-pointer group/image"
                                    onClick={() => setSelectedImage(achievement.image)}
                                >
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                                            Click to expand
                                        </span>
                                    </div>
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover/image:scale-105"
                                    />
                                </div>
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors shrink-0">
                                    <Award className="w-6 h-6 text-blue-400" />
                                </div>
                            )}

                            <div className="flex flex-col flex-1">
                                <h4 className="text-xl font-bold text-white/90 mb-2 leading-snug min-h-[56px] flex items-center">{achievement.title}</h4>
                                <p className="text-sm font-medium text-blue-400/80 tracking-widest uppercase mb-4">{achievement.issuer}</p>
                                <p className="text-sm text-white/60 leading-relaxed">{achievement.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Image Modal overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center bg-[#1A1A1A] rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/50 hover:bg-white/10 text-white rounded-full p-2 backdrop-blur-md transition-colors z-10"
                            >
                                <X className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                            <div className="w-full h-full p-4 md:p-8 flex items-center justify-center">
                                <img
                                    src={selectedImage}
                                    alt="Expanded Certificate"
                                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
