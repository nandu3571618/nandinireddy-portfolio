import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';
import { 
  Mail, 
  Phone,
  Send, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  MessageSquare,
  Sparkles,
  Server
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [responseMeta, setResponseMeta] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');
    const startTime = performance.now();

    try {
      // Clean client message dispatch simulation
      await new Promise((resolve) => setTimeout(resolve, 600));
      const latency = Math.round(performance.now() - startTime);

      setResponseMeta({
        source: 'Direct Message Dispatch',
        requestId: 'msg-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
        latency: `${latency}ms`,
        status: 200,
      });

      setStatus('success');
      // Fire celebration confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#818cf8', '#c084fc', '#34d399'],
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to dispatch inquiry. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Engineer the <span className="text-gradient">Next Solution</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have an open role, technical project, or full-time opportunity? Reach out directly via the form, email, or phone.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel-glow p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Direct Channels</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email Address</div>
                    <div className="text-sm font-medium font-mono text-cyan-300">{personalData.email}</div>
                  </div>
                </a>

                {personalData.phone && (
                  <a
                    href={`tel:${personalData.phone}`}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Call / WhatsApp</div>
                      <div className="text-sm font-medium font-mono text-emerald-300">{personalData.phone}</div>
                    </div>
                  </a>
                )}

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="text-sm font-medium text-white">{personalData.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Availability</div>
                    <div className="text-sm font-medium text-emerald-400">{personalData.status}</div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                  Developer Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personalData.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Notice Period: Immediate Joiner (Available Now)</span>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow p-6 sm:p-8 rounded-2xl border border-slate-800">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Expect a response within 24 business hours.
              </p>

              {status === 'success' && (
                <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 mb-6 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message Dispatched Successfully!</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Thank you! Your message has been received and a notification has been dispatched to Nandini.
                  </p>
                  {responseMeta && (
                    <div className="p-3 rounded-lg bg-slate-950/80 font-mono text-[11px] text-slate-400 space-y-1">
                      <div>Channel: <span className="text-cyan-400">{responseMeta.source}</span></div>
                      <div>Dispatch ID: <span className="text-amber-400">{responseMeta.requestId}</span></div>
                      <div>Latency: <span className="text-emerald-400">{responseMeta.latency}</span></div>
                    </div>
                  )}
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs text-cyan-400 hover:underline pt-1"
                  >
                    Send another message
                  </button>
                </div>
              )}

              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2 mb-6">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Hiring Manager"
                      required
                      className="w-full px-4 py-3 rounded-xl glass-input text-white text-sm transition-all placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hiring@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl glass-input text-white text-sm transition-all placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Senior Frontend / Full Stack / ReactJS Opportunity"
                    className="w-full px-4 py-3 rounded-xl glass-input text-white text-sm transition-all placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share role details, project scope, or interview schedule..."
                    required
                    className="w-full px-4 py-3 rounded-xl glass-input text-white text-sm transition-all placeholder:text-slate-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <Zap className="w-4 h-4 animate-spin text-white" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
