import { EventCard } from "./components/EventCard";
import { SeriesProgress } from "./components/SeriesProgress";
import { VideoEmbed } from "./components/VideoEmbed";

type FellowGroup = { label: string; names: string[] };
type Episode = {
  n: string;
  title: string;
  status: "Scheduling" | "Planned" | "Part 1" | "Recorded";
  href?: string;
};

const episodes: Episode[] = [
  { n: "01", title: "David Deutsch: The Fabric of Reality & The Beginning of Infinity", status: "Part 1", href: "/lessons/ep01" },
  { n: "02", title: "Reason, Module 1 (Logan Chipkin)", status: "Planned" },
  { n: "03", title: "Reason, Module 2", status: "Planned" },
  { n: "04", title: "Constructor Theory, Module 0", status: "Planned" },
  { n: "05", title: "Locality, Module 1 (Samuel Hagh Shenas)", status: "Planned" },
  { n: "06", title: "Economics, Module 0", status: "Planned" },
];

const fellows: FellowGroup[] = [
  { label: "Advisors", names: ["David Deutsch", "Judea Pearl", "Daniel Hannan", "Peter Boghossian"] },
  { label: "Senior Scientists", names: ["Chiara Marletto", "Vlatko Vedral"] },
  { label: "Physics", names: ["Sam Kuypers", "Maria Violaris", "Chris Sutherland", "Samuel Hagh Shenas", "Antonia Weber", "Maxime Desalle", "Giuseppe Di Pietra"] },
  { label: "Epistemology", names: ["Arjun Khemani", "Paul Raymond-Robichaud", "Eric Denton", "Charles Bédard", "Jaber Hassoun"] },
  { label: "Aesthetics", names: ["Tom Hyde", "Eli Parra", "Dimitri Vallein"] },
  { label: "AGI", names: ["Carlos De la Guardia"] },
  { label: "Board", names: ["Logan Chipkin, President", "Aaron Stupple", "David Kedmey"] },
  { label: "Ambassador", names: ["Brett Hall"] },
];

