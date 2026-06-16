'use client';

import { Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { StaggerContainer, StaggerItem } from '@/components/FadeIn';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ToolsShowcase from '@/components/sections/ToolsShowcase';
import DashboardPreview from '@/components/sections/DashboardPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';

/**
 * LEXTRY STUDY — Home Page (Next.js 15 App Router)
 * Design: Warm Precision — Editorial Productivity Premium
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <ToolsShowcase />
      <DashboardPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

/**
 * Stats Bar Component
 */
function StatsBar() {
  const stats = [
    { value: '12K+', label: 'Estudiantes activos' },
    { value: '98%', label: 'Satisfacción' },
    { value: '4.9', label: 'Calificación', icon: Star },
    { value: '50+', label: 'Universidades' },
  ];

  return (
    <section className="relative py-4 border-y border-border bg-card/50 backdrop-blur-sm">
      <div className="container">
        <StaggerContainer className="flex flex-wrap justify-center md:justify-around">
          {stats.map((stat, i) => (
            <StaggerItem key={i} direction="none">
              <div className="flex flex-col items-center gap-1 px-6 py-3">
                <div className="flex items-center gap-1.5">
                  {stat.icon && (
                    <stat.icon size={14} style={{ color: 'oklch(0.56 0.15 275)' }} />
                  )}
                  <span className="lx-stat-number text-3xl">{stat.value}</span>
                </div>
                <span className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
