"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import nav from "@/content/data/nav.json";

type NavChild = { label: string; href: string; description?: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_0_rgb(0_0_0/0.08)] border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-brand-700 flex items-center justify-center shadow-brand/20 shadow-md group-hover:shadow-brand/40 transition-shadow">
              <Package className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              Rahe<span className="text-brand-700">Deen</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {(nav.main as NavItem[]).map((item) => (
              <div key={item.href} className="relative">
                {item.children ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      activeDropdown === item.label
                        ? "text-brand-700 bg-brand-50"
                        : "text-gray-700 hover:text-brand-700 hover:bg-gray-50"
                    )}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform",
                        activeDropdown === item.label ? "rotate-180" : ""
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-elevated border border-gray-100 py-2 z-10"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex flex-col px-4 py-3 hover:bg-brand-50 rounded-xl mx-1 transition-colors group"
                      >
                        <span className="text-sm font-medium text-gray-900 group-hover:text-brand-700">
                          {child.label}
                        </span>
                        {child.description && (
                          <span className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact/rfq"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold rounded-xl transition-colors shadow-brand/30 shadow-md hover:shadow-brand/50"
            >
              Request a Quote
            </Link>

            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-elevated">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {(nav.main as NavItem[]).map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-800 hover:text-brand-700 hover:bg-brand-50 rounded-xl transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2.5 text-sm text-gray-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 pb-1">
              <Link
                href="/contact/rfq"
                className="flex items-center justify-center w-full px-4 py-3 bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold rounded-xl transition-colors"
                onClick={() => setOpen(false)}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
