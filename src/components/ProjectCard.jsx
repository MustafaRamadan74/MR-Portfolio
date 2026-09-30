import { motion } from 'framer-motion';
import ProjectImage from './ProjectImage';
import ImageCarousel from './ImageCarousel';

export default function ProjectCard({ project, index, category }) {
  const hasMultipleImages = project.images && project.images.length > 1;
  const placeholderType = project.placeholder || (category === 'gis' ? 'gis' : 'web');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.06 }}
      className="glass-card overflow-hidden group relative flex flex-col h-full"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-20 px-2.5 py-1 bg-void-violet/20 border border-void-violet/40 rounded-badge backdrop-blur-md shadow-sm">
          <span className="text-[11px] font-mono text-frost-glow tracking-wider font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-void-violet" />
            {project.badge || 'Featured'}
          </span>
        </div>
      )}

      {/* Early practice badge */}
      {project.earlyPractice && (
        <div className="absolute top-3 right-3 z-20 px-2.5 py-1 bg-white/[0.05] border border-glass-edge rounded-badge backdrop-blur-md">
          <span className="text-[11px] font-mono text-fog-veil tracking-wider">
            Early Practice
          </span>
        </div>
      )}

      {/* Image area */}
      {hasMultipleImages ? (
        <ImageCarousel
          images={project.images}
          title={project.title}
          isLongImage={project.isLongImage}
        />
      ) : (
        <ProjectImage
          images={project.images}
          title={project.title}
          placeholder={placeholderType}
          isLongImage={project.isLongImage}
        />
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
        <div>
          <h3 className="text-lg font-display font-medium text-pure-white mb-2 group-hover:text-ice-highlight transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-moon-mist leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col gap-3.5 pt-3 border-t border-glass-edge">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>

          {/* Action links */}
          {(project.live || project.github) && (
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-violet text-xs py-1.5 px-3.5 flex items-center gap-2 group/live shadow-[0_0_12px_rgba(102,58,243,0.35)]"
                  title="View Live Demo"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Demo</span>
                  <svg className="w-3 h-3 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : <div />}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-pill text-xs py-1.5 px-3 flex items-center gap-2"
                  title="View Source Code on GitHub"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-frost-glow" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                  <svg className="w-3 h-3 text-fog-veil" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
