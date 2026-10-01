import React from 'react';
import { Download, ArrowUpRight, Github, Linkedin, Twitter, Mail, Code2, Terminal, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Stealth Dark Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-mono tracking-wide shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Software Developer & Web Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Ashish
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold font-mono text-zinc-300">
                Web Developer / Software Engineer
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed">
                I am a web developer with a strong foundation in <span className="text-emerald-400 font-semibold font-mono">Java</span> and a passion for building digital experiences. I practice problem-solving daily on <span className="text-cyan-400 font-semibold font-mono">LeetCode</span> and enjoy tackling complex logical challenges.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Download Resume Button */}
              <a
                href="/resume.pdf"
                download="Ashish_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download Resume</span>
              </a>

              {/* View Projects CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white font-medium text-sm transition-all hover:border-zinc-700"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Social Icons & Quick Info */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">Connect</span>
                <div className="flex items-center gap-2">
                  {[
                    { icon: Github, href: 'https://github.com', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                    { icon: Code2, href: 'https://leetcode.com', label: 'LeetCode' },
                    { icon: Mail, href: 'mailto:ashish@example.com', label: 'Email' }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-zinc-800/50 transition-all"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Java Core</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Web Tech</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>LeetCode Problem Solver</span>
                </div>
              </div>
            </div>

          </div>

          {/* Decorative Code Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />

              <div className="relative glass-panel rounded-2xl p-6 border border-zinc-800 shadow-2xl space-y-6">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" /> AshishProfile.java
                  </span>
                </div>

                {/* Java / Problem Solving Code Snippet */}
                <div className="font-mono text-xs leading-relaxed text-zinc-300 space-y-2 overflow-x-auto p-3 bg-zinc-950/80 rounded-xl border border-zinc-900">
                  <p><span className="text-purple-400">public class</span> <span className="text-cyan-300">SoftwareEngineer</span> &#123;</p>
                  <p className="pl-4"><span className="text-purple-400">String</span> name = <span className="text-emerald-300">"Ashish"</span>;</p>
                  <p className="pl-4"><span className="text-purple-400">String</span> degree = <span className="text-emerald-300">"B.Tech CS (Web Tech)"</span>;</p>
                  <p className="pl-4"><span className="text-purple-400">String</span> college = <span className="text-emerald-300">"C. V. Raman Global University"</span>;</p>
                  <p className="pl-4"><span className="text-purple-400">String[]</span> coreSkills = &#123;<span className="text-cyan-300">"Java"</span>, <span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Node.js"</span>, <span className="text-cyan-300">"LeetCode"</span>&#125;;</p>
                  <p className="pl-4"><span className="text-purple-400">public void</span> <span className="text-emerald-400">solveProblemsDaily</span>() &#123;</p>
                  <p className="pl-8 text-zinc-400">// Consistent DSA & algorithmic practice</p>
                  <p className="pl-8"><span className="text-purple-400">System.out.println</span>(<span className="text-emerald-300">"Building digital experiences with Java & Web Tech!"</span>);</p>
                  <p className="pl-4">&#125;</p>
                  <p>&#125;</p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                    <span className="block text-xl font-bold text-emerald-400 font-mono">B.Tech</span>
                    <span className="text-[11px] text-zinc-400">CS Web Tech</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                    <span className="block text-xl font-bold text-cyan-400 font-mono">Java</span>
                    <span className="text-[11px] text-zinc-400">Core & Socket</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                    <span className="block text-xl font-bold text-emerald-400 font-mono">LeetCode</span>
                    <span className="text-[11px] text-zinc-400">Daily DSA</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
