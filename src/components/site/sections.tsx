import {
  Activity, ArrowRight, Baby, CalendarCheck, CheckCircle2, Clock, Droplets, Eye, Facebook,
  Glasses, HeartHandshake, Instagram, MapPin, MessageCircle, Microscope, Phone, ScanEye,
  ShieldCheck, Star, Stethoscope, Users,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cta, Logo, SectionHeading } from "./cta";
import clinicPhoto from "@/assets/nova-cataract-surgery.jpg.asset.json";
import examPhoto from "@/assets/nova-pakpattan-exam.jpg.asset.json";
import theatrePhoto from "@/assets/nova-cataract-microscope.jpg.asset.json";
import sahiwalSign from "@/assets/nova-sahiwal-sign.png.asset.json";
import pakpattanSign from "@/assets/nova-pakpattan-sign.png.asset.json";
import drMehmoodPhoto from "@/assets/dr-mehmood-asghar.jpg.asset.json";
import drMudassarPhoto from "@/assets/dr-mudassar-ali-asghar.jpg.asset.json";
import { EyeChartIllustration } from "./illustrations";
import { branches, clinic, navLinks, primaryBranch } from "./clinic-data";

const branchSigns: Record<string, string> = {
  sahiwal: sahiwalSign.url,
  pakpattan: pakpattanSign.url,
};

