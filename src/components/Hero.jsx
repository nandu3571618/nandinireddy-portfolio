import React, { useState, useEffect } from 'react';
import { personalData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  ExternalLink,
  Layers,
  ChevronDown,
  Palette,
  Briefcase,
  Award,
  Zap,
  Code2,
  CheckCircle2
} from 'lucide-react';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [terminalTab, setTerminalTab] = useState('build');

  const roles = [
    'Senior Frontend ReactJS Developer',
    'Micro Frontends & UI Architect',
    'Certified UX Designer (Google)',
    'Innoveo Certified Business Architect'
  ];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 65);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 35);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#070b14] via-[#090e1a] to-[#070b14]">
      
      {/* Background Aurora Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[130px] pointer-events-none animate-aurora" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Top Floating Badge Bar */}
        <div className="flex flex-wrap items-center justify-start gap-3 mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel-glow border border-cyan-400/40 text-xs text-cyan-300 shadow-lg shadow-cyan-500/15 backdrop-blur-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 cyber-beacon" />
            <span className="font-mono font-semibold tracking-wide">TCS Chennai • 5+ Years Frontend & UX</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Palette className="w-3.5 h-3.5 text-purple-400" />
            <span>Google UX Certified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Hello, I'm <br />
              <span className="text-gradient">
                {personalData.name} {personalData.surname}
              </span>
            </h1>

            {/* Animated Typing Headline with Cyber Prompt */}
            <div className="flex items-center text-lg sm:text-2xl lg:text-3xl font-semibold text-slate-300 h-12 mb-6">
              <span className="text-cyan-400 mr-2 font-mono">&gt;</span>
              <span className="text-white font-mono">{displayText}</span>
              <span className="w-2 h-7 bg-cyan-400 ml-1.5 inline-block animate-pulse shadow-[0_0_8px_#38bdf8]" />
            </div>

            {/* Description Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              Specializing in high-performance <strong className="text-cyan-300 font-semibold">ReactJS applications</strong>, <strong className="text-indigo-300 font-semibold">Micro-Frontend architectures</strong>, and <strong className="text-purple-300 font-semibold">Google-certified UX design</strong>. 5+ years translating complex enterprise insurance requirements into pixel-perfect, scalable web experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="relative group overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shimmer-effect"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#experience"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl glass-panel hover:bg-slate-800/90 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>Career Experience</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-slate-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
              >
                <span>Let's Connect</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Authentic Credentials Row */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Verified Credentials:
              </span>
              {personalData.certifications.map((cert) => (
                <div
                  key={cert.badge}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400/50 transition-all duration-200 group shadow-md"
                >
                  <ShieldCheck className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono font-medium text-slate-200">
                    {cert.badge}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 font-mono border border-cyan-500/20">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive 3D Bento Card & Cyber Terminal */}
          <div className="lg:col-span-5 relative space-y-4">
            
            {/* Floating Top Badge */}
            <div className="absolute -top-6 -right-3 z-20 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl glass-panel-glow bg-[#0f172a]/95 text-cyan-300 text-xs font-mono shadow-2xl border border-cyan-400/40 animate-float">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>ReactJS 18+ • Micro Frontends</span>
            </div>

            {/* Interactive Terminal Window */}
            <div className="rounded-3xl glass-panel-glow bg-[#0b101e]/95 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-2xl">
              
              {/* Terminal Title Bar */}
              <div className="px-5 py-3.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" /> nandini@react-dev:~
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5 text-[11px] font-mono">
                  <button
                    onClick={() => setTerminalTab('build')}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      terminalTab === 'build' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    dev-build.sh
                  </button>
                  <button
                    onClick={() => setTerminalTab('profile')}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      terminalTab === 'profile' ? 'bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/40' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    profile.json
                  </button>
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[310px]">
                {terminalTab === 'build' ? (
                  <div className="space-y-3.5">
                    <div className="text-slate-400">
                      <span className="text-emerald-400">$</span> npm run build && npm test
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 text-xs space-y-1">
                      <div className="text-cyan-400 flex items-center justify-between">
                        <span>Build Status: <strong className="text-emerald-400">✓ Production Ready</strong></span>
                        <span className="text-[10px] text-slate-500">Vite + React 18</span>
                      </div>
                      <div className="text-slate-400">Architecture: <span className="text-slate-200">Micro Frontends + Redux Toolkit</span></div>
                      <div className="text-slate-400">Quality: <span className="text-emerald-400">100% Component Integrity Passed</span></div>
                    </div>

                    <div className="text-slate-400 pt-1">
                      <span className="text-emerald-400">$</span> git log -1 --pretty=format:"%h - %s"
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-xs">
                      "feat: enterprise insurance micro-frontend modules • Ready for senior roles"
                    </div>

                    <div className="text-slate-500 pt-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="text-xs">Immediate Joiner for Senior Frontend & Full Stack roles</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-slate-300 space-y-1">
                    <span className="text-slate-500">// Nandini Reddy K • Professional Profile</span>
                    <pre className="text-cyan-300">{`{
  "name": "Nandini Reddy K",
  "company_experience": "Tata Consultancy Services (2021–2024)",
  "total_experience": "5+ Years IT",
  "core_stack": [
    "ReactJS 18+", "Redux Toolkit", 
    "Micro Frontends", "Tailwind CSS",
    "JavaScript ES6+", "HTML5/CSS3"
  ],
  "certifications": [
    "Google UX Design Professional",
    "Innoveo Certified Business Architect"
  ],
  "education": "B.E. ECE - Prathyusha Eng. College",
  "availability": "Immediate Joiner",
  "location": "Chennai, Tamil Nadu, India"
}`}</pre>
                  </div>
                )}
              </div>

              {/* Terminal Footer Info */}
              <div className="px-5 py-3 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  All Tests Passing • Production Ready
                </span>
                <span className="text-slate-400">Location: <code className="text-cyan-400">Chennai, IN</code></span>
              </div>

            </div>

            {/* Bottom Tech Floating Tag */}
            <div className="hidden sm:flex items-center justify-between p-3.5 rounded-2xl glass-panel border border-slate-700/80 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Enterprise Insurance Domain Specialist</span>
              </div>
              <span className="font-mono text-cyan-400 font-semibold">5+ Years IT</span>
            </div>

          </div>

        </div>

        {/* Bottom Bento Metrics Row */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-5">
          {personalData.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="group p-5 rounded-2xl glass-panel hover:glass-panel-glow border border-slate-800/80 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
              
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-white">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1.5 block group-hover:text-slate-200 transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors">
        <span className="text-[10px] uppercase font-mono tracking-widest">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
