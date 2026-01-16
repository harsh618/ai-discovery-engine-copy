import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, Sparkles, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses testing AI visibility',
    features: [
      'Track 25 custom prompts',
      '1 brand + 3 competitors',
      '4 AI platforms (ChatGPT, Claude, Perplexity, Gemini)',
      'Weekly visibility reports',
      'Basic optimization recommendations',
      'Email support',
      '14-day free trial'
    ],
    cta: 'Start Free Trial',
    popular: false,
    gradient: 'from-slate-500 to-slate-600'
  },
  {
    name: 'Growth',
    price: '$299',
    period: '/month',
    description: 'For growing brands serious about AI search',
    features: [
      'Track 100 custom prompts',
      '1 brand + 10 competitors',
      'All AI platforms + emerging engines',
      'Daily visibility reports',
      'Advanced AEO audits',
      'Citation source analysis',
      'Priority support + monthly strategy call',
      'API access',
      'White-label reports'
    ],
    cta: 'Start Free Trial',
    popular: true,
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Pricing',
    description: 'For agencies and large organizations',
    features: [
      'Unlimited prompt tracking',
      'Multiple brands',
      'Unlimited competitors',
      'Real-time monitoring',
      'Custom integrations',
      'Dedicated account manager',
      'Weekly strategy sessions',
      'Custom development',
      'SLA guarantee'
    ],
    cta: 'Talk to Growth Partner',
    popular: false,
    gradient: 'from-slate-700 to-slate-800'
  }
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(99,102,241,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Plans That Scale With{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Your Ambition
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect plan to dominate AI search results and grow your brand visibility.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`h-full rounded-3xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-xl shadow-indigo-500/10' 
                  : 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg'
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-600">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-indigo-600' : 'text-green-500'
                      }`} />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full py-6 text-lg rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-slate-500"
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            No credit card required for trial
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Cancel anytime, no questions asked
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            14-day money-back guarantee
          </span>
        </motion.div>
      </div>
    </section>
  );
}