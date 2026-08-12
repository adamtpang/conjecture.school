import type { Metadata } from "next";
import Link from "next/link";
import { VideoEmbed } from "../../components/VideoEmbed";

const YOUTUBE_ID = "cDvdpCBJLmo";
const TITLE =
  "David Deutsch: The Fabric of Reality & The Beginning of Infinity";

export const metadata: Metadata = {
  title: "Episode 01 · Part 1 — Conjecture & Refutations",
  description:
    "Lesson notes and recording: a walking tour of Deutsch's two books that capture his worldview. Episode 01, Part 1 of the Conjecture & Refutations series at Network School.",
  alternates: { canonical: "https://conjecture.school/lessons/ep01" },
  openGraph: {
    title: "Episode 01 · Part 1 — David Deutsch primer",
    description:
      "Watch the overview and read the lesson notes. Fabric of Reality and The Beginning of Infinity, packaged as one lesson.",
    url: "https://conjecture.school/lessons/ep01",
    type: "article",
    images: [{ url: "/cover-ep01.png", width: 1600, height: 800 }],
  },
};

const notes = [
  {
    heading: "What this lesson is",
    body: "A primer before the live Network School session. Part 1 walks the two books that hold David Deutsch's worldview together: The Fabric of Reality (1997) and The Beginning of Infinity (2011). Treat every claim here as a conjecture. Refute it in the room, or in the comments of the recording.",
  },
  {
    heading: "The Fabric of Reality — four strands",
    body: "Deutsch braids four deep theories into one fabric: (1) quantum physics (Everett / many-worlds), (2) epistemology (Popper: knowledge by conjecture and criticism), (3) computation (Turing: universal computers), and (4) evolution (Darwin: knowledge in genes by variation and selection). The lesson point is not mastery of each field. It is that good explanations link them: reality is comprehensible because the same pattern of hard-to-vary explanation shows up everywhere.",
  },
  {
    heading: "The Beginning of Infinity — unbounded progress",
    body: "If problems are soluble and knowledge can grow without bound, then there is no permanent barrier to progress, only problems we have not solved yet. Infinity is not a finish line. It is the openness of the future under criticism. The series will keep returning to this: optimism as a research programme, not a mood.",
  },
  {
    heading: "Good explanations",
    body: "A good explanation is hard to vary while still accounting for what it purports to explain. Myths and bad theories are easy to tweak. Science, engineering, and critical argument select for explanations that survive variation attempts. That is the engine this lecture series is built on.",
  },
  {
    heading: "How to use this page",
    body: "Play the recording. Pause on anything that feels wrong or incomplete. Bring one refutation or one sharper conjecture to the live session. This is packaging for a lesson, not an LMS: one video path, these notes, then the room.",
  },
];

const outline = [
  { t: "0:00", label: "Framing: why these two books" },
  { t: "—", label: "Fabric: four strands of reality" },
  { t: "—", label: "Beginning of Infinity: progress under criticism" },
  { t: "—", label: "What Episode 01 live session will dig into" },
];

