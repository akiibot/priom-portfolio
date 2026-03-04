"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Github, ExternalLink } from "lucide-react";
import { useLenis } from "lenis/react";

type Project = {
    id: number;
    title: string;
    category: string;
    year: string;
    description: string;
    techStack: string;
    image: string;
    deepDive: {
        problem?: string;
        methodology?: string;
        outcome?: string[];
        repoUrl?: string;
        liveUrl?: string;
        content?: ReactNode;
        images?: string[];
    } | null;
};

export default function Projects() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const lenis = useLenis();

    // Prevent body and smooth scroll when modal is open
    useEffect(() => {
        if (selectedId !== null) {
            document.body.style.overflow = "hidden";
            lenis?.stop();
        } else {
            document.body.style.overflow = "";
            lenis?.start();
        }
        return () => {
            document.body.style.overflow = "";
            lenis?.start();
        };
    }, [selectedId, lenis]);

    const projects: Project[] = [
        {
            id: 1,
            title: "SONAR Rock vs Mine Prediction with Python",
            category: "Machine Learning Model",
            year: "2026",
            description: "Developed a machine learning model to classify objects detected by sonar signals as either rock or mine. Involved data preprocessing, feature analysis, and model training. Implemented logistic regression and evaluated model performance using accuracy metrics and confusion matrix visualization.",
            techStack: "Python • Pandas • NumPy • Scikit-learn",
            image: "/sonar-project.png",
            deepDive: {
                problem: "Binary classification task — determining whether an underwater object is a rock or a metal cylinder (mine) using sonar signal data.",
                methodology: "Loaded and pre-processed a 208-row sonar CSV dataset, performed EDA (shape analysis, class distribution, mean value comparison across columns), then split data into train/test sets and trained a Logistic Regression model. Built a predictive system to test against both existing and new input data.",
                outcome: [
                    "Training accuracy: 83%",
                    "Test accuracy: 76%",
                    "Dataset: 208 samples — 111 mines, 97 rocks, 61 features"
                ],
                repoUrl: "https://github.com/PriomHalder/Machine_Learning_Projects/tree/main/SONAR%20Rock%20vs%20Mine%20Prediction%20with%20Python",
            }
        },
        {
            id: 2,
            title: "BRACU Mongol-Tori",
            category: "Robotics & Automation",
            year: "2025",
            description: "Winner, Bangladesh ICT & Innovation Awards 2025 (Industrial Category) — Recognized for a student-led Mars rover project showcasing innovation in automation and system integration, contributing to UN Sustainable Development Goals (SDGs 4, 8, 9, and 17).",
            techStack: "C++ • ROS • Computer Vision",
            image: "/mongol-tori.jpg",
            deepDive: {
                content: (
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-white">
                            𝐁𝐑𝐀𝐂𝐔 𝐌𝐨𝐧𝐠𝐨𝐥-𝐓𝐨𝐫𝐢 𝐒𝐡𝐢𝐧𝐞𝐬 𝐚𝐭 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡 𝐈𝐂𝐓 & 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 𝐀𝐰𝐚𝐫𝐝𝐬 𝟐𝟎𝟐𝟓!
                        </h4>
                        <p className="text-white/80 leading-relaxed text-sm md:text-base">
                            BRAC University proudly celebrates the success of its student-led Mars rover project BRACU Mongol-Tori, who became a winner in the “Industrial” category at the Bangladesh ICT & Innovation Awards 2025.
                        </p>
                        <p className="text-white/80 leading-relaxed text-sm md:text-base">
                            This recognition celebrates innovative solutions in automation and system integration across sectors such as energy, manufacturing, transport, and logistics — and Mongol-Tori has proven to be a standout example of homegrown ingenuity.
                        </p>
                        <p className="text-white/80 leading-relaxed text-sm md:text-base">
                            This project also contributes to the United Nations Sustainable Development Goals 4 (Quality Education), 8 (Decent Work and Economic Growth), 9 (Industry, Innovation & Infrastructure) and 17 (Partnerships for the Goals).
                        </p>
                        <p className="text-white/80 leading-relaxed text-sm md:text-base">
                            Read more at: <a href="https://www.bracu.ac.bd/news/bracu-mongol-tori-first" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">https://www.bracu.ac.bd/.../bracu-mongol-tori-first...</a>
                        </p>
                        <p className="text-blue-400 font-medium text-sm">
                            #BRACU #MongolTori #ICTInnovationAwards #ProudlyBRACU #STEM #SDGs #InnovationForBangladesh
                        </p>
                        <div className="mt-8 flex justify-center w-full bg-white/5 p-4 rounded-xl border border-white/10">
                            <iframe
                                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1228110032679179%26set%3Da.543399921150197&show_text=true&width=500"
                                width="500"
                                height="650"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                className="max-w-full rounded-lg bg-white"
                            ></iframe>
                        </div>
                    </div>
                )
            }
        }
    ];

    const selectedProject = projects.find(p => p.id === selectedId);

    return (
        <section id="projects" className="min-h-screen bg-[#121212] text-white py-20 md:py-32 px-6 md:px-16 w-full relative z-20">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
                    Projects
                </h3>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            onClick={() => setSelectedId(project.id)}
                            className="group relative flex flex-col justify-end h-[400px] p-8 rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-white/5 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                        >
                            {/* Project Background Image */}
                            {project.image && (
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                                    />
                                </div>
                            )}

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 z-0 transition-opacity duration-700 group-hover:opacity-80"></div>

                            {/* Subtle hover glow effect */}
                            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] z-0 rounded-3xl mix-blend-screen pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                {/* Top Badges */}
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <p className="text-white/60 text-sm tracking-[0.2em] uppercase">{project.category}</p>
                                        <p className="text-white/40 text-sm font-mono">{project.year}</p>
                                    </div>
                                    <h4 className="text-3xl font-semibold tracking-tight leading-tight">{project.title}</h4>
                                </div>

                                {/* Bottom Content that slides slightly up on hover */}
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <p className="text-white/60 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm md:text-base leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-6">
                                        {project.techStack && (
                                            <p className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 text-xs tracking-wider">
                                                {project.techStack}
                                            </p>
                                        )}
                                        <span className="text-white/40 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 delay-300 flex items-center gap-2 text-sm font-medium">
                                            Read More <ExternalLink className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Deep Dive Modal (AnimatePresence) */}
                <AnimatePresence>
                    {selectedId !== null && selectedProject && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-pointer"
                            />

                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, y: "100%", scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: "10%", scale: 0.95 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed inset-x-0 bottom-0 top-20 md:inset-16 md:top-24 z-[101] bg-[#1A1A1A] border border-white/10 md:rounded-[3rem] rounded-t-[2rem] overflow-hidden flex flex-col"
                            >
                                {/* Modal Header */}
                                <div className="p-8 md:p-12 flex justify-between items-start border-b border-white/5 relative z-10 shrink-0">
                                    <div className="max-w-3xl">
                                        <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-4">{selectedProject.category} • {selectedProject.year}</p>
                                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{selectedProject.title}</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techStack.split('•').map((tech, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10 shrink-0"
                                    >
                                        <X size={24} className="w-5 h-5 md:w-6 md:h-6" />
                                    </button>
                                </div>

                                {/* Modal Scrollable Body */}
                                <div data-lenis-prevent="true" className="p-8 md:p-12 pb-24 md:pb-32 overflow-y-auto overscroll-contain flex-1 relative z-10 min-h-0">
                                    {selectedProject.deepDive ? (
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                            {/* Details */}
                                            <div className="space-y-12">

                                                {selectedProject.deepDive.content ? (
                                                    selectedProject.deepDive.content
                                                ) : (
                                                    <>
                                                        <section>
                                                            <h3 className="text-xl font-semibold mb-4 text-white/90">The Core Problem</h3>
                                                            <p className="text-white/60 leading-relaxed text-lg">
                                                                {selectedProject.deepDive.problem}
                                                            </p>
                                                        </section>

                                                        <section>
                                                            <h3 className="text-xl font-semibold mb-4 text-white/90">Methodology</h3>
                                                            <p className="text-white/60 leading-relaxed text-lg">
                                                                {selectedProject.deepDive.methodology}
                                                            </p>
                                                        </section>

                                                        {selectedProject.deepDive.outcome && (
                                                            <section>
                                                                <h3 className="text-xl font-semibold mb-4 text-white/90">Key Outcomes</h3>
                                                                <ul className="space-y-4">
                                                                    {selectedProject.deepDive.outcome.map((item, i) => (
                                                                        <li key={i} className="flex items-start gap-4 text-white/60 text-lg">
                                                                            <span className="text-blue-400 mt-1">✓</span> {item}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </section>
                                                        )}
                                                    </>
                                                )}

                                                {selectedProject.deepDive.repoUrl && (
                                                    <div className="pt-8">
                                                        <a
                                                            href={selectedProject.deepDive.repoUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-white/90 rounded-xl font-semibold transition-colors"
                                                        >
                                                            <Github size={20} />
                                                            View GitHub Repository
                                                        </a>
                                                    </div>
                                                )}

                                            </div>

                                            {/* Right Column: Images / Visuals */}
                                            <div className="space-y-8">
                                                {selectedProject.deepDive.images?.map((imgUrl, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5"
                                                    >
                                                        <Image
                                                            src={imgUrl}
                                                            alt={`${selectedProject.title} visual ${idx + 1}`}
                                                            width={1200}
                                                            height={800}
                                                            className="w-full h-auto object-contain"
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-48 text-white/40">
                                            <p className="text-lg">Detailed case study coming soon.</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
