const sm = require("sitemap");
const fs = require("fs");

const sitemap = sm.createSitemap({
  hostname: "https://samarthkashyap.me",
  cacheTime: 600000, // 600 sec - cache purge period
  urls: [
    { url: "/", changefreq: "monthly", priority: 1.0 },
    // Add other URLs if any
  ],
});

fs.writeFileSync("./public/sitemap.xml", sitemap.toString());
