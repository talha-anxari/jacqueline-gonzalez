/* ==========================================================================
   PRODUCTS.JS — Dummy/static data for "From the Ridge to the Water"
   by Jacqueline Gonzalez
   Replace cover/image paths with real assets whenever ready.
   ========================================================================== */

const bookCover = "../images/book1.webp";

const productsData = [
  {
    id: 1,
    name: "Hardcover Edition",
    tagline: "Cloth-bound, with dust jacket",
    price: 2450,
    oldPrice: 2900,
    cover: bookCover,
    badge: "Bestseller",
    blurb: "The full hardcover printing — heavier stock, a stitched spine, and the complete jacket artwork front to back."
  },
  {
    id: 2,
    name: "Paperback Edition",
    tagline: "Travel-friendly, same pages",
    price: 1350,
    oldPrice: null,
    cover: bookCover,
    badge: null,
    blurb: "The same ridge-to-water journey, in a lighter paperback printing built for reading on the move."
  },
  {
    id: 3,
    name: "Signed First Printing",
    tagline: "Limited run, signed by the author",
    price: 3600,
    oldPrice: null,
    cover: bookCover,
    badge: "Limited",
    blurb: "From the first print run, signed by Jacqueline Gonzalez. Numbered while stock lasts."
  },
  {
    id: 4,
    name: "Audiobook Edition",
    tagline: "Narrated by the author",
    price: 1100,
    oldPrice: 1400,
    cover: bookCover,
    badge: "New",
    blurb: "Nine hours, narrated by Jacqueline Gonzalez herself — recorded near the coastline the book is set on."
  }
];

function getProductById(id) {
  return productsData.find(p => p.id === parseInt(id));
}
