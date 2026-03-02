import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Resume from '@/pages/resume/Resume';
import BackgroundElements from '@/components/BackgroundElements';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [showResume, setShowResume] = useState(false);

  const handleShowResume = () => {
    setShowResume(true);
  };

  const handleBackToPortfolio = () => {
    setShowResume(false);
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.4 } },
  };

  return (
    <>
      <div className="animated-gradient-bg" />
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-[-1]" />
      <BackgroundElements />
      <AnimatePresence mode="wait">
        {showResume ? (
          <motion.div
            key="resume"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            <Resume onBack={handleBackToPortfolio} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="min-h-screen relative overflow-hidden"
          >
            <Header />
            <main className="relative z-10">
              <Hero onShowResume={handleShowResume} />
              <About />
              <Skills />
              <Experience />
              <Education />
              <Certifications />
              <Projects />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
