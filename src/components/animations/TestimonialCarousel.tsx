'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/providers/LanguageProvider';
import type { Lang } from '@/providers/LanguageProvider';
import GlassCard from '@/components/ui/GlassCard';

interface Testimonial {
  name: string;
  role: Record<Lang, string>;
  content: Record<Lang, string>;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
  className?: string;
}

export default function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 5000,
  className = '',
}: TestimonialCarouselProps) {
  const { t, lang } = useLanguage();
  const isRTL = lang === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const isPaused = useRef(false);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused.current) next();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  const dirMult = isRTL ? -1 : 1;

  const variants = {
    enter: (dir: number) => ({
      x: dir * dirMult * 300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: -dir * dirMult * 300,
      opacity: 0,
    }),
  };

  const current = testimonials[activeIndex];

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      {/* Carousel content */}
      <div className="overflow-hidden min-h-[200px] flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <GlassCard className="max-w-2xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-oy-accent to-oy-cyan flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {current.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-oy-heading">{current.name}</p>
                  <p className="text-oy-muted text-sm">{t(current.role)}</p>
                </div>
              </div>
              <p className="text-oy-body text-sm leading-relaxed italic">
                &ldquo;{t(current.content)}&rdquo;
              </p>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative p-1"
            aria-label={`Testimonial ${i + 1}`}
          >
            <div className="w-2 h-2 rounded-full bg-oy-muted/30" />
            {i === activeIndex && (
              <motion.div
                className="absolute inset-1 rounded-full bg-gradient-to-r from-oy-electric to-oy-cyan"
                layoutId="testimonial-dot"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
