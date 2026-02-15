'use client';

import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Video background layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 'var(--oy-bg-video-opacity)' }}
        poster=""
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-oy-dark via-oy-dark-2/90 to-oy-dark-3" />

      {/* Mesh gradient overlay for depth */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(ellipse at 20% 50%, var(--oy-mesh-blue) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, var(--oy-mesh-cyan) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, var(--oy-mesh-purple) 0%, transparent 50%)`,
        }}
      />

      {/* Animated blur blobs */}
      <motion.div
        className="absolute top-1/4 -start-32 w-96 h-96 rounded-full blur-[120px]"
        style={{ background: `radial-gradient(circle, var(--oy-blob-blue), var(--oy-blob-blue-soft))` }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-2/3 end-0 w-80 h-80 rounded-full blur-[100px]"
        style={{ background: `radial-gradient(circle, var(--oy-blob-cyan), var(--oy-blob-cyan-soft))` }}
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 start-1/3 w-72 h-72 rounded-full blur-[80px]"
        style={{ background: `radial-gradient(circle, var(--oy-blob-purple), var(--oy-blob-purple-soft))` }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 end-1/4 w-64 h-64 rounded-full blur-[90px]"
        style={{ background: `radial-gradient(circle, var(--oy-blob-blue2), var(--oy-blob-blue2-soft))` }}
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay" />
    </div>
  );
}
