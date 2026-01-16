import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Clock } from 'lucide-react';

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-slate-900 to-indigo-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-white/80 text-sm">Limited Time: 14-Day Free Trial</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Get Discovered by{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              1.5 Billion
            </span>{' '}
            AI Users?
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Start your 7-day free trial. No credit card required. See your AI visibility score in minutes.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 text-white px-12 py-8 text-xl rounded-2xl shadow-2xl shadow-indigo-500/30 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-1 group"
            >
              Get Your Free AI Visibility Report
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-white/60"
          >
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-400" />
              Setup in 5 minutes
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              No technical skills needed
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-400" />
              Cancel anytime
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}