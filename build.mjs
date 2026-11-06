import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import * as home from "./src/pages/home.mjs";
import * as story from "./src/pages/story.mjs";
import * as expertise from "./src/pages/expertise.mjs";
import * as developments from "./src/pages/developments.mjs";
import * as contact from "./src/pages/contact.mjs";
import { site } from "./src/site.mjs";

const root = dirname(fileURLToPath(import.meta.url));

const pages = [
  { out: "index.html", render: home.render },
  { out: "story/index.html", render: story.render },
  { out: "expertise/index.html", render: expertise.render },
  { out: "developments/index.html", render: developments.render },
  { out: "contact/index.html", render: contact.render },
];

const today = new Date().toISOString().slice(0, 10);

function sitemap() {
  const urls = ["/", "/story/", "/expertise/", "/developments/", "/contact/"]
    .map(
      (path, i) => `  <url>
    <loc>${new URL(path, site.domain).toString()}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${i === 0 ? "monthly" : "yearly"}</changefreq>
    <priority>${i === 0 ? "1.0" : "0.8"}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function robots() {
  return `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", site.domain).toString()}
`;
}

// Concatenate the stylesheet partials into one file.
const styleDir = join(root, "src/styles");
const styleFiles = (await readdir(styleDir)).filter((file) => file.endsWith(".css")).sort();
const css = (
  await Promise.all(styleFiles.map((file) => readFile(join(styleDir, file), "utf8")))
).join("\n");
await mkdir(join(root, "assets/css"), { recursive: true });
await writeFile(join(root, "assets/css/site.css"), css, "utf8");
console.log(`  built  assets/css/site.css    ${(Buffer.byteLength(css) / 1024).toFixed(1)} kB`);

let total = 0;
for (const page of pages) {
  const html = page.render();
  const target = join(root, page.out);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html, "utf8");
  total += Buffer.byteLength(html);
  console.log(`  built  ${page.out.padEnd(24)} ${(Buffer.byteLength(html) / 1024).toFixed(1)} kB`);
}

await writeFile(join(root, "sitemap.xml"), sitemap(), "utf8");
await writeFile(join(root, "robots.txt"), robots(), "utf8");

console.log(`\n  ${pages.length} pages · ${(total / 1024).toFixed(1)} kB HTML`);
console.log("  sitemap.xml · robots.txt");
console.log("\n  Done. Run `node serve.mjs` to preview.\n");
