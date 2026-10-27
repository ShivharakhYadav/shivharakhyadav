import Link from 'next/link';
import Container from '@/components/ui/Container';
import { profile } from '@/data/profile';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Writing', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer>
      <Container className="flex flex-col gap-4 pb-6 pt-10 text-[13px] lg:pb-10 text-muted lg:flex-row lg:items-center lg:justify-between">
        {/* centred while the footer is stacked (phones and tablets) */}
        <span className="text-center lg:text-left">
          © {new Date().getFullYear()} {profile.name}
        </span>
        {/* links first on phones and tablets; one row with © from lg */}
        <nav aria-label="Footer" className="order-first lg:order-none">
          <ul className="flex flex-wrap gap-x-5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block py-1.5 transition hover:text-ink"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
