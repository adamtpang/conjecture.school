"use client";

import { useEffect, useState } from "react";

type EventCardProps = {
  episode: string;
  title: string;
  startISO: string; // ISO datetime, UTC
  endISO: string;
  tzLabel: string;
  locationLabel: string;
  topic: string;
  hosts: string[];
  rsvpUrl: string;
};

export function EventCard({
  episode,
  title,
  startISO,
  endISO,
  tzLabel,
  locationLabel,
  topic,
  hosts,
  rsvpUrl,
}: EventCardProps) {
  const start = new Date(startISO).getTime();
  const end = new Date(endISO).getTime();

  // Announcement window for the progress bar: 14 days before the start.
  const announceWindow = 14 * 24 * 60 * 60 * 1000;
  const windowStart = start - announceWindow;

  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  let progress = 0;
  let countdownLabel = "";
  let countdownDetail = "";

  if (now !== null) {
    if (now < start) {
      const elapsed = Math.max(0, now - windowStart);
      progress = Math.min(1, elapsed / announceWindow);
      const remainingMs = start - now;
      const days = Math.floor(remainingMs / (24 * 60 * 60 * 1000));
      const hours = Math.floor((remainingMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const mins = Math.floor((remainingMs % (60 * 60 * 1000)) / (60 * 1000));
      if (days >= 1) {
        countdownLabel = `T minus ${days}d ${hours}h`;
      } else if (hours >= 1) {
        countdownLabel = `T minus ${hours}h ${mins}m`;
      } else {
        countdownLabel = `T minus ${mins}m`;
      }
      countdownDetail = "until the session begins";
    } else if (now < end) {
      progress = 1;
      countdownLabel = "In session";
      countdownDetail = "happening now";
    } else {
      progress = 1;
      countdownLabel = "Session complete";
      countdownDetail = "recording publishes shortly";
    }
  }

  return (
    <article className="border-t border-linen pt-10">
      <div className="mb-8 flex items-baseline justify-between gap-6">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-accent">
          Episode {episode}
        </p>
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-taupe">
          {tzLabel}
        </p>
      </div>

      <h3 className="font-serif text-3xl font-light leading-[1.15] text-espresso sm:text-4xl">
        {title}
      </h3>

      <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-walnut">
        {topic}
      </p>

      <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-10">
        <Meta term="Location" value={locationLabel} />
        <Meta term="Hosts" value={hosts.join(" · ")} />
      </dl>

      {/* Countdown progress bar */}
      <div className="mt-12">
        <div className="mb-3 flex items-baseline justify-between text-[11px] uppercase tracking-[0.22em]">
          <span className="font-mono text-accent">
            {countdownLabel || " "}
          </span>
          <span className="text-taupe">{countdownDetail || " "}</span>
        </div>
        <div className="relative h-px w-full bg-linen" aria-hidden>
          <div
            className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-700 ease-out"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      </div>

      <div className="mt-12">
        <a
          href={rsvpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 border border-accent bg-accent px-9 py-4 font-sans text-[12px] uppercase tracking-[0.24em] text-cream transition-colors hover:bg-espresso hover:border-espresso"
        >
          RSVP on Network School
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}

function Meta({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-[11px] uppercase tracking-[0.22em] text-taupe">{term}</dt>
      <dd className="text-espresso/90">{value}</dd>
    </div>
  );
}
