import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Download, Mail, Code } from 'lucide-react';

export default function Hero() {
  const titles = [
    'Python Developer',
    'AI/ML Engineer',
    'RAG Developer',
    'Backend Engineer'
  ];

  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = titles[currentTitleIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIdx((prev) => (prev + 1) % titles.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Vercel-style glowing top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass border-white/5 hover:border-primary/20 transition-all duration-300 mb-8 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="text-xs font-space tracking-wide text-slate-300">
            Transforming ideas into scalable AI-powered applications.
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-space font-bold tracking-tight mb-4"
        >
          <span className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
            S. Kathermytheen
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-10 md:h-14 mb-6 flex justify-center items-center"
        >
          <p className="text-xl md:text-3xl font-space font-semibold text-slate-300">
            I am a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold text-glow-primary">
              {currentText}
            </span>
            <span className="inline-block w-[3px] h-6 md:h-8 ml-1 bg-accent animate-pulse" />
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-slate-400 mb-10 leading-relaxed font-sans"
        >
          Building intelligent AI-powered applications and enterprise software architectures using{' '}
          <span className="text-white font-medium">Python</span>,{' '}
          <span className="text-white font-medium">Flask</span>,{' '}
          <span className="text-white font-medium">Django</span>,{' '}
          <span className="text-white font-medium">FastAPI</span>,{' '}
          <span className="text-white font-medium">LLMs</span> &{' '}
          <span className="text-white font-medium">RAG Systems</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/resume.pdf"
            download="S_Kathermytheen_Resume.pdf"
            className="w-full sm:w-auto px-8 py-3.5 glass hover:bg-white/5 border-white/10 hover:border-primary/40 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 glass hover:bg-white/5 border-white/10 hover:border-accent/40 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-space">
            Scroll To Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
