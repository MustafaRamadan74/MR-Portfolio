import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { to: '/', label: 'Home', icon: '⌂' },
  { to: '/about', label: 'About', icon: '◈' },
  { to: '/skills', label: 'Skills', icon: '◆' },
  { to: '/projects', label: 'Projects', icon: '▣' },
  { to: '/certifications', label: 'Certs', icon: '◎' },
  { to: '/contact', label: 'Contact', icon: '✉' },
];

export default function Navbar() {
  return (
    <nav className="w-full">
      {/* Desktop: Centered frosted glass segmented pill control */}
      <div className="hidden md:flex items-center justify-center py-6 mb-4">
        <div className="flex items-center gap-1 p-1 rounded-pill bg-midnight-canvas/70 border border-glass-edge shadow-frost-edge backdrop-blur-md">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative px-4 py-1.5 text-xs font-medium rounded-pill transition-all duration-200 select-none ${
                  isActive
                    ? 'text-pure-white shadow-[inset_0_1px_1px_rgba(216,236,248,0.2)]'
                    : 'text-moon-mist hover:text-frost-glow hover:bg-white/[0.04]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="authkit-nav-pill"
                      className="absolute inset-0 bg-white/[0.08] rounded-pill border border-glass-edge"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile: bottom fixed bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around py-2 px-2 bg-midnight-canvas/92 backdrop-blur-lg border-t border-glass-edge">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-all duration-200 ${
                isActive ? 'text-pure-white font-medium' : 'text-fog-veil hover:text-moon-mist'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="text-base">{link.icon}</span>
                <span className="text-[10px] font-mono tracking-wider">{link.label}</span>
                {isActive && (
                  <div className="w-1 h-1 rounded-full bg-void-violet shadow-[0_0_6px_#663af3]" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
