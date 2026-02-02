import { motion } from 'framer-motion';

/**
 * Base contact card component with shared styling and structure
 * @param {Object} props - Component properties
 * @param {string} props.title - Card title
 * @param {string} props.subtitle - Card subtitle
 * @param {string} props.iconSrc - Path to icon image
 * @param {string} props.iconAlt - Alt text for icon
 * @param {string} props.gradientFrom - Starting color for gradient (Tailwind class)
 * @param {string} props.gradientTo - Ending color for gradient (Tailwind class)
 * @param {string} props.hoverColor - Hover color for title (Tailwind class)
 * @param {React.ReactNode} props.children - Card content
 */
export default function ContactCard({
  title,
  subtitle,
  iconSrc,
  iconAlt,
  gradientFrom,
  gradientTo,
  hoverColor,
  children
}) {
  return (
    <motion.div 
      className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradient */}
      <motion.div 
        className={`absolute inset-0 bg-linear-to-br ${gradientFrom} ${gradientTo}`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating elements */}
      <motion.div 
        className={`absolute -top-4 -right-4 w-24 h-24 bg-linear-to-br ${gradientFrom.replace('/50', '/20')} ${gradientTo.replace('/30', '/10')} rounded-full blur-xl`}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div 
        className={`absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-tr ${gradientFrom.replace('from-', 'from-purple-').replace('/50', '/15')} ${gradientTo.replace('/30', '/10')} rounded-full blur-2xl`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.7 }}
      />

      <div className="relative z-10">
        {/* Header with icon */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div 
            className={`shrink-0 w-14 h-14 bg-linear-to-br ${gradientFrom.replace('/50', '')} ${gradientTo.replace('/30', '')} rounded-xl flex items-center justify-center shadow-lg`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={iconSrc}
              alt={iconAlt}
              className="w-7 h-7"
            />
          </motion.div>
          <div>
            <h3 className={`text-xl font-bold text-gray-900 ${hoverColor}`}>
              {title}
            </h3>
            <p className="text-gray-600">{subtitle}</p>
          </div>
        </div>

        {/* Card content */}
        {children}
      </div>
    </motion.div>
  );
}
