// Code-drawn SVG illustrations in brand colours — no photos.

/* Eye chart for the eye-checkup offer */
export function EyeChartIllustration() {
  const rows = [
    { s: 44, t: "E" },
    { s: 28, t: "F P" },
    { s: 20, t: "T O Z" },
    { s: 14, t: "L P E D" },
    { s: 10, t: "P E C F D" },
  ];
  let y = 60;
  return (
    <svg viewBox="0 0 220 280" className="h-auto w-full max-w-[15rem]" role="img" aria-label="Eye test chart">
      <rect x="10" y="10" width="200" height="260" rx="20" fill="var(--card)" stroke="var(--border)" strokeWidth="2" />
      <rect x="10" y="10" width="200" height="26" rx="13" fill="var(--primary)" />
      <circle cx="30" cy="23" r="4" fill="var(--accent)" />
      {rows.map((r, i) => {
        y += r.s + (i === 0 ? 4 : 12);
        return (
          <text key={r.t} x="110" y={y} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize={r.s} letterSpacing={r.s / 4} fill="var(--foreground)">
            {r.t}
          </text>
        );
      })}
      <line x1="40" y1="246" x2="180" y2="246" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* Intraocular lens for cataract surgery */
export function LensIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="h-auto w-full" role="img" aria-label="Illustration of an artificial lens used in cataract surgery">
      <defs>
        <radialGradient id="lens-optic" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="var(--ink-foreground)" stopOpacity="0.95" />
          <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.9" />
        </radialGradient>
      </defs>
      {/* haptics */}
      <path d="M190 72c40-30 90-40 118-20" fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />
      <path d="M130 128c-40 30-90 40-118 20" fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="160" cy="100" r="64" fill="url(#lens-optic)" />
      <circle cx="160" cy="100" r="64" fill="none" stroke="var(--ink-foreground)" strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="160" cy="100" r="44" fill="none" stroke="var(--ink-foreground)" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 6" />
      <ellipse cx="138" cy="76" rx="18" ry="9" fill="var(--ink-foreground)" fillOpacity="0.7" transform="rotate(-30 138 76)" />
    </svg>
  );
}

/* Hospital building for branch cards */
export function ClinicIllustration() {
  return (
    <svg viewBox="0 0 160 110" className="h-24 w-auto" role="img" aria-label="Clinic building">
      <rect x="0" y="100" width="160" height="4" rx="2" fill="var(--primary)" fillOpacity="0.2" />
      <rect x="28" y="30" width="104" height="70" rx="6" fill="var(--card)" stroke="var(--primary)" strokeWidth="2.5" />
      <rect x="56" y="12" width="48" height="22" rx="5" fill="var(--primary)" />
      <path d="M80 16v14M73 23h14" stroke="var(--primary-foreground)" strokeWidth="3" strokeLinecap="round" />
      {[0, 1, 2].map((c) =>
        [0, 1].map((r) => (
          <rect key={`${c}${r}`} x={40 + c * 30} y={42 + r * 20} width="20" height="12" rx="2" fill="var(--accent)" fillOpacity="0.6" />
        )),
      )}
      <rect x="70" y="80" width="20" height="20" rx="2" fill="var(--primary)" />
      <circle cx="140" cy="88" r="10" fill="var(--accent)" fillOpacity="0.5" />
      <rect x="139" y="92" width="2" height="8" fill="var(--primary)" />
      <circle cx="20" cy="90" r="8" fill="var(--accent)" fillOpacity="0.5" />
      <rect x="19" y="93" width="2" height="7" fill="var(--primary)" />
    </svg>
  );
}

/* Doctor examining a patient, for "Why choose us" */
export function ExamIllustration() {
  return (
    <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-label="Eye specialist examining a patient">
      <rect x="0" y="0" width="360" height="240" rx="24" fill="var(--primary-soft)" />
      <circle cx="300" cy="50" r="60" fill="var(--accent)" fillOpacity="0.25" />
      {/* slit lamp */}
      <rect x="150" y="190" width="70" height="10" rx="5" fill="var(--primary)" />
      <rect x="180" y="110" width="10" height="82" rx="4" fill="var(--primary)" />
      <rect x="160" y="100" width="50" height="22" rx="8" fill="var(--foreground)" />
      <circle cx="160" cy="111" r="9" fill="var(--accent)" />
      {/* patient */}
      <circle cx="105" cy="100" r="24" fill="var(--card)" stroke="var(--foreground)" strokeWidth="2.5" />
      <circle cx="120" cy="98" r="3" fill="var(--foreground)" />
      <path d="M70 200c0-36 16-62 35-62s35 26 35 62Z" fill="var(--accent)" />
      {/* doctor */}
      <circle cx="262" cy="88" r="24" fill="var(--card)" stroke="var(--foreground)" strokeWidth="2.5" />
      <path d="M240 78c4-14 40-14 44 0" fill="var(--foreground)" />
      <circle cx="248" cy="92" r="3" fill="var(--foreground)" />
      <path d="M222 200c0-40 18-70 40-70s40 30 40 70Z" fill="var(--card)" stroke="var(--primary)" strokeWidth="2.5" />
      <path d="M262 132v40M250 150c0 14 24 14 24 0" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="20" y="200" width="320" height="6" rx="3" fill="var(--primary)" fillOpacity="0.2" />
    </svg>
  );
}
