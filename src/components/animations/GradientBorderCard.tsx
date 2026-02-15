'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface GradientBorderCardProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  hoverOnly?: boolean;
  popular?: boolean;
}

export default function GradientBorderCard({
  children,
  className = '',
  borderWidth = 2,
  hoverOnly = true,
  popular = false,
}: GradientBorderCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const showGradient = popular || (hoverOnly ? isHovered : true);

  return (
    <div
      className="relative rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ padding: borderWidth }}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-2xl gradient-border-animated"
        initial={{ opacity: popular ? 0.6 : 0 }}
        animate={{ opacity: showGradient ? (popular ? 0.8 : 0.6) : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div
        className={`relative rounded-[calc(1rem-2px)] backdrop-blur-md ${className}`}
        style={{
          background: 'linear-gradient(135deg, var(--oy-glass-card-from), var(--oy-glass-card-to))',
          border: '1px solid var(--oy-glass-border)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
