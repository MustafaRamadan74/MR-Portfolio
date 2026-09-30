import { motion, AnimatePresence } from 'framer-motion';

export default function ElevatorScreen1({ sectionName }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="relative px-3 py-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={sectionName}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="font-mono text-frost-glow text-xs md:text-sm tracking-[0.2em] font-medium select-none flex items-center gap-1"
          >
            <span>{sectionName}</span>
            <span className="animate-blink text-moon-mist">_</span>
          </motion.span>
        </AnimatePresence>

        {/* AuthKit Inset frosted corner markers */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-glass-edge" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-glass-edge" />
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-glass-edge" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-glass-edge" />
      </div>
    </div>
  );
}
