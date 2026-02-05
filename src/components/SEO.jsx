import { Helmet } from 'react-helmet-async';
import { BASE_URL, SITE_INFO } from '@lib/constants';

// Default OG image (absolute URL)
const DEFAULT_OG = `${BASE_URL}/assets/icons/favicon.webp`;

/**
 * SEO component for setting page metadata
 * Handles Open Graph, Twitter cards, and JSON-LD structured data
 */
export default function SEO({ title, description, ogImage, pathname, noindex = false, jsonLd }) {
  const url = `${BASE_URL}${pathname || ''}`;

  // Resolve ogImage to absolute URL
  let img;
  if (ogImage) {
    if (typeof ogImage === 'object' && typeof ogImage.default === 'string') {
      img = ogImage.default;
    } else if (typeof ogImage === 'string') {
      img = ogImage;
    }

    if (img && !img.startsWith('http')) {
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
