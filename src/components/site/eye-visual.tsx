// Pure SVG illustration of an eye examination — no photos.
export function EyeVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full bg-primary-soft" />
      <div className="absolute inset-8 rounded-full border border-dashed border-primary/20" />
      <svg viewBox="0 0 400 400" className="relative size-full" role="img" aria-label="Illustration of an eye examination">
        <defs>
          <radialGradient id="iris" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--ink)" />
            <stop offset="35%" stopColor="var(--primary)" />
            <stop offset="75%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </radialGradient>
        </defs>
        <path d="M40 200c40-70 95-105 160-105s120 35 160 105c-40 70-95 105-160 105S80 270 40 200Z" fill="var(--background)" stroke="var(--primary)" strokeOpacity="0.15" strokeWidth="2" />
        <g className="animate-iris" style={{ transformOrigin: "200px 200px" }}>
          <circle cx="200" cy="200" r="72" fill="url(#iris)" />
          {Array.from({ length: 36 }).map((_, i) => (
            <line key={i} x1="200" y1="200" x2="200" y2="132" stroke="var(--ink-foreground)" strokeOpacity="0.12" strokeWidth="1.5" transform={`rotate(${i * 10} 200 200)`} />
          ))}
        </g>
        <circle cx="200" cy="200" r="28" fill="var(--ink)" />
        <circle cx="214" cy="186" r="9" fill="var(--ink-foreground)" fillOpacity="0.9" />
        <circle cx="200" cy="200" r="118" fill="none" stroke="var(--accent)" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 10" />
        <path d="M200 50v28M200 322v28M50 200h28M322 200h28" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
