import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import site from "@/content/data/site.json";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  variable: "--font-hind-siliguri",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahedeen.com"),
  title: {
    template: "%s — RAHEDEEN™",
    default: "RAHEDEEN™ — Grow Your Kids Fashion Business",
  },
  description: site.description,
  keywords: [
    "RAHEDEEN Friendship Store",
    "kids fashion Bangladesh",
    "কিডস ফ্যাশন পার্টনারশিপ",
    "kids garment manufacturer Bangladesh",
    "children apparel OEM",
    "CPSIA certified garment factory",
    "OEKO-TEX kids apparel",
    "GOTS organic cotton children",
    "knitwear manufacturer Bangladesh",
  ],
  openGraph: {
    type: "website",
    locale: "bn_BD",
    siteName: "RAHEDEEN™",
    title: "RAHEDEEN™ — Grow Your Kids Fashion Business",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "RAHEDEEN™ — Grow Your Kids Fashion Business",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3730a3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={`${bricolage.variable} ${hindSiliguri.variable}`}>
      <body className="antialiased bg-[#fafafa] text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
