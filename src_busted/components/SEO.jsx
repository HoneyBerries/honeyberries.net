import { Helmet } from 'react-helmet-async';
import { BASE_URL, SITE_INFO } from '../lib/constants';

// Default OG image (absolute URL) - prefer a stable image available on the live site.
const DEFAULT_OG = `${BASE_URL}/assets/icons/favicon.webp`;

/**
 * SEO component for setting page metadata
 * @param {string} title - Page title
 * @param {string} description - Meta description
 * @param {string} [ogImage] - Open Graph image URL (absolute or path)
 * @param {string} [pathname] - Path portion for canonical/og:url (e.g., "/about")
 * @param {boolean} [noindex] - If true, set robots noindex
 * @param {object|object[]} [jsonLd] - Structured data object or list to embed as JSON-LD
 */
export default function SEO({ title, description, ogImage, pathname, noindex = false, jsonLd }) {
	const url = `${BASE_URL}${pathname || ''}`;

	// Resolve ogImage robustly:
	// - If provided and already an absolute URL -> use it
	// - If provided as an imported module (Vite returns a string path) -> ensure it becomes absolute
	// - If provided as a relative path string -> join with BASE_URL
	// - Otherwise fall back to DEFAULT_OG
	let img;
	if (ogImage) {
		// If the value is an object with a default (common in some bundlers), try to use that
		if (typeof ogImage === 'object' && typeof ogImage.default === 'string') {
			img = ogImage.default;
		} else if (typeof ogImage === 'string') {
			img = ogImage;
		}

		if (img && !img.startsWith('http')) {
			// Normalize leading slash and join with BASE_URL
			img = `${BASE_URL}${img.replace(/^\//, '')}`;
		}
	}
	img = img || DEFAULT_OG;
	const fullTitle = title || SITE_INFO.title;
	const desc = description || SITE_INFO.description;
	return (
		<Helmet>
			{fullTitle && <title>{fullTitle}</title>}
			{desc && <meta name="description" content={desc} />}
			<link rel="canonical" href={url} />
			<meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />

			{fullTitle && <meta property="og:title" content={fullTitle} />} 
			{desc && <meta property="og:description" content={desc} />}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={SITE_INFO.title} />
			<meta property="og:url" content={url} />
			{img && <meta property="og:image" content={img} />}
			{img && <meta property="og:image:alt" content={fullTitle} />}
			<meta name="twitter:card" content="summary_large_image" />
			{img && <meta name="twitter:image" content={img} />}
			<meta name="twitter:title" content={fullTitle} />
			{desc && <meta name="twitter:description" content={desc} />}
			{jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((obj, idx) => (
				<script key={idx} type="application/ld+json">{JSON.stringify(obj)}</script>
			))}
		</Helmet>
	);
}
