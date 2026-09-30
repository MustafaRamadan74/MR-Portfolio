import { motion } from 'framer-motion';
import { contactInfo, professionalObjective } from '../data/projects';

const iconPaths = {
  email: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  ),
  whatsapp: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  ),
  location: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  ),
  github: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  ),
  linkedin: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[68vh] py-6 max-w-3xl w-full mx-auto">
      {/* Centered Eyebrow + Heading Stack */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="eyebrow-container">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Initiate Connection</span>
          <span className="eyebrow-line" />
        </div>
        <h1 className="font-display font-medium text-3xl md:text-5xl tracking-tight text-skywash mb-4">
          Let’s build something spatial
        </h1>
        <p className="text-moon-mist text-base max-w-[560px] mx-auto leading-relaxed">
          Open to enterprise GIS engineering roles, full-stack Web GIS development, CAD/BIM automation contracts, and large-scale spatial modeling projects.
        </p>
      </motion.div>

      {/* Primary CTA Direct Action */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mb-8"
      >
        <a
          href="mailto:mustafa.r.7400@gmail.com"
          className="btn-violet text-sm py-3 px-8 flex items-center gap-2"
        >
          <span>Send Direct Email</span>
          <span className="text-xs">↗</span>
        </a>
      </motion.div>

      {/* Contact cards list */}
      <div className="w-full space-y-3.5">
        {contactInfo.map((item, i) => (
          <motion.a
            key={item.type}
            href={item.href}
            target={item.type === 'GitHub' || item.type === 'LinkedIn' ? '_blank' : undefined}
            rel={item.type === 'GitHub' || item.type === 'LinkedIn' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
            className={`glass-card rounded-[16px] p-4 flex items-center gap-4 group block ${
              item.href === '#' ? 'cursor-default' : 'cursor-pointer'
            }`}
          >
            {/* Feature Icon Tile (Circle 9999px) */}
            <div className="w-11 h-11 rounded-circle bg-white/[0.04] border border-glass-edge flex items-center justify-center shrink-0 group-hover:bg-void-violet/10 group-hover:border-void-violet/40 transition-all duration-300">
              <svg
                className="w-5 h-5 text-frost-glow group-hover:text-pure-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                {iconPaths[item.icon] || iconPaths.email}
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-mono text-fog-veil tracking-wider uppercase mb-0.5">
                {item.type}
              </p>
              <p className="text-sm font-medium text-pure-white group-hover:text-ice-highlight transition-colors duration-200 truncate">
                {item.value}
              </p>
            </div>

            {/* Hairline link arrow (only for clickable items) */}
            {item.href !== '#' && (
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-fog-veil group-hover:text-pure-white group-hover:translate-x-0.5 transition-all">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            )}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
