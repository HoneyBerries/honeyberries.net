import { memo } from 'react';

/**
 * GemCard — small presentational component used on the Minecraft Server page
 * Props:
 *  - gem: { id, name, element, passive, active, image, color }
 */
const GemCard = memo(function GemCard({ gem }) {
	const { name, element, passive, active, image, color } = gem;

	// Color schemes for different gem types
	const colorSchemes = {
		air: {
			bg: 'from-sky-100 via-cyan-50 to-blue-100',
			border: 'border-sky-200',
			iconBg: 'bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500',
			elementBg: 'bg-sky-100',
			elementText: 'text-sky-700'
		},
		fire: {
			bg: 'from-red-100 via-orange-50 to-yellow-100',
			border: 'border-red-200',
			iconBg: 'bg-gradient-to-br from-red-400 via-pink-500 to-rose-600',
			elementBg: 'bg-red-100',
			elementText: 'text-red-700'
		},
		water: {
			bg: 'from-blue-100 via-indigo-50 to-cyan-100',
			border: 'border-blue-200',
			iconBg: 'bg-gradient-to-br from-cyan-400 via-sky-400 to-teal-500',
			elementBg: 'bg-blue-100',
			elementText: 'text-blue-700'
		},
		earth: {
			bg: 'from-green-100 via-emerald-50 to-lime-100',
			border: 'border-green-200',
			iconBg: 'bg-gradient-to-br from-lime-500 via-green-500 to-emerald-600',
			elementBg: 'bg-green-100',
			elementText: 'text-green-700'
		},
		ice: {
			bg: 'from-cyan-100 via-blue-50 to-indigo-100',
			border: 'border-cyan-200',
			iconBg: 'bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700',
			elementBg: 'bg-cyan-100',
			elementText: 'text-cyan-700'
		},
		darkness: {
			bg: 'from-gray-100 via-slate-50 to-purple-100',
			border: 'border-gray-300',
			iconBg: 'bg-gradient-to-br from-slate-600 via-violet-600 to-purple-700',
			elementBg: 'bg-gray-200',
			elementText: 'text-gray-700'
		},
		light: {
			bg: 'from-yellow-100 via-amber-50 to-orange-100',
			border: 'border-yellow-200',
			iconBg: 'bg-gradient-to-br from-yellow-300 via-orange-300 to-amber-400',
			elementBg: 'bg-yellow-100',
			elementText: 'text-yellow-700'
		}
	};

	const scheme = colorSchemes[color] || colorSchemes.air;

	return (
		<article className={`h-full rounded-xl border ${scheme.border} bg-gradient-to-br ${scheme.bg} backdrop-blur-sm p-5 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-floatIn flex flex-col`}>
			<div className="flex items-start gap-4 flex-1">
				<div className="flex-shrink-0">
					<div className={`w-16 h-16 rounded-xl ${scheme.iconBg} flex items-center justify-center overflow-hidden border border-white/50 shadow-md`}>
						{image ? (
							<img 
								src={image} 
								alt={`${name} icon`} 
								className="w-12 h-12 object-contain drop-shadow-sm" 
								style={{ imageRendering: 'pixelated' }}
								loading="lazy" 
							/>
						) : (
							<svg className="w-10 h-10 text-white drop-shadow-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
								<path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						)}
					</div>
				</div>

				<div className="min-w-0 flex-1 flex flex-col">
					<div className="flex items-start justify-between gap-2 mb-2">
						<h3 className="text-base font-bold text-gray-900 leading-tight">{name}</h3>
						<span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${scheme.elementBg} ${scheme.elementText} border border-white/50 shadow-sm flex-shrink-0`}>
							{element}
						</span>
					</div>
					<p className="text-sm text-gray-700 leading-relaxed mb-3 flex-1">{passive}</p>
					{active && (
						<div className="mt-auto p-2.5 rounded-lg bg-white/60 border border-white/80">
							<p className="text-xs text-gray-800">
								<span className="font-semibold text-gray-900">Active:</span> {active}
							</p>
						</div>
					)}
				</div>
			</div>
		</article>
	);
});

export default GemCard;
