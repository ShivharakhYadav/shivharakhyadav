"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-bg/85 backdrop-blur transition-colors duration-200 ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <Container>
        <nav
          aria-label="Global"
          className="flex h-16 items-center justify-between gap-6"
        >
          <Link href="/" className="text-sm font-semibold text-text">
            {profile.name}
          </Link>
          <ul className="flex items-center gap-5 text-sm">
            {navigation.map((item) => {
              const active =
                !item.href.includes("#") && pathname.startsWith(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`transition-colors hover:text-text ${
                      active ? "text-text" : "text-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
