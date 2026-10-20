import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import {
  Cataract, Faqs, FinalCta, Hero, Locations, Services, SiteFooter, SpecialOffer, Team, Testimonials, WhyUs,
} from "@/components/site/sections";

const title = "NOVA EYE CENTRE — Expert Eye Care in Sahiwal & Pakpattan";
const description =
  "Eye checkups for PKR 200, cataract surgery and treatment for glaucoma, squint, ptosis and more. Branches at Al-Rehmat Hospital Sahiwal and Al-Shifa Hospital Pakpattan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SpecialOffer />
        <Cataract />
        <Services />
        <WhyUs />
        <Locations />
        <Team />
        <Testimonials />
        <Faqs />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