const hosts = [
  { name: "Adam Pang", handle: "adamtpang", url: "https://x.com/adamtpang" },
  { name: "Sahil Ohe", handle: null, url: null },
  { name: "Anton Kim", handle: null, url: null },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[720px] px-6 pb-32 pt-28 sm:pt-36 md:pt-40">
        {/* I. Hero */}
        <header id="top" className="mb-36 sm:mb-44">
          <p className="mb-12 text-[11px] uppercase tracking-[0.32em] text-taupe">
            A Lecture Series at Network School
          </p>
          <h1 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-light leading-[1.02] tracking-[-0.015em] text-espresso">
            Conjecture
            <span className="text-accent"> &amp; </span>
            Refutations
          </h1>
          <p className="mt-14 max-w-[52ch] font-serif text-2xl italic leading-[1.5] text-espresso/85 sm:text-3xl">
            Every lecture is a conjecture. Every conjecture is open to refutation.
          </p>
          <p className="mt-10 max-w-[54ch] text-lg leading-relaxed text-walnut">
            We bring{" "}
            <ExternalLink href="https://conjectureinstitute.org">
              Conjecture Institute
            </ExternalLink>{" "}
            to{" "}
            <ExternalLink href="https://ns.com">Network School</ExternalLink>.
            Lessons, recordings, fellowships.
          </p>
          <div className="mt-14 flex flex-wrap gap-4">
            <a
              href="https://ns.com/events/gjts20md"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-accent bg-accent px-9 py-4 font-sans text-[12px] uppercase tracking-[0.24em] text-cream transition-colors hover:bg-espresso hover:border-espresso"
            >
              RSVP for Episode 01
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#watch"
              className="inline-flex items-center px-9 py-4 font-sans text-[12px] uppercase tracking-[0.24em] text-walnut hover:text-accent"
            >
              Watch the overview
            </a>
          </div>
        </header>

        <Ornament />

        {/* II. Watch */}
        <Section id="watch" n="II" label="Watch">
          <SectionHeading>Start here. The overview.</SectionHeading>
          <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-walnut">
            Before the live session, a walking tour of the two books that
            capture David Deutsch&rsquo;s worldview. Part one of the primer.
          </p>
          <div className="mt-14">
            <VideoEmbed
              id="cDvdpCBJLmo"
              kicker="Episode 01 · Part 1"
              title="David Deutsch: The Fabric of Reality & The Beginning of Infinity"
            />
          </div>
          <p className="mt-8 max-w-[54ch] text-base leading-relaxed text-walnut">
            Full lesson path: video, notes, and outline on a dedicated page.
          </p>
          <a
            href="/lessons/ep01"
            className="mt-6 inline-flex items-center gap-3 font-sans text-[12px] uppercase tracking-[0.24em] text-accent hover:text-espresso"
          >
            Open Episode 01 lesson
            <span aria-hidden>→</span>
          </a>
        </Section>

        <Ornament />

        {/* III. Next Session */}
        <Section id="next" n="III" label="Next Session">
          <EventCard
            episode="01"
            title="David Deutsch: The Fabric of Reality & The Beginning of Infinity"
            startISO="2026-05-30T09:00:00.000Z"
            endISO="2026-05-30T10:30:00.000Z"
            tzLabel="Saturday, May 30 · 5:00 PM Malaysia"
            locationLabel="Network School, Forest City"
            topic="An overview of the two books that capture David Deutsch's worldview, before we dive into the Conjecture Institute modules in Episodes 02 onward."
            hosts={["Adam Pang", "Sahil Ohe", "Anton Kim"]}
            rsvpUrl="https://ns.com/events/gjts20md"
          />
        </Section>

        <Ornament />

        {/* IV. Series Progress */}
        <Section id="series" n="IV" label="Series">
          <SectionHeading>The arc, in nineteen sessions.</SectionHeading>
          <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-walnut">
            One session per week. Each session a single conjecture, taught
            publicly, recorded, and shipped.
          </p>
          <div className="mt-14">
            <SeriesProgress current={1} total={19} />
          </div>
        </Section>

        <Ornament />

        {/* V. Three Threads */}
        <Section id="threads" n="V" label="Three Threads">
          <SectionHeading>How knowledge grows under criticism.</SectionHeading>
          <ol className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
            <ArcCard n="I" title="Good Explanations" byline="Deutsch &amp; Popper"
              body="Hard-to-vary explanations are the engine of knowledge." />
            <ArcCard n="II" title="Markets as Error Correction" byline="Austrian Economics"
              body="Prices as conjectures. Profit and loss as refutation." />
            <ArcCard n="III" title="Memetic Money" byline="Zcash &amp; Open Money"
              body="Currency selected for survival in open societies." />
          </ol>
        </Section>

        <Ornament />

        {/* VI. Recordings. Proof of work. */}
        <Section id="recordings" n="VI" label="Recordings">
          <SectionHeading>The proof of work.</SectionHeading>
          <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-walnut">
            Every session is recorded and published here. No claims without the
            tape. This ledger fills as we teach.
          </p>
          <ol className="mt-16 divide-y divide-linen border-y border-linen">
            {episodes.map((ep) => (
              <EpisodeRow key={ep.n} episode={ep} />
            ))}
          </ol>
          <p className="mt-8 font-mono text-[12px] leading-relaxed text-taupe">
            recordings.publish &lt;= session.date + 24h
          </p>
        </Section>

        <Ornament />

        {/* VII. Fellows */}
        <Section id="fellows" n="VII" label="Fellows">
          <SectionHeading>The lineage.</SectionHeading>
          <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-walnut">
            People extending the Popperian programme at{" "}
            <ExternalLink href="https://conjectureinstitute.org">
              Conjecture Institute
            </ExternalLink>
            .
          </p>
          <div className="mt-16 space-y-10">
            {fellows.map((group) => (
              <FellowGroupBlock key={group.label} group={group} />
            ))}
          </div>
        </Section>

        <Ornament />

        {/* VIII. Hosts */}
        <Section id="hosts" n="VIII" label="Hosts">
          <SectionHeading>Three co-curators at Network School.</SectionHeading>
          <ul className="mt-12 space-y-3 text-xl text-espresso/90 sm:text-2xl">
            {hosts.map((h) => (
              <li key={h.name} className="font-serif">
                {h.url ? (
                  <ExternalLink href={h.url}>{h.name}</ExternalLink>
                ) : (
                  h.name
                )}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-[54ch] text-base leading-relaxed text-walnut">
            Lectures, recordings, and seminars. Open to the critical rationalist
            community.
          </p>
        </Section>

        {/* Footer */}
        <footer className="mt-32 border-t border-linen pt-14">
          <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-taupe">
            The Project
          </p>
          <ul className="mb-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <li><FooterLink href="https://conjectureinstitute.org">Conjecture Institute</FooterLink></li>
            <li><FooterLink href="https://ns.com">Network School</FooterLink></li>
            <li><FooterLink href="https://optimism.fun">optimism.fun</FooterLink></li>
            <li><a href="/design" className="text-walnut underline decoration-linen decoration-1 underline-offset-[5px] hover:text-accent hover:decoration-accent">Design</a></li>
            <li><FooterLink href="https://x.com/adamtpang">@adamtpang</FooterLink></li>
          </ul>

          <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-taupe">
            Anchor Marianas
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <li><FooterLink href="https://adampang.com">adampang.com</FooterLink></li>
            <li><FooterLink href="https://anchormarianas.com">anchormarianas.com</FooterLink></li>
            <li><FooterLink href="https://sellsniper.com">sellsniper.com</FooterLink></li>
          </ul>

          <p className="mt-14 text-[11px] uppercase tracking-[0.22em] text-taupe/70">
            Curated by Adam Pang, Sahil Ohe, &amp; Anton Kim
          </p>
        </footer>
      </main>
    </>
  );
}

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-linen/80 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[720px] items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 font-serif text-sm text-espresso/90 hover:text-espresso">
          <span className="text-accent">&#8756;</span>
          <span className="hidden sm:inline">Conjecture &amp; Refutations</span>
          <span className="sm:hidden">C&amp;R</span>
        </a>
        <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.18em]">
          <a href="#watch" className="hidden text-walnut hover:text-accent sm:inline">Watch</a>
          <a href="#recordings" className="hidden text-walnut hover:text-accent md:inline">Recordings</a>
          <a href="https://ns.com/events/gjts20md" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-espresso">RSVP</a>
        </div>
      </div>
    </nav>
  );
}

