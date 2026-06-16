'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap } from 'lucide-react';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';

const DASHBOARD_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663767533725/kHJkEnJgZ35rmgPHDaWjdS/dashboard-mockup-gZeEYNp4sdrcErghNBpGqe.webp';

export default function DashboardPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="lx-badge lx-badge-primary mb-4 inline-flex">
            <GraduationCap size={10} />
            Dashboard intuitivo
          </span>
          <h2 className="lx-display text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Interfaz clara
            <br />
            <span className="lx-gradient-text">para tu productividad</span>
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Un dashboard limpio y enfocado que te muestra exactamente lo que necesitas saber cada día.
          </p>
        </FadeIn>

        {/* Dashboard mockup */}
        <FadeIn delay={0.1}>
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-border shadow-card-hover mx-auto max-w-5xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Browser chrome */}
            <div className="bg-card border-b border-border px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-muted rounded-md px-3 py-1 text-xs text-muted-foreground font-code max-w-xs mx-auto text-center">
                  app.lextry.study/dashboard
                </div>
              </div>
            </div>
            <img
              src={DASHBOARD_IMG}
              alt="Lextry Study Dashboard"
              className="w-full h-auto block"
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
        </FadeIn>

        {/* Feature bullets */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto"
          staggerDelay={0.1}
          initialDelay={0.2}
        >
          {[
            { icon: CheckCircle2, text: 'Calendario académico integrado' },
            { icon: CheckCircle2, text: 'Seguimiento de notas en tiempo real' },
            { icon: CheckCircle2, text: 'Asistente IA siempre disponible' },
          ].map((item, i) => (
            <StaggerItem key={i} direction="up">
              <div className="flex items-center gap-2.5 text-sm font-body font-medium text-muted-foreground">
                <item.icon size={16} style={{ color: 'var(--lextry-primary)', flexShrink: 0 }} />
                {item.text}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
