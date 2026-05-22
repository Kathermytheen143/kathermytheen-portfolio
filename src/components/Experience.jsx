import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'UKINFOTECH',
      role: 'Python Developer',
      period: 'Present',
      impact: 'Full-time',
      bullets: [
        'Developing scalable backend systems and enterprise-level applications using Python and Django.',
        'Building REST APIs, AI-integrated modules, and intelligent automation workflows.',
        'Integrating robust relational databases with optimized indexing and queries.',
        'Partnering on architecture strategies to improve database request speeds and API stability.'
      ],
      color: 'border-primary'
    },
    {
      company: 'BY8LABS',
      role: 'Python Developer Intern',
      period: 'Internship',
      impact: 'Completed',
      bullets: [
        'Built secure RESTful APIs from scratch using Flask.',
        'Implemented stateless token authentication using JSON Web Tokens (JWT).',
        'Configured relational database integrations and mock test assertions.'
      ],
      color: 'border-accent'
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-space font-bold text-white mb-4"
          >
            Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Timeline</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-white/20 flex items-center justify-center group-hover:border-primary transition-all duration-300">
                <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary' : 'bg-accent'}`} />
              </div>

              {/* Timeline Card */}
              <div className={`glass glass-hover p-6 md:p-8 rounded-2xl border-l-4 ${exp.color} transition-all duration-300`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-space font-bold text-white tracking-wide">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-accent font-semibold text-sm">{exp.company}</span>
                      <span className="text-white/20">•</span>
                      <span className="text-slate-400 text-xs flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="inline-block text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300 font-medium">
                      {exp.impact}
                    </span>
                  </div>
                </div>

                {/* Bullets lists */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-300 leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-accent/80 mr-3 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
