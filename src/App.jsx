import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MainLayout } from '@layouts/MainLayout';
import ErrorBoundary from '@components/ErrorBoundary';
import { spin } from '@lib/animations';

// Lazy load page components for better performance
const Home = lazy(() => import('@pages/Home'));
const About = lazy(() => import('@pages/About'));
const Projects = lazy(() => import('@pages/Projects'));
const MinecraftServer = lazy(() => import('@pages/projects/GemSMP'));
const MinecraftModsPlugins = lazy(() => import('@pages/projects/MinecraftModsAndPlugins'));
const Modcord = lazy(() => import('@pages/projects/Modcord'));
const ModcordPrivacy = lazy(() => import('@pages/projects/modcord/PrivacyPolicy'));
const ModcordTerms = lazy(() => import('@pages/projects/modcord/TermsOfService'));
const Contact = lazy(() => import('@pages/Contact'));
const NotFound = lazy(() => import('@pages/NotFound'));

/**
 * Loading fallback with animated spinner
 */
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <motion.div
        className="rounded-full h-8 w-8 border-b-2 border-blue-600"
        {...spin(0.8)}
      />
    </div>
  );
}

/**
 * Main App component with routing and layout
 */
export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <MainLayout>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/minecraft-mods-plugins" element={<MinecraftModsPlugins />} />
                <Route path="/projects/minecraft-plugins" element={<Navigate to="/projects/minecraft-mods-plugins" replace />} />
                <Route path="/projects/gem-smp" element={<MinecraftServer />} />
                <Route path="/projects/modcord" element={<Modcord />} />
                <Route path="/projects/modcord/privacy-policy" element={<ModcordPrivacy />} />
                <Route path="/projects/modcord/terms-of-service" element={<ModcordTerms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </MainLayout>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
