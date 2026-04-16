'use client';

import { motion } from 'motion/react';
import { FlaskConical, Star, ShieldCheck, CalendarCheck } from 'lucide-react';

const stats = [
  {
    icon: CalendarCheck,
    value: '10+',
    label: 'Years Serving Austin',
  },
  {
    icon: Star,
    value: '98%',
    label: 'Client Retention Rate',
  },
  {
    icon: FlaskConical,
    value: 'Lab-Grade',
    label: 'Water Chemistry',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Licensed & Insured',
  },
];

export default function Intro() {
  return (
    <section className="bg-offwhite py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-navy-pool font-bold mb-4">
            Our Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-navy-deep max-w-2xl mx-auto">
            We believe your pool should be{' '}
            <span className="italic text-teal">effortlessly pristine</span> — not a weekend project.
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-navy-deep/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-aqua/10 flex items-center justify-center mb-5 group-hover:bg-aqua/20 transition-colors">
                  <Icon size={22} className="text-aqua" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-navy-deep mb-2 leading-none">
                  {stat.value}
                </p>
                <p className="text-sm text-navy-deep/60 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
