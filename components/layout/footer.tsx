import Link from "next/link";
import { Package, Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import site from "@/content/data/site.json";

const links = {
  Capabilities: [
    { label: "Cut & Sew", href: "/capabilities/cut-and-sew" },
    { label: "Private Label / OEM", href: "/capabilities/private-label-oem" },
    { label: "Embroidery", href: "/capabilities/embroidery" },
    { label: "Printing", href: "/capabilities/printing" },
    { label: "Finishing", href: "/capabilities/finishing" },
  ],
  Products: [
    { label: "Boys", href: "/products/boys" },
    { label: "Girls", href: "/products/girls" },
    { label: "Infants (0–12m)", href: "/products/infants" },
    { label: "Toddlers (1–3y)", href: "/products/toddlers" },
  ],
  Company: [
    { label: "Process", href: "/process" },
    { label: "Factory", href: "/factory" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Compliance", href: "/compliance" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 border-b border-white/10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-brand-700 flex items-center justify-center">
                <Package className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Rahe<span className="text-accent-400">Deen</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              {site.description}
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-accent-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                {site.email}
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
              {site.social.linkedin && (
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-700 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-700 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
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

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} RaheDeen Garments Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
