export type Chassis = "Sprinter" | "Transit" | "ProMaster" | "E-Series" | "Other";

export type PathKind = "drive-away" | "both" | "custom" | "partial" | "shells";

export type InventoryVan = {
  name: string;
  year: string;
  chassis: string;
  price?: number;
  note: string;
  image: string;
  tag: string;
  forSale?: boolean;
};

export type Shop = {
  slug: string;
  name: string;
  city: string;
  address: string;
  mapsQuery: string;
  driveMins: number;
  phone?: string;
  email?: string;
  website: string;
  lotUrl?: string;
  since: number;
  path: PathKind;
  pathLabel: string;
  specialty: string;
  punch: string;
  blurb: string;
  forLaura: string;
  noVan: string;
  chassis: Chassis[];
  priceFrom: number;
  priceNote: string;
  wait: string;
  visit: string;
  inventory: InventoryVan[];
  inventoryNote?: string;
  images: { src: string; alt: string; credit: string }[];
  verdict: "best-now" | "strong-now" | "tour" | "later";
  cluster: "denver" | "arvada" | "golden" | "boulder" | "loveland";
  badge?: string;
};

export const TRIP = {
  who: "Laura McGinley",
  nephew: "Kohler",
  window: "September 7–16, 2026",
  windowShort: "SEPTEMBER 7–16",
  from: "Denver",
  to: "Sun Valley",
  driveHours: "10–12 hours",
};