export default function LessonEp01Page() {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-linen/80 bg-cream/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[720px] items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-serif text-sm text-espresso/90 hover:text-espresso"
          >
            <span className="text-accent">&#8756;</span>
            <span className="hidden sm:inline">Conjecture &amp; Refutations</span>
            <span className="sm:hidden">C&amp;R</span>
          </Link>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.18em]">
            <a href="#video" className="hidden text-walnut hover:text-accent sm:inline">
              Video
            </a>
            <a href="#notes" className="hidden text-walnut hover:text-accent md:inline">
              Notes
            </a>
            <Link href="/" className="text-accent hover:text-espresso">
              Series
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-[720px] px-6 pb-32 pt-28 sm:pt-36 md:pt-40">
        <header className="mb-16 sm:mb-20">
          <p className="mb-8 text-[11px] uppercase tracking-[0.32em] text-taupe">
            Lesson · Episode 01 · Part 1
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.25rem)] font-light leading-[1.12] tracking-[-0.01em] text-espresso">
            {TITLE}
          </h1>
          <p className="mt-8 max-w-[54ch] text-lg leading-relaxed text-walnut">
            Recording plus notes. One lesson path: watch, then criticize. Not a
            course catalog. Not an essay studio.
          </p>
        </header>

        <section id="video" className="mb-20 scroll-mt-28">
          <p className="mb-8 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.32em]">
            <span className="font-serif italic text-accent">I</span>
            <span className="h-px w-6 bg-linen" aria-hidden />
            <span className="text-accent/90">Video</span>
          </p>
          <VideoEmbed
            id={YOUTUBE_ID}
            kicker="Episode 01 · Part 1"
            title={TITLE}
          />
          <p className="mt-6 font-mono text-[12px] leading-relaxed text-taupe">
            Media: YouTube {YOUTUBE_ID} · cover asset /cover-ep01.png
          </p>
        </section>

        <div className="mb-20 flex items-center justify-center gap-4" aria-hidden>
          <span className="h-px w-12 bg-linen" />
          <span className="font-serif text-sm text-accent/70">&#10022;</span>
          <span className="h-px w-12 bg-linen" />
        </div>

        <section id="notes" className="mb-20 scroll-mt-28">
          <p className="mb-8 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.32em]">
            <span className="font-serif italic text-accent">II</span>
            <span className="h-px w-6 bg-linen" aria-hidden />
            <span className="text-accent/90">Notes</span>
          </p>
          <h2 className="font-serif text-3xl font-light leading-[1.12] text-espresso sm:text-4xl">
            Lesson notes
          </h2>
          <ol className="mt-14 space-y-12">
            {notes.map((n, i) => (
              <li key={n.heading} className="border-t border-linen pt-8">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-4 font-serif text-xl font-normal leading-snug text-espresso sm:text-2xl">
                  {n.heading}
                </h3>
                <p className="max-w-[58ch] text-[15px] leading-relaxed text-walnut sm:text-base">
                  {n.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section id="outline" className="mb-20 scroll-mt-28">
          <p className="mb-8 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.32em]">
            <span className="font-serif italic text-accent">III</span>
            <span className="h-px w-6 bg-linen" aria-hidden />
            <span className="text-accent/90">Outline</span>
          </p>
          <h2 className="font-serif text-3xl font-light leading-[1.12] text-espresso sm:text-4xl">
            Rough map of the tape
          </h2>
          <ul className="mt-12 divide-y divide-linen border-y border-linen">
            {outline.map((row) => (
              <li
                key={row.label}
                className="grid grid-cols-[4rem_1fr] items-baseline gap-4 py-4"
              >
                <span className="font-mono text-sm text-accent">{row.t}</span>
                <span className="font-serif text-lg text-espresso/90">{row.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[54ch] text-sm leading-relaxed text-taupe">
            Timestamps refine after rewatch. Substance first: the books, then the
            live session.
          </p>
        </section>

        <section className="mb-12 border-t border-linen pt-14">
          <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-taupe">
            Next
          </p>
          <p className="max-w-[54ch] font-serif text-xl leading-snug text-espresso/90 sm:text-2xl">
            Live session: Network School, Forest City. Then modules from
            Conjecture Institute in later episodes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://ns.com/events/gjts20md"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-accent bg-accent px-9 py-4 font-sans text-[12px] uppercase tracking-[0.24em] text-cream transition-colors hover:border-espresso hover:bg-espresso"
            >
              RSVP Episode 01
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <Link
              href="/#recordings"
              className="inline-flex items-center px-9 py-4 font-sans text-[12px] uppercase tracking-[0.24em] text-walnut hover:text-accent"
            >
              All recordings
            </Link>
          </div>
        </section>

        <footer className="mt-20 border-t border-linen pt-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-taupe/70">
            <Link href="/" className="hover:text-accent">
              ← Series home
            </Link>
            <span className="mx-3 text-linen">·</span>
            conjecture.school/lessons/ep01
          </p>
        </footer>
      </main>
    </>
  );
}
