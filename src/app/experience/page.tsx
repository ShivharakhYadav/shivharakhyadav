import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import PageHeader from '@/components/ui/PageHeader'
import JobCard from '@/components/ui/JobCard'
import { ProjectRowCard } from '@/components/ui/ProjectCard'
import Contact from '@/components/sections/Contact'
import JsonLd from '@/components/JsonLd'
import { person, websiteId } from '@/configs/schema'
import {
  experience,
  careerHighlights,
  awards,
  domains,
} from '@/data/experience'
import { projects, featuredProjects, getProjectBySlug } from '@/data/projects'
import { profile } from '@/data/profile'
import { siteUrl, ogImages } from '@/configs/metaTags'

const description =
  'Senior Software Engineer, 4+ years at iProgrammer, ViitorCloud and iFour building multi-tenant SaaS, commerce and real-time platforms with React and Node.js.'

export const metadata: Metadata = {
  title: 'Experience',
  description,
  alternates: { canonical: '/experience' },
  openGraph: {
    title: 'Experience - Shivharakh Yadav, Full-Stack Developer',
    description,
    url: `${siteUrl}/experience`,
    type: 'profile',
    images: ogImages,
  },
  // set explicitly: otherwise X/Twitter cards inherit the home page text
  twitter: {
    title: 'Experience - Shivharakh Yadav, Full-Stack Developer',
    description,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${siteUrl}/experience`,
  dateModified: profile.updated,
  isPartOf: { '@id': websiteId },
  mainEntity: person,
}

// featured projects first, then the rest
const delivered = [
  ...featuredProjects,
  ...projects.filter((p) => !featuredProjects.includes(p)),
]

export default function ExperiencePage() {
  return (
    <main>
      <Container>
        <PageHeader
          eyebrow='Experience'
          title={
            <>
              4+ years of shipping{' '}
              <span className='coral-underline'>production</span> software.
            </>
          }
        >
          Full-stack work on multi-tenant SaaS, commerce, health and real-time
          platforms, often as the developer talking directly to clients in
          Australia &amp; the US.
        </PageHeader>

        <dl className='grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4'>
          {careerHighlights.map((h, i) => (
            <div
              key={h.label}
              className={`flex flex-col-reverse justify-end rounded-3xl p-5 sm:p-6 ${i === 0 ? 'bg-seaglass' : 'card'}`}
            >
              <dt className='mt-1 text-sm leading-snug text-muted'>
                {h.label}
              </dt>
              <dd className='font-display text-[30px] font-semibold leading-none tracking-[-0.04em] text-teal sm:text-[36px]'>
                {h.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Industries: each domain links to its case studies */}
        <section
          aria-labelledby='domains'
          className='grid grid-cols-1 gap-8 pt-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12'
        >
          <div className='space-y-3'>
            <h2
              id='domains'
              className='font-display text-[28px] font-semibold tracking-[-0.03em] sm:text-[32px]'
            >
              Industries
            </h2>
            <p className='text-muted'>Domains I've built products for.</p>
          </div>
          <ul className='grid gap-3 sm:grid-cols-2'>
            {domains.map((d) => {
              const domainProjects = d.projects
                .map(getProjectBySlug)
                .filter((p): p is NonNullable<typeof p> => Boolean(p))
              return (
                <li key={d.name} className='card rounded-3xl p-5 sm:p-6'>
                  <h3 className='font-display text-lg font-semibold tracking-[-0.02em]'>
                    {d.name}
                  </h3>
                  <p className='mt-2 flex flex-wrap gap-x-4 gap-y-1'>
                    {domainProjects.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className='text-link inline-block py-0.5 text-sm'
                      >
                        {p.title.split(' - ')[0]} →
                      </Link>
                    ))}
                  </p>
                </li>
              )
            })}
          </ul>
        </section>

        {/* Timeline */}
        <section
          aria-labelledby='roles'
          className='grid grid-cols-1 gap-8 py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12'
        >
          <div className='space-y-3'>
            <h2
              id='roles'
              className='font-display text-[28px] font-semibold tracking-[-0.03em] sm:text-[32px]'
            >
              Roles
            </h2>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className='text-link inline-block'>
                Download resume (PDF) →
              </a>
            )}
          </div>
          <ol className='relative space-y-6 border-l-2 border-dashed border-coral/40 pl-4 sm:pl-10'>
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className='relative'>
                <span
                  aria-hidden='true'
                  className='absolute -left-[25px] top-7 h-3.5 w-3.5 rounded-full border-[3px] border-bg bg-coral sm:-left-[49px]'
                />
                <div className='card rounded-3xl p-4 sm:p-8'>
                  <JobCard job={job}>
                    {job.highlights && job.highlights.length > 0 && (
                      <ul className='space-y-2 pt-1'>
                        {job.highlights.map((h) => (
                          <li key={h} className='flex gap-3 leading-relaxed'>
                            <span
                              aria-hidden='true'
                              className='mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-coral'
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </JobCard>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Awards */}
        {awards.length > 0 && (
          <section
            aria-labelledby='awards'
            className='grid grid-cols-1 gap-8 border-t border-line py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12'
          >
            <h2
              id='awards'
              className='font-display text-[28px] font-semibold tracking-[-0.03em] sm:text-[32px]'
            >
              Awards &amp; recognition
            </h2>
            <ul className='grid gap-4 sm:grid-cols-2'>
              {awards.map((a) => (
                <li
                  key={`${a.title}-${a.issuer}`}
                  className='flex gap-4 rounded-3xl bg-linen p-6'
                >
                  <span
                    className='grid h-11 w-11 shrink-0 place-items-center rounded-full bg-card text-coral-ink'
                    aria-hidden='true'
                  >
                    <svg
                      viewBox='0 0 24 24'
                      className='h-5 w-5'
                      fill='currentColor'
                    >
                      <path d='M12 2l2.9 6.26L22 9.27l-5.2 4.9L18.2 22 12 18.27 5.8 22l1.4-7.83L2 9.27l7.1-1.01L12 2z' />
                    </svg>
                  </span>
                  <span>
                    <span className='block font-display text-lg font-semibold tracking-[-0.02em]'>
                      {a.title}
                    </span>
                    {(a.issuer || a.year) && (
                      <span className='block text-sm text-muted'>
                        {[a.issuer, a.year].filter(Boolean).join(' · ')}
                      </span>
                    )}
                    {a.note && (
                      <span className='mt-1 block text-sm leading-relaxed text-muted'>
                        {a.note}
                      </span>
                    )}
                    {a.links && (
                      <span className='mt-2 flex flex-wrap gap-x-4 gap-y-1'>
                        {a.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-link inline-block py-0.5 text-sm'
                          >
                            {l.label} ↗
                          </a>
                        ))}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Products delivered */}
        <section
          aria-labelledby='delivered'
          className='grid grid-cols-1 gap-8 border-t border-line py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12'
        >
          <div className='space-y-3'>
            <h2
              id='delivered'
              className='font-display text-[28px] font-semibold tracking-[-0.03em] sm:text-[32px]'
            >
              Products delivered
            </h2>
            <p className='text-muted'>Each one links to a case study.</p>
          </div>
          <div className='space-y-4'>
            {delivered.map((p) => (
              <ProjectRowCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        <p className='pb-20 text-lg text-muted'>
          Want the person behind the work?{' '}
          <Link href='/about' className='text-link'>
            Read more about me →
          </Link>
        </p>
      </Container>
      <Contact />
      <JsonLd data={jsonLd} />
    </main>
  )
}
