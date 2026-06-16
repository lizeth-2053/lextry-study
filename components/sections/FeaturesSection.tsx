'use client';

import { motion } from 'framer-motion';
import { Brain, Calendar, BarChart3, Clock, BookOpen, Target, Zap, ChevronRight } from 'lucide-react';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';

const FEATURE_AI_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663767533725/kHJkEnJgZ35rmgPHDaWjdS/feature-ai-KQ4dstPnhapxMG4fPHWbFk.webp';
const FEATURE_PLANNING_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663767533725/kHJkEnJgZ35rmgPHDaWjdS/feature-planning-24egLKw8Tpr2PRZsQW5M79.webp';

const features = [
  {
    icon: Brain,
    title: 'IA de Estudio',
    description: 'Asistente inteligente que genera resúmenes, flashcards y planes de estudio personalizados.',
    tag: 'IA',
    image: FEATURE_AI_IMG,
    large: true,
  },
  {
    icon: Calendar,
    title: 'Planificación Semestral',
    description: 'Organiza tu semestre completo con vista de calendario y alertas automáticas.',
    tag: 'Planificación',
    image: FEATURE_PLANNING_IMG,
    large: false,
  },
  {
    icon: BarChart3,
    title: 'Seguimiento de Notas',
    description: 'Visualiza tu rendimiento académico con gráficas detalladas.',
    tag: 'Análisis',
    large: false,
  },
  {
    icon: Clock,
    title: 'Focus & Pomodoro',
    description: 'Sesiones de estudio cronometradas con estadísticas de productividad.',
    tag: 'Productividad',
    large: false,
  },
  {
    icon: BookOpen,
    title: 'Currículo Digital',
    description: 'Mapea todo tu plan de estudios en un solo lugar.',
    tag: 'Académico',
    large: false,
  },
  {
    icon: Target,
    title: 'Control de Asistencia',
    description: 'Registra y monitorea tu asistencia por materia.',
    tag: 'Asistencia',
    large: false,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        {/* Section header */}
        <FadeIn className="max-w-2xl mb-16">
          <span className="lx-badge lx-badge-primary mb-4 inline-flex">
            <Zap size={10} />
            Todo lo que necesitas
          </span>
          <h2 className="lx-display text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Una plataforma.
            <br />
            <span className="lx-gradient-text">Infinitas posibilidades.</span>
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed text-pretty">
            Desde planificar tu semestre hasta estudiar con IA, Lextry Study centraliza todo lo que necesitas.
          </p>
        </FadeIn>

        {/* Features grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ gridAutoRows: 'minmax(180px, auto)' }}
          staggerDelay={0.07}
          initialDelay={0.1}
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const [hovered, setHovered] = React.useState(false);

  if (feature.large) {
    return (
      <StaggerItem className="md:col-span-2 row-span-1 md:row-span-2">
        <motion.div
          className="lx-card h-full min-h-[380px] overflow-hidden relative flex flex-col"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        >
          {feature.image && (
            <div className="relative h-52 overflow-hidden flex-shrink-0">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            </div>
          )}

          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-start justify-between mb-4">
              <div className="lx-icon-wrap">
                <feature.icon size={18} />
              </div>
              <span className="lx-badge lx-badge-primary">{feature.tag}</span>
            </div>
            <h3 className="font-display text-xl font-700 text-foreground mb-2 tracking-tight">
              {feature.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
              {feature.description}
            </p>
            <motion.div
              className="flex items-center gap-1.5 mt-4 text-sm font-medium"
              style={{ color: 'var(--lextry-primary)' }}
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              Explorar <ChevronRight size={14} />
            </motion.div>
          </div>
        </motion.div>
      </StaggerItem>
    );
  }

  return (
    <StaggerItem>
      <motion.div
        className="lx-card p-5 h-full flex flex-col"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="lx-icon-wrap">
            <feature.icon size={16} />
          </div>
          <span className="lx-badge lx-badge-primary text-[10px]">{feature.tag}</span>
        </div>
        <h3 className="font-body text-base font-600 text-foreground mb-1.5 tracking-tight">
          {feature.title}
        </h3>
        <p className="font-body text-xs text-muted-foreground leading-relaxed flex-1">
          {feature.description}
        </p>
        <motion.div
          className="flex items-center gap-1 mt-3 text-xs font-medium"
          style={{ color: 'var(--lextry-primary)' }}
          animate={{ x: hovered ? 3 : 0 }}
          transition={{ duration: 0.2 }}
        >
          Ver más <ChevronRight size={12} />
        </motion.div>
      </motion.div>
    </StaggerItem>
  );
}

import React from 'react';
