'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '@/providers/LanguageProvider';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const { lang } = useLanguage();
  const isRTL = lang === 'ar';

  return (
    <motion.div
      className="fixed top-0 start-0 end-0 h-[3px] bg-gradient-to-r from-oy-electric to-oy-cyan z-[60] origin-left"
      style={{
        scaleX,
        transformOrigin: isRTL ? 'right' : 'left',
      }}
    />
  );
}
