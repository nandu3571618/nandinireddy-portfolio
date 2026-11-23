import React from 'react';
import { aboutData, personalData } from '../data/portfolioData';
import { 
  Layers, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  HeartHandshake,
  Sparkles,
  Building2,
  Palette,
  Code2
} from 'lucide-react';

export default function About() {
  const iconMap = {
    Layers: Layers,
    Zap: Zap,
    ShieldCheck: ShieldCheck,
  };

  const highlights = [
    { 
      title: 'Google UX Certified', 
      desc: 'Google UX Design Professional Certificate with high-fidelity Figma mastery and user-centered design methodologies.',
      icon: Palette,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
    },
    { 
      title: 'Innoveo Business Architect', 
      desc: 'Certified Business Architect configuring mission-critical insurance business logic and validation layers at TCS.',
      icon: ShieldCheck,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    },
    { 
      title: 'Micro Frontends Native', 
      desc: 'Architecting modular, squad-independent React applications for large-scale enterprise customer portals.',
      icon: Layers,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    },
    { 
      title: 'Production Obsessed', 
      desc: 'Designing for 99.9% uptime, zero-downtime releases, sub-100ms API interactions, and strict accessibility.',
      icon: Zap,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#080d18]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-md shadow-cyan-500/10">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engineering & Design Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Bridging <span className="text-gradient">Figma Design, ReactJS & Scalable Architecture</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            5+ years of IT excellence at Tata Consultancy Services (TCS) delivering mission-critical insurance web applications.
          </p>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Bio Card (Span 7) */}
          <div className="lg:col-span-7 glass-panel-glow p-7 sm:p-9 rounded-3xl relative overflow-hidden border border-slate-800 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-[#0b1120] rounded-[14px] flex items-center justify-center font-bold text-white text-lg">
                    👩‍💻
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Nandini Reddy K</h3>
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 mt-0.5">
                    <Building2 className="w-3.5 h-3.5" /> Tata Consultancy Services | Chennai (2021–2024)
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 5+ Years IT Exp
              </span>
            </div>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-normal">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Highlights Bento 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-800/80">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all group">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right 3 Pillars Cards (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {aboutData.pillars.map((pillar) => {
              const IconComponent = iconMap[pillar.icon] || Layers;
              return (
                <div
                  key={pillar.title}
                  className="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-cyan-400/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} p-0.5 shrink-0 shadow-lg`}>
                      <div className="w-full h-full bg-[#0c1220] rounded-[14px] flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Status Bento Callout */}
            <div className="glass-panel p-6 rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-cyan-950/20 via-slate-900/50 to-slate-950/40 flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xs space-y-1">
                <div className="text-slate-200 font-semibold text-sm">Immediate Joiner • Senior Frontend & Full Stack</div>
                <div className="text-cyan-400 font-mono text-xs">Chennai, Tamil Nadu, India / Hybrid & Remote</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
