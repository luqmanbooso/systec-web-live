import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileSearch, Code2, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    title: 'Free Consultation',
    description: 'We discuss your vision, goals, and budget to find the perfect solution.',
    icon: MessageSquare,
  },
  {
    title: 'Detailed Strategy',
    description: 'We map out every feature and user flow to ensure total clarity.',
    icon: FileSearch,
  },
  {
    title: 'Precise Development',
    description: 'Our team builds your solution with regular updates and feedback loops.',
    icon: Code2,
  },
  {
    title: 'Launch & Support',
    description: 'We handle deployment and stay by your side to ensure long-term success.',
    icon: Rocket,
  },
];

export const ProcessAndCTA = () => {
  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            A Journey of <span className="text-primary">Total Clarity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            No stress, no jargon. Just a clear path from your idea to a high-impact reality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-3xl bg-secondary flex items-center justify-center text-primary mb-6 relative z-10">
                <step.icon className="w-10 h-10 text-white" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border flex items-center justify-center text-xs font-bold text-muted-foreground shadow-sm">
                  {index + 1}
                </div>
              </div>
              <h4 className="font-bold text-xl mb-4">{step.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border border-dashed border-t" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Final CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-secondary/50 border p-12 md:p-24 overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tight">
              Ready to <span className="text-primary">Illuminate</span> Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Let's build something exceptional together. Our team is ready to provide 
              a free consultation and a transparent quote customized to your vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="rounded-full h-16 px-12 text-xl font-bold shadow-xl shadow-primary/20 group">
                Request Free Quote
                <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="mailto:hello@brighterlaunchpad.com" className="text-lg font-bold hover:text-primary transition-colors">
                Or send us an email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
