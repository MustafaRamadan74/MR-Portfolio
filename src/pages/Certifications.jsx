import { motion } from 'framer-motion';
import { certifications } from '../data/projects';

export default function Certifications() {
  /* Group by year */
  const grouped = certifications.reduce((acc, cert) => {
    const y = cert.year;
    if (!acc[y]) acc[y] = [];
    acc[y].push(cert);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => b - a);

  return (
    <div className="max-w-5xl w-full mx-auto py-4">
      {/* Centered Eyebrow + Heading Stack */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="eyebrow-container">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Accreditation & Growth</span>
          <span className="eyebrow-line" />
        </div>
        <h1 className="font-display font-medium text-3xl md:text-5xl tracking-tight text-skywash mb-4">
          Certifications & Studies
        </h1>
        <p className="text-moon-mist text-base max-w-[580px] mx-auto leading-relaxed">
          Structured coursework and verified credentials across spatial analysis, enterprise GIS deployment, and modern software engineering.
        </p>
      </motion.div>

      {/* Grouped by year */}
      <div className="space-y-12">
        {years.map((year) => (
          <div key={year}>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-3.5 mb-6"
            >
              <div className="px-3.5 py-1 rounded-badge bg-white/[0.05] border border-glass-edge shadow-frost-edge">
                <span className="text-xs font-mono text-frost-glow font-medium">
                  {year}
                </span>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-glass-edge to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {grouped[year].map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="glass-card rounded-[16px] p-5 group cursor-default"
                >
                  <div className="flex items-start gap-3.5">
                    {/* Feature Icon Tile (Circle 9999px) */}
                    <div className="w-9 h-9 rounded-circle bg-white/[0.04] border border-glass-edge flex items-center justify-center shrink-0 group-hover:border-void-violet/50 group-hover:bg-void-violet/10 transition-all duration-300">
                      <svg
                        className="w-4 h-4 text-frost-glow group-hover:text-pure-white transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-pure-white leading-snug group-hover:text-ice-highlight transition-colors duration-200">
                        {cert.name}
                      </h3>
                      {cert.issuer && (
                        <span className="text-xs text-fog-veil font-mono mt-1.5 block">
                          {cert.issuer}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
