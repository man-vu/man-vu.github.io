import { useEffect } from "react";
import BackgroundElements from "../components/common/BackgroundElements";
import Navbar from "../components/common/Navbar";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Certifications from "../components/sections/Certifications";
import Projects from "../components/sections/Projects";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

const Index = () => {
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            // Sections mount with the app, so the anchor target doesn't exist
            // at document load — scroll after first paint instead.
            requestAnimationFrame(() => {
                document.getElementById(hash)?.scrollIntoView();
            });
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <>
            <div className="animated-gradient-bg" />
            <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-[-1]" />
            <BackgroundElements />

            <Navbar />

            <main className="min-h-screen relative z-10 font-sans">
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Certifications />
                <Testimonials />
                <Contact />
                <Footer />
            </main>
        </>
    );
};

export default Index;
