import Link from "next/link";
import { Package, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import site from "@/content/data/site.json";

const links = {
  "Friendship Store": [
    { label: "প্রোগ্রাম সম্পর্কে", href: "/friendship-store" },
    { label: "প্যাকেজ ও মূল্য", href: "/friendship-store#packages" },
    { label: "পার্টনার সুবিধা", href: "/friendship-store#benefits" },
    { label: "আবেদন করুন", href: "/apply" },
    { label: "স্টোর খুঁজুন", href: "/store-finder" },
    { label: "পার্টনার নির্দেশিকা", href: "/guidelines" },
  ],
  Products: [
    { label: "Baby Collection (0–12m)", href: "/products/baby" },
    { label: "Toddlers (1–3y)", href: "/products/toddlers" },
    { label: "Boys (4–12y)", href: "/products/boys" },
    { label: "Girls (4–12y)", href: "/products/girls" },
    { label: "Festival Collection", href: "/products/festival" },
  ],
  Company: [
    { label: "About RAHEDEEN™", href: "/about" },
    { label: "Manufacturing", href: "/capabilities" },
    { label: "Compliance", href: "/compliance" },
    { label: "Insights", href: "/insights" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 border-b border-white/10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-brand-700 flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                RAHE<span className="text-accent-400">DEEN</span><span className="text-xs align-super text-accent-300 ml-0.5">™</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-4">
              বাংলাদেশের বিশ্বস্ত কিডস ফ্যাশন ব্র্যান্ড। Friendship Store প্রোগ্রামে যোগ দিয়ে
              আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যান।
            </p>
            <p className="text-xs text-brand-400 mb-6 leading-relaxed">
              Premium kids garment manufacturer from Narayanganj, Bangladesh.
              Est. {site.founded} · {site.employees} workers · {site.annualCapacity}
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${site.whatsapp.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                WhatsApp: {site.whatsapp}
              </a>
              <a
                href={`mailto:${site.partnerEmail}`}
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-accent-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                {site.partnerEmail}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-accent-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                {site.phone}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  {site.address.street}, {site.address.city},{" "}
                  {site.address.country}
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-colors text-xs font-bold"
                  aria-label="Facebook"
                >
                  f
                </a>
              )}
              {site.social.instagram && (
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-600 flex items-center justify-center transition-colors text-xs font-bold"
                  aria-label="Instagram"
                >
                  ig
                </a>
              )}
              <a
                href={`https://wa.me/${site.whatsapp.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald-600 flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="WhatsApp"
              >
                wa
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-accent-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partnership CTA strip */}
        <div className="py-6 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white">RAHEDEEN™ Friendship Store</p>
              <p className="text-xs text-brand-400">Brand Supported Partnership — Not a Franchise · ৳৩০,০০০/বছর থেকে</p>
            </div>
            <Link
              href="/apply"
              className="shrink-0 px-5 py-2.5 bg-accent-500 hover:bg-accent-400 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-accent-500/20"
            >
              এখনই আবেদন করুন →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} RAHEDEEN™ Garments Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/guidelines" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Partner Guidelines
            </Link>
            <Link href="/faq" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              FAQ
            </Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
