import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { professionalObjective } from '../data/projects';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4 py-6 max-w-5xl mx-auto">
      {/* Section Eyebrow Label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="eyebrow-container"
      >
        <span className="eyebrow-line" />
        <span className="eyebrow-text">GIS Developer & Software Engineer</span>
        <span className="eyebrow-line" />
      </motion.div>

      {/* Main Display Wordmark / Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="font-display font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.15] mb-3 max-w-3xl"
      >
        <span className="text-skywash block">
          Mustafa Ramadan Mahgoub
        </span>
      </motion.h1>

      {/* Subheading in Ice Highlight */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="font-display font-normal text-xl sm:text-2xl text-ice-highlight/95 tracking-tight mb-5 max-w-2xl"
      >
        Enterprise Geospatial Solutions & Full-Stack Web Engineering
      </motion.h2>

      {/* Muted Body Copy based on CV Objective */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-moon-mist text-base md:text-lg leading-relaxed max-w-[760px] mb-8 font-normal"
      >
        {professionalObjective.summary}
      </motion.p>

      {/* Interactive Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-wrap items-center justify-center gap-3.5 mb-12"
      >
        <Link to="/projects" className="btn-violet">
          Explore Projects
        </Link>
        <Link to="/skills" className="btn-ghost-pill">
          View Technical Stack
        </Link>
        <Link to="/contact" className="btn-outline-pill">
          Get in Touch
        </Link>
      </motion.div>

      {/* 3 Core Specialty Feature Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full text-left mb-12"
      >
        {/* Pillar 1 */}
        <div className="glass-card p-5 rounded-[16px] flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-glass-edge flex items-center justify-center text-lg mb-3">
              🏛️
            </div>
            <h3 className="font-display font-medium text-pure-white text-base mb-1.5">
              Enterprise & Web GIS
            </h3>
            <p className="text-xs text-moon-mist leading-relaxed">
              ArcGIS Enterprise, Experience Builder, Leaflet, and mapping APIs/SDKs (TomTom, SITUM) for dynamic portals & indoor wayfinding.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-glass-edge flex flex-wrap gap-1">
            <span className="tech-tag text-[10px]">ArcGIS Enterprise</span>
            <span className="tech-tag text-[10px]">Web GIS SDKs</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="glass-card p-5 rounded-[16px] flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-glass-edge flex items-center justify-center text-lg mb-3">
              ⚡
            </div>
            <h3 className="font-display font-medium text-pure-white text-base mb-1.5">
              Automation, CAD & BIM to GIS
            </h3>
            <p className="text-xs text-moon-mist leading-relaxed">
              FME ETL data migration, ISO 19650 BIM management, Python/ArcPy geoprocessing scripts, and AI deep learning drone feature extraction.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-glass-edge flex flex-wrap gap-1">
            <span className="tech-tag text-[10px]">FME Pipelines</span>
            <span className="tech-tag text-[10px]">BIM (ISO 19650)</span>
            <span className="tech-tag text-[10px]">Python & AI</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="glass-card p-5 rounded-[16px] flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-glass-edge flex items-center justify-center text-lg mb-3">
              💻
            </div>
            <h3 className="font-display font-medium text-pure-white text-base mb-1.5">
              Full-Stack Web (Front & Back)
            </h3>
            <p className="text-xs text-moon-mist leading-relaxed">
              Frontend with React.js, Redux Toolkit, TypeScript & Tailwind, integrated with robust ASP.NET Core (.NET Core) RESTful Web APIs & EF Core.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-glass-edge flex flex-wrap gap-1">
            <span className="tech-tag text-[10px]">React.js & TS</span>
            <span className="tech-tag text-[10px]">ASP.NET Core</span>
            <span className="tech-tag text-[10px]">C# & EF Core</span>
          </div>
        </div>
      </motion.div>

      {/* Subtle bottom indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-[11px] font-mono tracking-[0.2em] text-fog-veil uppercase">
          Mustafa Ramadan • Portfolio
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-glass-edge to-transparent" />
      </motion.div>
    </div>
  );
}
