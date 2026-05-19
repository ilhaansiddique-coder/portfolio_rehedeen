import type { CollectionConfig } from "payload";

export const RFQSubmissions: CollectionConfig = {
  slug: "rfq-submissions",
  admin: {
    useAsTitle: "companyName",
    defaultColumns: ["companyName", "email", "productCategory", "status", "createdAt"],
    group: "Leads",
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Contact Info",
          fields: [
            { name: "companyName", type: "text", required: true, label: "Company Name" },
            { name: "contactName", type: "text", required: true, label: "Contact Name" },
            { name: "email", type: "email", required: true },
            { name: "phone", type: "text" },
            { name: "country", type: "text", required: true },
            { name: "website", type: "text" },
          ],
        },
        {
          label: "Product Details",
          fields: [
            {
              name: "productCategory",
              type: "select",
              required: true,
              label: "Product Category",
              options: [
                { label: "Boys", value: "boys" },
                { label: "Girls", value: "girls" },
                { label: "Infants (0-12m)", value: "infants" },
                { label: "Toddlers (1-3y)", value: "toddlers" },
                { label: "Mixed / Full Range", value: "mixed" },
              ],
            },
            {
              name: "serviceType",
              type: "select",
              required: true,
              label: "Service Type",
              options: [
                { label: "Private Label / OEM", value: "private-label" },
                { label: "Cut & Sew", value: "cut-sew" },
                { label: "Full Package (Design to Delivery)", value: "full-package" },
                { label: "Embroidery / Printing", value: "embellishment" },
              ],
            },
            {
              name: "estimatedMOQ",
              type: "select",
              label: "Estimated MOQ",
              options: [
                { label: "Under 300 pcs", value: "under-300" },
                { label: "300–1,000 pcs", value: "300-1000" },
                { label: "1,000–5,000 pcs", value: "1000-5000" },
                { label: "5,000+ pcs", value: "5000-plus" },
              ],
            },
            { name: "targetDelivery", type: "text", label: "Target Delivery Date" },
            { name: "fabricPreference", type: "text", label: "Fabric Preference" },
            {
              name: "message",
              type: "textarea",
              label: "Project Details",
              admin: { rows: 5 },
            },
          ],
        },
        {
          label: "Status",
          fields: [
            {
              name: "status",
              type: "select",
              defaultValue: "new",
              options: [
                { label: "New", value: "new" },
                { label: "Contacted", value: "contacted" },
                { label: "Quoted", value: "quoted" },
                { label: "Won", value: "won" },
                { label: "Lost", value: "lost" },
              ],
            },
            { name: "internalNotes", type: "textarea", label: "Internal Notes" },
          ],
        },
      ],
    },
  ],
  timestamps: true,
};
