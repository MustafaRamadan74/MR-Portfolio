import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModal from './ImageModal';

export default function ImageCarousel({ images = [], title, isLongImage }) {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validImages = images.filter((img) => !imgErrors[img]);

  // Horizontal transition timer
  useEffect(() => {
    if (validImages.length <= 1 || isPaused || isModalOpen) return;

    const timer = setInterval(() => {
      setCurrent((c) => (c === validImages.length - 1 ? 0 : c + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [validImages.length, isPaused, isModalOpen]);

  if (validImages.length === 0) return null;

  const goTo = (idx, e) => {
    e?.stopPropagation();
    setCurrent(idx);
  };

  const prev = (e) => {
    e?.stopPropagation();
    setCurrent((c) => (c === 0 ? validImages.length - 1 : c - 1));
  };

  const next = (e) => {
    e?.stopPropagation();
    setCurrent((c) => (c === validImages.length - 1 ? 0 : c + 1));
  };

  const openModal = (e) => {
    e?.stopPropagation();
    setIsModalOpen(true);
  };

  const currentImg = validImages[current];
  const isTall = isLongImage || currentImg?.includes('levilling') || currentImg?.includes('caravan') || currentImg?.includes('CSHome') || currentImg?.includes('Trending') || currentImg?.includes('Yummy') || currentImg?.includes('project1');

  return (
    <>
      <div
        className="relative w-full h-56 overflow-hidden rounded-t-[15px] group cursor-pointer bg-midnight-canvas/60 border-b border-glass-edge"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={openModal}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImg}
            className="absolute inset-0 w-full h-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={`/images/projects/${currentImg}`}
              alt={`${title} - ${current + 1}`}
              className={`w-full h-auto object-cover origin-top ${isTall ? 'scale-125' : 'w-full h-full object-cover'}`}
              animate={
                isTall && !isPaused
                  ? { y: ['0%', '-50%', '0%'] }
                  : { y: '0%' }
              }
              transition={
                isTall
                  ? { duration: 12, repeat: Infinity, ease: 'easeInOut' }
                  : { duration: 0.3 }
              }
              onError={() => {
                setImgErrors((prev) => ({ ...prev, [currentImg]: true }));
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Frosted gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-canvas via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity pointer-events-none" />

        {/* Navigation Arrows */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-midnight-canvas/80 backdrop-blur-md border border-glass-edge text-frost-glow text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/10 z-10"
              title="Previous image"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-midnight-canvas/80 backdrop-blur-md border border-glass-edge text-frost-glow text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/10 z-10"
              title="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Navigation Dots */}
        {validImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-pill bg-midnight-canvas/70 backdrop-blur-md border border-glass-edge z-10">
            {validImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => goTo(i, e)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-void-violet w-4 shadow-[0_0_6px_#663af3]'
                    : 'bg-white/30 hover:bg-white/60 w-1.5'
                }`}
                title={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={validImages}
        initialIndex={current}
        title={title}
      />
    </>
  );
}
