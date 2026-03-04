"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Globe2,
    Terminal,
    Cpu,
    Gamepad2,
    BrainCircuit,
    Quote
} from "lucide-react";

export default function About() {
    return (
        <section id="about" className="bg-[#121212] text-white py-20 md:py-32 px-6 md:px-16 w-full relative z-20 border-t border-white/5">
            <div className="max-w-5xl mx-auto">

                <div className="mb-16">
                    <h3 className="text-sm tracking-[0.2em] text-white/40 uppercase mb-2">About Me</h3>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Engineer. <span className="text-blue-400">Researcher.</span> Builder.
                    </h2>
                </div>

                {/* Main Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

                    {/* 1. Short Bio (Large Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BrainCircuit className="w-32 h-32" />
                        </div>
                        <h4 className="text-2xl font-semibold mb-4 relative z-10">Who I Am</h4>
                        <p className="text-white/60 text-lg leading-relaxed relative z-10">
                            Third-year CS undergrad at <span className="text-white font-medium">BRAC University</span> specializing in Machine Learning, NLP, and large language models. Currently contributing to AI-driven autonomous robotics research at <span className="text-white font-medium">BRACU Mongol-Tori</span>, building on my passion for intelligent systems that bridge cutting-edge research and real-world impact.
                        </p>
                    </motion.div>

                    {/* 4. Location (Small Card) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/5 transition-colors group"
                    >
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                            <MapPin className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h4 className="text-sm text-white/40 uppercase tracking-wider mb-2">Location</h4>
                            <p className="text-xl font-medium">Dhaka, Bangladesh</p>
                            <p className="text-white/40 mt-1 flex items-center gap-2">
                                <Globe2 className="w-4 h-4" /> UTC+6
                            </p>
                        </div>
                    </motion.div>

                    {/* 3. Current Focus (Medium Block) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-blue-600 border border-blue-500 rounded-3xl p-8 relative overflow-hidden"
                    >
                        {/* Decorative background circle */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                        <h4 className="text-sm text-white/80 uppercase tracking-wider mb-4 font-semibold">Current Focus</h4>
                        <p className="text-xl leading-snug font-medium text-white mb-4">
                            Data analysis, Data Science, LLMs, NLP
                        </p>
                        <p className="text-white/80 text-sm leading-relaxed">
                            From cleaning messy CSVs to building transformer-based chatbots, I like projects that move from idea to demo fast. Exploring how language models can reason, plan, and act autonomously in complex environments.
                        </p>
                    </motion.div>

                    {/* 2. Tech Stack (Large Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-2 bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Terminal className="w-5 h-5 text-white/40" />
                            <h4 className="text-xl font-semibold">Core Stack</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {["Python", "Pandas", "NumPy", "SQL", "Power BI", "Excel", "Scikit-learn", "Jupyter", "Google Colab", "GitHub", "LLMs", "NLP"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm hover:bg-white/10 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* 5. Hobbies (Small Card) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:col-span-1 bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/5 transition-colors group"
                    >
                        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                            <Gamepad2 className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h4 className="text-sm text-white/40 uppercase tracking-wider mb-2">Off-Duty</h4>
                            <p className="text-lg font-medium leading-snug">
                                Guitar playing & Gaming
                            </p>
                            <p className="text-white/40 text-sm mt-3 leading-relaxed">
                                I am a different person when I am doing these....
                            </p>
                        </div>
                    </motion.div>

                    {/* 6. Philosophy (Wide Bottom Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="md:col-span-2 bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors"
                    >
                        <div className="absolute top-6 right-8 text-white/5 group-hover:text-white/10 transition-colors">
                            <Quote size={80} />
                        </div>
                        <h4 className="text-sm text-white/40 uppercase tracking-wider mb-4">Never Give Up</h4>
                        <p className="text-xl md:text-2xl font-light italic leading-snug text-white/90 mb-4 pr-0 md:pr-12">
                            "The difference between the impossible and the possible lies in a person’s determination."
                        </p>
                        <p className="text-white/60 max-w-xl leading-relaxed">
                            — Tommy Lasorda
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
