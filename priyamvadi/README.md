# Priyamvadi — website

A one-page catalogue website for **Priyamvadi**, a Banarasi saree label. It's built from the September lookbook: 20 designs, 45 colourways, ₹1,400–₹7,500. Customers order through WhatsApp.

Plain HTML/CSS/JS. There is no build step, so it runs on any static host (GitHub Pages, Netlify, Cloudflare Pages).

## Files

| File | What it is |
|---|---|
| `index.html` | Page layout: hero, collection, craft glossary, how to order, contact |
| `products.js` | **The only file you normally edit**: shop contact details and the product list |
| `app.js` | Filters, colour switching, product popup, WhatsApp links |
| `styles.css` | Styling, using the lookbook's ivory, gold and serif look |
| `images/` | Product photos taken from the lookbook PDF, cropped and compressed |

## Before going live

1. In `products.js`, fill in `SHOP.whatsapp` (digits with country code, e.g. `919876543210`) and the profile URLs in `SHOP.social`. Empty links are hidden.
2. Check the colour names that look different in the photos:
   - **Cotton Silk with Boota Zari**: the lookbook says "Black", but the photo is coral pink. The site currently says "Coral Pink".
   - **Malai Silk Palm Motif, "Rama Green"**: the photo looks navy blue.
   - **Banarasi Chiffon with Meenakari, "Ivory"**: the photo looks sage green.
3. Most lookbook photos are AI-generated renders, and one (Dupion Peach) carried a "VIJAY Varanasi" badge, which was cropped out. Replace them with real photos of the actual sarees as soon as possible. Buyers expect the saree to match the picture.

## Adding a saree

Put the photo in `images/` (portrait, about 600×800, JPG). Then add an entry to `PRODUCTS` in `products.js`:

```js
{
  id: "malai-silk-new",
  name: "Malai Silk — New Design",
  fabric: "Malai Silk",          // must match one of FABRICS
  price: 2300,
  desc: "One line about the weave.",
  variants: [
    { color: "Rani", hex: "#d61f78", images: ["new-rani", "new-rani-2"] }, // file names without .jpg
  ],
},
```

## Preview locally

```sh
cd priyamvadi && python3 -m http.server 8000   # open http://localhost:8000
```
