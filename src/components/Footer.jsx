import { SITE_INFO } from '../lib/constants';

/**
 * Footer component with copyright information
 */
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>{SITE_INFO.currentYear} {SITE_INFO.author}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="/projects/modcord/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
          <a href="/projects/modcord/terms-of-service" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
