const fs = require("fs");
const path = require("path");

// Define your routes based on Main.js
const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/home", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/portfolio", priority: "0.8", changefreq: "weekly" },
  { path: "/experience", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/FAQ", priority: "0.7", changefreq: "monthly" },
];

const baseUrl = "https://www.pouyasadri.com";
const today = new Date().toISOString().split("T")[0];

// Generate XML sitemap
const generateSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach((route) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  xml += "</urlset>";

  return xml;
};

// Write sitemap to public directory
const sitemap = generateSitemap();
const publicPath = path.join(__dirname, "public", "sitemap.xml");

fs.writeFileSync(publicPath, sitemap, "utf8");
console.log("✅ Sitemap generated successfully at:", publicPath);
console.log(`📍 Total URLs: ${routes.length}`);
console.log(`🌐 Base URL: ${baseUrl}`);
