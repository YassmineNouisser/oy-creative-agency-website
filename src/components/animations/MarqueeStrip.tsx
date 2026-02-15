'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface MarqueeStripProps {
  items: string[];
  speed?: number;
  className?: string;
}

export default function MarqueeStrip({
  items,
  speed = 35,
  className = '',
}: MarqueeStripProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`overflow-hidden marquee-mask ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            duration: isHovered ? speed * 3 : speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-8 whitespace-nowrap"
          >
            <span className="text-oy-muted/60 text-lg font-medium">{item}</span>
            <span className="text-oy-icon/20 text-sm">◆</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