export const shops: Shop[] = [
  {
    slug: "vanlife-customs",
    name: "Vanlife Customs",
    city: "Arvada",
    address: "6531 W 56th Ave, Unit 17, Arvada, CO 80002",
    mapsQuery: "6531 W 56th Ave Unit 17 Arvada CO 80002",
    driveMins: 22,
    phone: "720-593-8267",
    website: "https://vanlifecustoms.com/",
    lotUrl: "https://vanlifecustoms.com/vans-for-sale",
    since: 2016,
    path: "both",
    pathLabel: "Inventory and custom",
    specialty: "Full custom four-season builds. Converted vans on the lot since 2016. Sprinter, Transit, and ProMaster.",
    punch: "Converted vans on the lot. Sprinter, Transit, ProMaster.",
    blurb: "Arvada shop with converted vans on the floor. Sprinter, Transit, and ProMaster, including 4x4 and AWD, from about $89,000 to $230,000.",
    forLaura:
      "Appointments only. Five converted vans were listed in late August.",
    noVan: "Sells finished vans. You do not need to own a van first.",
    chassis: ["Sprinter", "Transit", "ProMaster"],
    priceFrom: 55000,
    priceNote: "Converted vans about $89,000–$230,000. New customs from $85,000–$95,000.",
    wait: "Converted vans on the lot. Custom work is scheduled.",
    visit: "By appointment only",
    inventory: [
      { name: "Sterling", year: "2019", chassis: "Sprinter 144 4x4", price: 88990, note: "Sprinter 144 4x4", image: "/vans/hero-northstar.jpg", tag: "4x4" },
      { name: "Black Beauty", year: "2019", chassis: "Sprinter 4x4 pop-top", price: 121365, note: "Sprinter 4x4 pop-top", image: "/vans/vlc-open.jpg", tag: "POP-TOP" },
      { name: "Ro", year: "2022", chassis: "Sprinter 144 AWD", price: 169990, note: "Sprinter 144 AWD", image: "/vans/vlc-kitchen.jpg", tag: "AWD" },
      { name: "Petronia", year: "2024", chassis: "Sprinter 170 AWD", price: 149000, note: "Sprinter 170 AWD", image: "/vans/vlc-modern.jpg", tag: "AWD" },
      { name: "Zeppelin", year: "2023", chassis: "Sprinter 170 AWD", price: 230000, note: "Sprinter 170 AWD", image: "/vans/mountain-pair.jpg", tag: "AWD" },
    ],
    inventoryNote: "Inventory moves weekly. Two chassis (Sprinter + Transit) were also listed as ready for conversion.",
    images: [
      { src: "/vans/vlc-open.jpg", alt: "Side door open on a Vanlife Customs Sprinter", credit: "vanlifecustoms.com" },
      { src: "/vans/vlc-kitchen.jpg", alt: "Pine galley and cooktop in a Vanlife Customs Transit", credit: "vanlifecustoms.com" },
      { src: "/vans/vlc-modern.jpg", alt: "Compact modern interior with induction cooktop", credit: "vanlifecustoms.com" },
      { src: "/vans/hero-northstar.jpg", alt: "Vanlife Customs 4x4 Sprinter at dusk", credit: "vanlifecustoms.com" },
    ],
    verdict: "best-now",
    cluster: "arvada",
  },
  {
    slug: "titan-vans",
    name: "Titan Vans",
    city: "Boulder",
    address: "1901 Central Ave, Unit 1, Boulder, CO 80301",
    mapsQuery: "1901 Central Ave Unit 1 Boulder CO 80301",
    driveMins: 40,
    phone: "303-975-6492",
    email: "info@titanvans.com",
    website: "https://www.titanvans.com/",
    lotUrl: "https://www.titanvans.com/vans-for-sale",
    since: 2017,
    path: "both",
    pathLabel: "Inventory and modular",
    specialty: "In-house CNC modular interiors on Sprinter and Transit. New conversions in stock.",
    punch: "New conversions. Sprinter and Transit. Boulder.",
    blurb: "Boulder shop. Most parts are made in house. Three new conversions were listed in late August, including two AWD Sprinters with about 50 miles.",
    forLaura:
      "Three new conversions listed in late August. Confirm the AWD Sprinters when you book.",
    noVan: "Sells finished vans. They will also convert a van you buy separately.",
    chassis: ["Sprinter", "Transit", "ProMaster"],
    priceFrom: 84995,
    priceNote: "New conversions $85,000–$189,000. They will also build on a van you own.",
    wait: "Finished vans on the lot. Custom work takes months.",
    visit: "Shop in Boulder — call or email",
    inventory: [
      { name: "Timber Camp", year: "2025", chassis: "ProMaster 159 high roof FWD", price: 84995, note: "ProMaster 159 high roof", image: "/vans/white-galley.jpg", tag: "NEW" },
      { name: "Classic 144", year: "2026", chassis: "Sprinter 144 AWD", price: 137948, note: "About 50 miles. AWD.", image: "/vans/titan-ultra.jpg", tag: "NEW AWD" },
      { name: "Ultra 170", year: "2026", chassis: "Sprinter 170 AWD", price: 189204, note: "About 50 miles. AWD.", image: "/vans/mountain-pair.jpg", tag: "NEW AWD" },
    ],
    inventoryNote: "Homepage also flagged 3 pre-owned vans, including two Sprinter 4x4s. Confirm before the visit.",
    images: [
      { src: "/vans/titan-ultra.jpg", alt: "Titan Vans Ultra Sprinter in front of the Boulder Flatirons", credit: "titanvans.com" },
      { src: "/vans/mountain-pair.jpg", alt: "Adventure Sprinters in the mountains", credit: "Example expedition style" },
    ],
    verdict: "best-now",
    cluster: "boulder",
  },
  {
    slug: "the-vansmith",
    name: "The Vansmith",
    city: "Boulder",
    address: "7209 Valtec Court, Unit B, Boulder, CO 80301",
    mapsQuery: "7209 Valtec Court Unit B Boulder CO 80301",
    driveMins: 42,
    phone: "303-414-6834",
    email: "info@thevansmith.com",
    website: "https://thevansmith.com/",
    lotUrl: "https://thevansmith.com/collections/camper-van-for-sale",
    since: 2016,
    path: "both",
    pathLabel: "Custom layouts",
    specialty: "Sprinter and Transit interiors. Lifetime cabinet warranty. NOAH certified. 300+ builds.",
    punch: "Custom Sprinter and Transit. 12–16 week wait.",
    blurb: "Boulder shop. In-house electrical. Baltic birch and marine hardware. Established layouts.",
    forLaura:
      "Full custom is 12–16 weeks. Call for vans on the floor.",
    noVan: "Turnkey includes the van. Conversion-only means you buy the empty van first.",
    chassis: ["Sprinter", "Transit"],
    priceFrom: 46950,
    priceNote: "Conversion only from $47,000. Turnkey Bivy about $114,000–$228,000.",
    wait: "Bivy 8–10 weeks. Tailored 12–16 weeks from design approval.",
    visit: "By appointment",
    inventory: [],
    inventoryNote: "Rotating new and inspected used vans. Call for what is on the floor.",
    images: [
      { src: "/vans/vansmith-snow.jpg", alt: "Vansmith Sprinter in Colorado snow", credit: "thevansmith.com" },
      { src: "/vans/vansmith-interior.jpg", alt: "Vansmith galley, shower stall, and rear bed", credit: "thevansmith.com" },
    ],
    verdict: "tour",
    cluster: "boulder",
  },
  {
    slug: "featherbuilt",
    name: "Featherbuilt",
    city: "Denver",
    address: "5371 Tennyson St, Unit 10, Denver, CO 80212",
    mapsQuery: "5371 Tennyson St Unit 10 Denver CO 80212",
    driveMins: 15,
    phone: "720-255-1510",
    email: "hello@featherbuilt.com",
    website: "https://featherbuilt.com/",
    lotUrl: "https://featherbuilt.com/",
    since: 2018,
    path: "both",
    pathLabel: "Kits and full builds",
    specialty: "Modular rail interiors that bolt to factory points. Kits and full conversions on Sprinter, Transit, and ProMaster.",
    punch: "Kits and full builds. Denver.",
    blurb: "Denver shop. Aluminum rails and CNC panels. Kits and complete conversions.",
    forLaura:
      "A Sprinter 144 was listed for sale. 15 minutes from downtown.",
    noVan: "Kits need a van you own. They also list vans for sale.",
    chassis: ["Sprinter", "Transit", "ProMaster"],
    priceFrom: 40000,
    priceNote: "Kits and full conversions. Confirm current van-for-sale pricing.",
    wait: "Kits ship now. Full conversions are scheduled.",
    visit: "Denver Berkeley / Tennyson — check inventory page",
    inventory: [
      { name: "Sprinter 144", year: "On lot", chassis: "Mercedes Sprinter 144", note: "Listed as for sale — confirm before the visit", image: "/vans/featherbuilt-bed.jpg", tag: "ON LOT" },
    ],
    images: [
      { src: "/vans/featherbuilt-bed.jpg", alt: "Featherbuilt rear bed, galley, and overhead cabinets", credit: "featherbuilt.com" },
      { src: "/vans/white-galley.jpg", alt: "Bright galley-to-bed layout", credit: "Example modular interior" },
    ],
    verdict: "strong-now",
    cluster: "denver",
  },
  {
    slug: "flippin-vans",
    name: "Flippin Vans",
    city: "Denver",
    address: "1455 W Cedar Ave, Denver, CO 80223",
    mapsQuery: "1455 W Cedar Ave Denver CO 80223",
    driveMins: 12,
    phone: "720-910-8918",
    website: "https://www.flippinvans.com/",
    since: 2019,
    path: "partial",
    pathLabel: "Partial builds and repair",
    specialty: "Full customs, plus solar, heaters, plumbing, cabinets, and finish work on a van already in progress.",
    punch: "Partial builds and repairs. Denver.",
    blurb: "Denver shop for partial work, repairs, and full customs. Not a public lot.",
    forLaura:
      "12 minutes from downtown. Partial jobs and repairs.",
    noVan: "You need a van already. They do not sell finished vans.",
    chassis: ["Sprinter", "Transit", "ProMaster", "Other"],
    priceFrom: 8000,
    priceNote: "Partial systems from a few thousand. Full customs quoted.",
    wait: "Partial work is shorter. Full builds are longer.",
    visit: "West Cedar Ave, Denver",
    inventory: [],
    inventoryNote: "No public lot listing — call (720) 910-8918.",
    images: [
      { src: "/vans/vlc-modern.jpg", alt: "Compact custom van interior", credit: "Example custom interior" },
      { src: "/vans/white-galley.jpg", alt: "Finished galley and bed", credit: "Example custom interior" },
    ],
    verdict: "tour",
    cluster: "denver",
  },
  {
    slug: "foundation-vehicles",
    name: "Foundation Vehicles",
    city: "Golden",
    address: "655 McIntyre St, Golden, CO 80401",
    mapsQuery: "655 McIntyre St Golden CO 80401",
    driveMins: 25,
    phone: "720-610-1562",
    email: "info@foundationvehicles.com",
    website: "https://foundationvehicles.com/",
    since: 2023,
    path: "shells",
    pathLabel: "Composite shells",
    specialty: "Insulated composite van bodies on Transit, Sprinter, and Ford E-Series. R-11 panels. No wood. FMVSS compliant.",
    punch: "Insulated composite shells. Golden.",
    blurb: "They sell the insulated shell. Interior is a separate upfit.",
    forLaura:
      "They sell the insulated shell. Interior is a separate job.",
    noVan: "You buy a shell and chassis. Interior is a separate shop.",
    chassis: ["Sprinter", "Transit", "E-Series"],
    priceFrom: 80000,
    priceNote: "Shell and chassis. Interiors are a separate upfit.",
    wait: "By appointment in Golden.",
    visit: "By appointment, Golden",
    inventory: [],
    inventoryNote: "They advertise chassis in stock. A 2024 Sprinter AWD platform was listed around $137,500 on the trader market.",
    images: [
      { src: "/vans/mountain-pair.jpg", alt: "Expedition Sprinters with mountain backdrop", credit: "Expedition-style platforms" },
      { src: "/vans/titan-ultra.jpg", alt: "High-roof adventure van on dirt", credit: "Example finished upfit" },
    ],
    verdict: "later",
    cluster: "golden",
  },
  {
    slug: "colorado-camper-van",
    name: "Colorado Camper Van",
    city: "Loveland",
    address: "Loveland, CO — 14,000 sq ft shop, by appointment",
    mapsQuery: "Colorado Camper Van Loveland CO",
    driveMins: 55,
    phone: "970-699-6000",
    email: "amber@coloradocampervan.com",
    website: "https://www.coloradocampervan.com/",
    lotUrl: "https://www.coloradocampervan.com/vans-for-sale",
    since: 2009,
    path: "both",
    pathLabel: "Pop-tops",
    specialty: "Pop-top conversions since 2009. Standing room without a high roof. Custom interiors and owner-sold vans on the lot.",
    punch: "Pop-top conversions. Loveland.",
    blurb: "Pop-top shop in Loveland. About 55 minutes north of Denver.",
    forLaura:
      "Pop-top installs and owner-sold vans. A 2016 Sprinter 144 pop-top around $55,000 and a four-season pop-top around $130,000. Call Amber.",
    noVan: "Some finished vans on the lot, sold by owners. A pop-top install needs a van you own.",
    chassis: ["Sprinter", "Transit", "ProMaster"],
    priceFrom: 55000,
    priceNote: "Pop-top vans on lot about $55,000–$130,000. Customs quoted.",
    wait: "Pop-top installs are scheduled. Lot vans can leave the same week.",
    visit: "Loveland, appointment — they are not a dealer; lot vans are owner-sold",
    inventory: [
      { name: "2016 Sprinter 144", year: "2016", chassis: "Sprinter 144 pop-top", price: 55000, note: "32,000 miles", image: "/vans/poptop.jpg", tag: "POP-TOP" },
      { name: "Four-season pop-top", year: "On lot", chassis: "CCV pop-top", price: 130000, note: "Insulated pop-top", image: "/vans/vansmith-snow.jpg", tag: "POP-TOP" },
    ],
    images: [
      { src: "/vans/poptop.jpg", alt: "Pop-top Sprinter with roof tent open", credit: "Pop-top style example" },
      { src: "/vans/vansmith-snow.jpg", alt: "High-roof van with Colorado Campervan roof unit", credit: "thevansmith.com" },
    ],
    verdict: "tour",
    cluster: "loveland",
  },
  {
    slug: "contravans",
    name: "Contravans",
    city: "Arvada",
    address: "6531 W 56th Ave, Unit 17, Arvada, CO 80002",
    mapsQuery: "6531 W 56th Ave Unit 17 Arvada CO 80002",
    driveMins: 22,
    phone: "720-515-1088",
    email: "sales@contravans.com",
    website: "https://www.contravans.com/",
    since: 2018,
    path: "custom",
    pathLabel: "Custom builds",
    specialty:
      "Custom conversions on almost every chassis — Transit Connect, Promaster City, NV200, Sprinter, Transit, Promaster — plus lift kits, repairs, and mobile medical vans.",
    punch: "Custom conversions, lifts, and repairs. Arvada.",
    blurb: "Arvada shop. Same building as Vanlife Customs. Custom conversions, lift kits, and repairs.",
    forLaura:
      "Tuesday–Friday, appointment only. Conversion from $8,998. You supply the van, or they work with a Denver dealer on a van plus conversion.",
    noVan: "They do not sell finished vans. You buy an empty van, then they build the inside. They can also finance a van plus conversion through a Denver dealer. The $8,998 and $49,988 prices are the conversion, not the van.",
    chassis: ["Sprinter", "Transit", "ProMaster", "Other"],
    priceFrom: 8998,
    priceNote: "Conversion only. Small vans from $8,998. Full customs from $49,988. Van is extra.",
    wait: "No finished vans listed for sale. They build to order.",
    visit: "Tue–Fri 8–4, appointment only",
    inventory: [
      {
        name: "Xcite",
        year: "Build",
        chassis: "Transit Connect / NV200 / City",
        price: 8998,
        note: "Small-van conversion",
        image: "/vans/contra-connect.jpg",
        tag: "SMALL",
        forSale: false,
      },
      {
        name: "Adventure",
        year: "Build",
        chassis: "Sprinter / Transit / ProMaster",
        price: 49988,
        note: "Full custom on Sprinter, Transit, or ProMaster",
        image: "/vans/contra-solo.jpg",
        tag: "CUSTOM",
        forSale: false,
      },
      {
        name: "Lift kit",
        year: "Upgrade",
        chassis: "Sprinter / Transit / ProMaster",
        note: "Lift kit and trail suspension",
        image: "/vans/contra-connect.jpg",
        tag: "LIFT",
        forSale: false,
      },
    ],
    inventoryNote: "Starting prices for work they build. Not vans on a lot.",
    images: [
      { src: "/vans/contra-connect.jpg", alt: "Contravans Transit Connect conversion, rear galley and bed", credit: "contravans.com" },
      { src: "/vans/contra-solo.jpg", alt: "Contravans small-van solo build with bed and kitchen", credit: "contravans.com" },
    ],
    verdict: "best-now",
    cluster: "arvada",
  },
];

