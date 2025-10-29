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
    <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Floating elements */}
      <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${gradientFrom.replace('/50', '/20')} ${gradientTo.replace('/30', '/10')} rounded-full blur-xl group-hover:scale-110 transition-transform duration-500`}></div>
      <div className={`absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr ${gradientFrom.replace('from-', 'from-purple-').replace('/50', '/15')} ${gradientTo.replace('/30', '/10')} rounded-full blur-2xl group-hover:scale-105 transition-transform duration-700`}></div>

      <div className="relative z-10">
        {/* Header with icon */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${gradientFrom.replace('/50', '')} ${gradientTo.replace('/30', '')} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <img
              src={iconSrc}
              alt={iconAlt}
              className="w-7 h-7"
            />
          </div>
          <div>
            <h3 className={`text-xl font-bold text-gray-900 ${hoverColor} transition-colors duration-300`}>
              {title}
            </h3>
            <p className="text-gray-600">{subtitle}</p>
          </div>
        </div>

        {/* Card content */}
        {children}
      </div>
    </div>
  );
}
