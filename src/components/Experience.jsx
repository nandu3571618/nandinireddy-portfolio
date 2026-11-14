import React from 'react';
import { experienceData, personalData } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Download, 
  Award, 
  ArrowUpRight,
  Building2,
  Sparkles
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#080d18] via-[#0a1120] to-[#080d18]">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-md shadow-cyan-500/10">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Professional Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            5+ Years at <span className="text-gradient">Tata Consultancy Services</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering robust ReactJS architectures, micro-frontends, and mission-critical insurance platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/90 ml-4 sm:ml-8 space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator Glowing Node */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[#0a0f1d] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_12px_#38bdf8] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-7 sm:p-9 rounded-3xl border border-slate-800/90 hover:border-cyan-400/50 transition-all duration-300 group-hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-cyan-950/30">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 flex items-center gap-2 mt-1">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-cyan-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5 mb-6">
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Education & Callout */}
        <div className="mt-16 p-8 rounded-3xl glass-panel-glow border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Academics</span>
            <h4 className="text-lg font-bold text-white">B.E. Electronics & Communication Engineering</h4>
            <p className="text-xs sm:text-sm text-slate-400">Prathyusha Engineering College • CGPA: 7.27</p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all shrink-0 transform hover:scale-105"
          >
            <span>Request Full Resume</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
