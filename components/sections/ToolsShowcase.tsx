'use client';

import { motion } from 'framer-motion';
import { Brain, Calendar, BarChart3, Clock, BookOpen, Target, FileText, TrendingUp, Layout, ChevronRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const tools = [
  { icon: Brain, label: 'Asistente IA', color: 'oklch(0.72 0.14 290)' },
  { icon: Calendar, label: 'Calendario', color: 'oklch(0.65 0.12 200)' },
  { icon: BarChart3, label: 'Calificaciones', color: 'oklch(0.68 0.14 160)' },
  { icon: Clock, label: 'Pomodoro', color: 'oklch(0.70 0.16 30)' },
  { icon: BookOpen, label: 'Currículo', color: 'oklch(0.65 0.12 290)' },
  { icon: Target, label: 'Asistencia', color: 'oklch(0.68 0.14 250)' },
  { icon: FileText, label: 'Apuntes', color: 'oklch(0.72 0.12 80)' },
  { icon: TrendingUp, label: 'Progreso', color: 'oklch(0.65 0.14 140)' },
];

export default function ToolsShowcase() {
  return (
    <section id="tools" className="py-20 overflow-hidden bg-card/30">
      <div className="container mb-10">
        <FadeIn>
          <div className="flex items-end justify-between">
            <div>
              <span className="lx-badge lx-badge-primary mb-3 inline-flex">
                <Layout size={10} />
                Herramientas integradas
              </span>
              <h2 className="lx-display text-3xl md:text-4xl text-foreground">
                Todo en un solo lugar
              </h2>
            </div>
            <button className="hidden md:flex items-center gap-1.5 text-sm font-medium lx-btn-ghost py-2 px-4">
              Ver todas <ChevronRight size={14} />
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Horizontal scroll marquee */}
      <div className="relative">
        <motion.div
          className="flex gap-3 px-8"
          animate={{ x: [0, -1200] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
          style={{ width: 'max-content' }}
        >
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <ToolPill key={i} {...tool} />
          ))}
        </motion.div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}

function ToolPill({ icon: Icon, label, color }: { icon: any; label: string; color: string }) {
  return (
    <motion.div
      className="flex items-center gap-2.5 px-4 py-3 rounded-md border border-border bg-card cursor-default select-none flex-shrink-0 shadow-xs hover:shadow-sm"
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}12`, color }}
      >
        <Icon size={14} />
      </div>
      <span className="font-body text-sm font-medium text-foreground whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}
