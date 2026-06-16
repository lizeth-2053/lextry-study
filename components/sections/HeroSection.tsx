'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663767533725/kHJkEnJgZ35rmgPHDaWjdS/hero-bg-AtYfJV7brNtWcwnQt9BccT.webp';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </motion.div>

      {/* Decorative orbs */}
      <GlowOrb className="w-96 h-96 -top-24 -right-24 opacity-60" />
      <GlowOrb className="w-64 h-64 bottom-24 right-1/3 opacity-30" />

      {/* Content */}
      <motion.div
        className="container relative z-10 py-24 md:py-32"
        style={{ opacity: heroOpacity }}
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="mb-6"
          >
            <span className="lx-badge lx-badge-primary">
              <Sparkles size={10} />
              Plataforma universitaria inteligente
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lx-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance"
          >
            Tu universidad,
            <br />
            <span className="lx-gradient-text">finalmente</span>
            <br />
            organizada.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed text-pretty"
          >
            Tu sistema universitario inteligente. Planifica, estudia y domina tu carrera con IA, seguimiento académico y herramientas de productividad en un solo lugar.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <motion.button
              className="lx-btn-primary text-base py-3.5 px-8 relative z-10 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Comenzar gratis</span>
              <ArrowRight size={16} className="relative z-10" />
            </motion.button>

            <motion.button
              className="lx-btn-ghost text-base py-3.5 px-8 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Play size={14} fill="currentColor" />
              Ver demo
            </motion.button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-4 mt-8"
          >
            <div className="flex -space-x-2">
              {['MG', 'CR', 'AM', 'JP'].map((initials, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-background flex items-center justify-center text-[9px] font-bold"
                  style={{
                    background: `oklch(${0.65 + i * 0.05} 0.12 ${270 + i * 20})`,
                    color: 'white',
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-xs font-body text-muted-foreground">
              <span className="font-semibold text-foreground">12,000+</span> estudiantes ya organizaron su semestre
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center pt-1.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: 'var(--lextry-primary)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function GlowOrb({ className }: { className?: string }) {
  return (
    <div
      className={`lx-glow-orb ${className}`}
      style={{ background: 'oklch(0.72 0.14 290 / 0.18)' }}
    />
  );
}
