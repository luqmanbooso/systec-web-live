import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layout, Database, Globe, Layers, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'Custom Desktop Applications',
    description: 'Powerful, performance-optimized desktop solutions for Windows and macOS, tailored to your specific workflow.',
    icon: Monitor,
    className: 'md:col-span-2 md:row-span-1',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    title: 'Business & Internal Systems',
    description: 'Streamline your operations with custom ERPs, CRMs, and management tools designed for efficiency.',
    icon: Database,
    className: 'md:col-span-1 md:row-span-2',
    color: 'bg-sky-500/10 text-sky-600',
  },
  {
    title: 'Portfolio & Showcase Platforms',
    description: 'Stunning platforms to showcase your creative work or professional services with elegance.',
    icon: Layout,
    className: 'md:col-span-1 md:row-span-1',
    color: 'bg-indigo-500/10 text-indigo-600',
  },
  {
    title: 'Custom Websites & Web Platforms',
    description: 'Modern, responsive, and high-converting websites built with the latest web technologies.',
    icon: Globe,
    className: 'md:col-span-2 md:row-span-1',
    color: 'bg-cyan-500/10 text-cyan-600',
  },
  {
    title: 'Tailor-Made Software Solutions',
    description: 'Unique challenges require unique code. We build whatever you can imagine, precisely to spec.',
    icon: Layers,
    className: 'md:col-span-3 md:row-span-1',
    color: 'bg-primary/10 text-primary',
  },
];

export const WhatWeBuild = () => {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Versatility in <span className="text-primary">Every Pixel</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            From simple landing pages to complex enterprise systems, we bring the same 
            level of precision and care to every line of code.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={cn(
                'group relative p-8 rounded-3xl bg-background border transition-all hover:shadow-xl hover:border-primary/20',
                service.className
              )}
            >
              <div className={cn('w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110', service.color)}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <service.icon className="w-24 h-24" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
