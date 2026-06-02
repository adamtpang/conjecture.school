import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System · Conjecture & Refutations",
  description:
    "The design system for conjecture.school. A hybrid child of Conjecture Institute and Network School. Cucinelli warmth, Wonderism spirit.",
};

const swatches = [
  { name: "cream", hex: "#FAF7F2", note: "Page background. Raw silk, warm." },
  { name: "eggshell", hex: "#FFFEFA", note: "Elevated cards. Subtle layering." },
  { name: "espresso", hex: "#2B2622", note: "Primary text. Warm near-black." },
  { name: "walnut", hex: "#5C5048", note: "Secondary text. Body color." },
  { name: "taupe", hex: "#9A8F84", note: "Meta, labels, tertiary." },
  { name: "linen", hex: "#E5DDD2", note: "Hairline dividers." },
  { name: "accent", hex: "#8B5A3C", note: "Single accent. Walnut/terracotta. Rationed." },
];

const glyphs = [
  { glyph: "∴", name: "Therefore", role: "The mark. Favicon, wordmark." },
  { glyph: "✦", name: "Star", role: "Section divider only. Never inline." },
  { glyph: "·", name: "Interpunct", role: "Inline lists, micro-bullets." },
];

const voiceAllowed = [
  "Aphoristic, short sentences.",
  "Specific nouns. Forest City. Episode 01.",
  "Sourced claims. Modules from Conjecture Institute.",
  "One ethos line at the top.",
];

const voiceBanned = [
  "Em dashes. Use commas, colons, slashes, periods.",
  "Marketing verbs: discover, unlock, transform, empower.",
  "Generic adjectives: world-class, cutting-edge, premier.",
  "We are excited to announce. We are working.",
];

const rules = [
  "720px column, single, always.",
  "Three glyphs only: ∴ · ✦.",
  "No em dashes.",
  "Accent (walnut) is rationed. ~5 moments per viewport.",
  "Fraunces + Inter for content. Geist Mono for data only.",
];

