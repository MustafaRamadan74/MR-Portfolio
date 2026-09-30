import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageModal({ isOpen, onClose, images = [], initialIndex = 0, title }) {
  const [index, setIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, index, images.length]);

  if (!isOpen || images.length === 0 || !mounted) return null;

  const handlePrev = (e) => {
    e?.stopPropagation();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
        style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
      >
        {/* 70% viewport popup modal */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-[92vw] md:w-[70vw] h-[85vh] md:h-[70vh] flex flex-col deep-glass-card rounded-[16px] overflow-hidden shadow-2xl border border-glass-edge bg-[#05060f]/95"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-glass-edge bg-midnight-canvas/90 backdrop-blur-md shrink-0">
            <div>
              <h3 className="text-base md:text-lg font-display font-medium text-pure-white flex items-center gap-2">
                <span>{title}</span>
              </h3>
              <p className="text-xs text-fog-veil font-mono mt-0.5">
                {images.length > 1 ? `Image ${index + 1} of ${images.length}` : 'High Resolution View'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-glass-edge text-fog-veil hover:text-pure-white transition-colors w-8 h-8 flex items-center justify-center text-sm"
              title="Close (Esc)"
            >
              ✕
            </button>
          </div>

          {/* Main Content Area */}
          <div className="relative flex-1 w-full overflow-hidden p-4 md:p-6 bg-[#020308]/80 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={`${import.meta.env.BASE_URL}images/projects/${images[index]}`}
                alt={`${title} screenshot ${index + 1}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-pill bg-midnight-canvas/85 hover:bg-void-violet text-frost-glow hover:text-pure-white border border-glass-edge flex items-center justify-center text-xl transition-all shadow-xl backdrop-blur-md z-20"
                  title="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-pill bg-midnight-canvas/85 hover:bg-void-violet text-frost-glow hover:text-pure-white border border-glass-edge flex items-center justify-center text-xl transition-all shadow-xl backdrop-blur-md z-20"
                  title="Next image"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Bottom Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 bg-midnight-canvas/95 border-t border-glass-edge backdrop-blur-md shrink-0">
              {images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setIndex(i)}
                  className={`relative w-14 h-9 rounded-[6px] overflow-hidden border transition-all shrink-0 ${
                    i === index
                      ? 'border-void-violet shadow-[0_0_8px_rgba(102,58,243,0.6)] scale-105'
                      : 'border-glass-edge opacity-40 hover:opacity-100'
                  }`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/projects/${img}`}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
