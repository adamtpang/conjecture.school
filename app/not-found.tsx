import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found · Conjecture & Refutations",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[720px] flex-col items-center justify-center px-6 py-32 text-center">
      <p className="mb-10 font-serif text-6xl text-accent" aria-hidden>
        &#8756;
      </p>
      <h1 className="font-serif text-3xl font-light leading-tight text-espresso sm:text-4xl">
        This page is a refuted conjecture.
      </h1>
      <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-walnut">
        It did not survive criticism, or it never existed. Either way, the error
        has been corrected.
      </p>
      <a
        href="/"
        className="mt-12 inline-flex items-center gap-3 border border-accent bg-accent px-9 py-4 font-sans text-[12px] uppercase tracking-[0.24em] text-cream transition-colors hover:bg-espresso hover:border-espresso"
      >
        Back to conjecture.school
        <span aria-hidden>→</span>
      </a>
    </main>
  );
}
