/*
 * PRIYAMVADI — shop settings and product catalogue.
 *
 * This is the only file you need to edit to update the website:
 *   - Put the real WhatsApp number, Instagram handle and email in SHOP.
 *   - Add / remove / re-price sarees in PRODUCTS.
 *
 * Images live in ./images. The first image of each colour is the one shown
 * on the product card; any extra images appear in the product gallery.
 */

const SHOP = {
  name: "Priyamvadi",
  // WhatsApp number with country code, digits only (e.g. "919876543210").
  // Leave empty until you have it — buttons will then open WhatsApp without a recipient.
  whatsapp: "",
  instagram: "", // handle without the @, e.g. "priyamvadi.sarees"
  email: "",
  city: "Varanasi",
};

// Filter chips shown above the collection, in this order.
const FABRICS = [
  "Pure Katan",
  "Banarasi Chiffon",
  "Traditional Banarasi",
  "Malai Silk",
  "Dupion Silk",
  "Georgette Silk",
  "Cotton Silk",
];

const PRODUCTS = [
  {
    id: "pure-katan-banarasi",
    name: "Pure Katan Banarasi",
    fabric: "Pure Katan",
    price: 6850,
    desc: "Striped katan silk scattered with zari paisley buttis, finished with a broad gold brocade border and pallu.",
    variants: [
      { color: "Pyazi", hex: "#9b4fc0", images: ["katan-pyazi", "katan-pyazi-2", "katan-pyazi-3"] },
    ],
  },
  {
    id: "pure-katan-heavy",
    name: "Pure Katan Heavy Banarasi",
    fabric: "Pure Katan",
    price: 6850,
    desc: "A dense all-over zari jaal on rich katan silk with a wide woven border — our most opulent weave.",
    variants: [
      { color: "Jamuni", hex: "#4b1e5c", images: ["heavy-jamuni", "heavy-jamuni-2", "heavy-jamuni-3"] },
    ],
  },
  {
    id: "pure-katan-contrast-border",
    name: "Pure Katan Contrast Border",
    fabric: "Pure Katan",
    price: 6850,
    desc: "Katan silk body with woven zari motifs, set against a contrasting brocade border and pallu.",
    variants: [
      { color: "Jamuni", hex: "#4a2a8c", images: ["contrast-jamuni", "contrast-jamuni-2"] },
      { color: "Firozi", hex: "#1f45b5", images: ["contrast-firozi", "contrast-firozi-2", "contrast-firozi-3"] },
    ],
  },
  {
    id: "pure-katan-geometrical",
    name: "Pure Katan Geometrical",
    fabric: "Pure Katan",
    price: 6850,
    desc: "Geometric diamond weave in silver zari on katan silk, framed by a contrasting silver brocade border.",
    variants: [
      { color: "Pink", hex: "#c2246f", images: ["geo-pink", "geo-pink-2", "geo-pink-3"] },
    ],
  },
  {
    id: "pure-katan-lightweight",
    name: "Pure Katan Lightweight Banarasi",
    fabric: "Pure Katan",
    price: 6550,
    desc: "All the grace of katan silk in a lighter drape — floral zari buttis and a classic woven border, easy to wear all day.",
    variants: [
      { color: "Rani", hex: "#d61f78", images: ["light-rani", "light-rani-2", "light-rani-3"] },
      { color: "Kathai", hex: "#4a2a22", images: ["light-kathai"] },
      { color: "Morpankhi", hex: "#4a6fa5", images: ["light-morpankhi"] },
      { color: "Basanti", hex: "#f2df4a", images: ["light-basanti"] },
      { color: "Golden", hex: "#a77b2c", images: ["light-golden"] },
      { color: "Sindoori", hex: "#c8102e", images: ["light-sindoori"] },
      { color: "Sea Green", hex: "#5fc8bf", images: ["light-seagreen", "light-seagreen-2"] },
    ],
  },
  {
    id: "pure-katan-banarasi-sari",
    name: "Pure Katan Banarasi Sari",
    fabric: "Pure Katan",
    price: 6550,
    desc: "The Banarasi tree motif woven in gold zari across vivid katan silk, with a paisley brocade border.",
    variants: [
      { color: "Surkh Red", hex: "#d81e1e", images: ["surkh-red", "surkh-red-2", "surkh-red-3"] },
    ],
  },
  {
    id: "chiffon-rangkat",
    name: "Banarasi Chiffon Silk — Rangkat",
    fabric: "Banarasi Chiffon",
    price: 7500,
    desc: "Feather-light chiffon silk with multicolour resham florals and a silver zari border — soft, fluid and festive.",
    variants: [
      { color: "Badami", hex: "#e9a38c", images: ["rangkat-badami", "rangkat-badami-2", "rangkat-badami-3"] },
      { color: "Mauve", hex: "#c8a2d0", images: ["rangkat-mauve", "rangkat-mauve-2", "rangkat-mauve-3"] },
    ],
  },
  {
    id: "chiffon-meenakari",
    name: "Banarasi Chiffon with Meenakari",
    fabric: "Banarasi Chiffon",
    price: 7500,
    desc: "Chiffon silk woven with diagonal zari stripes and meenakari florals in coloured resham.",
    variants: [
      { color: "Ivory", hex: "#c9c3a0", images: ["chiffon-meenakari-ivory"] },
    ],
  },
  {
    id: "traditional-meenakari",
    name: "Traditional Banarasi Meenakari",
    fabric: "Traditional Banarasi",
    price: 4000,
    desc: "Classic meenakari buttis in jewel-toned resham, a floral meenakari pallu and a contrast magenta edge.",
    variants: [
      { color: "Bottle Green", hex: "#0f5a3c", images: ["meenakari-bottlegreen", "meenakari-bottlegreen-2", "meenakari-bottlegreen-3"] },
    ],
  },
  {
    id: "traditional-contrast",
    name: "Traditional Banarasi — Contrast Colour",
    fabric: "Traditional Banarasi",
    price: 4000,
    desc: "Bold orange and fuchsia in conversation — zari buttis on the body, a richly brocaded contrast border and pallu.",
    variants: [
      { color: "Kesari", hex: "#f08a12", images: ["contrast-kesari", "contrast-kesari-2", "contrast-kesari-3"] },
    ],
  },
  {
    id: "malai-meenakari",
    name: "Malai Silk Meenakari",
    fabric: "Malai Silk",
    price: 2300,
    desc: "Smooth, lustrous malai silk with colourful meenakari florals and a gold zari border.",
    variants: [
      { color: "Mehandi", hex: "#1f8a2e", images: ["malai-mehandi", "malai-mehandi-2", "malai-mehandi-3"] },
    ],
  },
  {
    id: "malai-geometrical",
    name: "Malai Silk Geometrical",
    fabric: "Malai Silk",
    price: 2300,
    desc: "An all-over geometric zari pattern on soft malai silk, with a matching blouse piece.",
    variants: [
      { color: "Gajri", hex: "#d46a8c", images: ["malai-gajri", "malai-gajri-2", "malai-gajri-3"] },
    ],
  },
  {
    id: "malai-palm-motif",
    name: "Malai Silk Palm Motif",
    fabric: "Malai Silk",
    price: 2300,
    desc: "Graceful palm motifs woven in zari, with a deep gold border — available in five colours.",
    variants: [
      { color: "Pyazi", hex: "#a678b8", images: ["palm-pyazi", "palm-flatlay"] },
      { color: "Rama Green", hex: "#22336b", images: ["palm-ramagreen"] },
      { color: "Rani", hex: "#cf1a8a", images: ["palm-rani"] },
      { color: "Mustard", hex: "#d9a515", images: ["palm-mustard", "palm-flatlay"] },
      { color: "Surkh Red", hex: "#d0182a", images: ["palm-surkhred", "palm-flatlay"] },
    ],
  },
  {
    id: "malai-meenakari-boota",
    name: "Malai Silk Meenakari Boota",
    fabric: "Malai Silk",
    price: 2300,
    desc: "Leaf-and-flower bootas with touches of meenakari colour, a silver zari border and pallu.",
    variants: [
      { color: "Firozi", hex: "#2aa7c4", images: ["boota-firozi"] },
      { color: "Jamuni", hex: "#7a2a9c", images: ["boota-jamuni"] },
      { color: "Peach", hex: "#f2604f", images: ["boota-peach"] },
      { color: "Rama Green", hex: "#14798a", images: ["boota-ramagreen"] },
    ],
  },
  {
    id: "malai-booti",
    name: "Malai Silk Booti",
    fabric: "Malai Silk",
    price: 2300,
    desc: "Delicate polka-style zari booti across the body with an ornate woven pallu.",
    variants: [
      { color: "Wine", hex: "#7a1424", images: ["booti-wine", "booti-wine-2", "booti-wine-3"] },
      { color: "Gulabi", hex: "#b81f74", images: ["booti-gulabi"] },
    ],
  },
  {
    id: "malai-jungala",
    name: "Malai Silk Jungala",
    fabric: "Malai Silk",
    price: 2300,
    desc: "The traditional jangla — an all-over trellis of zari vines and flowers — on malai silk, in six colours.",
    variants: [
      { color: "Sindoori", hex: "#c4143c", images: ["jungala-sindoori", "jungala-moodboard"] },
      { color: "Kesari", hex: "#ee4a28", images: ["jungala-kesari", "jungala-moodboard"] },
      { color: "Mustard", hex: "#b4561c", images: ["jungala-mustard"] },
      { color: "Firozi", hex: "#1b98c4", images: ["jungala-firozi"] },
      { color: "Pyazi", hex: "#8e6bb0", images: ["jungala-pyazi"] },
      { color: "Navy Blue", hex: "#1c2350", images: ["jungala-navy"] },
    ],
  },
  {
    id: "dupion-zari",
    name: "Dupion Silk with Zari",
    fabric: "Dupion Silk",
    price: 1750,
    desc: "Textured dupion silk with zari buttis and a broad gold border — festive and easy on the pocket.",
    variants: [
      { color: "Mustard", hex: "#d58b12", images: ["dupion-mustard", "dupion-folded"] },
      { color: "Mauve", hex: "#cfa6d6", images: ["dupion-mauve", "dupion-folded"] },
      { color: "Magenta", hex: "#c8127a", images: ["dupion-magenta"] },
      { color: "Peach", hex: "#ee6a50", images: ["dupion-peach"] },
      { color: "Rama Green", hex: "#14708a", images: ["dupion-ramagreen"] },
    ],
  },
  {
    id: "georgette-silk",
    name: "Georgette Silk",
    fabric: "Georgette Silk",
    price: 2000,
    desc: "Flowing georgette silk with an all-over gold zari pattern and a woven border.",
    variants: [
      { color: "Sindoori", hex: "#c0141e", images: ["georgette-sindoori", "georgette-sindoori-2", "georgette-sindoori-3"] },
    ],
  },
  {
    id: "cotton-silk-resham",
    name: "Cotton Silk with Resham Embroidery",
    fabric: "Cotton Silk",
    price: 1400,
    desc: "Breathable cotton silk with resham florals and a rust-and-gold woven border.",
    variants: [
      { color: "Black", hex: "#1d1d22", images: ["resham-black"] },
    ],
  },
  {
    id: "cotton-silk-boota",
    name: "Cotton Silk with Boota Zari",
    fabric: "Cotton Silk",
    price: 1600,
    desc: "Light cotton silk with zari bootas and a contrast magenta brocade border.",
    variants: [
      // The lookbook labels this "Black", but the photo shows a coral-pink saree. Confirm with the owner.
      { color: "Coral Pink", hex: "#e8807a", images: ["cotton-boota"] },
    ],
  },
];
