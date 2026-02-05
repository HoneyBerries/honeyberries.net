import SEO from '../../../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pulse } from '../../../lib/animations';


export default function Privacy() {
  return (
    <div className="min-h-screen relative">
      <SEO
        title="Modcord Privacy Policy"
        description="Privacy-first principles for Modcord, our AI moderation bot. Learn what data is processed and how it's protected."
        ogImage="/assets/icons/favicon.webp"
        pathname="/projects/modcord/privacy-policy"
      />
      <BackgroundDecorations />
      
      <div className="relative z-10">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <motion.header 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              <span className="accent-text">ModCord</span> Privacy Policy
            </h1>

            <p className="text-sm text-gray-500">Last updated: October 29, 2025</p>
          </motion.header>

          <motion.div 
            className="card-glass p-8 mb-8 bg-linear-to-br from-blue-50/50 to-purple-50/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-slate prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Modcord is designed with privacy-first principles. We process limited Discord data only for providing intelligent moderation services. We do <strong>not</strong> retain message content, sell data, profile users, or monetize your information in any way.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data We Process</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Message Content:</strong> Only processed when flagged for moderation; never stored or retained.</li>
                <li><strong>User IDs:</strong> Used solely to identify users for moderation actions within your Discord server.</li>
                <li><strong>Server Context:</strong> Channel and server information to ensure moderation is accurate and relevant.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Message content is processed by our AI systems in real-time to detect potential rule violations, spam, or harmful content. This processing happens instantly and the data is immediately discarded.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                <p className="text-emerald-800 font-medium">
                  ✅ <strong>Zero Data Retention:</strong> We do not store message content or personal information. Data exists only during the brief processing window (typically under 30 seconds) and is then permanently discarded.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Sharing & Third Parties</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We never share, sell, or transfer your data to third parties. Your information is not used for advertising, analytics, or any purpose beyond immediate moderation processing.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Access</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                <li>All real-time processing occurs on secure, encrypted infrastructure.</li>
                <li>Operational logs exclude message content and exist only for reliability and abuse prevention.</li>
                <li><strong>Limited Internal Access:</strong> Only authorized bot operators can access infrastructure metrics and non-content logs for maintenance and security.</li>
                <li>No human review of message content unless explicitly requested by server administrators for debugging (and only if technically possible without stored content).</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Because we do not retain message content or build user profiles, there is typically no persistent personal data to access, export, or delete. Still, you may request clarification about processing or moderation actions at any time. You may also opt out by removing the bot.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                <li>Request a description of what limited data categories are processed.</li>
                <li>Ask about moderation actions affecting your server (if logs are enabled).</li>
                <li>Opt out instantly by removing Modcord from your Discord server.</li>
                <li>Raise any privacy concern via email and receive a timely response.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Related</h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                Need usage guidelines instead? Read our{' '}
                <Link to="/projects/modcord/terms-of-service" className="text-blue-600 hover:text-blue-800 font-medium underline-offset-2 hover:underline">Terms of Service</Link>.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this privacy policy or how your data is handled, please contact us at{' '}
                <a href="mailto:henry.rainbowfish@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  henry.rainbowfish@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  );
}

/**
 * Background decorative elements
 */
function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div 
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-linear-to-r from-blue-200/20 to-purple-200/15 blur-3xl"
        {...pulse(0)}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-linear-to-l from-green-200/20 to-blue-200/15 blur-3xl"
        {...pulse(1)}
      />
    </div>
  );
}
