import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GradientBackdrop } from '../components/backgrounds';
import { BACKGROUND_LAYERS } from '../lib/constants';

/**
 * Main layout component that wraps all pages
 * @param {Object} props - Layout properties
 * @param {React.ReactNode} props.children - Page content
 */
export function MainLayout({ children }) {
  return (
    <div className="min-h-screen relative text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <GradientBackdrop layers={BACKGROUND_LAYERS.layout} />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16" role="main">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}