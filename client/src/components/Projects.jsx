import React from 'react';
import { ExternalLink, Github, FolderGit2, Code2, Sparkles, Server, Cpu, Stethoscope, Share2, FileText } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Hospital Appointment Booking System',
      category: 'Full-Stack Web App',
      description: 'A full-stack web application featuring multi-role dashboards (Patients, Doctors, Admins) and secure authentication for managing appointment scheduling, medical records, and doctor availability slots.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
      github: 'https://github.com/example/hospital-appointment-system',
      live: 'https://hospital-booking-demo.example.com',
      icon: Stethoscope,
      featured: true,
      bgGradient: 'from-emerald-500/20 to-cyan-500/10',
    },
    {
      id: 2,
      title: 'FileShare System (Java Multithreaded)',
      category: 'Java Systems & Networking',
      description: 'A robust networking utility built using Java, TCP sockets, and multithreading for efficient local file transfers with concurrent client handling, chunked stream delivery, and integrity verification.',
      tags: ['Java', 'TCP Sockets', 'Multithreading', 'Network I/O', 'OOP', 'Concurrency'],
      github: 'https://github.com/example/java-fileshare-system',
      live: 'https://github.com/example/java-fileshare-system#readme',
      icon: Share2,
      featured: true,
      bgGradient: 'from-cyan-500/20 to-blue-500/10',
    },
    {
      id: 3,
      title: 'AI Notes Summarizer & Quiz Generator',
      category: 'AI & Generative Web Tool',
      description: 'An intelligent study tool leveraging the Gemini API to provide instant document summaries, key takeaway extraction, and interactive auto-generated quizzes from user notes.',
      tags: ['React.js', 'Gemini API', 'Node.js', 'Express', 'Tailwind CSS'],
      github: 'https://github.com/example/ai-notes-summarizer',
      live: 'https://ai-notes-summarizer-demo.example.com',
      icon: FileText,
      featured: true,
      bgGradient: 'from-violet-500/20 to-emerald-500/10',
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-zinc-950/60 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Showcase</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Practical software projects demonstrating full-stack web engineering, Java socket networking, and AI integration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-zinc-800/80 overflow-hidden flex flex-col group hover:border-emerald-500/40"
            >
              {/* Card Banner */}
              <div className={`h-48 relative bg-gradient-to-br ${project.bgGradient} p-6 flex flex-col justify-between border-b border-zinc-800/80 overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-zinc-950/80 text-emerald-400 border border-zinc-800">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-500 text-zinc-950 font-bold">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-zinc-950/90 border border-zinc-800 flex items-center justify-center text-emerald-400 shadow-lg group-hover:scale-110 transition-transform">
                    <project.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800/80 text-emerald-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-zinc-950 font-mono text-xs font-semibold transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