function Section({ id, n, label, children }: { id: string; n: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-36 sm:mb-44">
      <p className="mb-8 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.32em]">
        <span className="font-serif italic text-accent">{n}</span>
        <span className="h-px w-6 bg-linen" aria-hidden />
        <span className="text-accent/90">{label}</span>
      </p>
      {children}
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-3xl font-light leading-[1.12] text-espresso sm:text-4xl">
      {children}
    </h2>
  );
}

function Ornament() {
  return (
    <div className="mb-36 flex items-center justify-center gap-4 sm:mb-44" aria-hidden>
      <span className="h-px w-12 bg-linen" />
      <span className="font-serif text-sm text-accent/70">&#10022;</span>
      <span className="h-px w-12 bg-linen" />
    </div>
  );
}

function ArcCard({ n, title, byline, body }: { n: string; title: string; byline: string; body: string }) {
  return (
    <li className="border-t border-linen pt-6">
      <div className="mb-5 font-serif text-sm italic text-accent">{n}</div>
      <h3 className="mb-3 font-serif text-xl font-normal leading-snug text-espresso"
          dangerouslySetInnerHTML={{ __html: title }} />
      <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-taupe"
         dangerouslySetInnerHTML={{ __html: byline }} />
      <p className="text-[15px] leading-relaxed text-walnut">{body}</p>
    </li>
  );
}

function EpisodeRow({ episode }: { episode: Episode }) {
  const live = episode.status === "Part 1" || episode.status === "Recorded";
  const inner = (
    <>
      <span className="font-mono text-sm text-accent">{episode.n}</span>
      <span
        className={`font-serif text-lg leading-snug ${
          episode.href ? "text-espresso/90 group-hover:text-accent" : "text-espresso/90"
        }`}
      >
        {episode.title}
      </span>
      <span
        className={`text-[11px] uppercase tracking-[0.2em] ${
          live ? "text-accent" : "text-taupe"
        }`}
      >
        {episode.status}
        {episode.href ? <span aria-hidden className="ml-2">→</span> : null}
      </span>
    </>
  );

  if (episode.href) {
    return (
      <li>
        <a
          href={episode.href}
          className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-5"
        >
          {inner}
        </a>
      </li>
    );
  }

  return (
    <li className="grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-5">
      {inner}
    </li>
  );
}

function FellowGroupBlock({ group }: { group: FellowGroup }) {
  return (
    <div>
      <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-accent/90">{group.label}</p>
      <ul className="font-serif text-lg leading-[1.85] text-espresso/85 sm:text-xl">
        {group.names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="text-espresso underline decoration-accent decoration-1 underline-offset-[5px] hover:text-accent">
      {children}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="text-walnut underline decoration-linen decoration-1 underline-offset-[5px] hover:text-accent hover:decoration-accent">
      {children}
    </a>
  );
}
