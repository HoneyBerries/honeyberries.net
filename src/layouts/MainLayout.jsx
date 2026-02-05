import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { GradientBackdrop } from '@components/backgrounds';
import { BACKGROUND_LAYERS } from '@lib/constants';
import { pageTransition } from '@lib/animations';

/**
 * Main layout component wrapping all pages
 * Provides consistent structure with navbar, footer, and gradient backdrop
 * Includes page transitions using Framer Motion
 */
export function MainLayout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen relative text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <GradientBackdrop layers={BACKGROUND_LAYERS.layout} />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main 
            key={location.pathname}
            className="flex-1 pt-16" 
            role="main"
            {...pageTransition}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}
