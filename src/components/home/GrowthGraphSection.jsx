import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, Users, Target, DollarSign, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const graphData = [
  { year: '2023', chatgpt: 200, perplexity: 10, gemini: 50, claude: 5 },
  { year: 'Q2 2023', chatgpt: 300, perplexity: 20, gemini: 80, claude: 10 },
  { year: 'Q3 2023', chatgpt: 400, perplexity: 35, gemini: 120, claude: 18 },
  { year: 'Q4 2023', chatgpt: 500, perplexity: 50, gemini: 150, claude: 25 },
  { year: '2024', chatgpt: 550, perplexity: 65, gemini: 180, claude: 32 },
  { year: 'Q2 2024', chatgpt: 620, perplexity: 80, gemini: 210, claude: 40 },
  { year: 'Q3 2024', chatgpt: 700, perplexity: 90, gemini: 230, claude: 45 },
  { year: 'Q4 2024', chatgpt: 750, perplexity: 95, gemini: 245, claude: 48 },
  { year: '2025', chatgpt: 800, perplexity: 100, gemini: 250, claude: 50 },
  { year: '2026*', chatgpt: 950, perplexity: 150, gemini: 320, claude: 80 },
];

const stats = [
  { icon: TrendingUp, value: '65%', label: 'of professionals use AI search weekly', color: 'from-indigo-500 to-purple-500' },
  { icon: Target, value: '3x', label: 'higher intent than traditional search', color: 'from-cyan-500 to-blue-500' },
  { icon: DollarSign, value: '2.1x', label: 'better conversion from AI traffic', color: 'from-green-500 to-emerald-500' },
  { icon: Zap, value: '40%', label: 'month-over-month growth', color: 'from-orange-500 to-red-500' },
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
            <span className="font-medium text-slate-800">{entry.value}M users</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function GrowthGraphSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const target = parseFloat(stat.value);
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = current;
            return newStats;
          });
        }, duration / steps);
      });
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Market Growth
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            The AI Search Revolution Is Here.{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Is Your Brand Ready?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Over 1.5 billion people now search with AI platforms. Don't let your competitors capture this traffic while you're invisible.
          </p>
        </motion.div>

        {/* Graph Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 mb-12"
        >
          {/* Graph Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Monthly Active Users by Platform</h3>
              <p className="text-sm text-slate-500">In millions • 2023-2026 projected</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'ChatGPT', color: '#10B981' },
                { name: 'Gemini', color: '#6366F1' },
                { name: 'Perplexity', color: '#F59E0B' },
                { name: 'Claude', color: '#EC4899' },
              ].map((platform) => (
                <div key={platform.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }} />
                  <span className="text-sm text-slate-600">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="h-80 sm:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={graphData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorChatgpt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorGemini" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPerplexity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorClaude" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EC4899" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#EC4899" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="year" stroke="#94A3B8" fontSize={12} />
                <YAxis stroke="#94A3B8" fontSize={12} tickFormatter={(value) => `${value}M`} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="chatgpt" name="ChatGPT" stroke="#10B981" strokeWidth={3} fill="url(#colorChatgpt)" />
                <Area type="monotone" dataKey="gemini" name="Gemini" stroke="#6366F1" strokeWidth={3} fill="url(#colorGemini)" />
                <Area type="monotone" dataKey="perplexity" name="Perplexity" stroke="#F59E0B" strokeWidth={3} fill="url(#colorPerplexity)" />
                <Area type="monotone" dataKey="claude" name="Claude" stroke="#EC4899" strokeWidth={3} fill="url(#colorClaude)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Total Callout */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
          >
            <Users className="w-5 h-5" />
            <span className="font-semibold">Total: 1.5B+ people now search with AI</span>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-100 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                  {stat.value.includes('%') || stat.value.includes('x') 
                    ? stat.value 
                    : `${animatedStats[index].toFixed(0)}%`
                  }
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            Don't Get Left Behind - Start Tracking Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}