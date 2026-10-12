import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import novaMark from "@/assets/nova-official-logo.png.asset.json";

const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
        whatsapp: "bg-whatsapp text-whatsapp-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
        outline: "border border-primary/20 bg-background text-primary hover:border-primary hover:bg-primary-soft",
        light: "bg-ink-foreground text-ink hover:-translate-y-0.5",
        ghostLight: "border border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground/10",
        link: "rounded-none p-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-7 text-base",
      },
    },
    compoundVariants: [{ variant: "link", class: "h-auto px-0" }],
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof ctaVariants>;

export function Cta({ className, variant, size, href, children, ...rest }: Props) {
  const external = href?.startsWith("http");
  return (
    <a
      href={href}
      className={cn(ctaVariants({ variant, size }), className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "default",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "default" | "ink";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <span className={cn("eyebrow", tone === "ink" && "eyebrow-ink")}>{eyebrow}</span>
      <h2
        className={cn(
          "mt-3 text-3xl font-bold leading-tight md:text-4xl",
          tone === "ink" ? "text-ink-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-4 text-base leading-relaxed md:text-lg", tone === "ink" ? "text-ink-muted" : "text-muted-foreground")}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function Logo({ tone }: { tone?: "default" | "ink" }) {
  // Official NOVA EYE CENTRE mark (illuminated sign logo, background removed).
  void tone;
  return (
    <span className="flex items-center gap-2.5">
      <img
        src={novaMark.url}
        alt="NOVA Eye Centre"
        width={1024}
        height={1024}
        className="size-11 shrink-0 object-contain drop-shadow-sm"
      />
      <span className="leading-none">
        <span className="block font-display text-xl font-extrabold tracking-tight text-primary">
          NOVA
        </span>
        <span className="block text-[0.62rem] font-bold tracking-[0.28em] text-foreground">
          EYE CENTRE
        </span>
      </span>
    </span>
  );
}
