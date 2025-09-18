import React from 'react';
import Footer from '../../../components/Footer';
import SEO from '../../../components/SEO';

const TODAY = new Date().toLocaleDateString();

export default function TermsOfService() {
  return (
    <div className="min-h-screen relative">
      <SEO
        title="Modcord Terms of Service — HoneyBerries"
        description="Terms of service for Modcord, an AI moderation bot. Learn about responsibilities, permissions, and limitations."
      />
      <BackgroundDecorations />
      
      <div className="relative z-10">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Modcord <span className="accent-text">Terms of Service</span>
            </h1>
            <p className="text-lg text-gray-600 mb-2">Clear guidelines for using our service</p>
            <p className="text-sm text-gray-500">Last updated: {TODAY}</p>
          </header>

          <div className="card-glass p-8 mb-8 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
            <div className="prose prose-slate prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Agreement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By using Modcord in your Discord server, you agree to these terms of service. These terms help ensure fair and responsible use of our AI moderation platform.
              </p>

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
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-amber-800 font-medium mb-2">
                  ⚠️ <strong>Important Disclaimer:</strong>
                </p>
                <p className="text-amber-700">
                  Modcord is provided "as-is" without warranties. While we strive for accuracy, AI moderation may occasionally produce false positives or miss violations. Server administrators remain responsible for final moderation decisions.
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>We are not responsible for moderation errors, missed violations, or their consequences.</li>
                <li>Service availability may vary due to maintenance, updates, or technical issues.</li>
                <li>We reserve the right to modify features or discontinue service with reasonable notice.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Termination</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We reserve the right to terminate or suspend access to Modcord for any server or user that violates these terms, Discord's policies, or engages in harmful behavior. You may discontinue use at any time by removing the bot from your server.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Changes to Terms</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may update these terms periodically. Continued use of Modcord after changes constitutes acceptance of the new terms. Significant changes will be communicated through appropriate channels.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact & Support</h3>
              <p className="text-gray-700 leading-relaxed">
                For questions about these terms, technical support, or general inquiries, please contact us at{' '}
                <a href="mailto:henry.rainbowfish@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  henry.rainbowfish@gmail.com
                </a>
              </p>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}

/**
 * Background decorative elements
 */
function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/15 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-l from-blue-200/20 to-purple-200/15 blur-3xl"></div>
    </div>
  );
}
