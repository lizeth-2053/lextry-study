'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Bell, Sparkles } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute w-[500px] h-[500px] -top-48 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none"
        style={{
          background: 'oklch(0.56 0.15 275 / 0.20)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />

      <div className="container relative z-10">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
            style={{
              background: 'oklch(0.56 0.15 275 / 0.08)',
              borderColor: 'oklch(0.56 0.15 275 / 0.18)',
            }}
          >
            <Sparkles size={14} style={{ color: 'var(--lextry-primary)' }} />
            <span className="text-sm font-body font-medium" style={{ color: 'oklch(0.44 0.18 275)' }}>
              Gratis para siempre en el plan básico
            </span>
          </div>

          <h2 className="lx-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
            Empieza tu semestre
            <br />
            <span className="lx-gradient-text">con ventaja</span>
          </h2>

          <p className="font-body text-base md:text-lg text-muted-foreground mb-10 leading-relaxed text-pretty">
            Únete a miles de estudiantes que ya organizaron su vida universitaria. Sin tarjeta de crédito, sin complicaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              className="lx-btn-primary text-base py-4 px-10 relative z-10 flex items-center justify-center gap-2 shadow-primary-glow"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(185, 167, 255, 0.3)',
                  '0 0 40px rgba(185, 167, 255, 0.5)',
                  '0 0 20px rgba(185, 167, 255, 0.3)',
                ],
              }}
              transition={{
                boxShadow: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <span className="relative z-10">Crear cuenta gratis</span>
              <ArrowRight size={16} className="relative z-10" />
            </motion.button>

            <motion.button
              className="lx-btn-ghost text-base py-4 px-10 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver planes <ArrowRight size={14} />
            </motion.button>
          </div>

          {/* Micro trust */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-xs text-muted-foreground">
            {[
              { icon: Shield, text: 'Sin tarjeta de crédito' },
              { icon: Zap, text: 'Configuración en 2 minutos' },
              { icon: Bell, text: 'Cancela cuando quieras' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <item.icon size={12} style={{ color: 'var(--lextry-primary)' }} />
                {item.text}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
