import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Shield, Zap, Award } from 'lucide-react';

const team = [
  {
    name: 'Luqman Booso',
    role: 'Founder, Senior Developer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'Bridging the gap between complex business needs and elegant technical solutions.',
  },
  {
    name: 'Lahiru Jayawardhana',
    role: 'Co-Founder, Lead Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'Dedicated to writing clean, scalable code that delivers real-world business value.',
  },
];

const reasons = [
  {
    title: 'Affordable Quality',
    description: 'High-end engineering without the enterprise price tag.',
    icon: Award,
  },
  {
    title: 'Total Flexibility',
    description: 'We adapt our process to fit your unique business requirements.',
    icon: Zap,
  },
  {
    title: 'Transparent Support',
    description: 'No jargon, just honest advice and friendly assistance.',
    icon: Heart,
  },
  {
    title: 'Security First',
    description: 'Your data is protected by industry-standard security protocols.',
    icon: Shield,
  },
];

export const AboutAndWhy = () => {
  return (
    <>
      {/* Why Choose Us */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-8"
          >
            Why Businesses <br />
            <span className="text-primary">Trust Brighter</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
                  <reason.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg">{reason.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-6 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
              <Users className="w-4 h-4" />
              Meet the Team
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[2rem] bg-secondary/50 border p-6 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-3xl overflow-hidden ring-4 ring-background transition-transform group-hover:scale-110">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed italic px-2">
                  "{member.bio}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