export default function DesignPage() {
  return (
    <main className="mx-auto max-w-[720px] px-6 pb-32 pt-28 sm:pt-36 md:pt-40">
      {/* Hero */}
      <header className="mb-36 sm:mb-44">
        <p className="mb-12 text-[11px] uppercase tracking-[0.32em] text-taupe">
          Design System
        </p>
        <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-light leading-[1.04] tracking-[-0.01em] text-espresso">
          A hybrid child of two design systems.
        </h1>
        <p className="mt-14 max-w-[54ch] font-serif text-2xl italic leading-[1.5] text-espresso/85">
          Cucinelli warmth. Critical-rationalist discipline.
        </p>
        <p className="mt-10 max-w-[54ch] text-lg leading-relaxed text-walnut">
          conjecture.school descends from{" "}
          <ExternalLink href="https://conjectureinstitute.org">
            Conjecture Institute
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href="https://ns.com">Network School</ExternalLink>.
          The aesthetic borrows from Brunello Cucinelli: cream backgrounds,
          espresso ink, walnut accent, generous whitespace, no decoration that
          doesn&rsquo;t earn its place.
        </p>
      </header>

      <Ornament />

      {/* I. Lineage */}
      <Section n="I" label="Lineage">
        <h2 className="font-serif text-3xl font-light leading-[1.12] text-espresso sm:text-4xl">
          Two parents. One child.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <Parent
            name="Conjecture Institute"
            url="https://conjectureinstitute.org"
            inherits={[
              "Editorial discipline. Type-led, no decoration.",
              "Three-arm structure (University, Press, Studios).",
              "Card-based people grids.",
              "Geist Mono for data and citations.",
            ]}
          />
          <Parent
            name="Network School"
            url="https://ns.com"
            inherits={[
              "Sans + editorial serif pairing.",
              "Generous whitespace, single column.",
              "Action-oriented, declarative voice.",
              "Hairline borders, restrained CTAs.",
            ]}
          />
        </div>
        <p className="mt-12 max-w-[54ch] text-base leading-relaxed text-walnut">
          The deliberate differentiation: warm cream palette over cold white,
          walnut accent for the lecture-series character, drop-cap moments
          inherited from Italian print culture.
        </p>
      </Section>

      <Ornament />

      {/* II. Palette */}
      <Section n="II" label="Palette">
        <h2 className="font-serif text-3xl font-light leading-[1.12] text-espresso sm:text-4xl">
          Seven tokens. No eighth.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-4">
          {swatches.map((s) => (
            <div key={s.name} className="border-t border-linen pt-5">
              <div
                className="h-20 w-full border border-linen"
                style={{ background: s.hex }}
                aria-hidden
              />
              <p className="mt-3 font-serif text-base text-espresso">{s.name}</p>
              <p className="font-mono text-[11px] tracking-tight text-accent/90">
                {s.hex}
              </p>
              <p className="mt-2 text-[13px] leading-snug text-walnut">{s.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Ornament />

      {/* III. Typography */}
      <Section n="III" label="Typography">
        <h2 className="font-serif text-3xl font-light leading-[1.12] text-espresso sm:text-4xl">
          Three faces. Three jobs.
        </h2>
        <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-walnut">
          Fraunces breathes. Inter snaps. Geist Mono counts. No bold weight on
          content. Weight contrast comes from face and size.
        </p>

        <div className="mt-16 space-y-14">
          <Specimen label="H1 / Wordmark" meta="Fraunces · light · clamp(3rem, 8vw, 5.5rem)">
            <span className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-light leading-[1.02] tracking-[-0.015em] text-espresso">
              Conjecture <span className="text-accent">&amp;</span> Refutations
            </span>
          </Specimen>

          <Specimen label="Hero Subtitle" meta="Fraunces · italic · 1.5–1.875rem">
            <span className="font-serif text-2xl italic leading-[1.5] text-espresso/85">
              Every lecture is a conjecture. Every conjecture is open to refutation.
            </span>
          </Specimen>

          <Specimen label="Section Heading" meta="Fraunces · light · 1.875rem">
            <span className="font-serif text-3xl font-light leading-[1.12] text-espresso">
              How knowledge grows under criticism.
            </span>
          </Specimen>

          <Specimen label="Body" meta="Inter · regular · 0.9375–1.0625rem · 1.7">
            <span className="text-base leading-relaxed text-walnut">
              An idea is adopted rationally when a person is persuaded that it is
              the best among all alternatives. By criticizing all of them and
              committing to whichever survives.
            </span>
          </Specimen>

          <Specimen label="Section Label" meta="Inter · uppercase · 0.6875rem · 0.32em">
            <span className="text-[11px] uppercase tracking-[0.32em] text-accent/90">
              III. Next Session
            </span>
          </Specimen>

          <Specimen label="Data / Mono" meta="Geist Mono · regular · 0.75rem · used for tokens, counts, citations">
            <span className="font-mono text-xs leading-relaxed text-walnut">
              episode.01 = &quot;David Deutsch&quot;
              <br />
              session.start = 2026-05-16T17:00+08:00
              <br />
              recordings.publish &lt;= session.date + 24h
            </span>
          </Specimen>
        </div>
      </Section>

      <Ornament />

      {/* IV. Glyphs */}
      <Section n="IV" label="Glyphs">
        <h2 className="font-serif text-3xl font-light leading-[1.12] text-espresso sm:text-4xl">
          Three glyphs. No others.
        </h2>
        <div className="mt-12 space-y-8">
          {glyphs.map((g) => (
            <div key={g.glyph} className="grid grid-cols-[5rem_1fr] items-center gap-6 border-t border-linen pt-6">
              <div className="text-center font-serif text-5xl text-accent">{g.glyph}</div>
              <div>
                <p className="font-serif text-xl text-espresso">{g.name}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-walnut">{g.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-[54ch] text-[13px] leading-relaxed text-taupe">
          Download the mark as SVG:{" "}
          <a href="/icon.svg" target="_blank" rel="noopener noreferrer" className="text-espresso underline decoration-accent decoration-1 underline-offset-[5px] hover:text-accent">
            /icon.svg
          </a>
          .
        </p>
      </Section>

      <Ornament />

      {/* V. Voice */}
      <Section n="V" label="Voice">
        <h2 className="font-serif text-3xl font-light leading-[1.12] text-espresso sm:text-4xl">
          Aphoristic. Sourced. Anti-marketing.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-accent">Allowed</p>
            <ul className="space-y-3 font-serif text-lg leading-snug text-espresso/85">
              {voiceAllowed.map((v) => <li key={v}>{v}</li>)}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-taupe">Banned</p>
            <ul className="space-y-3 font-serif text-lg leading-snug text-walnut">
              {voiceBanned.map((v) => <li key={v}>{v}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Ornament />

      {/* VI. The Five Rules */}
      <Section n="VI" label="The Five Rules">
        <h2 className="font-serif text-3xl font-light leading-[1.12] text-espresso sm:text-4xl">
          If everything else collapses, keep these.
        </h2>
        <ol className="mt-12 divide-y divide-linen border-y border-linen">
          {rules.map((r, i) => (
            <li key={r} className="grid grid-cols-[3rem_1fr] items-baseline gap-4 py-5">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-serif text-lg leading-snug text-espresso/90">{r}</span>
            </li>
          ))}
        </ol>
      </Section>

      <footer className="mt-32 border-t border-linen pt-14">
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <li>
            <a href="/" className="text-walnut underline decoration-linen decoration-1 underline-offset-[5px] hover:text-accent hover:decoration-accent">
              Back to conjecture.school
            </a>
          </li>
          <li><FooterLink href="https://conjectureinstitute.org">Conjecture Institute</FooterLink></li>
          <li><FooterLink href="https://ns.com">Network School</FooterLink></li>
        </ul>
        <p className="mt-12 text-[11px] uppercase tracking-[0.22em] text-taupe">
          A living document. Iterate.
        </p>
      </footer>
    </main>
  );
}

function Section({ n, label, children }: { n: string; label: string; children: React.ReactNode }) {
  return (
    <section className="mb-36 sm:mb-44">
      <p className="mb-8 flex items-baseline gap-4 text-[11px] uppercase tracking-[0.32em]">
        <span className="font-serif italic text-accent">{n}</span>
        <span className="h-px w-6 bg-linen" aria-hidden />
        <span className="text-accent/90">{label}</span>
      </p>
      {children}
    </section>
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

function Parent({ name, url, inherits }: { name: string; url: string; inherits: string[] }) {
  return (
    <div className="border-t border-linen pt-6">
      <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-taupe">Parent</p>
      <h3 className="mb-4 font-serif text-2xl font-light text-espresso">
        <ExternalLink href={url}>{name}</ExternalLink>
      </h3>
      <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-accent">What we inherit</p>
      <ul className="space-y-2 text-[15px] leading-relaxed text-walnut">
        {inherits.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

function Specimen({ label, meta, children }: { label: string; meta: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-4 text-[11px] uppercase tracking-[0.18em]">
        <span className="text-accent">{label}</span>
        <span className="font-mono normal-case tracking-normal text-taupe">{meta}</span>
      </div>
      <div className="border-t border-linen pt-5">{children}</div>
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
