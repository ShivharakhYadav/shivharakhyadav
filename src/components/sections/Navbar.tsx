"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import Container from "@/components/ui/Container";

type NavItem = { name: string; href: string; type: "section" | "route" };

const navigation: NavItem[] = [
  { name: "About", href: "/#about", type: "section" },
  { name: "What I Do", href: "/#skills", type: "section" },
  { name: "Projects", href: "/projects", type: "route" },
  { name: "Blog", href: "/blog", type: "route" },
  { name: "Contact", href: "/#contact", type: "section" },
];

const sectionIds = ["about", "skills", "projects", "writing", "contact"];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Section highlighting only applies on the homepage where the sections exist.
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (item: NavItem) => {
    if (item.type === "route") return pathname.startsWith(item.href);
    // section link, e.g. "/#about"
    if (!isHome) return false;
    return activeSection === item.href.replace("/#", "");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "border-b border-transparent"
      }`}
    >
      <Container>
        <nav
          aria-label="Global"
          className="flex items-center justify-between py-4"
        >
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight"
          >
            SY<span className="text-accent">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item) ? "text-accent" : "text-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s talk
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-text lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <FaXmark className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="glass border-t border-border lg:hidden">
          <Container>
            <div className="flex flex-col gap-1 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-surface hover:text-accent ${
                    isActive(item) ? "text-accent" : "text-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
