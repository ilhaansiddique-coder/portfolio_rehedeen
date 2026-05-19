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
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // init on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-[0_2px_16px_0_rgb(0_0_0/0.10)] border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div
              className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center shadow-md transition-all",
                scrolled
                  ? "bg-brand-700 shadow-brand-700/20 group-hover:shadow-brand-700/40"
                  : "bg-white/20 border border-white/30 group-hover:bg-white/30"
              )}
            >
              <Package className="w-4 h-4 text-white" />
            </div>
            <span
              className={cn(
                "text-lg font-bold tracking-tight transition-colors",
                scrolled ? "text-gray-900" : "text-white"
              )}
            >
              RAHE
              <span
                className={cn(
                  "transition-colors",
                  scrolled ? "text-brand-700" : "text-accent-400"
                )}
              >
                DEEN
              </span>
              <span className={cn("text-xs align-super ml-0.5 transition-colors", scrolled ? "text-brand-500" : "text-accent-300")}>™</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {(nav.main as NavItem[]).map((item) => (
              <div key={item.href} className="relative">
                {item.children ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150",
                      scrolled
                        ? activeDropdown === item.label
                          ? "text-brand-700 bg-brand-50"
                          : "text-gray-700 hover:text-brand-700 hover:bg-gray-100"
                        : activeDropdown === item.label
                          ? "text-white bg-white/15"
                          : "text-white/85 hover:text-white hover:bg-white/12"
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
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150",
                      scrolled
                        ? "text-gray-700 hover:text-brand-700 hover:bg-gray-100"
                        : "text-white/85 hover:text-white hover:bg-white/12"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown — always white bg regardless of scroll state */}
                {item.children && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_8px_32px_-8px_rgb(0_0_0/0.18)] border border-gray-100 py-2 z-10"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex flex-col px-4 py-3 hover:bg-brand-50 rounded-xl mx-1 transition-colors group/child"
                      >
                        <span className="text-sm font-medium text-gray-900 group-hover/child:text-brand-700">
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
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/apply"
              className={cn(
                "hidden lg:inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-150 shadow-md",
                scrolled
                  ? "bg-brand-700 hover:bg-brand-800 text-white shadow-brand-700/25 hover:shadow-brand-700/40"
                  : "bg-accent-500 hover:bg-accent-600 text-white shadow-accent-500/30 hover:shadow-accent-500/50"
              )}
            >
              Become a Partner
            </Link>

            <button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/15"
              )}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — always solid white */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-[0_8px_32px_-8px_rgb(0_0_0/0.12)]">
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
                  <div className="ml-4 mt-1 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2.5 text-sm text-gray-500 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 pb-1 border-t border-gray-100 mt-2">
              <Link
                href="/apply"
                className="flex items-center justify-center w-full px-4 py-3 bg-accent-500 hover:bg-accent-400 text-white text-sm font-semibold rounded-xl transition-colors"
                onClick={() => setOpen(false)}
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
