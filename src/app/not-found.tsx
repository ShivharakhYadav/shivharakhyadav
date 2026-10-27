import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
  // don't inherit the home canonical from the root layout
  alternates: { canonical: null },
};

const links = [
  {
    href: '/projects',
    label: 'Case studies',
    text: "Products I've built and owned",
  },
  { href: '/about', label: 'About', text: 'Who I am and how I work' },
  {
    href: '/blog',
    label: 'Writing',
    text: 'Notes from building production apps',
  },
];

export default function NotFound() {
  return (
    <main>
      <Container>
        <div className="max-w-[720px] space-y-6 pb-24 pt-16 sm:pt-24">
          <p className="eyebrow text-coral-ink">404</p>
          <h1 className="font-display fs-page font-semibold leading-[1.1] tracking-[-0.04em]">
            This page <span className="coral-underline">wandered off</span>.
          </h1>
          <p className="text-[17px] leading-relaxed text-muted sm:text-[19px]">
            The link may be old or mistyped. Here's where you probably wanted to
            go:
          </p>
          <ul className="grid gap-4 pt-2 sm:grid-cols-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="card lift group block h-full rounded-3xl p-6"
                >
                  <span className="flex items-center justify-between font-display text-lg font-semibold tracking-[-0.02em]">
                    {l.label}
                    <span
                      aria-hidden="true"
                      className="text-teal transition group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {l.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/" className="btn-primary inline-flex">
            ← Back home
          </Link>
        </div>
      </Container>
    </main>
  );
}
