import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Rocket, Search, Lightbulb, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Real-Time Visibility Tracking',
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50',
    description: 'Monitor your brand presence across all major AI platforms in real-time.',
    points: [
      'Monitor brand mentions across all major AI platforms',
      'Track competitor citations',
      'Daily visibility scores',
      'Custom prompt tracking'
    ]
  },
  {
    icon: Rocket,
    title: 'AI Optimization Engine',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
    description: 'Get cited more often with AI-optimized content strategies.',
    points: [
      'Get cited more often with AI-optimized content',
      'Structured data recommendations',
      'Citation-worthy content analysis',
      'Technical AEO audits'
    ]
  },
  {
    icon: Search,
    title: 'Competitive Intelligence',
    color: 'from-cyan-500 to-teal-600',
    bgColor: 'bg-cyan-50',
    description: 'Understand how your competitors are winning in AI search.',
    points: [
      'See which competitors AI platforms prefer',
      'Identify citation gaps',
      'Benchmark against industry leaders',
      'Steal competitor strategies'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Actionable Insights',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    description: 'Get clear, prioritized recommendations to improve your visibility.',
    points: [
      'Know exactly what to fix',
      'Prioritized recommendations',
      'One-click optimizations',
      'ROI tracking and reporting'
    ]
  }
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.03),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Core Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Win in AI Search
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A complete toolkit to track, optimize, and dominate AI search results across every major platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-5 text-sm leading-relaxed">{feature.description}</p>

                  {/* Points */}
                  <ul className="space-y-3">
                    {feature.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 bg-gradient-to-br ${feature.color} text-white rounded-full p-0.5`} />
                        <span className="text-sm text-slate-600">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}