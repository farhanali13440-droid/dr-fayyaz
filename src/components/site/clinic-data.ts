// Single source for clinic details. Items marked PLACEHOLDER need clinic confirmation.

export const clinic = {
  name: "NOVA EYE CENTRE",
  facebookUrl: "https://www.facebook.com/search/top?q=NOVA%20EYE%20CENTRE", // PLACEHOLDER: replace with exact page URL
  instagramHandle: "@novaeyecentre",
  instagramUrl: "https://www.instagram.com/novaeyecentre",
  googleReviewsUrl: "", // PLACEHOLDER: paste Google Business review link
  doctorName: "", // PLACEHOLDER
  // Show "surgery without injection and suture" only once the clinic verifies it.
  sutureClaimVerified: false,
};

export type Branch = {
  id: string;
  city: string;
  hospital: string;
  address: string; // PLACEHOLDER street address
  timings: string; // PLACEHOLDER
  phoneDisplay: string;
  phoneTel: string;
  whatsapp: string;
  mapsUrl: string;
};

export const branches: Branch[] = [
  {
    id: "sahiwal",
    city: "Sahiwal",
    hospital: "Al-Rehmat Hospital",
    address: "6, Sahadab Colony, Umer Block, Shadab Town, Multan Road, Sahiwal, Punjab, Pakistan",
    timings: "Clinic timings to be confirmed",
    phoneDisplay: "0300-6913585",
    phoneTel: "+923006913585",
    whatsapp: "https://wa.me/923006913585?text=" + encodeURIComponent("Assalam o Alaikum, I would like to book an eye checkup at NOVA EYE CENTRE Sahiwal."),
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("6, Sahadab Colony, Umer Block, Shadab Town, Multan Road, Sahiwal, Punjab, Pakistan"),
  },
  {
    id: "pakpattan",
    city: "Pakpattan",
    hospital: "Al-Shifa Hospital",
    address: "Street address to be confirmed, Pakpattan",
    timings: "Clinic timings to be confirmed",
    phoneDisplay: "0325-6553573",
    phoneTel: "+923256553573",
    whatsapp: "https://wa.me/923256553573?text=" + encodeURIComponent("Assalam o Alaikum, I would like to book an eye checkup at NOVA EYE CENTRE Pakpattan."),
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Al-Shifa Hospital Pakpattan"),
  },
];

export const primaryBranch = branches[0]!;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Cataract Surgery", href: "#cataract" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];
