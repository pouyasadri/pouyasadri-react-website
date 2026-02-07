import React from "react";
import { Helmet } from "react-helmet";

// Person Schema - Professional Developer Profile
export const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Seyedpouya SadriFard",
    alternateName: "Pouya Sadri",
    url: "https://www.pouyasadri.com",
    image: "https://www.pouyasadri.com/icons/android-chrome-512x512.png",
    jobTitle: "Full Stack Web Developer & SEO Expert",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Strasbourg",
      addressRegion: "Grand Est",
      addressCountry: "FR",
    },
    email: "info@pouyasadri.com",
    telephone: "+33744140840",
    knowsLanguage: [
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
      },
      {
        "@type": "Language",
        name: "French",
        alternateName: "fr",
      },
      {
        "@type": "Language",
        name: "Persian",
        alternateName: "fa",
      },
      {
        "@type": "Language",
        name: "Spanish",
        alternateName: "es",
      },
    ],
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "Mobile App Development",
      "SEO",
      "JavaScript",
      "React",
      "PHP",
      "Laravel",
      "Vue.js",
      "Node.js",
      "MySQL",
      "AWS",
      "Software Engineering",
    ],
    sameAs: [
      "https://github.com/pouyasadri",
      "https://www.youtube.com/channel/UCrfihekLrBk9k1cdQjgXGnQ",
      "https://instagram.com/pouyasadri_dev",
      "https://wa.me/+33744140840",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Strasbourg",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// LocalBusiness Schema - For local SEO in Strasbourg
export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.pouyasadri.com/#localbusiness",
    name: "Pouya Sadri - Web Development & SEO Services",
    image: "https://www.pouyasadri.com/icons/android-chrome-512x512.png",
    description:
      "Professional web development, full stack development, mobile app development, and SEO services in Strasbourg, France. Custom software solutions and digital marketing strategies.",
    url: "https://www.pouyasadri.com",
    telephone: "+33744140840",
    email: "info@pouyasadri.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strasbourg",
      addressLocality: "Strasbourg",
      addressRegion: "Grand Est",
      postalCode: "67000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.5734",
      longitude: "7.7521",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Strasbourg",
      },
      {
        "@type": "AdministrativeArea",
        name: "Alsace",
      },
      {
        "@type": "AdministrativeArea",
        name: "Grand Est",
      },
      {
        "@type": "Country",
        name: "France",
      },
    ],
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://github.com/pouyasadri",
      "https://www.youtube.com/channel/UCrfihekLrBk9k1cdQjgXGnQ",
      "https://instagram.com/pouyasadri_dev",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development & SEO Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Services",
            description:
              "Search Engine Optimization services to improve website visibility and rankings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom website development using modern technologies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "iOS and Android mobile application development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Stack Development",
            description:
              "Complete web application development from frontend to backend",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Website Schema with SearchAction
export const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.pouyasadri.com/#website",
    url: "https://www.pouyasadri.com",
    name: "Pouya Sadri - Portfolio",
    description:
      "Professional portfolio of Pouya Sadri - Full Stack Web Developer, Mobile App Developer, and SEO Expert based in Strasbourg, France",
    publisher: {
      "@type": "Person",
      name: "Pouya Sadri",
    },
    inLanguage: ["en", "fr"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.pouyasadri.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// BreadcrumbList Schema - for navigation
export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Service Schema - for individual service pages
export const ServiceSchema = ({ service }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "Person",
      name: "Pouya Sadri",
      url: "https://www.pouyasadri.com",
    },
    areaServed: {
      "@type": "City",
      name: "Strasbourg",
    },
    description: service.description,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default {
  PersonSchema,
  LocalBusinessSchema,
  WebSiteSchema,
  BreadcrumbSchema,
  ServiceSchema,
};
