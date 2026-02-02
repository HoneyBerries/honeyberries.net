import { ICON_PATHS } from '../../lib/constants';
import { gradientStyle } from '../../lib/styles';
import { motion } from 'framer-motion';
import { floatIn, pulse } from '../../lib/animations';

/**
 * Enhanced call-to-action section for contact page
 */
export default function CallToAction({ email, discordInviteUrl, copy }) {
  const heading = copy?.heading || 'Have a question about my stuff?';
  const description = copy?.description || "If you have any questions about my projects or work, feel free to ask. I'm happy to answer questions about features, pricing, or anything else. For like general information about a project, you can join my Discord server and ask me.";
  const highlights = copy?.highlights || [];
  const emailLabel = copy?.emailLabel || 'Send Email';
  const discordLabel = copy?.discordLabel || 'Join Discord';
  const [beforeQuestion, afterQuestion] = heading.split('question');

  return (
    <motion.div
      className="relative bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 overflow-hidden"
      {...floatIn(0.4)}
    >
      {/* Background decorations */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-linear-to-br from-blue-200/30 to-indigo-200/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-linear-to-tr from-purple-200/30 to-indigo-200/20 rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <motion.div className="absolute top-8 left-16 w-2 h-2 bg-blue-400 rounded-full" {...pulse(0)} />
      <motion.div className="absolute top-20 right-24 w-1 h-1 bg-purple-400 rounded-full" {...pulse(0.5)} />
      <motion.div className="absolute bottom-16 right-16 w-3 h-3 bg-indigo-400 rounded-full" {...pulse(1)} />

      <div className="relative text-center">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {beforeQuestion || heading}
            {heading.includes('question') && <span className="accent-text">question</span>}
            {heading.includes('question') ? afterQuestion : ''}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
          <motion.a
            href={`mailto:${email}`}
            className="flex-1 w-full sm:w-auto btn-primary inline-flex items-center justify-center gap-3"
            style={gradientStyle('emeraldBlue')}
            aria-label={`Send email to ${email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img 
              src={ICON_PATHS.email} 
              alt="Email" 
              className="w-5 h-5"
              whileHover={{ scale: 1.1 }}
            />
            <span>{emailLabel}</span>
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </motion.svg>
          </motion.a>

          <span className="text-gray-400 font-medium">or</span>

          <motion.a
            href={discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 w-full sm:w-auto btn-primary inline-flex items-center justify-center gap-3"
            style={gradientStyle('purpleOrange')}
            aria-label="Join Discord server"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img 
              src={ICON_PATHS.discord} 
              alt="Discord" 
              className="w-5 h-5"
              whileHover={{ scale: 1.1 }}
            />
            <span>{discordLabel}</span>
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </motion.svg>
          </motion.a>
        </div>

        {/* Additional info */}
        <div className="mt-8 pt-8 border-t border-gray-200/50">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            {(highlights || []).map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <motion.div className={`w-2 h-2 rounded-full ${item.color}`} {...pulse()} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
