'use client';

import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const testimonials = [
  {
    name: 'María González',
    career: 'Ingeniería en Sistemas',
    university: 'UNAM',
    text: 'Lextry Study transformó cómo organizo mi semestre. El asistente de IA me ayuda a estudiar de forma mucho más eficiente.',
    avatar: 'MG',
  },
  {
    name: 'Carlos Ramírez',
    career: 'Medicina',
    university: 'UAM',
    text: 'El control de asistencias me salvó de reprobar. Ahora sé exactamente cuántas clases puedo faltar en cada materia.',
    avatar: 'CR',
  },
  {
    name: 'Ana Martínez',
    career: 'Derecho',
    university: 'ITAM',
    text: 'El pomodoro integrado con el calendario académico es brillante. Nunca había sido tan productiva en época de exámenes.',
    avatar: 'AM',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-card/30 overflow-hidden">
      <div className="container mb-12">
        <FadeIn>
          <div className="flex items-end justify-between">
            <div>
              <span className="lx-badge lx-badge-primary mb-3 inline-flex">
                <Users size={10} />
                Testimonios
              </span>
              <h2 className="lx-display text-3xl md:text-4xl text-foreground">
                Lo que dicen nuestros
                <br />
                <span className="lx-gradient-text">estudiantes</span>
              </h2>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="relative">
        <div className="flex gap-4 px-8 overflow-x-auto pb-4 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="left">
              <TestimonialCard t={t} />
            </FadeIn>
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background/60 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <motion.div
      className="lx-card p-6 flex flex-col gap-4 min-w-[300px] max-w-[340px] flex-shrink-0"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            fill="var(--lextry-primary)"
            style={{ color: 'var(--lextry-primary)' }}
          />
        ))}
      </div>
      <p className="font-body text-sm text-foreground leading-relaxed">
        "{t.text}"
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{
            background: 'oklch(0.72 0.14 290 / 0.15)',
            color: 'oklch(0.55 0.18 290)',
          }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="font-body text-sm font-600 text-foreground leading-none">{t.name}</p>
          <p className="font-body text-xs text-muted-foreground mt-0.5">
            {t.career} · {t.university}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
