import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { MainLayout } from './layouts/MainLayout';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load page components for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const MinecraftServer = lazy(() => import('./pages/projects/MinecraftServer'));
const MinecraftPlugins = lazy(() => import('./pages/projects/MinecraftPlugins'));
const Modcord = lazy(() => import('./pages/projects/Modcord'));
const ModcordPrivacy = lazy(() => import('./pages/projects/modcord/PrivacyPolicy'));
const ModcordTerms = lazy(() => import('./pages/projects/modcord/TermsOfService'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * Loading fallback component
 */
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );
}

/**
 * Main App component with routing and layout
 */
export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <MainLayout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/minecraft-plugins" element={<MinecraftPlugins />} />
              <Route path="/projects/minecraft-server" element={<MinecraftServer />} />
              <Route path="/projects/modcord" element={<Modcord />} />
              <Route path="/projects/modcord/privacy-policy" element={<ModcordPrivacy />} />
              <Route path="/projects/modcord/terms-of-service" element={<ModcordTerms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
