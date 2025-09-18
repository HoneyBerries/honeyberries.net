import Footer from '../../../components/Footer';

const TODAY = new Date().toLocaleDateString();

export default function Privacy() {
  return (
    <div className="min-h-screen relative">
      <BackgroundDecorations />
      
      <div className="relative z-10">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Modcord <span className="accent-text">Privacy Policy</span>
            </h1>

            <p className="text-sm text-gray-500">Last updated: {TODAY}</p>
          </header>

          <div className="card-glass p-8 mb-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
            <div className="prose prose-slate prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Modcord is designed with privacy-first principles. We process your data only for the purpose of providing intelligent moderation services and do not retain, share, or monetize your information in any way.
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
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>All data processing occurs on secure, encrypted infrastructure.</li>
                <li>Only authorized bot operators can access system logs (which do not contain message content).</li>
                <li>No human review of message content unless explicitly requested by server administrators.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since we don't retain personal data, there's typically nothing to delete or modify. However, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Request information about how your data is processed.</li>
                <li>Opt out at any time by removing Modcord from your server.</li>
                <li>Contact us with any privacy concerns or questions.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this privacy policy or how your data is handled, please contact us at{' '}
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
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/15 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-l from-green-200/20 to-blue-200/15 blur-3xl"></div>
    </div>
  );
}
