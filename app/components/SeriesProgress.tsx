type SeriesProgressProps = {
  current: number;
  total: number;
};

export function SeriesProgress({ current, total }: SeriesProgressProps) {
  const pct = Math.min(100, Math.round(((current - 1) / total) * 100));
  return (
    <div>
      <div className="mb-4 flex items-baseline justify-between text-[11px] uppercase tracking-[0.22em]">
        <span className="font-mono text-accent">
          Episode {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="text-taupe">{pct}% through the arc</span>
      </div>
      <div className="relative h-[2px] w-full bg-linen" aria-hidden>
        <div
          className="absolute inset-y-0 left-0 bg-accent"
          style={{ width: `${pct}%` }}
        />
      </div>
      {/* Tick marks for each episode */}
      <div
        className="mt-4 grid gap-[2px]"
        style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
          <span
            key={n}
            className={`block h-2 ${
              n < current
                ? "bg-accent/80"
                : n === current
                ? "bg-accent"
                : "bg-linen"
            }`}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}
