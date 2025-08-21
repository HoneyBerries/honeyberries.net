export default function ProjectCard({ id, title, description, imageUrl = '', href }) {
  return (
    <a id={id} href={href} target="_blank" rel="noreferrer" className="group block rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative">
        <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-emerald-100 via-blue-100 to-purple-100" />
          )}
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{boxShadow:'inset 0 0 0 2px rgba(59,130,246,0.25)'}}/>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-700">
          Visit <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </a>
  )
}
