import { motion } from 'framer-motion';
import { timeline, languages, professionalObjective } from '../data/projects';

export default function About() {
  return (
    <div className="max-w-5xl w-full mx-auto py-4">
      {/* Centered Eyebrow + Heading Stack */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <div className="eyebrow-container">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Professional Journey</span>
          <span className="eyebrow-line" />
        </div>
        <h1 className="font-display font-medium text-3xl md:text-5xl tracking-tight text-skywash mb-4">
          Experience & Background
        </h1>
        <p className="text-moon-mist text-base max-w-[680px] mx-auto leading-relaxed">
          {professionalObjective.yearsOfExp} specializing in end-to-end Enterprise Geospatial Solutions, CAD/BIM-to-GIS automation (ISO 19650), and custom Web GIS full-stack architectures.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div className="relative mb-16">
        {/* Vertical Blueprint Line */}
        <div className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-glass-edge to-transparent" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.company + item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-[13px] md:left-[17px] top-2 w-2.5 h-2.5 rounded-full bg-void-violet shadow-[0_0_10px_rgba(102,58,243,0.8)] border border-white/20 z-10" />

              <div className="glass-card p-6 md:p-7 rounded-[16px]">
                {/* Period & Location badge row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-frost-glow tracking-wider px-3 py-1 rounded-badge bg-white/[0.05] border border-glass-edge">
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="text-xs font-mono text-fog-veil flex items-center gap-1">
                      <span>📍</span> {item.location}
                    </span>
                  )}
                </div>

                {/* Role & Company */}
                <h3 className="text-lg md:text-xl font-display font-medium text-pure-white mb-1">
                  {item.role}
                </h3>
                <p className="text-sm text-frost-glow/90 font-medium mb-4">
                  {item.company}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {item.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-sm text-moon-mist leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-void-violet font-mono text-xs mt-1 shrink-0">✦</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education & Language Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Education Glass Card (Spans 2 cols on md) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-[16px] p-6 md:col-span-2 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-10 h-10 rounded-full bg-void-violet/10 border border-void-violet/30 flex items-center justify-center text-lg">
                🎓
              </div>
              <div>
                <h3 className="text-lg font-display font-medium text-pure-white">Education & Academic Foundation</h3>
                <p className="text-xs font-mono text-fog-veil tracking-wider">Class of 2023</p>
              </div>
            </div>
            <p className="text-moon-mist text-sm leading-relaxed mt-2 pl-1">
              <strong className="text-pure-white font-medium">Bachelor of Civil Engineering</strong> (<span className="text-frost-glow font-medium">Geomatics Department</span>), Shubra Faculty of Engineering (2023).
            </p>
            <p className="text-xs text-fog-veil leading-relaxed mt-2 pl-1">
              Rigorous engineering coursework covering geodesy, cadastral surveying, satellite positioning, photogrammetry, remote sensing, and mathematical coordinate transformation.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-glass-edge flex flex-wrap gap-1.5">
            <span className="tech-tag text-[11px]">Geomatics Engineering</span>
            <span className="tech-tag text-[11px]">Surveying Calculations</span>
            <span className="tech-tag text-[11px]">Spatial Data Analysis</span>
          </div>
        </motion.div>

        {/* Languages Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-[16px] p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-glass-edge flex items-center justify-center text-base">
                🌐
              </div>
              <h3 className="text-base font-display font-medium text-pure-white">
                Languages
              </h3>
            </div>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="p-3 rounded-badge bg-white/[0.02] border border-glass-edge">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-frost-glow">{lang.name}</span>
                    <span className="text-xs font-mono text-fog-veil">{lang.code}</span>
                  </div>
                  <span className="text-xs font-mono text-moon-mist">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[11px] font-mono text-fog-veil mt-4 pt-2 border-t border-glass-edge">
            Fluent technical communication in English & Arabic
          </p>
        </motion.div>
      </div>
    </div>
  );
}
