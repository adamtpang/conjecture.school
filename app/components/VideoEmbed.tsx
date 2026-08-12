"use client";

import { useState } from "react";

type VideoEmbedProps = {
  id: string; // YouTube video id
  title: string;
  kicker?: string; // small label above the title, e.g. "Part 1 · The Overview"
};

export function VideoEmbed({ id, title, kicker }: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="m-0">
      <div className="relative aspect-video w-full overflow-hidden border border-linen bg-eggshell">
        {loaded ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`Play: ${title}`}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-6 transition-colors hover:bg-cream/40"
          >
            {/* Constellation dots, quiet */}
            <span aria-hidden className="pointer-events-none absolute inset-0">
              <span className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-accent/25" />
              <span className="absolute left-[82%] top-[24%] h-1 w-1 rounded-full bg-accent/20" />
              <span className="absolute left-[70%] top-[72%] h-1 w-1 rounded-full bg-accent/25" />
              <span className="absolute left-[22%] top-[68%] h-1 w-1 rounded-full bg-accent/20" />
            </span>

            {/* Play mark */}
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-accent/50 transition-all duration-300 group-hover:border-accent group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-accent" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>

            <span className="relative text-center">
              {kicker ? (
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.22em] text-taupe">
                  {kicker}
                </span>
              ) : null}
              <span className="block max-w-[44ch] px-6 font-serif text-xl font-light leading-snug text-espresso sm:text-2xl">
                {title}
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-taupe">
          Recording
        </span>
        <a
          href={`https://youtu.be/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-walnut hover:text-accent"
        >
          Watch on YouTube ↗
        </a>
      </figcaption>
    </figure>
  );
}
