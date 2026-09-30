import { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ElevatorLayout() {
  const location = useLocation();

  const pageVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -16 },
    }),
    []
  );

  return (
    <div className="relative min-h-screen bg-midnight-canvas text-frost-glow overflow-x-hidden">
      {/* Background blueprint grid layer */}
      <div className="authkit-grid" />

      {/* Top spotlight halo */}
      <div className="spotlight-halo" />

      {/* Main container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 w-full content-area">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
}
