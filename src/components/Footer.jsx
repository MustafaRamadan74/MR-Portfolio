import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-glass-edge bg-midnight-canvas/90 backdrop-blur-xl mt-auto relative z-20 pb-24 md:pb-10 pt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 border-b border-glass-edge">
          {/* Col 1: Bio / Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="group flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-void-violet shadow-[0_0_10px_#663af3]" />
              <span className="font-display font-medium text-lg tracking-tight text-pure-white group-hover:text-ice-highlight transition-colors">
                Mustafa Ramadan
              </span>
            </Link>
            <p className="text-xs font-mono text-fog-veil uppercase tracking-wider mb-3">
              GIS Developer & Software Engineer
            </p>
            <p className="text-sm text-moon-mist leading-relaxed max-w-sm">
              Specialized in Enterprise Geospatial Systems, automated ETL geoprocessing pipelines, and modern full-stack web engineering.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-xs font-mono uppercase tracking-wider text-fog-veil mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-moon-mist hover:text-pure-white transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="text-[10px] text-fog-veil group-hover:text-void-violet transition-colors">
                    ›
                  </span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Social & Direct Contacts */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="text-xs font-mono uppercase tracking-wider text-fog-veil mb-4">
              Connect & Reach Out
            </h4>
            <p className="text-xs text-moon-mist mb-3">
              Direct channels for enterprise inquiries, contracts, and collaboration:
            </p>
            <div className="flex items-center gap-2.5 flex-wrap">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mustafa7400/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect on LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-glass-edge flex items-center justify-center text-moon-mist hover:text-pure-white hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/MustafaRamadan74"
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Profile"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-glass-edge flex items-center justify-center text-moon-mist hover:text-pure-white hover:bg-white/[0.1] hover:border-frost-glow/40 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/201015950011"
                target="_blank"
                rel="noopener noreferrer"
                title="Send Message on WhatsApp"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-glass-edge flex items-center justify-center text-moon-mist hover:text-pure-white hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:mustafa.r.7400@gmail.com"
                title="Send Email"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-glass-edge flex items-center justify-center text-moon-mist hover:text-pure-white hover:bg-void-violet/20 hover:border-void-violet/50 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-[1.8] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* Phone */}
              <a
                href="tel:+201158666573"
                title="Call Phone"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-glass-edge flex items-center justify-center text-moon-mist hover:text-pure-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-[1.8] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-fog-veil font-mono">
          <div>
            © {currentYear} Mustafa Ramadan Mahgoub. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Designed & Built with</span>
            <span className="text-void-violet">◆</span>
            <span>React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
