import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle, Code2, BookOpen } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science (Web Technology)',
      institution: 'C. V. Raman Global University',
      location: 'Bhubaneswar, Odisha, India',
      status: 'Undergraduate Program',
      courses: [
        'Web Technology & Full-Stack Development',
        'Data Structures & Algorithms (Java)',
        'Object-Oriented Programming & Design Patterns',
        'Computer Networks & Socket Communications',
        'Database Management Systems (SQL & MongoDB)',
        'Operating Systems & Multithreading Architecture'
      ],
      highlights: [
        'Specialization in Web Technology and Software Engineering.',
        'Practicing daily problem solving on LeetCode focused on Data Structures & Algorithms.',
        'Built full-stack web applications and Java multithreaded networking utilities.'
      ]
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Foundation</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            My formal computer science education, core coursework, and fundamental engineering foundation.
          </p>
        </div>

        {/* Card Container */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 sm:p-10 border border-zinc-800/80 space-y-6">
              
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-800 pb-6">
                <div className="space-y-1">
                  <span className="inline-block text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                    {edu.status}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-semibold text-zinc-300 flex items-center gap-2 pt-1">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>{edu.institution}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Core Academic Highlights */}
              <div className="space-y-3">
                <h4 className="text-sm font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" /> Key Focus & Achievements
                </h4>
                <ul className="space-y-2.5">
                  {edu.highlights.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Coursework Badges */}
              <div className="pt-4 border-t border-zinc-900 space-y-3">
                <h4 className="text-sm font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Specialized Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-200 hover:border-emerald-500/40 transition-colors"
                    >
                      #{course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