export function shopBySlug(slug: string) {
  return shops.find((s) => s.slug === slug);
}

export function telHref(phone: string) {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

export function mapsHref(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsEmbedHref(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`;
}

export const VERDICT_RANK: Record<Shop["verdict"], number> = {
  "best-now": 0,
  "strong-now": 1,
  tour: 2,
  later: 3,
};

export function shopsForLaura() {
  return [...shops].sort((a, b) => {
    if (a.slug === "contravans") return -1;
    if (b.slug === "contravans") return 1;
    return VERDICT_RANK[a.verdict] - VERDICT_RANK[b.verdict] || a.driveMins - b.driveMins;
  });
}

export type LotVan = InventoryVan & {
  shop: string;
  slug: string;
  city: string;
  phone?: string;
  mapsQuery: string;
};

export function forSaleInventory(shop: Shop) {
  return shop.inventory.filter((van) => van.forSale !== false);
}

export function lotVans(): LotVan[] {
  return shops.flatMap((s) =>
    s.inventory
      .filter((van) => van.forSale !== false)
      .map((van) => ({
        ...van,
        shop: s.name,
        slug: s.slug,
        city: s.city,
        phone: s.phone,
        mapsQuery: s.mapsQuery,
      })),
  );
}

export const CALL_FIRST = [
  { slug: "contravans", short: "CONTRAVANS", featured: true },
  { slug: "vanlife-customs", short: "VANLIFE", featured: false },
  { slug: "titan-vans", short: "TITAN", featured: false },
] as const;

export const DAYS = [
  {
    id: "1",
    title: "DAY 1",
    place: "ARVADA",
    blurb: "Contravans first. Vanlife is in the same building.",
    image: "/vans/contra-connect.jpg",
    slugs: ["contravans", "vanlife-customs", "featherbuilt"],
    note: "6531 W 56th, Unit 17 — two shops, one stop, then downtown Featherbuilt.",
  },
  {
    id: "2",
    title: "DAY 2",
    place: "BOULDER",
    blurb: "New vans at Titan. Tour Vansmith.",
    image: "/vans/titan-ultra.jpg",
    slugs: ["titan-vans", "the-vansmith", "foundation-vehicles"],
    note: "Foundation is in Golden — stop on the way if she cares about a four-season shell.",
  },
  {
    id: "3",
    title: "DAY 3",
    place: "DRIVE WEST",
    blurb: "Go back to the shop she liked. Then Sun Valley.",
    image: "/vans/contra-solo.jpg",
    slugs: ["contravans", "vanlife-customs"],
    note: "Contravans can start a custom if she stays a week or more. Vanlife if a finished van is sitting there.",
  },
] as const;

export const MAP_PINS: { slug: string; x: number; y: number }[] = [
  { slug: "flippin-vans", x: 58, y: 68 },
  { slug: "featherbuilt", x: 52, y: 58 },
  { slug: "vanlife-customs", x: 44, y: 50 },
  { slug: "contravans", x: 47, y: 47 },
  { slug: "foundation-vehicles", x: 28, y: 58 },
  { slug: "titan-vans", x: 38, y: 28 },
  { slug: "the-vansmith", x: 42, y: 22 },
  { slug: "colorado-camper-van", x: 48, y: 8 },
];

