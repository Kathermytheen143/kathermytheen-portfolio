import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GitFork, Star, Eye } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function GithubStats() {
  // Generate mock contributions data for a grid (7 rows, 28 columns for responsiveness)
  const rows = 7;
  const cols = 28;
  const contributionGrid = Array.from({ length: rows * cols }, () => {
    // Randomize activity levels (0-4)
    const rand = Math.random();
    if (rand < 0.4) return 0;
    if (rand < 0.7) return 1;
    if (rand < 0.88) return 2;
    return Math.random() > 0.5 ? 3 : 4;
  });

  const getColorClass = (val) => {
    switch (val) {
      case 0: return 'bg-slate-900 border-white/5';
      case 1: return 'bg-[#7C3AED]/20 border-[#7C3AED]/35';
      case 2: return 'bg-[#7C3AED]/50 border-[#7C3AED]/65';
      case 3: return 'bg-[#06B6D4]/60 border-[#06B6D4]/75';
      case 4: return 'bg-[#06B6D4] border-[#06B6D4]/90 shadow-[0_0_10px_rgba(6,182,212,0.4)]';
      default: return 'bg-slate-900 border-white/5';
    }
  };

  const languages = [
    { name: 'Python', percentage: 58, color: 'bg-primary' },
    { name: 'JavaScript', percentage: 24, color: 'bg-accent' },
    { name: 'HTML & CSS', percentage: 12, color: 'bg-emerald-400' },
    { name: 'SQL', percentage: 6, color: 'bg-amber-400' }
  ];

  return (
    <section id="stats" className="py-24 relative overflow-hidden bg-slate-950/10">
      {/* Background neon radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-space font-bold text-white mb-4"
          >
            Coding <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Telemetry</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4 w-20"
          />
        </div>

        {/* Outer Frame Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contribution Graph Card (2 columns wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-6 md:p-8 rounded-2xl border-white/5 md:col-span-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <GithubIcon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-space font-bold text-white uppercase tracking-wider">
                    GitHub Activity Ledger
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">1,482 commits this year</span>
              </div>

              {/* Grid Box */}
              <div className="overflow-x-auto pb-4">
                <div className="grid grid-flow-col gap-[3px] w-max">
                  {Array.from({ length: cols }).map((_, cIdx) => (
                    <div key={cIdx} className="grid gap-[3px] grid-rows-7">
                      {Array.from({ length: rows }).map((_, rIdx) => {
                        const val = contributionGrid[cIdx * rows + rIdx];
                        return (
                          <div
                            key={rIdx}
                            className={`w-3.5 h-3.5 rounded-sm border ${getColorClass(val)} transition-all duration-300 hover:scale-125 cursor-pointer`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid Legend */}
            <div className="flex items-center justify-between text-xs text-slate-400 mt-4 pt-4 border-t border-white/5">
              <span>Learn more at github.com</span>
              <div className="flex items-center space-x-1.5">
                <span>Less</span>
                <div className="w-3 h-3 rounded-sm bg-slate-900 border border-white/5" />
                <div className="w-3 h-3 rounded-sm bg-primary/20 border border-primary/35" />
                <div className="w-3 h-3 rounded-sm bg-primary/50 border border-primary/65" />
                <div className="w-3 h-3 rounded-sm bg-accent/60 border border-accent/75" />
                <div className="w-3 h-3 rounded-sm bg-accent border border-accent/90" />
                <span>More</span>
              </div>
            </div>
          </motion.div>

          {/* Languages stats card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass p-6 md:p-8 rounded-2xl border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Code2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-space font-bold text-white uppercase tracking-wider">
                  Technology Split
                </span>
              </div>

              {/* Progress bars list */}
              <div className="space-y-5">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-300">{lang.name}</span>
                      <span className="text-white">{lang.percentage}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`h-full rounded-full ${lang.color} shadow-[0_0_8px_rgba(124,58,237,0.3)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Metrics list */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/5 text-center">
              <div>
                <span className="text-xl font-space font-bold text-white">24</span>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">
                  Repositories
                </p>
              </div>
              <div>
                <span className="text-xl font-space font-bold text-white">12+</span>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">
                  OSS Contributions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
