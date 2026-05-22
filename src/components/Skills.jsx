import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, Laptop, Database, PenTool } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5 text-primary" />,
      glowColor: 'group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]',
      skills: ['Python', 'Flask', 'Django', 'FastAPI', 'REST APIs', 'JWT Auth'],
    },
    {
      title: 'AI / ML',
      icon: <Cpu className="w-5 h-5 text-accent" />,
      glowColor: 'group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
      skills: [
        'Machine Learning',
        'RAG Systems',
        'AI Agents',
        'LangChain',
        'Vector Databases',
        'Embeddings',
      ],
    },
    {
      title: 'Frontend',
      icon: <Laptop className="w-5 h-5 text-emerald-400" />,
      glowColor: 'group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]',
      skills: ['HTML', 'CSS', 'Bootstrap', 'React.js', 'JavaScript'],
    },
    {
      title: 'Database',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      glowColor: 'group-hover:border-amber-500/40 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]',
      skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Firestore'],
    },
    {
      title: 'Tools',
      icon: <PenTool className="w-5 h-5 text-rose-400" />,
      glowColor: 'group-hover:border-rose-500/40 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]',
      skills: ['Git', 'GitHub', 'Postman'],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Subtle Grid overlay background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

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
            Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Powerhouse</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className={`group glass rounded-2xl p-6 border-white/5 transition-all duration-300 ${category.glowColor}`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-space font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="cursor-default px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 hover:border-white/15 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
