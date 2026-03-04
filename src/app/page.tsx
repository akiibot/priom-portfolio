import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
export default function Home() {
  return (
    <main className="w-full bg-[#121212] min-h-screen">
      <Hero />

      <div className="relative z-20 bg-[#121212]">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="relative z-20 w-full py-8 border-t border-white/10 text-center text-white/40 text-sm bg-[#121212]">
        <p className="tracking-widest uppercase">© 2026 Priom. All rights reserved.</p>
      </footer>
    </main >
  );
}
