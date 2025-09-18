import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * SEO component for setting page metadata
 * @param {string} title - Page title
 * @param {string} description - Meta description
 * @param {string} [ogImage] - Open Graph image URL
 */
export default function SEO({ title, description, ogImage }) {
	return (
		<Helmet>
			{title && <title>{title}</title>}
			{description && <meta name="description" content={description} />}
			{title && <meta property="og:title" content={title} />}
			{description && <meta property="og:description" content={description} />}
			{ogImage && <meta property="og:image" content={ogImage} />}
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary_large_image" />
			{ogImage && <meta name="twitter:image" content={ogImage} />}
		</Helmet>
	);
}
