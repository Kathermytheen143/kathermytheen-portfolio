import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, Cpu, Compass, Sliders, Milestone } from 'lucide-react';

export default function AiRagRoadmap() {
  const roadmapNodes = [
    {
      title: 'Retrieval-Augmented Generation (RAG)',
      icon: <Database className="w-5 h-5 text-accent" />,
      status: 'Active Dev',
      statusClass: 'bg-accent/10 text-accent border-accent/20',
      description: 'Building custom retrieval paths linking proprietary text databases with generative LLMs using hybrid search vectors (sparse + dense) and re-ranking algorithms.',
      skills: ['Semantic Search', 'Hybrid Querying', 'Re-ranking', 'Context Chunking']
    },
    {
      title: 'AI Agentic Workflows',
      icon: <Network className="w-5 h-5 text-primary" />,
      status: 'Prototype Phase',
      statusClass: 'bg-primary/10 text-primary border-primary/20',
      description: 'Engineering loop-based autonomous agents using tool calling schemas, task planning decomposition, and memory-enhanced system flows.',
      skills: ['Tool Calling', 'Self-Reflection', 'CrewAI', 'State Management']
    },
    {
      title: 'LangChain & Orchestration',
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      status: 'Integration',
      statusClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      description: 'Chaining multiple API calls, prompting structures, parser constraints, and parsing models together to build end-to-end intelligent pipelines.',
      skills: ['LCEL', 'Memory buffers', 'Custom parsers', 'AgentExecutor']
    },
    {
      title: 'Vector Stores & Embeddings',
      icon: <Sliders className="w-5 h-5 text-amber-400" />,
      status: 'Active Research',
      statusClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      description: 'Fine-tuning, mapping, and retrieving highly dense vector coordinates. Integrating similarity matching indexes (Cosine, Dot Product) across databases.',
      skills: ['ChromaDB', 'Pinecone', 'FAISS', 'Text-Embeddings-3']
    }
  ];

  return (
    <section id="airag" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background neon radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4"
          >
            <Milestone className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-space">
              Future Ready
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-4">
            AI & RAG <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="text-slate-400 font-sans max-w-lg mx-auto text-sm">
            Active exploration, building blocks, and engineering targets in the machine learning space.
          </p>
          <div className="h-[3px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4 w-20" />
        </div>

        {/* Roadmap Path */}
        <div className="relative border-l border-dashed border-white/15 pl-6 md:pl-10 space-y-12 max-w-3xl mx-auto">
          {roadmapNodes.map((node, index) => (
            <motion.div
              key={node.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#0B0F19] border-2 border-white/15 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-slow" />
              </div>

              {/* Card content */}
              <div className="glass p-6 md:p-8 rounded-2xl border-white/5 hover:border-accent/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
                      {node.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-space font-bold text-white leading-tight">
                      {node.title}
                    </h3>
                  </div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md border shrink-0 w-fit ${node.statusClass}`}>
                    {node.status}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5 font-sans">
                  {node.description}
                </p>

                {/* Sub-skills */}
                <div className="flex flex-wrap gap-2">
                  {node.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 text-slate-300 font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
