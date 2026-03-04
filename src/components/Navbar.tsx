"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("about");
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
        { id: "projects", label: "Projects" },
        { id: "achievements", label: "Achievements" },
    ];

    // Scroll spy logic
    useEffect(() => {
        const handleScroll = () => {
            // Check if page scrolled past 50px for dynamic styling
            setIsScrolled(window.scrollY > 50);

            // Robust scroll spy logic using getBoundingClientRect
            let current = "";

            navLinks.forEach((link) => {
                const section = document.getElementById(link.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // Trigger active state when section top crosses the middle of the viewport
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        current = link.id;
                    } else if (rect.top <= window.innerHeight / 2) {
                        // Fallback in case section is very tall and we are inside it
                        current = link.id;
                    }
                }
            });

            if (current && current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection, navLinks]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Compute absolute offset from top of document, ignoring CSS relative positioning
            const absoluteTop = element.getBoundingClientRect().top + window.scrollY;
            const top = absoluteTop - 100; // offset for the fixed header
            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'top-4' : 'top-8'}`}
        >
            <div className="flex items-center p-2 rounded-full bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

                {/* Main Links */}
                <div className="flex items-center pl-2 md:pl-4 pr-1 md:pr-2 space-x-1 relative overflow-x-auto md:overflow-visible no-scrollbar max-w-[50vw] md:max-w-none">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`relative shrink-0 px-4 md:px-6 py-2.5 text-xs md:text-sm font-medium transition-colors duration-300 z-10 whitespace-nowrap
                                ${activeSection === link.id ? 'text-white' : 'text-white/60 hover:text-white/90'}`}
                        >
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="nav-active-pill"
                                    className="absolute inset-0 rounded-full bg-white/10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    {/* Top Glow Indicator */}
                                    <div className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-[2px] bg-white rounded-full 
                                        shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]" />
                                </motion.div>
                            )}
                            <span className="relative z-20">{link.label}</span>
                        </button>
                    ))}
                    {/* Add a transparent spacer to the end of the flex container to ensure the right padding isn't ignored by the browser's scroll bounding box. This avoids clipping the active pill of the final item. */}
                    <div className="w-1 md:w-2 shrink-0 md:hidden" />
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-white/10 mx-2 md:mx-4 shrink-0" />

                {/* Actions */}
                <div className="flex items-center pr-2 md:pr-4 pl-1 md:pl-2 space-x-2 md:space-x-4 shrink-0">
                    <a
                        href="https://drive.google.com/file/d/18mc7bEUGvM-kvyGH1m55Wya3gsjLzzMR/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs md:text-sm text-white/80 hover:text-white px-2 md:px-4 py-2 hover:bg-white/5 rounded-full transition-all duration-300 group"
                    >
                        <Download className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2 group-hover:-translate-y-0.5 transition-transform" />
                        <span className="hidden sm:inline">Resume</span>
                    </a>

                    <button
                        onClick={() => scrollToSection("contact")}
                        className="flex items-center px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-white text-black text-xs md:text-sm font-medium hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                    >
                        <span className="relative flex h-2 w-2 mr-1 md:mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Contact me
                    </button>
                </div>

            </div>
        </motion.nav>
    );
}
