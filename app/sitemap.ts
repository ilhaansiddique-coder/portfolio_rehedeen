import type { MetadataRoute } from "next";

const BASE = "https://rahedeen.com";

const staticRoutes = [
  { url: BASE, priority: 1.0 },
  { url: `${BASE}/capabilities`, priority: 0.9 },
  { url: `${BASE}/capabilities/cut-and-sew`, priority: 0.8 },
  { url: `${BASE}/capabilities/private-label-oem`, priority: 0.8 },
  { url: `${BASE}/capabilities/embroidery`, priority: 0.8 },
  { url: `${BASE}/capabilities/printing`, priority: 0.8 },
  { url: `${BASE}/capabilities/finishing`, priority: 0.8 },
  { url: `${BASE}/products`, priority: 0.9 },
  { url: `${BASE}/products/boys`, priority: 0.8 },
  { url: `${BASE}/products/girls`, priority: 0.8 },
  { url: `${BASE}/products/infants`, priority: 0.8 },
  { url: `${BASE}/products/toddlers`, priority: 0.8 },
  { url: `${BASE}/case-studies`, priority: 0.85 },
  { url: `${BASE}/case-studies/bd-retailer-aw26`, priority: 0.75 },
  { url: `${BASE}/case-studies/southeast-asian-organic-baseline-collection`, priority: 0.75 },
  { url: `${BASE}/process`, priority: 0.7 },
  { url: `${BASE}/factory`, priority: 0.7 },
  { url: `${BASE}/sustainability`, priority: 0.7 },
  { url: `${BASE}/compliance`, priority: 0.8 },
  { url: `${BASE}/compliance/cpsia`, priority: 0.75 },
  { url: `${BASE}/compliance/oeko-tex`, priority: 0.75 },
  { url: `${BASE}/compliance/gots`, priority: 0.75 },
  { url: `${BASE}/compliance/reach`, priority: 0.75 },
  { url: `${BASE}/insights`, priority: 0.8 },
  { url: `${BASE}/insights/moq-explained`, priority: 0.7 },
  { url: `${BASE}/insights/tech-pack-guide`, priority: 0.7 },
  { url: `${BASE}/insights/cpsia-compliance-101`, priority: 0.7 },
  { url: `${BASE}/contact`, priority: 0.9 },
  { url: `${BASE}/contact/rfq`, priority: 1.0 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(({ url, priority }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
