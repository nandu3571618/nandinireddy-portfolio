import React, { useState } from 'react';
import { awsArchitectureFlow } from '../data/portfolioData';
import { 
  Cloud, 
  Globe, 
  HardDrive, 
  Zap, 
  Share2, 
  Cpu, 
  Database, 
  Mail, 
  ShieldCheck, 
  Activity, 
  Play, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Server,
  Lock,
  Clock
} from 'lucide-react';

export default function AwsArchitecture() {
  const [selectedNodeId, setSelectedNodeId] = useState('cdn');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedActiveIndex, setSimulatedActiveIndex] = useState(-1);

  const iconMap = {
    Globe: Globe,
    Zap: Zap,
    HardDrive: HardDrive,
    Share2: Share2,
    Cpu: Cpu,
    Database: Database,
    Mail: Mail,
  };

  const selectedNode = awsArchitectureFlow.find((n) => n.id === selectedNodeId) || awsArchitectureFlow[0];

  // Run interactive traffic simulation
  const handleSimulateRequest = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulatedActiveIndex(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < awsArchitectureFlow.length) {
        setSimulatedActiveIndex(current);
        setSelectedNodeId(awsArchitectureFlow[current].id);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsSimulating(false);
          setSimulatedActiveIndex(-1);
        }, 800);
      }
    }, 650);
  };

  return (
    <section id="architecture" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090d16]/80">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Cloud className="w-3.5 h-3.5" />
            <span>AWS Cloud Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Interactive <span className="text-gradient-aws">Serverless Infrastructure</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            This portfolio is built and architected to deploy as a production-grade, globally distributed serverless system on AWS. Click any node to inspect telemetry, cost, and security blueprints.
          </p>

          {/* Interactive Simulation Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleSimulateRequest}
              disabled={isSimulating}
              className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg ${
                isSimulating
                  ? 'bg-amber-500 text-slate-950 shadow-amber-500/30 scale-105'
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:from-amber-400 hover:to-orange-400 shadow-orange-500/25 active:scale-95'
              }`}
            >
              <Play className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>
                {isSimulating
                  ? `Simulating Request: In Transit (${awsArchitectureFlow[simulatedActiveIndex]?.title || ''})...`
                  : 'Simulate Live User Request Through AWS'
                }
              </span>
            </button>
          </div>
        </div>

        {/* Architecture Diagram Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Top: Interactive Nodes Flow */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="glass-panel-glow p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  Cloud Pipeline Topology (Multi-AZ Serverless)
                </span>
                <span className="text-xs font-mono text-amber-400">
                  Click a node to inspect
                </span>
              </div>

              {/* Horizontal / Wrapped Pipeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {awsArchitectureFlow.map((node, index) => {
                  const Icon = iconMap[node.icon] || Cloud;
                  const isSelected = selectedNodeId === node.id;
                  const isSimulatedActive = simulatedActiveIndex === index;

                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`relative cursor-pointer p-4 rounded-xl transition-all duration-300 group ${
                        isSelected
                          ? 'glass-panel-glow border-amber-400/80 bg-slate-900/90 shadow-xl shadow-amber-500/15 -translate-y-1'
                          : 'glass-panel border-slate-800/80 hover:border-slate-700 bg-slate-950/50 hover:bg-slate-900/60'
                      } ${isSimulatedActive ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-950 scale-105' : ''}`}
                    >
                      {/* Node number badge */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                          0{index + 1}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Active
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                          style={{
                            background: `${node.color}20`,
                            border: `1px solid ${node.color}40`,
                            color: node.color,
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                            {node.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 truncate">
                            {node.category}
                          </p>
                        </div>
                      </div>

                      {/* Micro Badge */}
                      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-400">
                          {node.badge}
                        </span>
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-amber-400 translate-x-0.5' : 'text-slate-600'}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Data Flow Diagram Visual Summary */}
              <div className="mt-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">Browser / User</span>
                  <span className="text-slate-600">➔</span>
                  <span className="text-amber-400">Route 53</span>
                  <span className="text-slate-600">➔</span>
                  <span className="text-sky-400">CloudFront CDN</span>
                  <span className="text-slate-600">➔</span>
                  <span className="text-emerald-400">S3 / API Gateway</span>
                  <span className="text-slate-600">➔</span>
                  <span className="text-amber-300">AWS Lambda</span>
                </div>
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>End-to-End TLS 1.3 + OAC</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Selected Node Detail Inspector Panel */}
          <div className="lg:col-span-4">
            <div className="glass-panel-glow p-6 rounded-2xl border border-amber-500/40 sticky top-28 backdrop-blur-xl">
              
              {/* Header with Icon */}
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-800">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg"
                  style={{
                    background: `${selectedNode.color}25`,
                    border: `1px solid ${selectedNode.color}50`,
                    color: selectedNode.color,
                  }}
                >
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    {selectedNode.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedNode.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {selectedNode.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedNode.description}
              </p>

              {/* Node Telemetry & Specs */}
              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Measured Latency:
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-300">
                    {selectedNode.details.latency}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Cost Optimization:
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-300">
                    {selectedNode.details.costTier}
                  </span>
                </div>
              </div>

              {/* Key Features List */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Architectural Guarantees:
                </h4>
                <div className="space-y-2">
                  {selectedNode.details.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* IaC Blueprint Link */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  Defined in <code className="text-amber-300">aws/cloudformation</code>
                </span>
                <span className="text-xs text-emerald-400 font-mono">
                  Ready to Deploy
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
