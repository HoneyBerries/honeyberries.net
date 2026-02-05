import SEO from '../../../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { floatIn, pulse } from '../../../lib/animations';

export default function TermsOfService() {
  return (
    <div className="min-h-screen relative">
      <SEO
        title="Modcord Terms of Service - HoneyBerries"
        description="Terms of service for Modcord, an AI moderation bot. Learn about responsibilities, permissions, and limitations."
        pathname="/projects/modcord/terms-of-service"
      />
      <BackgroundDecorations />
      
      <div className="relative z-10">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <motion.header 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              <span className="accent-text">Modcord</span> Terms of Service
            </h1>
            <p className="text-lg text-gray-600 mb-2">Clear guidelines for using our service</p>
            <p className="text-sm text-gray-500"> Last updated: October 29, 2025</p>
          </motion.header>

          <motion.div 
            className="card-glass p-8 mb-8 bg-linear-to-br from-purple-50/50 to-pink-50/50"
            {...floatIn(0.3)}
          >
            <div className="prose prose-slate prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Agreement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of Modcord. Please read them carefully.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-green-800">
                <p className="font-medium">✅ Consent</p>
                <p className="text-green-700 text-sm">By adding or using Modcord in your Discord server, you confirm that you have the authority to do so and you consent to these Terms.</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">What Modcord Provides</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Modcord is an AI-powered Discord moderation bot that helps server administrators automatically detect and handle:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Spam and repetitive messaging.</li>
                <li>Harmful or offensive content.</li>
                <li>Rule violations specific to your community guidelines.</li>
                <li>Contextual moderation decisions based on AI analysis.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Responsibilities</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-medium mb-2">
                  📋 <strong>Platform Compliance:</strong>
                </p>
                <p className="text-blue-700">
                  You must comply with Discord's Terms of Service and Community Guidelines when using Modcord. Any violations of Discord's policies may result in service termination.
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Do not attempt to exploit, hack, reverse engineer, or abuse the bot's functionality.</li>
                <li>Ensure your server's rules and guidelines are clearly communicated to members.</li>
                <li>Use the bot responsibly and in accordance with your local laws.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bot Permissions & Functionality</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For Modcord to function effectively, it requires certain Discord permissions:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Read Messages:</strong> To analyze content for potential violations.</li>
                <li><strong>Manage Messages:</strong> To delete violating content when configured.</li>
                <li><strong>Timeout/Kick/Ban:</strong> To take moderation actions as configured by administrators.</li>
                <li><strong>Send Messages:</strong> To provide moderation notifications and logging.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Availability & Limitations</h3>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <p className="text-amber-800 font-medium mb-2">⚠️ <strong>Important Disclaimer</strong></p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Modcord is provided on an "as-is" and "as-available" basis without warranties of any kind. AI systems may generate false positives or miss violations. Human oversight remains essential.
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                <li><strong>No Guarantee of Accuracy:</strong> We are not liable for missed or incorrect moderation actions.</li>
                <li><strong>Downtime:</strong> Service may be interrupted for maintenance, updates, rate limits or technical issues.</li>
                <li><strong>Feature Changes:</strong> Features may evolve; deprecated functionality may be removed with reasonable notice.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Termination</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We reserve the right to terminate or suspend access to Modcord for any server or user that violates these terms, Discord's policies, or engages in harmful behavior. You may discontinue use at any time by removing the bot from your server.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Changes to Terms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update these Terms periodically to reflect improvements, legal requirements, or operational changes. The updated date at the top indicates the latest revision.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                <li>Minor updates take effect immediately upon posting.</li>
                <li>Significant changes will be communicated to server administrators via the bot, dashboard (if applicable), or email where available.</li>
                <li>Continued use after the effective date constitutes acceptance of the changes.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Related</h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                Looking for how we handle data? Read our{' '}
                <Link to="/projects/modcord/privacy-policy" className="text-blue-600 hover:text-blue-800 font-medium underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact & Support</h3>
              <p className="text-gray-700 leading-relaxed">
                For questions about these terms, technical support, or general inquiries, please contact us at{' '}
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
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-linear-to-r from-purple-200/20 to-pink-200/15 blur-3xl"
        {...pulse(0)}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-linear-to-l from-blue-200/20 to-purple-200/15 blur-3xl"
        {...pulse(1)}
      />
    </div>
  );
}
