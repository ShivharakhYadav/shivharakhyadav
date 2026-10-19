"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Writing", href: "/blog" },
];
// /contact is reached through the "Let's talk" button, not a separate link

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close the mobile menu after navigating
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (l: (typeof links)[number]) => pathname.startsWith(l.href);
  const onContact = pathname.startsWith("/contact");

  return (
    <header className="sticky top-4 z-50 flex justify-center px-5 pt-6">
      <nav
        aria-label="Main"
        className="relative flex items-center gap-1 rounded-full border border-line bg-card/90 p-1.5 pl-2 shadow-soft backdrop-blur sm:gap-6 sm:pl-2.5"
      >
        <Link
          href="/"
          aria-label="Shivharakh Yadav — home"
          title="Home"
          className="grid h-9 w-9 place-items-center rounded-full bg-teal font-display text-[13px] font-semibold text-white ring-coral/50 ring-offset-2 ring-offset-card transition hover:ring-2"
        >
          SY
        </Link>

        <ul className="hidden items-center gap-6 text-[15px] font-medium text-muted sm:flex">
          {links.map((l) => {
            const active = isActive(l);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative transition hover:text-ink after:absolute after:-bottom-1.5 after:left-1/2 after:h-[3px] after:w-4 after:-translate-x-1/2 after:rounded after:bg-coral after:transition after:duration-300 ${
                    active ? "text-ink after:opacity-100" : "after:opacity-0"
                  }`}
                >
                  {l.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="ml-1 rounded-full px-4 py-2.5 text-[15px] font-medium text-ink transition hover:bg-linen sm:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>

        <Link
          href="/contact"
          aria-current={onContact ? "page" : undefined}
          className={`ml-1 rounded-full px-5 py-2.5 text-[15px] font-medium text-bg transition hover:bg-teal sm:ml-2 ${
            onContact ? "bg-teal" : "bg-ink"
          }`}
        >
          Let’s talk
        </Link>

        {open && (
          <ul
            id="mobile-menu"
            className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-3xl border border-line bg-card p-2 shadow-soft sm:hidden"
          >
            {/* phones only show the monogram, so the menu spells out Home */}
            {[{ name: "Home", href: "/" }, ...links].map((l) => {
              const active = l.href === "/" ? pathname === "/" : isActive(l);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium transition hover:bg-linen ${
                      active ? "text-ink" : "text-muted"
                    }`}
                  >
                    {l.name}
                    {active && <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
