import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((window.scrollY / scrollHeight) * 100);
      }
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG parameters for progress circle
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-50 flex items-center justify-center cursor-pointer select-none group border-0 bg-transparent p-0 outline-none focus:outline-none"
          aria-label="Scroll to Top"
          whileHover="hover"
          whileTap="tap"
          variants={{
            hover: { scale: 1.05 },
            tap: { scale: 0.95 }
          }}
        >
          {/* Scroll Progress Ring */}
          <svg className="w-14 h-14 transform -rotate-90 drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]">
            {/* Background ring */}
            <circle
              cx="28"
              cy="28"
              r={radius}
              className="stroke-white/10 fill-transparent"
              strokeWidth="3.5"
            />
            {/* Progress ring with gradient */}
            <motion.circle
              cx="28"
              cy="28"
              r={radius}
              className="fill-transparent"
              stroke="url(#scrollProgressGradient)"
              strokeWidth="3.5"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="scrollProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Button container */}
          <div className="absolute w-11 h-11 rounded-full flex items-center justify-center border border-primary/40 group-hover:border-accent/80 shadow-[0_0_20px_rgba(124,58,237,0.4)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300 overflow-hidden bg-slate-900/95 backdrop-blur-md">
            {/* Hover overlay glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Arrow Icon */}
            <motion.div
              className="text-accent group-hover:text-white z-10"
              variants={{
                initial: { y: 0 },
                hover: { 
                  y: [0, -4, 0],
                  transition: { 
                    repeat: Infinity, 
                    duration: 1.2, 
                    ease: "easeInOut" 
                  } 
                }
              }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
