import { defineConfig, defineCollection, s } from "velite";

const capabilities = defineCollection({
  name: "Capability",
  pattern: "capabilities/*.mdx",
  schema: s.object({
    title: s.string(),
    slug: s.slug("capabilities"),
    description: s.string(),
    icon: s.string().optional(),
    heroImage: s.string().optional(),
    order: s.number().default(0),
    tags: s.array(s.string()).default([]),
    body: s.mdx(),
  }),
});

const products = defineCollection({
  name: "Product",
  pattern: "products/*.mdx",
  schema: s.object({
    title: s.string(),
    slug: s.slug("products"),
    category: s.string(),
    description: s.string(),
    heroImage: s.string().optional(),
    ageRange: s.string().optional(),
    tags: s.array(s.string()).default([]),
    body: s.mdx(),
  }),
});

const caseStudies = defineCollection({
  name: "CaseStudy",
  pattern: "case-studies/*.mdx",
  schema: s.object({
    title: s.string(),
    slug: s.slug("case-studies"),
    client: s.string(),
    market: s.string(),
    season: s.string().optional(),
    description: s.string(),
    heroImage: s.string().optional(),
    tags: s.array(s.string()).default([]),
    results: s.array(s.string()).default([]),
    publishedAt: s.isodate(),
    body: s.mdx(),
  }),
});

const certifications = defineCollection({
  name: "Certification",
  pattern: "certifications/*.mdx",
  schema: s.object({
    title: s.string(),
    slug: s.slug("certifications"),
    issuer: s.string(),
    description: s.string(),
    icon: s.string().optional(),
    validUntil: s.string().optional(),
    body: s.mdx(),
  }),
});

const insights = defineCollection({
  name: "Insight",
  pattern: "insights/*.mdx",
  schema: s.object({
    title: s.string(),
    slug: s.slug("insights"),
    description: s.string(),
    topic: s.string(),
    readingTime: s.number().default(5),
    publishedAt: s.isodate(),
    tags: s.array(s.string()).default([]),
    body: s.mdx(),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:8].[ext]",
    clean: true,
  },
  collections: { capabilities, products, caseStudies, certifications, insights },
});
