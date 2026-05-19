import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "authorName",
    defaultColumns: ["authorName", "company", "country", "featured"],
    group: "Marketing",
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    { name: "quote", type: "textarea", required: true },
    { name: "authorName", type: "text", required: true, label: "Author Name" },
    { name: "title", type: "text", label: "Job Title" },
    { name: "company", type: "text", required: true },
    { name: "country", type: "text" },
    { name: "rating", type: "number", min: 1, max: 5, defaultValue: 5 },
    { name: "featured", type: "checkbox", defaultValue: false },
  ],
  timestamps: true,
};
