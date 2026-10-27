'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import ThemeToggle from '@/components/ui/ThemeToggle';

// year of the earliest role, e.g. "2022", for the mobile menu's Experience line
const since = experience[experience.length - 1]?.period.match(/\d{4}/)?.[0];

const links = [
  { name: 'Work', href: '/projects', desc: 'Selected case studies' },
  { name: 'About', href: '/about', desc: 'Background & approach' },
  {
    name: 'Experience',
    href: '/experience',
    desc: since ? `Roles, ${since} - now` : 'Roles & industries',
  },
  { name: 'Writing', href: '/blog', desc: 'Notes on engineering' },
];
// /contact is reached through the "Let's talk" button, not a separate link

// the phone menu lists Home first; on desktop the SY monogram does that job
const mobileLinks = [{ name: 'Home', href: '/', desc: 'Overview' }, ...links];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (l: (typeof links)[number]) =>
    l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
  const onContact = pathname.startsWith('/contact');
  const onHome = pathname === '/';

  // phones: close to the top edge (below the notch); tablet and up: floating lower
  return (
    <header className="sticky top-[max(0.5rem,env(safe-area-inset-top))] z-50 flex justify-center px-5 pt-3 sm:top-4 sm:pt-6">
      <nav
        aria-label="Main"
        className="relative flex w-full items-center justify-between gap-1 rounded-full border border-line bg-card/90 p-1.5 shadow-soft backdrop-blur sm:w-auto sm:justify-start"
      >
        {/* phones also show the full name beside the monogram */}
        <Link
          href="/"
          aria-label={`${profile.name} - home`}
          aria-current={onHome ? 'page' : undefined}
          title="Home"
          className="group flex items-center gap-2.5 rounded-full"
        >
          {/* a solid coral ring marks the home page; other pages show a lighter one on hover */}
          <span
            className={`grid h-9 w-9 place-items-center rounded-full bg-teal font-display text-[13px] font-semibold text-on-teal ring-offset-2 ring-offset-card transition ${
              onHome ? 'ring-2 ring-coral' : 'ring-coral/50 group-hover:ring-2'
            }`}
          >
            SY
          </span>
          <span className="font-display text-[15px] font-medium text-ink sm:hidden">
            {profile.name}
          </span>
        </Link>

        <ul className="mx-1 hidden items-center gap-0.5 text-[15px] font-medium text-muted sm:flex md:gap-1">
          {links.map((l) => {
            const active = isActive(l);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={`block whitespace-nowrap rounded-full px-3 py-2 transition hover:bg-linen/60 hover:text-ink md:px-4 ${
                    active ? 'bg-linen text-ink' : ''
                  }`}
                >
                  {l.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* theme toggle on every size; on phones it sits beside the menu button */}
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileMenu key={pathname} pathname={pathname} />
        </div>

        <Link
          href="/contact"
          aria-current={onContact ? 'page' : undefined}
          // cta tokens: an ink pill in light, an outlined dark pill in dark (no bright surface);
          // an inset ring, not a border, so the pill keeps its size
          className={`ml-1 hidden items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-[15px] font-medium ring-1 ring-inset transition hover:bg-teal hover:text-on-teal hover:ring-teal sm:inline-flex ${
            onContact
              ? 'bg-teal text-on-teal ring-teal'
              : 'bg-cta text-cta-ink ring-cta-line'
          }`}
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-mint"
            aria-hidden="true"
          />
          Let's talk
        </Link>
      </nav>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const isActive = (l: (typeof links)[number]) =>
    l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
  const onContact = pathname.startsWith('/contact');

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {/* phones: a round menu button; the full menu (with Let's talk) opens below */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="grid h-10 w-10 place-items-center rounded-full bg-linen text-ink transition hover:bg-linen-hover sm:hidden"
      >
        {open ? (
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M5 9h14M5 15h14" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-[calc(100%+10px)] rounded-[28px] border border-line bg-card p-2 shadow-soft sm:hidden"
        >
          <ul>
            {mobileLinks.map((l, i) => {
              const active = isActive(l);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`grid grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-linen/60 ${
                      active ? 'bg-linen' : ''
                    }`}
                  >
                    <span
                      className="font-mono text-xs text-muted"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="block font-display text-[20px] font-semibold leading-tight tracking-[-0.02em] text-ink">
                        {l.name}
                      </span>
                      <span className="block text-[13px] text-muted">
                        {l.desc}
                      </span>
                    </span>
                    {active ? (
                      <span
                        className="h-2 w-2 rounded-full bg-teal"
                        aria-hidden="true"
                      />
                    ) : (
                      <span />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mx-2 mt-1 border-t border-line pt-3">
            {profile.showAvailability && (
              <p className="mb-3 flex items-center gap-2 text-[13px] text-muted">
                <span
                  className="h-2 w-2 rounded-full bg-mint"
                  aria-hidden="true"
                />
                Available for new projects
              </p>
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              aria-current={onContact ? 'page' : undefined}
              className="mb-1 flex w-full items-center justify-center rounded-full bg-cta px-6 py-3.5 text-[15px] font-semibold text-cta-ink ring-1 ring-inset ring-cta-line transition hover:bg-teal hover:text-on-teal hover:ring-teal"
            >
              Let's talk →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
