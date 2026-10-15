/* Flip to true once the real prices are entered in `products` below. */
export const SHOW_PRICES = false;

export const INSTAGRAM_HANDLE = "__theartofgifting__";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
export const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_HANDLE}`;

/* tones echo the real collections: Goan blue, oxblood, emerald, all deepened toward plum */
export const tones = {
  blue: ["#27356B", "#1A1245"],
  red: ["#6A1A26", "#3A0A18"],
  green: ["#1F4A2E", "#10281A"],
  plum: ["#4B1C41", "#2E0F2A"],
  gold: ["#5E4220", "#2E1B12"],
} as const;
export type Tone = keyof typeof tones;

export type Product = { name: string; desc: string; tone: Tone; from?: number; image?: string; onlyFor?: string };

export const products: Record<"Invites" | "Favours" | "Hampers", Product[]> = {
  Invites: [
    { name: "The Forever Invite", desc: "Oxblood board, pearls, polaroid insert", tone: "red", from: 1400, image: "/images/tag-02.jpg" },
    { name: "The Amalfi Invite", desc: "Soft-yellow box with ribbon handle and tile print", tone: "gold", from: 950, image: "/images/tag-03.jpg" },
    { name: "Goan Reverie", desc: "Lace-edged floral frame in blue", tone: "blue", from: 1800, image: "/images/tag-01.jpg" },
  ],
  Favours: [
    { name: "Mini Chocoquet", desc: "Chocolate cone wrapped as a bouquet", tone: "gold", from: 180, image: "/images/tag-04.jpg" },
  ],
  Hampers: [
    { name: "Alma de Goa", desc: "Wooden crate, blue-and-white ceramics", tone: "blue", from: 2800, image: "/images/tag-05.jpg" },
    { name: "Shringar", desc: "Leather basket for saree and jewellery", tone: "green", from: 3600, image: "/images/tag-06.jpg" },
    { name: "A Basket of Sunshine", desc: "Wicker basket with sweets, snacks and a crochet sunflower", tone: "gold", image: "/images/tag-07.jpg" },
    { name: "Corporate", desc: "Bulk-ready hamper with branded gifts and treats", tone: "plum", from: 1100, onlyFor: "Corporate", image: "/images/tag-08.jpg" },
    { name: "Pretty in Pink", desc: "Pink gift bag with pearls, stationery and a tumbler", tone: "red", image: "/images/tag-09.jpg" },
    { name: "Diwali", desc: "Velvet box with diyas, sweets and festive keepsakes", tone: "gold", image: "/images/tag-10.jpg" },
  ],
};

export const heroSlides: { name: string; tone: Tone; image: string }[] = [
  { name: "Alma de Goa", tone: "blue", image: "/images/tag-05.jpg" },
  { name: "Shringar", tone: "green", image: "/images/tag-06.jpg" },
  { name: "A Basket of Sunshine", tone: "gold", image: "/images/tag-07.jpg" },
  { name: "Corporate", tone: "plum", image: "/images/tag-08.jpg" },
  { name: "Pretty in Pink", tone: "red", image: "/images/tag-09.jpg" },
  { name: "Diwali", tone: "gold", image: "/images/tag-10.jpg" },
];

/* One story per piece. Descriptions and "perfect for" lists come from the studio's Instagram captions. */
export const collections: {
  name: string; color: string; tone: Tone; image: string; kind: string; story: string; perfectFor: string[];
}[] = [
  {
    name: "Goan Reverie", color: "#2F4E9E", tone: "blue", image: "/images/tag-01.jpg", kind: "Wedding invite",
    story: "An invitation with timeless charm. Inspired by elegant blue florals and classic detailing, it is made for couples who want their wedding invitation to be as special as the celebration itself.",
    perfectFor: ["Wedding invitations"],
  },
  {
    name: "The Forever Invite", color: "#7A1F26", tone: "red", image: "/images/tag-02.jpg", kind: "Personalised invite",
    story: "A love story, beautifully told. A deep oxblood board with a pearl strand and a small polaroid of the couple, tied with a ribbon so the invite opens like a keepsake.",
    perfectFor: ["Weddings", "Anniversaries", "Intimate weddings"],
  },
  {
    name: "The Amalfi Invite", color: "#B58A3A", tone: "gold", image: "/images/tag-03.jpg", kind: "Handbag-style invite",
    story: "An invitation with a little something extra. Inspired by the Amalfi Coast, this handbag-style invite opens to a personalised invitation and a thoughtful little gift tucked inside.",
    perfectFor: ["Wedding invites & save-the-dates", "Bridal party invites", "Destination weddings", "Invites paired with a keepsake"],
  },
  {
    name: "Mini Chocoquet", color: "#A8742A", tone: "gold", image: "/images/tag-04.jpg", kind: "Favour",
    story: "An adorable chocolate bouquet that makes the smallest gestures feel extra special: a chocolate in a paper cone, finished with a ribbon and a sprig of flowers.",
    perfectFor: ["Haldi, Mehendi & Sangeet favours", "Wedding guest favours", "Welcome gifts", "Bridesmaid proposals"],
  },
  {
    name: "Alma de Goa", color: "#3F63B8", tone: "blue", image: "/images/tag-05.jpg", kind: "Hamper · The Soul of Goa",
    story: "A little piece of Goa, wrapped with love. Inspired by Goa’s heritage, Portuguese charm and the warmth of its traditions, in a wooden crate with blue-and-white ceramics.",
    perfectFor: ["Wedding invites & ceremonies", "Welcome & bridesmaid gifts", "Return favours", "Baby showers & birthdays"],
  },
  {
    name: "Shringar", color: "#2F6B3F", tone: "green", image: "/images/tag-06.jpg", kind: "Hamper",
    story: "A thoughtfully curated hamper for occasions that carry generations of tradition, love and blessings: a tan leather basket with a saree, bangles and flowers, customised to your occasion and budget.",
    perfectFor: ["Weddings", "Shagun", "New beginnings", "House warming", "Festive return gifts"],
  },
  {
    name: "A Basket of Sunshine", color: "#C9A227", tone: "gold", image: "/images/tag-07.jpg", kind: "Hamper",
    story: "A cheerful little hamper designed to make your sweetest moments even more special. Thoughtfully curated, beautifully presented and customisable to make every gift feel personal.",
    perfectFor: ["Birthdays & special surprises", "Housewarmings & new beginnings", "Bachelorette parties"],
  },
  {
    name: "Corporate", color: "#7A5A9A", tone: "plum", image: "/images/tag-08.jpg", kind: "Corporate hampers",
    story: "Because corporate gifting doesn’t have to mean boring. Hampers for the people who matter to your business, built around your team, your client and your budget.",
    perfectFor: ["Welcome hampers", "Festive hampers", "Client gifting", "Employee rewards", "Team celebrations"],
  },
  {
    name: "Pretty in Pink", color: "#C43C6A", tone: "red", image: "/images/tag-09.jpg", kind: "Hamper",
    story: "Pretty in pink, with a little lace and a whole lot of love. A pink hamper filled with thoughtful touches and adorable details for the girls who deserve a little extra sparkle.",
    perfectFor: ["Birthday surprises", "Bachelorette parties", "Bridesmaid proposals", "Girls’ get-togethers"],
  },
  {
    name: "Diwali", color: "#8A5A1E", tone: "gold", image: "/images/tag-10.jpg", kind: "Festive hamper",
    story: "This Diwali, gift a little more than just a hamper. Gift a feeling: curated with festive charm and timeless traditions in a velvet box with diyas and sweets.",
    perfectFor: ["Diwali gifting", "Festive gifting"],
  },
];

export const occasions = ["Wedding", "Corporate", "Engagement", "Baby shower", "Birthday"];

export const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export type Kind = keyof typeof products;
export const kinds = Object.keys(products) as Kind[];

/* Budget slider range and wording differ by category. Adjust these to the real price bands. */
export const kindConfig: Record<Kind, { min: number; max: number; step: number; start: number; unit: string; units: string }> = {
  Invites: { min: 150, max: 3000, step: 50, start: 500, unit: "invite", units: "invites" },
  Favours: { min: 150, max: 1000, step: 25, start: 300, unit: "favour", units: "favours" },
  Hampers: { min: 1000, max: 5000, step: 100, start: 2000, unit: "hamper", units: "hampers" },
};

export type Pick = { kind: string; name: string; price: number; role: "Main" | "Pair with" };
export type Suggestion = {
  picks: Pick[];
  perGift: number;
  leftover: number;
  alternatives: { name: string; price: number }[];
  /** Set when the budget is below every option in this category. */
  shortfall?: { name: string; price: number };
};

/**
 * Within the chosen category, pick the priciest priced product that fits the per-gift budget.
 * Leftover budget goes to the priciest favour that fits (invites and hampers only).
 * Products without a price are skipped until a real price is set.
 */
export function suggest(kind: Kind, occasion: string, budget: number): Suggestion {
  const usable = (list: Product[]) =>
    list.filter((p) => p.from !== undefined && (!p.onlyFor || p.onlyFor === occasion)).map((p) => ({ name: p.name, price: p.from as number }));
  const pool = usable(products[kind]);
  const fits = pool.filter((p) => p.price <= budget).sort((a, b) => b.price - a.price);

  if (!fits.length) {
    const cheapest = [...pool].sort((a, b) => a.price - b.price)[0];
    return { picks: [], perGift: 0, leftover: budget, alternatives: [], shortfall: cheapest };
  }

  const main = fits[0];
  const picks: Pick[] = [{ kind, name: main.name, price: main.price, role: "Main" }];
  let left = budget - main.price;

  if (kind !== "Favours") {
    const addon = usable(products.Favours).filter((p) => p.price <= left).sort((a, b) => b.price - a.price)[0];
    if (addon) {
      picks.push({ kind: "Favours", name: addon.name, price: addon.price, role: "Pair with" });
      left -= addon.price;
    }
  }

  const alternatives = fits.slice(1, 3);
  return { picks, perGift: budget - left, leftover: left, alternatives };
}
