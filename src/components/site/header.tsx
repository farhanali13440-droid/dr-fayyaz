import { useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { Cta, Logo } from "./cta";
import { navLinks, primaryBranch } from "./clinic-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <div className="container-site flex h-18 items-center justify-between gap-6 py-3">
        <a href="#home" aria-label="NOVA EYE CENTRE home">
          <Logo />
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Cta href={`tel:${primaryBranch.phoneTel}`} variant="outline" size="sm"><Phone />Call</Cta>
          <Cta href={primaryBranch.whatsapp} variant="whatsapp" size="sm"><MessageCircle />WhatsApp</Cta>
        </div>
        <button
          className="grid size-11 place-items-center rounded-full border text-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-site flex flex-col py-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b py-3 text-base font-medium text-foreground last:border-0">
                {l.label}
              </a>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Cta href={`tel:${primaryBranch.phoneTel}`} variant="outline"><Phone />Call</Cta>
              <Cta href={primaryBranch.whatsapp} variant="whatsapp"><MessageCircle />WhatsApp</Cta>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
