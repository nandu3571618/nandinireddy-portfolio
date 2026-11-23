import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Layout, 
  Server, 
  Terminal, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Palette,
  ShieldCheck,
  Zap,
  TrendingUp,
  Globe,
  Smartphone,
  Gauge
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categoryIcons = {
    frontend: Layout,
    architecture: Server,
    quality: Zap,
    tools: Palette,
  };

  const selectedGroup = skillCategories.find((cat) => cat.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#070b14] via-[#090f1e] to-[#070b14]">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-md shadow-cyan-500/10">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities & Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            ReactJS, Micro-Frontends & <span className="text-gradient">Component Systems</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            5+ years of production-proven frameworks, low-code enterprise insurance systems, and modern UI tooling.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Cpu;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 transform active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xl shadow-cyan-500/30 border border-cyan-400/50'
                    : 'glass-panel text-slate-300 hover:text-white hover:bg-slate-800/80 border-slate-700/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-cyan-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedGroup.skills.map((skill, index) => {
            return (
              <div
                key={skill.name}
                className="glass-panel p-6 rounded-3xl border border-slate-800/90 hover:border-cyan-400/50 transition-all duration-300 group hover:-translate-y-1.5 relative overflow-hidden shadow-xl"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform" />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 flex items-center justify-center font-bold text-sm group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all shadow-md">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-xs text-slate-400 font-mono">
                        Enterprise Proficiency
                      </span>
                    </div>
                  </div>
                  
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Level Bar */}
                <div className="w-full bg-slate-950/80 rounded-full h-2.5 overflow-hidden border border-slate-800/80 mt-4 p-[1px]">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_10px_#38bdf8]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* TCS Enterprise Domain Callout Banner */}
        <div className="mt-14 glass-panel-glow p-7 sm:p-9 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-950 via-[#0d1627] to-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-600 p-0.5 shrink-0 shadow-xl shadow-cyan-500/25">
              <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span>Enterprise Insurance Domain Specialist</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  TCS (2021–2024)
                </span>
              </h3>
              <p className="text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Extensive experience delivering scalable policy comparison platforms, micro frontends, and low-code Innoveo configurations for global insurance providers.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="shrink-0 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            <span>View Insurance Projects</span>
            <Layers className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
