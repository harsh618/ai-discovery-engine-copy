import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot } from 'recharts';
import { Button } from "@/components/ui/button";
import { Search, Wrench, Settings, TrendingUp, Crown, Zap, BarChart3, Target, DollarSign, CheckCircle2 } from 'lucide-react';

const milestones = [
  {
    week: 1,
    visibility: 8,
    stage: 'Discovery',
    icon: Search,
    color: '#6366F1',
    description: 'Complete AI visibility audit',
    details: ['Complete AI visibility audit', 'Identify citation gaps', 'Benchmark competitors']
  },
  {
    week: 2.5,
    visibility: 25,
    stage: 'Foundation',
    icon: Wrench,
    color: '#8B5CF6',
    description: 'Deploy technical foundation',
    details: ['Deploy llms.txt & robots.txt', 'Add structured data', 'Fix technical blockers']
  },
  {
    week: 5,
    visibility: 55,
    stage: 'Optimization',
    icon: Settings,
    color: '#A855F7',
    description: 'Transform content for AI',
    details: ['Transform content for AI citation', 'Create answer-worthy formats', 'Build topical authority']
  },
  {
    week: 8,
    visibility: 95,
    stage: 'Expansion',
    icon: TrendingUp,
    color: '#C084FC',
    description: 'Earn high-authority citations',
    details: ['Earn high-authority citations', 'Target new prompt categories', 'Amplify brand signals']
  },
  {
    week: 11,
    visibility: 180,
    stage: 'Dominance',
    icon: Crown,
    color: '#E879F9',
    description: 'Continuous optimization',
    details: ['Continuous monitoring & optimization', 'Outpace competitors', 'Scale across platforms']
  }
];

const graphData = Array.from({ length: 13 }, (_, i) => {
  const week = i;
  let withOptimization = 8;
  
  if (week >= 1 && week < 2.5) {
    withOptimization = 8 + (week - 1) * ((25 - 8) / 1.5);
  } else if (week >= 2.5 && week < 5) {
    withOptimization = 25 + (week - 2.5) * ((55 - 25) / 2.5);
  } else if (week >= 5 && week < 8) {
    withOptimization = 55 + (week - 5) * ((95 - 55) / 3);
  } else if (week >= 8 && week < 11) {
    withOptimization = 95 + (week - 8) * ((180 - 95) / 3);
  } else if (week >= 11) {
    withOptimization = 180 + (week - 11) * 10;
  }
  
  // Add milestone markers
  const milestone = milestones.find(m => Math.round(m.week) === week);
  
  return {
    week: `W${week}`,
    weekNum: week,
    withOptimization: Math.round(withOptimization),
    withoutOptimization: 8,
    milestone: milestone ? milestone.stage : null,
    milestoneVisibility: milestone ? milestone.visibility : null
  };
});

const CustomDot = (props) => {
  const { cx, cy, payload } = props;
  if (!payload.milestone) return null;
  
  const milestone = milestones.find(m => m.stage === payload.milestone);
  if (!milestone) return null;
  
  return (
    <g>
      <circle cx={cx} cy={cy} r={12} fill={milestone.color} opacity={0.2} />
      <circle cx={cx} cy={cy} r={8} fill={milestone.color} stroke="white" strokeWidth={2} />
    </g>
  );
};

