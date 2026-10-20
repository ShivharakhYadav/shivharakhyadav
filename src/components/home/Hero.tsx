import Link from 'next/link'
import Container from '@/components/ui/Container'
import RotatingWords, {
  RotatingWordsStyle,
} from '@/components/home/RotatingWords'
import Portrait from '@/components/ui/Portrait'
import { profile, stats } from '@/data/profile'

export default function Hero() {
  return (
    <Container>
      <section className='grid grid-cols-1 items-center gap-12 pb-16 pt-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10 lg:gap-12 lg:pt-12'>
        {/* outside the text column: a <style> sibling would shift space-y margins */}
        <RotatingWordsStyle count={profile.heroWords.length} />
        <div className='max-w-[640px] space-y-7'>
          {profile.showAvailability && (
            <span className='inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium'>
              <span
                className='h-2 w-2 rounded-full bg-coral'
                aria-hidden='true'
              />
              {profile.availability}
            </span>
          )}

          <h1 className='font-display fs-display font-semibold leading-[1.1] tracking-[-0.04em]'>
            I turn ideas into
            <RotatingWords words={profile.heroWords} />
            people use{' '}
            <span className='coral-underline whitespace-nowrap'>every day</span>
            .
          </h1>

          <p className='max-w-[560px] text-[17px] leading-relaxed text-muted sm:text-[19px]'>
            I'm Shivharakh, a full-stack developer who helps product teams in
            Australia and the US turn ideas into{' '}
            <span className='font-medium text-ink'>reliable web apps</span>,
            with clear communication at every step.
          </p>

          {/* always side by side: a 2-column grid (short labels on phones) until lg */}
          <div className='grid grid-cols-2 gap-3 lg:flex lg:flex-wrap lg:gap-3.5'>
            <Link href='/contact' className={heroBtn('btn-primary')}>
              <span className='sm:hidden'>Let's talk →</span>
              <span className='hidden sm:inline'>Start a project →</span>
            </Link>
            <Link href='#work' className={heroBtn('btn-secondary')}>
              <span className='sm:hidden'>Case studies</span>
              <span className='hidden sm:inline'>View case studies</span>
            </Link>
          </div>

          {/* three equal columns on phones; natural widths from sm */}
          <dl className='grid grid-cols-3 gap-3 pt-4 sm:flex sm:gap-12'>
            {stats.map((s) => (
              <div key={s.label} className='flex flex-col-reverse justify-end'>
                <dt className='text-[13px] text-muted sm:text-sm'>
                  {s.label}
                </dt>
                <dd className='font-display text-[28px] font-semibold tracking-[-0.04em] text-teal sm:text-[36px]'>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* beside the text from tablet up, growing with the screen */}
        <Portrait
          priority
          className='h-[280px] w-[280px] md:h-[260px] md:w-[260px] lg:h-[380px] lg:w-[380px] xl:h-[460px] xl:w-[460px]'
        />
      </section>
    </Container>
  )
}

/** Hero buttons: compact while they share a 2-column grid, the normal size from lg. */
const heroBtn = (base: string) =>
  `${base} whitespace-nowrap px-3 text-[15px] sm:px-5 sm:text-base lg:px-7`
