"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, Trophy, Briefcase, BookOpen } from "lucide-react";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen bg-[#121212] text-white pt-28 pb-12 px-6 md:pt-32 md:pb-16 md:px-16 w-full flex items-center relative z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col space-y-8"
                >
                    <div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-[#1A1A1A] border border-white/5 mb-6"
                        >
                            <span className="text-blue-400 text-sm font-medium">Hello, I'm</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
                            Priom Halder
                        </h1>

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 tracking-tight leading-snug">
                            Data Science Enthusiast @ <a href="https://www.bracu.ac.bd/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors hover:underline">BRACU</a>
                        </h2>
                    </div>

                    <p className="text-base md:text-lg text-white/60 font-light max-w-xl leading-relaxed">
                        A passionate Computer Science undergrad driven by curiosity and innovation. I explore the intersection of Data Science, Machine Learning, and Natural Language Processing, where data turns into decisions and algorithms evolve into intelligence. From developing end-to-end ML pipelines to experimenting with Large Language Models (LLMs), I'm constantly building, learning, and pushing boundaries.
                    </p>

                    {/* Robot Emoji / Mascot */}
                    <div className="text-4xl">
                        🤖
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
                        <a href="https://drive.google.com/file/d/18mc7bEUGvM-kvyGH1m55Wya3gsjLzzMR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors shadow-[0_0_20px_rgba(59,130,246,0.5)] w-full sm:w-auto">
                            View Resume
                        </a>
                        <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#1A1A1A] hover:bg-white/10 border border-white/10 text-white font-semibold transition-all w-full sm:w-auto">
                            Hire Me
                        </a>
                    </div>

                    {/* Social Links Row */}
                    <div className="flex items-center gap-6 pt-4 text-white/50">
                        <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-all duration-300 text-[#34D399] [text-shadow:0_0_15px_rgba(52,211,153,0.8)] text-sm group">
                            <div className="relative flex items-center justify-center w-6 h-6 rounded-full">
                                <GraduationCap className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <span className="transition-colors duration-300">Google Scholar</span>
                        </a>
                        <a href="https://linkedin.com/in/priomhalder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-all duration-300 text-[#60A5FA] [text-shadow:0_0_15px_rgba(96,165,250,0.8)] text-sm group">
                            <div className="relative flex items-center justify-center w-6 h-6 rounded-full">
                                <Linkedin className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <span className="transition-colors duration-300">LinkedIn</span>
                        </a>
                        <a href="https://github.com/PriomHalder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-all duration-300 text-[#A78BFA] [text-shadow:0_0_15px_rgba(167,139,250,0.8)] text-sm group">
                            <div className="relative flex items-center justify-center w-6 h-6 rounded-full">
                                <Github className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <span className="transition-colors duration-300">GitHub</span>
                        </a>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-white/10">
                        <div>
                            <p className="text-3xl font-bold text-blue-400 mb-1">3+</p>
                            <p className="text-xs text-white/40 uppercase tracking-wider">Years Academic<br />Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-blue-400 mb-1">1</p>
                            <p className="text-xs text-white/40 uppercase tracking-wider">Core AI/ML<br />Projects</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-blue-400 mb-1">4</p>
                            <p className="text-xs text-white/40 uppercase tracking-wider">Research<br />Interests</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-blue-400 mb-1">10+</p>
                            <p className="text-xs text-white/40 uppercase tracking-wider">Technical<br />Skills</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative w-full aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-[2rem] border border-white/10 bg-[#1A1A1A] overflow-hidden flex flex-col justify-end p-6 group"
                >
                    {/* Image using optimized next/image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/profile.jpg"
                            alt="Priom Halder"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </div>

                    {/* Shadow overlay for depth */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />

                    {/* Image Caption overlay like the original design */}
                    <div className="relative z-20 text-center text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 drop-shadow-md pb-2">
                        Taken during my Residential Semester at BRAC University.
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
