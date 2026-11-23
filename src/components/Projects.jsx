import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  Eye, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Enterprise Web', 'UI / UX Design'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#070b14] via-[#090f1d] to-[#070b14]">
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-md shadow-cyan-500/10">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Enterprise & Full-Stack Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Proven Systems & <span className="text-gradient">Production Architectures</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-traffic insurance portals, microservices e-commerce engines, and responsive digital web applications.
          </p>
        </div>

        {/* Filter Pills with Modern Glow */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 transform active:scale-95 ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 border border-cyan-400/50'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-slate-800/80 border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border border-slate-800/90 hover:border-cyan-400/50 overflow-hidden transition-all duration-400 group hover:-translate-y-2 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-cyan-950/40 relative"
            >
              {/* Top Image Banner with Gradient Mask */}
              <div>
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/50 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-950/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-md shadow-lg">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                        <Sparkles className="w-3 h-3 text-amber-400" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Primary Metric Ribbon */}
                  {project.metrics && project.metrics[0] && (
                    <div className="absolute bottom-3 right-4 px-3 py-1 rounded-xl bg-slate-950/90 border border-slate-700/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{project.metrics[0].label}: <strong>{project.metrics[0].value}</strong></span>
                    </div>
                  )}

                  {/* Highlights Overlay */}
                  {project.highlights && (
                    <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                      {project.highlights.slice(0, 3).map((hl) => (
                        <span
                          key={hl}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-slate-950/85 text-cyan-300 border border-cyan-500/30 backdrop-blur-md flex items-center gap-1"
                        >
                          <Zap className="w-2.5 h-2.5 text-cyan-400" />
                          {hl}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm mt-3 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-slate-800/80 pt-4 mt-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors p-2 rounded-xl hover:bg-cyan-500/10"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Architecture</span>
                </button>

                <div className="flex items-center gap-2.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                      aria-label="View on GitHub"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all transform hover:scale-105"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
