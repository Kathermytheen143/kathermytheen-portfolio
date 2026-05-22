import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Globe, Database, ShieldAlert, Sparkles } from 'lucide-react';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

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
            Engineering With <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Impact</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        {/* Big Narrative Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed font-sans"
          >
            I am a <strong className="text-white font-semibold">Python Developer</strong> passionate about building 
            AI-powered applications, scalable backend systems, and intelligent automation tools. 
            I specialize in <strong className="text-accent font-semibold">Flask, Django, FastAPI</strong>, 
            REST APIs, Machine Learning, RAG systems, and AI agents.
          </motion.p>
        </div>

        {/* Custom 3-Column Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Backend Architecture */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass glass-hover p-8 rounded-2xl border-white/5 transition-all duration-300 flex flex-col items-start group"
          >
            <div className="p-3 bg-primary/10 rounded-xl mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
              <Server className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-space font-bold text-white mb-3">Backend Architecture</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Designing scalable databases, secure authentication systems, and performant RESTful APIs. I structure clean systems using Django, Flask, and FastAPI.
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300">PostgreSQL</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300">JWT Auth</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300">FastAPI</span>
            </div>
          </motion.div>

          {/* Card 2: AI & RAG Engineering */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass glass-hover p-8 rounded-2xl border-white/5 transition-all duration-300 flex flex-col items-start group"
          >
            <div className="p-3 bg-accent/10 rounded-xl mb-6 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300">
              <Cpu className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-space font-bold text-white mb-3">AI & RAG Engineering</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Building RAG systems, LLM connections, agentic workflows, and semantic search utilities. Custom Vector database retrieval integrations are my core interest.
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300">LangChain</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300">VectorDB</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300">AI Agents</span>
            </div>
          </motion.div>

          {/* Card 3: Real-World Products */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass glass-hover p-8 rounded-2xl border-white/5 transition-all duration-300 flex flex-col items-start group"
          >
            <div className="p-3 bg-emerald-500/10 rounded-xl mb-6 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors duration-300">
              <Sparkles className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-space font-bold text-white mb-3">Real-World Products</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Currently engineering actual production-level software systems including POS structures, Gold Loan Management, and Attendance Automation tools.
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300">POS</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300">Gold Loan</span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300">Automation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
