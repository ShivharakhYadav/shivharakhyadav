import Link from "next/link";
import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";
import EmailText from "@/components/ui/EmailText";

/** Closing call to action; ends the home page and every inner page. */
export default function Contact({ id = "contact" }: { id?: string }) {
  return (
    <Container>
      <section
        id={id}
        aria-labelledby={`${id}-title`}
        className="flex flex-col items-center gap-6 rounded-[40px] bg-seaglass px-6 py-16 text-center sm:px-16 sm:py-20"
      >
        <h2
          id={`${id}-title`}
          className="max-w-[820px] font-display fs-section font-semibold leading-[1.15] tracking-[-0.05em]"
        >
          Let’s build something people{" "}
          <span className="coral-underline whitespace-nowrap">love to use</span>.
        </h2>
        <p className="text-lg text-muted">
          {profile.showAvailability
            ? "Open to full-time roles and selective freelance work. I reply within a day."
            : "Have a product to build or an idea to talk through? I reply within a day."}
        </p>
        <div className="flex max-w-full flex-wrap justify-center gap-3.5">
          <a
            href={`mailto:${profile.email}`}
            className="max-w-full rounded-full bg-teal px-6 py-4 text-[15px] font-medium text-white transition hover:bg-teal-hover sm:px-8 sm:text-[17px]"
          >
            <EmailText email={profile.email} />
          </a>
          <Link href="/contact" className="btn-secondary text-[17px]">
            Send a message →
          </Link>
        </div>
        <p className="inline-flex items-center gap-2 text-[15px] text-muted">
          <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
          Based in Pune, India
        </p>
        <ul className="flex gap-7 font-medium">
          {profile.socials
            .filter((s) => s.icon !== "email")
            .map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 transition hover:text-teal">
                  {s.label}
                </a>
              </li>
            ))}
          {profile.resumeUrl && (
            <li>
              <a href={profile.resumeUrl} className="inline-block py-1.5 transition hover:text-teal">
                Résumé
              </a>
            </li>
          )}
        </ul>
      </section>
    </Container>
  );
}