const stats = [
  { icon: Zap, label: 'Time to First Citation', value: '18 days', sublabel: 'average' },
  { icon: BarChart3, label: '90-Day Growth', value: '180%', sublabel: 'visibility increase' },
  { icon: Target, label: 'Citation Rate', value: '2.5x', sublabel: 'vs competitors' },
  { icon: DollarSign, label: 'Traffic Quality', value: '2.1x', sublabel: 'better conversion' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-xl rounded-xl border border-slate-200 shadow-xl p-4">
        <p className="font-semibold text-slate-800 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-slate-600">{entry.name}:</span>
            <span className="font-medium text-slate-800">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
            <Settings className="w-4 h-4" />
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            From Invisible to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Unmissable
            </span>{' '}
            in AI Search
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our proven 5-stage framework transforms your brand visibility across ChatGPT, Perplexity, Claude, and Gemini.
          </p>
        </motion.div>

        {/* Graph Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 mb-8"
        >
          {/* Graph Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">AI Visibility Growth Trajectory</h3>
              <p className="text-sm text-slate-500">Your journey to AI search dominance</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                <span className="text-sm text-slate-600">With Our Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-300 border-2 border-dashed border-slate-400" />
                <span className="text-sm text-slate-500">Without Optimization</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="h-80 sm:h-96 relative">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={graphData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  <linearGradient id="colorOptimized" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="week" stroke="#94A3B8" fontSize={12} />
                <YAxis stroke="#94A3B8" fontSize={12} tickFormatter={(value) => `${value}%`} domain={[0, 200]} />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine y={8} stroke="#CBD5E1" strokeDasharray="5 5" label={{ value: 'Baseline', position: 'right', fill: '#94A3B8', fontSize: 11 }} />
                <Line 
                  type="monotone" 
                  dataKey="withoutOptimization" 
                  name="Without Optimization"
                  stroke="#CBD5E1" 
                  strokeWidth={2} 
                  strokeDasharray="5 5"
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="withOptimization" 
                  name="With Our Platform"
                  stroke="url(#colorOptimized)" 
                  strokeWidth={4}
                  dot={<CustomDot />}
                  activeDot={{ r: 10, fill: '#6366F1', stroke: 'white', strokeWidth: 2 }}
                />
                
                {/* Milestone Labels */}
                {graphData.filter(d => d.milestone).map((data, index) => {
                  const milestone = milestones.find(m => m.stage === data.milestone);
                  return (
                    <ReferenceDot
                      key={data.milestone}
                      x={data.week}
                      y={data.withOptimization}
                      r={0}
                      label={{
                        value: data.milestone,
                        position: index % 2 === 0 ? 'top' : 'bottom',
                        fill: milestone?.color || '#6366F1',
                        fontSize: 11,
                        fontWeight: 600,
                        offset: 20
                      }}
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>

            {/* Callout Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
            >
              <span className="text-sm font-semibold">Average 180% visibility increase in 90 days</span>
            </motion.div>
          </div>

          {/* Milestones */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setHoveredMilestone(index)}
                  onMouseLeave={() => setHoveredMilestone(null)}
                  className="relative group cursor-pointer"
                >
                  <div className={`p-4 rounded-xl border transition-all duration-300 ${
                    hoveredMilestone === index 
                      ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 shadow-lg' 
                      : 'bg-white border-slate-100 hover:border-slate-200'
                  }`}>
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${milestone.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: milestone.color }} />
                    </div>
                    <div className="text-xs text-slate-500 mb-1">Week {Math.round(milestone.week)}</div>
                    <div className="font-bold text-slate-900 mb-1">{milestone.stage}</div>
                    <div className="text-2xl font-bold" style={{ color: milestone.color }}>
                      {milestone.visibility}%
                    </div>
                  </div>

                  {/* Tooltip */}
                  {hoveredMilestone === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-4 bg-white rounded-xl shadow-xl border border-slate-100"
                    >
                      <h4 className="font-semibold text-slate-900 mb-2">{milestone.stage}</h4>
                      <ul className="space-y-1.5">
                        {milestone.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-indigo-500 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                        <div className="w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45 -mt-1.5" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 text-center"
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-indigo-500" />
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.sublabel}</div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to Start Your Growth Journey?</h3>
            <p className="text-slate-600 mb-6">See your current score, benchmark vs competitors, get custom roadmap</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-indigo-500/25"
            >
              Get Your Free AI Visibility Report
            </Button>
            <div className="flex justify-center gap-6 mt-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> See your current score</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Benchmark vs competitors</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Get custom roadmap</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}