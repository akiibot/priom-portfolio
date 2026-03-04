"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, User, Mail, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        // --- NOTE FOR USER: Add your Web3Forms Access Key here ---
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                setIsSuccess(true);
                // Reset success state after 5 seconds
                setTimeout(() => setIsSuccess(false), 5000);
                // Reset form
                (e.target as HTMLFormElement).reset();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="bg-[#121212] text-white pt-24 pb-16 px-8 md:px-16 w-full relative z-20">
            <div className="max-w-4xl mx-auto flex flex-col justify-center">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Let's Work <span className="text-blue-400">Together</span>
                        </h3>
                        <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-[#1A1A1A] border border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
                >
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-white/80 ml-1">Your Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-white/40" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-light"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-white/80 ml-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-white/40" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-light"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-white/80 ml-1">Your Message</label>
                            <div className="relative">
                                <div className="absolute top-4 left-4 pointer-events-none">
                                    <MessageSquare className="h-5 w-5 text-white/40" />
                                </div>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-light resize-none"
                                    placeholder="Tell me about your project, team, or role..."
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || isSuccess}
                            className={`group relative w-full flex justify-center py-4 px-4 border border-transparent rounded-xl text-lg font-medium text-white focus:outline-none transition-all duration-300 overflow-hidden ${(isSuccess ? 'bg-green-500/20 border-green-500/50 text-green-400' : 'bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]')}`}
                        >
                            <div className={`flex items-center space-x-2 transition-transform duration-300 ${(isSubmitting ? 'scale-95 opacity-80' : '')}`}>
                                {isSuccess ? (
                                    <>
                                        <CheckCircle2 className="w-6 h-6" />
                                        <span>Message Sent Successfully!</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </div>

                            {/* Loading State Overlay */}
                            {isSubmitting && (
                                <div className="absolute inset-0 bg-blue-600 flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                                    />
                                </div>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
