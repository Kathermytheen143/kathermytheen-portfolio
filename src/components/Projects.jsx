import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Activity, Coins, CheckCircle } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Gold Loan Management System',
      subtitle: 'Fintech Credit Ledger',
      icon: <Coins className="w-6 h-6 text-amber-400" />,
      accentClass: 'from-amber-500 to-orange-500',
      description: 'Fintech ledger engineered to track gold appraisal values, customer pledge profiles, and monthly interest calculations. Built to replace manual, error-prone spreadsheets with automated interest tracking.',
      features: [
        'Accurate interest rate and penalty calculations engine',
        'Customer pledge records tracking with KYC storage'
      ],
      tech: ['Django', 'MySQL', 'Bootstrap', 'Financial Ledger'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Hospital Token Queue System',
      subtitle: 'Real-Time Medical Workflow',
      icon: <Activity className="w-6 h-6 text-rose-400" />,
      accentClass: 'from-rose-500 to-orange-500',
      description: 'Real-time hospital clinic queue and patient token tracking portal displaying ticket streams and department counters. Solves clinic crowding and patient wait-time coordination.',
      features: [
        'Real-time patient check-in and token ticket issuance',
        'Live queue status dashboards for display screens'
      ],
      tech: ['Flask', 'React.js', 'REST API', 'WebSockets'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Enterprise POS System',
      subtitle: 'Billing & Inventory',
      icon: <ShoppingCart className="w-6 h-6 text-emerald-400" />,
      accentClass: 'from-emerald-500 to-cyan-500',
      description: 'Enterprise point of sale system built for multi-tenant retail management and inventory adjustment tracking. Supports concurrent checkouts with fast billing transaction ledger updates.',
      features: [
        'High-performance retail billing ledger with hotkeys support',
        'Stock adjustment tracking and low-inventory alerts'
      ],
      tech: ['Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-space font-bold text-white mb-4"
          >
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 font-sans max-w-xl mx-auto text-sm"
          >
            Enterprise solutions and production-ready applications solving core business logic.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"
          />
        </div>

        {/* Projects Rows */}
        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="relative overflow-hidden glass rounded-2xl border border-white/5 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.08)] transition-all duration-300 flex flex-col group shadow-2xl bg-slate-950/45"
            >
              {/* Left Color Accent Bar */}
              <div className={`absolute top-0 left-0 bottom-0 w-[4px] bg-gradient-to-b ${project.accentClass}`} />

              <div className="p-6 md:p-8 pl-8 md:pl-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                {/* Left Side: Icon + Details */}
                <div className="flex-1 space-y-4">
                  {/* Subtitle & Title & Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/10 shadow-lg shrink-0 w-12 h-12 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div className="relative z-10">
                        {project.icon}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-accent font-space block">
                        {project.subtitle}
                      </span>
                      <h3 className="text-xl font-space font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed max-w-3xl font-sans">
                    {project.description}
                  </p>

                  {/* Key Highlights list */}
                  <div className="pt-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 font-space block mb-2">
                      Key Highlights
                    </span>
                    <ul className="grid sm:grid-cols-2 gap-2 max-w-2xl">
                      {project.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-center text-xs text-slate-300 leading-relaxed font-sans">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-2.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Badges / Tech Stack */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 bg-slate-900/60 rounded-md text-slate-400 border border-white/5 font-space group-hover:border-primary/10 transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
