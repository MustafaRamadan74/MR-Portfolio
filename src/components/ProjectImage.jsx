import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal';

export default function ProjectImage({ images, title, placeholder, isLongImage }) {
  const [imgError, setImgError] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const validImages = images?.filter((img) => !imgError[img]) || [];

  if (validImages.length === 0) {
    return <PlaceholderImage type={placeholder} title={title} />;
  }

  const firstValid = validImages[0];
  const isTall = isLongImage || firstValid.includes('levilling') || firstValid.includes('caravan') || firstValid.includes('CSHome') || firstValid.includes('Pharmacy') || firstValid.includes('Trending') || firstValid.includes('Yummy') || firstValid.includes('project1');

  return (
    <>
      <div
        className="relative w-full h-56 overflow-hidden rounded-t-[15px] cursor-pointer group bg-midnight-canvas/60 border-b border-glass-edge"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.img
            src={`/images/projects/${firstValid}`}
            alt={title}
            className={`w-full h-auto object-cover origin-top ${isTall ? 'scale-125' : 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'}`}
            animate={
              isTall && !isHovered
                ? { y: ['0%', '-55%', '0%'] }
                : { y: '0%' }
            }
            transition={
              isTall
                ? { duration: 12, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.3 }
            }
            onError={() => setImgError((prev) => ({ ...prev, [firstValid]: true }))}
          />
        </div>
        
        {/* Subtle frosted gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-canvas via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity pointer-events-none" />
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={validImages}
        initialIndex={0}
        title={title}
      />
    </>
  );
}

function PlaceholderImage({ type, title }) {
  const icons = {
    gis: (
      <svg className="w-10 h-10 text-frost-glow/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    web: (
      <svg className="w-10 h-10 text-frost-glow/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    enterprise: (
      <svg className="w-10 h-10 text-frost-glow/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    indoor: (
      <svg className="w-10 h-10 text-frost-glow/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  };

  const icon = icons[type] || icons.web;

  return (
    <div className="relative w-full h-56 rounded-t-[15px] bg-[#080b18] border-b border-glass-edge flex flex-col items-center justify-center gap-2 overflow-hidden">
      {/* Blueprint grid pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(186,215,247,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(186,215,247,0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Soft spotlight behind icon */}
      <div className="w-20 h-20 rounded-full bg-void-violet/10 blur-xl absolute" />
      
      <div className="relative z-10 p-3 rounded-full bg-white/[0.03] border border-glass-edge">
        {icon}
      </div>
      <span className="relative z-10 text-[11px] font-mono text-fog-veil tracking-wider">
        {title}
      </span>
    </div>
  );
}
