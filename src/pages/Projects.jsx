import { useState } from 'react';
import { motion } from 'framer-motion';
import { allProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = allProjects.filter((project) => {
    if (activeTab === 'gis') return project.category === 'gis';
    if (activeTab === 'web') return project.category === 'web';
    return true; // 'all'
  });

  return (
    <div className="pb-16 w-full mx-auto py-4">
      {/* Centered Eyebrow + Heading Stack */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="eyebrow-container">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Engineered Solutions</span>
          <span className="eyebrow-line" />
        </div>
        <h1 className="font-display font-medium text-3xl md:text-5xl tracking-tight text-skywash mb-4">
          Projects & Architecture
        </h1>
        <p className="text-moon-mist text-base max-w-[620px] mx-auto leading-relaxed mb-8">
          A showcase of spatial data modeling, automated geoprocessing pipelines, and modern full-stack web platforms.
        </p>

        {/* Filter Segmented Pill Control */}
        <div className="inline-flex items-center gap-1.5 p-1 rounded-pill bg-midnight-canvas/80 border border-glass-edge shadow-frost-edge backdrop-blur-md">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-pill text-xs font-mono transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-white/[0.08] text-pure-white border border-glass-edge shadow-[inset_0_1px_1px_rgba(216,236,248,0.2)] font-medium'
                : 'text-moon-mist hover:text-pure-white hover:bg-white/[0.03]'
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setActiveTab('gis')}
            className={`px-4 py-2 rounded-pill text-xs font-mono transition-all duration-200 ${
              activeTab === 'gis'
                ? 'bg-white/[0.08] text-pure-white border border-glass-edge shadow-[inset_0_1px_1px_rgba(216,236,248,0.2)] font-medium'
                : 'text-moon-mist hover:text-pure-white hover:bg-white/[0.03]'
            }`}
          >
            GIS & Spatial
          </button>
          <button
            onClick={() => setActiveTab('web')}
            className={`px-4 py-2 rounded-pill text-xs font-mono transition-all duration-200 ${
              activeTab === 'web'
                ? 'bg-white/[0.08] text-pure-white border border-glass-edge shadow-[inset_0_1px_1px_rgba(216,236,248,0.2)] font-medium'
                : 'text-moon-mist hover:text-pure-white hover:bg-white/[0.03]'
            }`}
          >
            Software & Web
          </button>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {filteredProjects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
}
