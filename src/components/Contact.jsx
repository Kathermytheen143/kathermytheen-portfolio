import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, Check, Copy, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const emailAddress = 'kathermytheen143143@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!key || key === "YOUR_ACCESS_KEY_HERE") {
      alert("Please configure your Web3Forms Access Key in the .env file (VITE_WEB3FORMS_ACCESS_KEY) to enable form submissions.");
      setIsSubmitting(false);
      return;
    }

    const formData = {
      access_key: key,
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
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
            Initiate <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contact</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4 w-20"
          />
        </div>

        {/* Contact Grid layout */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Card Left: Contact channels (2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-6 md:p-8 rounded-2xl border-white/5 md:col-span-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-space font-bold text-white mb-4">
                Let's Build Something Awesome
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-sans">
                Whether you have an enterprise backend requirement, need an AI pipeline integrated, or want to consult on database structures, feel free to reach out.
              </p>

              {/* Direct email click channel */}
              <div className="space-y-4">
                <div
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 hover:border-primary/40 rounded-xl cursor-pointer group transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <div className="text-left">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                        Direct Mail
                      </span>
                      <span className="text-xs text-slate-300 font-semibold font-mono">
                        {emailAddress}
                      </span>
                    </div>
                  </div>
                  <button className="text-slate-500 group-hover:text-white transition-colors duration-200">
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Social linkages footer */}
            <div className="mt-12 pt-6 border-t border-white/5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-4">
                Social Node Bridges
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/kathermytheen-pythondeveloper"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 rounded-xl text-slate-300 hover:text-white transition-all duration-300 shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Kathermytheen143"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/40 rounded-xl text-slate-300 hover:text-white transition-all duration-300 shadow-md"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="/resume.pdf"
                  download="S_Kathermytheen_Resume.pdf"
                  className="flex items-center space-x-2 py-3 px-4 bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/40 rounded-xl text-slate-300 hover:text-white text-xs font-semibold transition-all duration-300"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card Right: Direct Form channel (3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-6 md:p-8 rounded-2xl border-white/5 md:col-span-3"
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-slate-900/60 border border-white/10 focus:border-accent rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Email Identity
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-slate-900/60 border border-white/10 focus:border-accent rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="subject" className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Subject Domain
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  placeholder="Query category (e.g. Backend Project)"
                  className="w-full bg-slate-900/60 border border-white/10 focus:border-accent rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200"
                />
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Detailed Transmission
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  placeholder="Outline project requirements, goals or open roles..."
                  className="w-full bg-slate-900/60 border border-white/10 focus:border-accent rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(124,58,237,0.25)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-xs text-center font-semibold mt-2"
                >
                  ✓ Message transmitted successfully! I will get back to you soon.
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-rose-400 text-xs text-center font-semibold mt-2"
                >
                  ✗ Failed to transmit message. Please try again or copy my email address.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
