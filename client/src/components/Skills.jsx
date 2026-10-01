import React, { useState } from 'react';
import { Code, Database, Layout, Server, Cpu, Layers, Terminal, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages & Problem Solving', icon: Code },
    { id: 'webtech', name: 'Web Technologies', icon: Layout },
    { id: 'backend', name: 'Backend & Systems', icon: Server },
    { id: 'tools', name: 'Developer Tools', icon: Cpu },
  ];

  const skillItems = [
    // Languages & DSA
    { name: 'Java', category: 'languages', level: 90, exp: 'Core & OOP', desc: 'Object-Oriented Programming, Multithreading, Sockets, Collections' },
    { name: 'Data Structures & Algorithms', category: 'languages', level: 88, exp: 'LeetCode Daily', desc: 'Arrays, HashTables, Trees, Graphs, Dynamic Programming' },
    { name: 'JavaScript (ES6+)', category: 'languages', level: 88, exp: 'Web Core', desc: 'Promises, Async/Await, ES6 Syntax, Event Loop' },
    { name: 'HTML5 & Modern CSS3', category: 'languages', level: 92, exp: 'Web Tech', desc: 'Semantic markup, Flexbox, Grid, Responsive Design' },

    // Web Technologies
    { name: 'React.js', category: 'webtech', level: 85, exp: 'Frontend', desc: 'Hooks, Functional Components, State Management, Router' },
    { name: 'Tailwind CSS', category: 'webtech', level: 90, exp: 'Styling', desc: 'Utility-first styling, Dark mode, Custom Design Systems' },
    { name: 'Node.js & Express', category: 'webtech', level: 85, exp: 'Backend API', desc: 'RESTful API routing, Middleware, Authentication, CORS' },
    { name: 'Vite', category: 'webtech', level: 88, exp: 'Tooling', desc: 'Fast dev server, ES modules bundling, config optimization' },

    // Backend & Systems
    { name: 'MongoDB & Mongoose', category: 'backend', level: 82, exp: 'Database', desc: 'NoSQL Schemas, Document CRUD operations, Mongoose ODM' },
    { name: 'TCP Socket Networking', category: 'backend', level: 85, exp: 'Systems', desc: 'Multithreaded socket servers, Binary/Text stream transfers' },
    { name: 'Gemini AI API Integration', category: 'backend', level: 88, exp: 'AI Integrations', desc: 'Generative AI API integration, Document summarization, Quizzes' },
    { name: 'REST APIs & Auth', category: 'backend', level: 88, exp: 'Architecture', desc: 'Resource routing, Multi-role auth, Token validation' },

    // Tools
    { name: 'Git & GitHub', category: 'tools', level: 90, exp: 'Version Control', desc: 'Repositories, Branching, Pull Requests, Code Reviews' },
    { name: 'Postman', category: 'tools', level: 92, exp: 'API Testing', desc: 'HTTP request testing, Route verification, Endpoint payloads' },
    { name: 'VS Code & IntelliJ', category: 'tools', level: 95, exp: 'IDEs', desc: 'Java & Web development environments, Debugging tools' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-zinc-950/60 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Problem Solving</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            My core technical competencies spanning Java development, daily LeetCode algorithmic practice, and full-stack web engineering.
          </p>

          {/* Filter Tabs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-emerald-500 text-zinc-950 font-semibold shadow-lg shadow-emerald-500/20'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat.icon && <cat.icon className="w-4 h-4" />}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 border border-zinc-800/80 hover:border-emerald-500/40 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {skill.exp}
                  </span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mt-6 pt-4 border-t border-zinc-900 space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-500 uppercase tracking-wider">Proficiency</span>
                  <span className="text-emerald-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