/* 2. Hero */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="grid-dots absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="container-site relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-fade-up">
          <span className="eyebrow"><span className="size-1.5 rounded-full bg-primary" />Eye care clinic · Sahiwal & Pakpattan</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Expert Eye Care in <span className="text-primary">Sahiwal & Pakpattan</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Thorough eye examinations, cataract surgery and treatment for common eye conditions — for adults and children, close to home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Cta href={primaryBranch.whatsapp} variant="whatsapp" size="lg"><MessageCircle />Book on WhatsApp</Cta>
            <Cta href={`tel:${primaryBranch.phoneTel}`} variant="outline" size="lg"><Phone />Call {primaryBranch.phoneDisplay}</Cta>
          </div>
          <ul className="mt-10 grid max-w-xl grid-cols-1 gap-4 border-t pt-8 sm:grid-cols-3">
            {[
              { icon: CalendarCheck, title: "~5 years", text: "in eye care" },
              { icon: MapPin, title: "2 branches", text: "Sahiwal & Pakpattan" },
              { icon: Baby, title: "All ages", text: "Adults & children" },
            ].map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-primary"><Icon className="size-5" /></span>
                <span><b className="block text-sm text-primary">{title}</b><span className="text-sm text-muted-foreground">{text}</span></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fade-up relative [animation-delay:150ms]">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] bg-accent-soft" />
            <img
              src={clinicPhoto.url}
              alt="NOVA Eye Centre surgeon performing eye surgery with an operating microscope"
              width={1440}
              height={1920}
              fetchPriority="high"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-lift"
            />
          </div>
          <div className="absolute bottom-4 left-0 flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-lift sm:left-4">
            <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground"><ScanEye className="size-5" /></span>
            <span><span className="block text-xs text-muted-foreground">Eye checkup · Sahiwal</span><b className="font-display text-lg text-primary">PKR 200</b></span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3. Special offer */
export function SpecialOffer() {
  return (
    <section aria-labelledby="offer-title" className="section-pad bg-secondary">
      <div className="container-site">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border bg-card p-8 shadow-soft md:p-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow">Special offer</span>
            <h2 id="offer-title" className="mt-3 text-3xl font-bold text-primary md:text-4xl">Complete eye checkup for just PKR 200 in Sahiwal</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">An eye examination for adults, seniors and children at our Sahiwal branch (Al-Rehmat Hospital). Book ahead on WhatsApp to reduce your waiting time.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta href={primaryBranch.whatsapp} variant="whatsapp" size="lg"><MessageCircle />Book on WhatsApp</Cta>
              <Cta href={`tel:${primaryBranch.phoneTel}`} variant="primary" size="lg"><Phone />Call Now</Cta>
            </div>
          </div>
          <div className="relative flex items-center justify-center gap-4">
            <EyeChartIllustration />
            <div className="absolute -bottom-4 right-0 grid size-36 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-lift ring-8 ring-primary-soft sm:right-6 lg:-right-2">
              <div>
                <span className="text-xs uppercase tracking-widest text-primary-foreground/70">Only</span>
                <p className="font-display text-4xl font-extrabold">200</p>
                <span className="text-xs font-semibold text-accent">PKR · Checkup</span>
              </div>
            </div>
            <div className="hidden grid size-56 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-lift ring-8 ring-primary-soft">
              <div>
                <span className="text-sm uppercase tracking-widest text-primary-foreground/70">Only</span>
                <p className="font-display text-5xl font-extrabold">200</p>
                <span className="text-sm font-semibold text-accent">PKR · Eye checkup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 4. Cataract */
export function Cataract() {
  const points = [
    "Modern surgical techniques available at the clinic",
    "A range of lens options to suit your needs and budget",
    "Pre-surgery assessment and guidance on the right lens",
    "Follow-up care after your procedure",
  ];
  if (clinic.noInjectionClaimVerified) points.unshift("Carried out without an injection");
  return (
    <section id="cataract" aria-labelledby="cataract-title" className="section-pad bg-ink text-ink-foreground">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" tone="ink" eyebrow="Cataract surgery" title="Clearer vision with modern cataract surgery" intro="If cloudy or blurred vision is affecting daily life, our team will assess your eyes and explain the options available to you." />
          {clinic.noInjectionClaimVerified && (
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-accent/40 bg-accent/10 p-5 sm:p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-ink">
                <ShieldCheck className="size-6" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-ink-foreground sm:text-xl">Cataract surgery without injection</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">Every cataract operation at NOVA Eye Centre is carried out without an injection — a real comfort advantage for patients who are nervous about needles.</p>
              </div>
            </div>
          )}
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" /><span className="text-ink-muted">{p}</span></li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Cta href="#faq" variant="light" size="lg">Learn More<ArrowRight /></Cta>
            <Cta href={primaryBranch.whatsapp} variant="ghostLight" size="lg"><MessageCircle />Ask on WhatsApp</Cta>
          </div>
        </div>
        <div className="rounded-3xl border border-ink-foreground/10 bg-ink-foreground/5 p-8 md:p-10">
          <img
            src={theatrePhoto.url}
            alt="NOVA Eye Centre surgeon performing cataract surgery at the operating microscope"
            width={1600}
            height={1200}
            loading="lazy"
            className="mb-8 aspect-[4/3] w-full rounded-2xl object-cover object-center"
          />
          <div className="grid grid-cols-3 gap-3 text-center">
            {["Standard", "Premium", "Advanced"].map((l) => (
              <div key={l} className="rounded-2xl border border-ink-foreground/10 p-4">
                <Glasses className="mx-auto size-6 text-accent" />
                <p className="mt-2 text-sm font-semibold">{l} lens</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-muted">Results vary from patient to patient. No surgical outcome can be guaranteed.</p>
        </div>
      </div>
    </section>
  );
}

/* 5. Services */
const services = [
  { icon: Stethoscope, title: "General Eye Checkup", text: "Vision testing and a full examination of eye health." },
  { icon: Baby, title: "Children's Eye Checkup", text: "Gentle, child-friendly eye exams for early detection." },
  { icon: Eye, title: "Cataract Treatment", text: "Assessment, lens counselling and surgical treatment." },
  { icon: Activity, title: "Glaucoma", text: "Screening, monitoring and management of eye pressure." },
  { icon: Microscope, title: "Diabetic Retinopathy", text: "Retina checks for patients living with diabetes." },
  { icon: ScanEye, title: "Squint", text: "Evaluation and treatment of misaligned eyes." },
  { icon: Glasses, title: "Ptosis", text: "Care for drooping upper eyelids." },
  { icon: Droplets, title: "NLD Treatment", text: "Blocked tear duct treatment for children and adults." },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-pad bg-background">
      <div className="container-site">
        <SectionHeading eyebrow="Our services" title="Comprehensive eye care for all ages" intro="From routine checkups to surgical treatment, under one roof." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift">
              <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-6" /></span>
              <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. Why choose us */
export function WhyUs() {
  const items = [
    { icon: Users, title: "Almost 5 years of experience", text: "Serving patients across Sahiwal and Pakpattan." },
    { icon: Microscope, title: "Eye-care technology", text: "Equipment for accurate examination and diagnosis." },
    { icon: HeartHandshake, title: "Patient-focused care", text: "Clear explanations and affordable options." },
    { icon: ShieldCheck, title: "Available surgical techniques", text: "Modern approaches for cataract and other procedures." },
  ];
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad bg-secondary">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <SectionHeading align="left" eyebrow="Why choose us" title="Care you can see. Trust you can feel." intro="NOVA EYE CENTRE brings dependable, affordable eye care to two communities." />
          <img src={examPhoto.url} alt="NOVA Eye Centre Pakpattan eye specialist examining a patient with a slit-lamp microscope" width={1200} height={1600} loading="lazy" className="mt-8 aspect-[4/3] w-full rounded-3xl object-cover object-[center_30%] shadow-soft" />
          {/* PLACEHOLDER: add verified doctor name and qualifications here */}
          <div className="mt-8 rounded-2xl border border-dashed bg-card p-5 text-sm text-muted-foreground">
            Doctor profile and qualifications will be added once confirmed by the clinic.
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl bg-card p-6 shadow-soft">
              <Icon className="size-7 text-primary" />
              <h3 className="mt-4 font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 7. Locations */
export function Locations() {
  return (
    <section id="locations" aria-labelledby="locations-title" className="section-pad bg-background">
      <div className="container-site">
        <SectionHeading eyebrow="Our locations" title="Two convenient branches" intro="Visit us in Sahiwal or Pakpattan." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {branches.map((b) => (
            <article key={b.id} className="overflow-hidden rounded-3xl border bg-card shadow-soft">
              <div className="grid-dots flex items-center gap-4 bg-primary-soft p-6">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><MapPin className="size-6" /></span>
                <div>
                  <h3 className="text-xl font-bold text-primary">{b.city} Branch</h3>
                  <p className="text-sm font-medium text-muted-foreground">{b.hospital}</p>
                </div>
                <img
                  src={branchSigns[b.id]}
                  alt={`NOVA Eye Centre ${b.city} signboard`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="ml-auto hidden size-20 shrink-0 object-contain drop-shadow-md sm:block"
                />
              </div>
              <div className="space-y-4 p-6">
                <p className="flex gap-3 text-sm text-muted-foreground"><MapPin className="size-5 shrink-0 text-primary" />{b.address}</p>
                <p className="flex gap-3 text-sm text-muted-foreground"><Clock className="size-5 shrink-0 text-primary" />{b.timings}</p>
                <a href={`tel:${b.phoneTel}`} className="flex gap-3 text-sm font-semibold text-primary hover:underline"><Phone className="size-5 shrink-0 text-primary" />{b.phoneDisplay}</a>
                <div className="grid gap-3 pt-2 sm:grid-cols-3">
                  <Cta href={`tel:${b.phoneTel}`} variant="primary" size="sm"><Phone />Call</Cta>
                  <Cta href={b.whatsapp} variant="whatsapp" size="sm"><MessageCircle />WhatsApp</Cta>
                  <Cta href={b.mapsUrl} variant="outline" size="sm"><MapPin />Directions</Cta>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 7b. Team — add doctor photos by setting `photo` to an uploaded asset URL */
const doctors: { name: string; quals: string; photo?: string }[] = [
  { name: "Dr. Mehmood Asghar", quals: "MBBS, FCPS, FRCS", photo: drMehmoodPhoto.url },
  { name: "Dr. Mudassar Ali Asghar", quals: "MBBS, IMM (Ophthalmology)", photo: drMudassarPhoto.url },
];

export function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="section-pad bg-secondary">
      <div className="container-site">
        <SectionHeading eyebrow="Our team" title="Meet our doctors" intro="Experienced eye specialists caring for patients in Sahiwal and Pakpattan." />
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {doctors.map((d) => (
            <article key={d.name} className="flex flex-col items-center rounded-3xl border bg-card p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              {d.photo ? (
                <span className="block aspect-square w-full max-w-xs overflow-hidden rounded-2xl ring-4 ring-accent-soft">
                  <img src={d.photo} alt={d.name} loading="lazy" className="size-full object-cover object-[60%_30%]" />
                </span>
              ) : (
                <span className="grid aspect-square w-full max-w-xs place-items-center rounded-2xl bg-primary-soft text-primary ring-4 ring-accent-soft">
                  <Stethoscope className="size-14" />
                </span>
              )}
              <h3 className="mt-6 text-xl font-bold text-primary">{d.name}</h3>
              <p className="mt-2 rounded-full bg-accent-soft px-4 py-1 text-sm font-semibold text-primary">{d.quals}</p>
              <p className="mt-3 text-sm text-muted-foreground">Eye Specialist · NOVA EYE CENTRE</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8. Testimonials — genuine reviews only (copied from Google reviews) */
const reviews = [
  { name: "Umer Amin", text: "High qualified staff. Clean environment. Doctor Mehmood Asghar sb so professional and kind with patient." },
  { name: "Mudassar Ali Asghar", text: "Great place to have eye check up and all kind of eye procedure." },
  { name: "Muhammad Fayyaz", text: "So cooperative staff, clean environment. Professional doctors and staff." },
];

export function Testimonials() {
  return (
    <section aria-labelledby="reviews-title" className="section-pad bg-secondary">
      <div className="container-site">
        <SectionHeading eyebrow="Patient testimonials" title="Hear from our patients" intro="Genuine reviews shared by our patients on Google." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-3xl border bg-card p-8 shadow-soft">
              <span aria-hidden className="text-5xl font-bold leading-none text-accent">“</span>
              <blockquote className="mt-2 flex-1 text-base leading-relaxed text-foreground">{r.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary-soft font-semibold text-primary">{r.name.charAt(0)}</span>
                <span>
                  <span className="block font-semibold text-primary">{r.name}</span>
                  <span className="block text-xs text-muted-foreground">Google review</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          {clinic.googleReviewsUrl ? (
            <Cta href={clinic.googleReviewsUrl} variant="primary"><Star />Read & write Google reviews</Cta>
          ) : (
            <Cta href={primaryBranch.whatsapp} variant="outline"><MessageCircle />Share your experience</Cta>
          )}
        </div>
      </div>
    </section>
  );
}


/* 9. FAQs */
const faqs = [
  { q: "How much does cataract surgery cost?", a: "Cataract surgery ranges from PKR 25,000 to PKR 120,000, depending mainly on the type of lens. Your doctor will explain the options after examining your eyes." },
  { q: "How do I know if I need cataract surgery?", a: "Common signs include cloudy or blurred vision, glare from lights and faded colours. Only an eye examination can confirm whether surgery is right for you." },
  { q: "How much is an eye checkup?", a: "The PKR 200 complete eye checkup is available at our Sahiwal branch (Al-Rehmat Hospital) only. Please contact our Pakpattan branch for its checkup fee." },
  { q: "Do you examine children's eyes?", a: "Yes. We offer children's eye checkups and treat conditions such as squint and blocked tear ducts (NLD). Early checkups help detect problems sooner." },
  { q: "How do I book an appointment?", a: "Message or call us on WhatsApp — Sahiwal: 0300-6913585, Pakpattan: 0325-6553573 — and our team will arrange a suitable time." },
];

export function Faqs() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-pad bg-background">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading align="left" eyebrow="FAQs" title="Frequently asked questions" intro="Answers about cataract surgery, pricing, checkups and appointments." />
        <Accordion type="single" collapsible defaultValue="item-0" className="rounded-3xl border bg-card px-6 shadow-soft">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-primary hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* 10. Final CTA */
export function FinalCta() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="section-pad bg-secondary">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16 md:py-20">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-accent/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-ink/40 blur-3xl" />
          <div className="relative">
            <h2 id="cta-title" className="mx-auto max-w-2xl text-3xl font-bold md:text-5xl">Take the First Step Towards Clearer Vision</h2>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">Book your PKR 200 eye checkup today at our Sahiwal branch.</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Cta href={primaryBranch.whatsapp} variant="whatsapp" size="lg"><MessageCircle />WhatsApp Us</Cta>
              <Cta href={`tel:${primaryBranch.phoneTel}`} variant="light" size="lg"><Phone />Call Now</Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 11. Footer */
export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="ink" />
          <p className="mt-4 text-sm text-ink-muted">Expert eye care for adults and children in Sahiwal and Pakpattan.</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Quick links</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => <li key={l.href}><a href={l.href} className="text-sm text-ink-muted hover:text-ink-foreground">{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Branches</h3>
          <ul className="mt-4 space-y-4">
            {branches.map((b) => (
              <li key={b.id} className="text-sm">
                <p className="font-semibold">{b.city} — {b.hospital}</p>
                <a href={`tel:${b.phoneTel}`} className="text-ink-muted hover:text-ink-foreground">{b.phoneDisplay}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Follow us</h3>
          <div className="mt-4 space-y-3">
            <a href={clinic.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-ink-muted hover:text-ink-foreground"><Facebook className="size-5" />NOVA EYE CENTRE</a>
            <a href={clinic.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-ink-muted hover:text-ink-foreground"><Instagram className="size-5" />{clinic.instagramHandle}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="container-site py-6 text-center text-xs text-ink-muted">© {new Date().getFullYear()} NOVA EYE CENTRE. All rights reserved.</p>
      </div>
    </footer>
  );
}
