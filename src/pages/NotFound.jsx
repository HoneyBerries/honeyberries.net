import { Link } from 'react-router-dom';
import { Button } from '@components/ui';
import { NOT_FOUND_CONTENT } from '@lib/content';
import SEO from '@components/SEO';
import { motion } from 'framer-motion';
import { bounce, pulse } from '@lib/animations';

/**
 * 404 Not Found page component
 * Features animated elements and helpful navigation links
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      <SEO
        title={NOT_FOUND_CONTENT.pageTitle}
        description="Oops! The page you requested could not be found. Return home or explore HoneyBerries' projects."
        pathname="/404"
        noindex
      />

      <div className="text-center max-w-2xl mx-auto space-y-8">
        {/* Animated 404 */}
        <div className="relative">
          <motion.h1
            className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-emerald-600"
            {...pulse()}
          >
            404
          </motion.h1>
          {NOT_FOUND_CONTENT.floatingElements.map((el, idx) => (
            <motion.div
              key={idx}
              className={`absolute w-${el.size} h-${el.size} bg-linear-to-r from-${el.from}-400 to-${el.to}-400 rounded-full opacity-60`}
              style={{
                top: el.top !== undefined ? `${el.top}px` : 'auto',
                bottom: el.bottom !== undefined ? `${el.bottom}px` : 'auto',
                left: el.left !== undefined ? (el.left.includes?.('/') ? el.left : `${el.left}px`) : 'auto',
                right: el.right !== undefined ? (el.right.includes?.('/') ? el.right : `${el.right}px`) : 'auto',
              }}
              {...bounce((el.delay || 0) / 1000)}
            />
          ))}
        </div>

        {/* Error Message */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{NOT_FOUND_CONTENT.heading}</h2>
          <p className="text-lg text-gray-600">
            {NOT_FOUND_CONTENT.lead}
          </p>
          <p className="text-gray-500">
            {NOT_FOUND_CONTENT.subtext}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button as={Link} to="/" variant="primary">Go Home</Button>
          <Button as={Link} to="/projects" variant="primary">View My Projects</Button>
        </div>

        {/* Suggested Links */}
        <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-sm space-y-3">
          <p className="text-sm text-gray-600 font-semibold">
            {NOT_FOUND_CONTENT.tip}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {NOT_FOUND_CONTENT.suggestedLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className={`inline-flex items-center gap-1 px-3 py-1 bg-${link.bg}-100 text-${link.text}-700 rounded-full text-sm hover:bg-${link.bg}-200 transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Easter Egg */}
        <p className="mt-4 text-xs text-gray-400">
          {NOT_FOUND_CONTENT.easterEgg}
        </p>
      </div>
    </div>
  );
}
