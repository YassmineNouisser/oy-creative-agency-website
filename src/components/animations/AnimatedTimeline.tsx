'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/providers/LanguageProvider';
import type { Lang } from '@/providers/LanguageProvider';

interface TimelineStep {
  step: number;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}

interface AnimatedTimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export default function AnimatedTimeline({ steps, className = '' }: AnimatedTimelineProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5'],
  });

  // Line draw progress
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className={className}>
      {/* Desktop: horizontal */}
      <div className="hidden lg:block relative">
        {/* SVG connecting line */}
        <div className="absolute top-7 start-[7%] end-[7%] h-0.5">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="timeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--oy-gradient-1)" />
                <stop offset="100%" stopColor="var(--oy-gradient-2)" />
              </linearGradient>
            </defs>
            <motion.line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="url(#timeline-grad)"
              strokeWidth="2"
              style={{ pathLength: lineProgress }}
            />
          </svg>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {steps.map((step, i) => {
            const stepStart = i * 0.2;
            const stepEnd = stepStart + 0.15;
            return (
              <TimelineStepItem
                key={i}
                step={step}
                index={i}
                scrollProgress={scrollYProgress}
                stepStart={stepStart}
                stepEnd={stepEnd}
                t={t}
              />
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="lg:hidden relative ps-12">
        {/* Vertical line */}
        <div className="absolute start-5 top-0 bottom-0 w-0.5">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="timeline-grad-v" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--oy-gradient-1)" />
                <stop offset="100%" stopColor="var(--oy-gradient-2)" />
              </linearGradient>
            </defs>
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="url(#timeline-grad-v)"
              strokeWidth="2"
              style={{ pathLength: lineProgress }}
            />
          </svg>
        </div>

        <div className="space-y-10">
          {steps.map((step, i) => {
            const stepStart = i * 0.2;
            const stepEnd = stepStart + 0.15;
            return (
              <TimelineStepItemMobile
                key={i}
                step={step}
                index={i}
                scrollProgress={scrollYProgress}
                stepStart={stepStart}
                stepEnd={stepEnd}
                t={t}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TimelineStepItem({
  step,
  scrollProgress,
  stepStart,
  stepEnd,
  t,
}: {
  step: { step: number; title: Record<Lang, string>; description: Record<Lang, string> };
  index: number;
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  stepStart: number;
  stepEnd: number;
  t: (val: Record<Lang, string>) => string;
}) {
  const opacity = useTransform(scrollProgress, [stepStart, stepEnd], [0, 1]);
  const scale = useTransform(scrollProgress, [stepStart, stepEnd], [0.5, 1]);
  const y = useTransform(scrollProgress, [stepStart, stepEnd], [20, 0]);

  return (
    <div className="text-center relative">
      <motion.div
        className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-oy-electric to-oy-cyan flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-oy-electric/30 relative z-10"
        style={{ opacity, scale }}
      >
        {step.step}
      </motion.div>
      <motion.div style={{ opacity, y }}>
        <h3 className="text-oy-heading font-semibold mb-2">{t(step.title)}</h3>
        <p className="text-oy-muted text-sm">{t(step.description)}</p>
      </motion.div>
    </div>
  );
}

function TimelineStepItemMobile({
  step,
  scrollProgress,
  stepStart,
  stepEnd,
  t,
}: {
  step: { step: number; title: Record<Lang, string>; description: Record<Lang, string> };
  index: number;
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  stepStart: number;
  stepEnd: number;
  t: (val: Record<Lang, string>) => string;
}) {
  const opacity = useTransform(scrollProgress, [stepStart, stepEnd], [0, 1]);
  const scale = useTransform(scrollProgress, [stepStart, stepEnd], [0.5, 1]);
  const x = useTransform(scrollProgress, [stepStart, stepEnd], [20, 0]);

  return (
    <div className="relative">
      <motion.div
        className="absolute -start-12 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-oy-electric to-oy-cyan flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-oy-electric/30 z-10"
        style={{ opacity, scale }}
      >
        {step.step}
      </motion.div>
      <motion.div style={{ opacity, x }}>
        <h3 className="text-oy-heading font-semibold mb-1">{t(step.title)}</h3>
        <p className="text-oy-muted text-sm">{t(step.description)}</p>
      </motion.div>
    </div>
  );
}
