'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/providers/LanguageProvider';
import { showreel } from '@/lib/content';
import { HiOutlineFilm } from 'react-icons/hi';

export default function VideoShowreel({ className = '' }: { className?: string }) {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.play().catch(() => setHasError(true));
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => setHasError(true));
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2500);
  };

  const handleMouseLeave = () => {
    if (isPlaying) setShowControls(false);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <div className="aspect-video relative bg-oy-dark-3 border border-oy-glass-border rounded-2xl overflow-hidden">
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-oy-dark-3/30 to-oy-dark-3">
            <div className="text-center p-8">
              <HiOutlineFilm className="w-16 h-16 text-oy-icon mx-auto mb-4" />
              <p className="text-oy-label text-lg font-medium">{t(showreel.fallback)}</p>
              <p className="text-oy-muted text-sm mt-2">showreel.mp4</p>
            </div>
          </div>
        ) : (
          <div
            className="relative w-full h-full cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/showreel.mp4"
              className="w-full h-full object-cover"
              onError={() => setHasError(true)}
              onEnded={() => setIsPlaying(false)}
              muted
              loop
              playsInline
            />
            {/* Sound toggle button - always visible in bottom-right */}
            <motion.button
              onClick={toggleMute}
              className="absolute bottom-4 end-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:bg-black/70 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={isMuted ? 'Activer le son' : 'Couper le son'}
            >
              {isMuted ? (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
                </svg>
              )}
            </motion.button>
            {/* Play/Pause overlay */}
            <AnimatePresence>
              {(!isPlaying || showControls) && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-oy-electric/90 flex items-center justify-center shadow-lg shadow-oy-electric/30 backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPlaying ? (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg className="w-7 h-7 text-white ms-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
