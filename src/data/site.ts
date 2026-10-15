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

export const collections = [
  {
    name: "Goan Reverie", color: "#2F4E9E", tone: "blue" as Tone, image: "/images/tag-01.jpg", kind: "Goan wedding",
    story: "Blue lace florals and pearls, inspired by old Goan houses. The invite frames the couple in embroidery, and the hamper repeats the blue in ceramics and ribbon.",
    parts: ["Lace invite", "Tile favour box", "Ceramic hamper"],
  },
  {
    name: "The Forever Invite", color: "#7A1F26", tone: "red" as Tone, image: "/images/tag-02.jpg", kind: "Couple-personalised",
    story: "A deep oxblood board with a pearl strand and a small polaroid of the couple. Tied with a ribbon so the invite opens like a keepsake.",
    parts: ["Polaroid invite", "Pearl favour", "Ribbon sleeve"],
  },
  {
    name: "Shringar", color: "#2F6B3F", tone: "green" as Tone, image: "/images/tag-06.jpg", kind: "Bridal trousseau",
    story: "A tan leather basket lined with a Banarasi saree, bangles and flowers. Made for the bride’s side, packed in emerald and gold.",
    parts: ["Leather basket", "Saree wrap", "Bangle set"],
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
