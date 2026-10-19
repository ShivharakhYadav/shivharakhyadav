import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { person, websiteId } from "@/configs/schema";
import { profile } from "@/data/profile";
import { siteUrl, ogImages } from "@/configs/metaTags";
import EmailText from "@/components/ui/EmailText";

const description =
  "Contact Shivharakh Yadav, a full-stack developer in Pune, India (React, Next.js, Node.js) who has worked directly with clients in Australia & the US.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Shivharakh Yadav — Full-Stack Developer",
    description,
    url: `${siteUrl}/contact`,
    type: "website",
    images: ogImages,
  },
};

// Answers use only facts stated elsewhere on the site.
const faqs = [
  // only asked while the availability pill is shown (profile.showAvailability)
  ...(profile.showAvailability
    ? [
        {
          q: "Are you available for full-time roles or freelance work?",
          a: "Both. I’m open to full-time full-stack and frontend roles, and to selective freelance projects.",
        },
      ]
    : []),
  {
    q: "Do you work with clients outside India?",
    a: "Yes. I’ve worked directly with clients in Australia and the US: joining requirement calls, running demos and turning feedback into shipped features. I’m based in Pune, India (IST, UTC+5:30).",
  },
  {
    q: "What technologies do you work with?",
    a: "React, Next.js and TypeScript on the frontend; Node.js, Express and NestJS on the backend; MongoDB, PostgreSQL and Redis for data; Jest and Playwright for testing; plus Docker, GitHub Actions, AWS and Vercel.",
  },
  {
    q: "Can you take a product from idea to production?",
    a: "Yes, that’s the work I enjoy most. I take end-to-end ownership: requirement discussions, architecture, frontend and backend development, CI/CD and production deploys.",
  },
  {
    q: "What kind of products have you built?",
    a: "A multi-tenant simulation SaaS used by 944+ people across 10 organizations, a two-sided motorcycle rental marketplace, a health and coaching platform with 329+ users, a real-time sports data platform on AWS, and a BOM approval workflow that made approvals ~30% more efficient.",
  },
  {
    q: "How quickly do you reply?",
    a: "Usually within a day.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      url: `${siteUrl}/contact`,
      name: "Contact Shivharakh Yadav",
      isPartOf: { "@id": websiteId },
      mainEntity: person,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ContactPage() {
  const socials = profile.socials.filter((s) => s.icon !== "email");

  return (
    <main>
      <Container>
        <div className="grid grid-cols-1 gap-12 pb-20 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16 lg:pt-20">
          <header className="space-y-6">
            <p className="eyebrow text-coral-ink">Contact</p>
            <h1 className="font-display fs-page font-semibold leading-[1.1] tracking-[-0.04em]">
              Let’s build something people{" "}
              <span className="coral-underline whitespace-nowrap">love to use</span>.
            </h1>
            <p className="text-[17px] leading-relaxed text-muted sm:text-[19px]">
              {profile.showAvailability
                ? "Hiring for a full-stack or frontend role, or have a product that needs building? Tell me about it. I reply within a day."
                : "Have a product that needs building, or want to talk through an idea? Tell me about it. I reply within a day."}
            </p>
            {profile.showAvailability && (
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
                {profile.availability}
              </span>
            )}

            <dl className="grid gap-4 pt-4 sm:grid-cols-2">
              <Info label="Email" wide>
                <a href={`mailto:${profile.email}`} className="text-link inline-block py-0.5">
                  <EmailText email={profile.email} />
                </a>
              </Info>
              <Info label="Based in">
                Pune, India · {profile.timezone}
              </Info>
              <Info label="Worked with">Clients in Australia &amp; the US</Info>
              <Info label="Elsewhere" wide>
                <span className="flex gap-5">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-link">
                      {s.label}
                    </a>
                  ))}
                </span>
              </Info>
            </dl>
          </header>

          <ContactForm />
        </div>

        <section aria-labelledby="faq" className="grid grid-cols-1 gap-8 border-t border-line py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <h2 id="faq" className="font-display text-[28px] font-semibold tracking-[-0.03em] sm:text-[32px]">
            Questions clients ask
          </h2>
          <div className="max-w-[820px] space-y-3">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="card group rounded-3xl p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium tracking-[-0.02em]">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-seaglass text-teal transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </Container>
      <JsonLd data={jsonLd} />
    </main>
  );
}

function Info({ label, wide = false, children }: { label: string; wide?: boolean; children: React.ReactNode }) {
  return (
    <div className={`rounded-2xl bg-linen p-5 ${wide ? "sm:col-span-2" : ""}`}>
      <dt className="eyebrow text-muted">{label}</dt>
      <dd className="mt-2 font-medium">{children}</dd>
    </div>
  );
}
