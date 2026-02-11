import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = title ? `${title} | SomosDev` : 'SomosDev | Agencia de Desarrollo de Software y Soluciones Digitales';
  const siteDescription = description || 'SomosDev - Agencia de desarrollo de software en Perú y Venezuela. Creamos soluciones digitales a medida enfocadas en resultados de negocio.';
  const siteKeywords = keywords || 'desarrollo de software, agencia digital, aplicaciones web, react, nodejs, peru, venezuela, software a medida';
  const siteImage = image || '/og-image.png';
  const siteUrl = url || 'https://somosdev.net/';

  // Structured Data (JSON-LD) for the Agency
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SomosDev",
    "image": "https://somosdev.net/og-image.png",
    "@id": "https://somosdev.net",
    "url": "https://somosdev.net",
    "telephone": "+584141220527",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.046374,
      "longitude": -77.042793
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://github.com/manuelperez0000"
    ],
    "description": "Agencia de desarrollo de software enfocada en convertir desafíos de negocio en soluciones digitales rentables."
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
