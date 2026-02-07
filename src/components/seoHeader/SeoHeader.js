import React from "react";
import { Helmet } from "react-helmet";
import { seo } from "../../portfolio.js";
import { useLocation } from "react-router-dom";

function SeoHeader({
  title,
  description,
  ogImage,
  ogType = "website",
  keywords,
  canonical,
}) {
  const location = useLocation();
  const baseUrl = "https://www.pouyasadri.com";

  // Generate canonical URL based on current route
  const canonicalUrl = canonical || `${baseUrl}${location.pathname}`;

  // Use provided values or fallback to defaults
  const pageTitle = title || seo.title;
  const pageDescription = description || seo.description;
  const pageImage = ogImage || seo?.og?.image;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:site_name" content={seo?.og?.siteName} />
      <meta property="og:locale" content={seo?.og?.locale} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={seo?.twitter?.card} />
      <meta name="twitter:site" content={seo?.twitter?.site} />
      <meta name="twitter:creator" content={seo?.twitter?.creator} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={seo?.twitter?.imageAlt} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Pouya Sadri" />
    </Helmet>
  );
}

export default SeoHeader;
