import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillLayers } from '../data/projects';

export default function Skills() {
  const [openLayers, setOpenLayers] = useState([]);

  const toggle = (id) => {
    setOpenLayers((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
  };

  const expandAll = () => setOpenLayers(skillLayers.map((l) => l.id));
  const collapseAll = () => setOpenLayers([]);

  return (
    <div className="max-w-5xl w-full mx-auto py-4">
      {/* Centered Eyebrow + Heading Stack */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="eyebrow-container">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Technical Architecture</span>
          <span className="eyebrow-line" />
        </div>
        <h1 className="font-display font-medium text-3xl md:text-5xl tracking-tight text-skywash mb-4">
          Geospatial & Software Engineering Stack
        </h1>
        <p className="text-moon-mist text-base max-w-[650px] mx-auto leading-relaxed mb-6">
          Architected into toggleable functional layers — spanning Enterprise GIS infrastructure, CAD & BIM to GIS automation (ISO 19650), Web GIS mapping SDKs, and full-stack web engineering (React & .NET Core).
        </p>

        {/* Action Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={expandAll}
            className="btn-ghost-pill text-xs py-1.5 px-3.5"
          >
            Expand All Layers
          </button>
          <button
            onClick={collapseAll}
            className="btn-outline-pill text-xs py-1.5 px-3.5"
          >
            Collapse All
          </button>
        </div>
      </motion.div>

      {/* Layers Container */}
      <div className="space-y-4">
        {skillLayers.map((layer, i) => {
          const isOpen = openLayers.includes(layer.id);
          return (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="glass-card rounded-[16px] overflow-hidden"
            >
              {/* Layer header button */}
              <button
                onClick={() => toggle(layer.id)}
                className="w-full flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/[0.04] border border-glass-edge flex items-center justify-center text-xl text-frost-glow shrink-0">
                    {layer.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-display font-medium text-pure-white">
                      {layer.title}
                    </h3>
                    {layer.description && (
                      <p className="text-xs text-moon-mist font-normal mt-0.5 line-clamp-1">
                        {layer.description}
                      </p>
                    )}
                    <span className="text-[11px] font-mono text-fog-veil mt-0.5 block">
                      {layer.skills.length} competencies
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  {/* GIS Layer Checkbox toggle */}
                  <div
                    className={`w-5 h-5 rounded-[6px] border transition-all duration-200 flex items-center justify-center ${
                      isOpen
                        ? 'border-void-violet bg-void-violet shadow-[0_0_8px_rgba(102,58,243,0.5)]'
                        : 'border-glass-edge bg-midnight-canvas/40'
                    }`}
                  >
                    {isOpen && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                    )}
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-fog-veil text-sm"
                  >
                    ▾
                  </motion.span>
                </div>
              </button>

              {/* Layer content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1">
                      <div className="h-[1px] bg-glass-edge mb-4" />
                      <div className="flex flex-wrap gap-2">
                        {layer.skills.map((skill, j) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: j * 0.015 }}
                            className="tech-tag"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Visual hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center text-fog-veil text-xs font-mono mt-10 tracking-widest uppercase"
      >
        GIS Map Layer Metaphor — Interactive inspection
      </motion.p>
    </div>
  );
}
