import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { RFQSubmissions } from "@/collections/RFQSubmissions";
import { Testimonials } from "@/collections/Testimonials";
import { Users } from "@/collections/Users";

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "— RaheDeen Admin",
    },
  },
  collections: [Users, RFQSubmissions, Testimonials],
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: "payload-types.ts",
  },
});
