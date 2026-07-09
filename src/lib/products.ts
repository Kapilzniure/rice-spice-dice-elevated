import heroImg from "@/assets/hero.png";
import chickenImg from "@/assets/chicken.jpg";
import spicesImg from "@/assets/spices.jpg";
import produceImg from "@/assets/produce.jpg";
import riceImg from "@/assets/rice.jpg";
import fruitImg from "@/assets/fruit.jpg";
import bakeryImg from "@/assets/bakery.jpg";
import seafoodImg from "@/assets/seafood.jpg";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  tag?: string;
  badge?: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

/* ------------------------------------------------------------------ */
/*  Categories                                                         */
/* ------------------------------------------------------------------ */

export const categories: Category[] = [
  { id: "all", name: "All Products", icon: "🛒" },
  { id: "produce", name: "Fresh Produce", icon: "🥬" },
  { id: "chicken", name: "Premium Chicken", icon: "🍗" },
  { id: "rice", name: "Rice & Grains", icon: "🍚" },
  { id: "spices", name: "Spices", icon: "🌶️" },
  { id: "fruit", name: "Fresh Fruit", icon: "🥭" },
  { id: "bakery", name: "Bakery", icon: "🍞" },
  { id: "seafood", name: "Seafood", icon: "🐟" },
  { id: "dairy", name: "Dairy & Frozen", icon: "🧊" },
];

/* ------------------------------------------------------------------ */
/*  Products                                                           */
/* ------------------------------------------------------------------ */

export const products: Product[] = [
  /* ---- Fresh Produce ---- */
  { id: "p01", name: "Heirloom Tomatoes", price: 6.9, unit: "per kg", category: "produce", image: produceImg, tag: "Local · NSW", description: "Vine-ripened, bursting with flavour" },
  { id: "p02", name: "Baby Spinach", price: 4.5, unit: "per bunch", category: "produce", image: produceImg, tag: "Fresh", description: "Tender leaves, perfect for salads or cooking" },
  { id: "p03", name: "Fresh Coriander", price: 2.5, unit: "per bunch", category: "produce", image: produceImg, tag: "Essential", description: "Fragrant bunches, picked fresh" },
  { id: "p04", name: "Green Chillies", price: 12.9, unit: "per kg", category: "produce", image: produceImg, description: "Medium heat, great for curries" },
  { id: "p05", name: "Fresh Ginger Root", price: 14.9, unit: "per kg", category: "produce", image: produceImg, tag: "Popular", description: "Aromatic and essential for Asian cooking" },

  /* ---- Premium Chicken ---- */
  { id: "c01", name: "Whole Chicken", price: 14.9, unit: "each (~1.6kg)", category: "chicken", image: chickenImg, badge: "Halal", tag: "Best Seller", description: "Free-range, cut and cleaned in-store" },
  { id: "c02", name: "Chicken Breast Fillet", price: 16.5, unit: "per kg", category: "chicken", image: chickenImg, badge: "Halal", description: "Lean and trimmed, ready to cook" },
  { id: "c03", name: "Chicken Thigh Fillet", price: 15.9, unit: "per kg", category: "chicken", image: chickenImg, badge: "Halal", tag: "Popular", description: "Juicy and flavourful, perfect for curries" },
  { id: "c04", name: "Chicken Drumsticks", price: 9.9, unit: "per kg", category: "chicken", image: chickenImg, badge: "Halal", tag: "Value", description: "Family favourite, great on the grill" },
  { id: "c05", name: "Chicken Wings", price: 11.5, unit: "per kg", category: "chicken", image: chickenImg, badge: "Halal", description: "Perfect for frying, grilling or baking" },
  { id: "c06", name: "Marinated Chicken Cuts", price: 18.0, unit: "per kg", category: "chicken", image: chickenImg, badge: "Halal", tag: "Chef's Pick", description: "Seasoned in-store with our signature spice blend" },

  /* ---- Rice & Grains ---- */
  { id: "r01", name: "Basmati Rice 5kg", price: 18.9, unit: "per bag", category: "rice", image: riceImg, tag: "Best Seller", description: "Premium aged long-grain basmati" },
  { id: "r02", name: "Jasmine Rice 5kg", price: 15.9, unit: "per bag", category: "rice", image: riceImg, description: "Fragrant Thai jasmine rice" },
  { id: "r03", name: "Brown Rice 2kg", price: 8.9, unit: "per bag", category: "rice", image: riceImg, tag: "Healthy", description: "Whole grain, nutty flavour" },
  { id: "r04", name: "Red Lentils 1kg", price: 5.5, unit: "per bag", category: "rice", image: riceImg, description: "Quick-cooking, great for daal" },
  { id: "r05", name: "Chickpeas 1kg", price: 4.9, unit: "per bag", category: "rice", image: riceImg, description: "Dried, perfect for curries and hummus" },

  /* ---- Spices ---- */
  { id: "s01", name: "Garam Masala 100g", price: 4.9, unit: "per pack", category: "spices", image: spicesImg, tag: "Essential", description: "Aromatic blend for curries and stews" },
  { id: "s02", name: "Turmeric Powder 200g", price: 3.9, unit: "per pack", category: "spices", image: spicesImg, description: "Vibrant colour, earthy warmth" },
  { id: "s03", name: "Cumin Seeds 100g", price: 3.5, unit: "per pack", category: "spices", image: spicesImg, description: "Whole seeds, toast for best flavour" },
  { id: "s04", name: "Cardamom Pods 50g", price: 6.9, unit: "per pack", category: "spices", image: spicesImg, tag: "Premium", description: "Green cardamom, intensely fragrant" },
  { id: "s05", name: "Kashmiri Chilli 200g", price: 4.5, unit: "per pack", category: "spices", image: spicesImg, description: "Mild heat, deep red colour" },

  /* ---- Fresh Fruit ---- */
  { id: "f01", name: "Alphonso Mangoes", price: 4.9, unit: "each", category: "fruit", image: fruitImg, tag: "Just Landed", description: "The king of mangoes — sweet and creamy" },
  { id: "f02", name: "Bananas", price: 3.9, unit: "per kg", category: "fruit", image: fruitImg, description: "Queensland grown, perfectly ripe" },
  { id: "f03", name: "Pomegranate", price: 5.9, unit: "each", category: "fruit", image: fruitImg, description: "Ruby red seeds, bursting with juice" },
  { id: "f04", name: "Dragon Fruit", price: 7.9, unit: "each", category: "fruit", image: fruitImg, tag: "Exotic", description: "Sweet, mild and stunning on any plate" },

  /* ---- Bakery ---- */
  { id: "b01", name: "Artisan Sourdough", price: 7.5, unit: "per loaf", category: "bakery", image: bakeryImg, tag: "Baked at 6am", description: "Crusty outside, soft inside" },
  { id: "b02", name: "Naan Bread 5pk", price: 5.9, unit: "per pack", category: "bakery", image: bakeryImg, description: "Soft and fluffy, ready to warm" },
  { id: "b03", name: "Roti 10pk", price: 4.9, unit: "per pack", category: "bakery", image: bakeryImg, tag: "Popular", description: "Traditional unleavened flatbread" },
  { id: "b04", name: "Pita Bread 6pk", price: 4.5, unit: "per pack", category: "bakery", image: bakeryImg, description: "Perfect for wraps and dipping" },

  /* ---- Seafood ---- */
  { id: "sf01", name: "King Prawns", price: 28.9, unit: "per kg", category: "seafood", image: seafoodImg, tag: "Fresh Today", description: "Large, wild-caught, on ice" },
  { id: "sf02", name: "Salmon Fillet", price: 32.9, unit: "per kg", category: "seafood", image: seafoodImg, tag: "Premium", description: "Atlantic salmon, skin-on fillets" },
  { id: "sf03", name: "Barramundi", price: 26.9, unit: "per kg", category: "seafood", image: seafoodImg, description: "Australian farmed, clean and mild" },
  { id: "sf04", name: "Fish Curry Cut", price: 18.9, unit: "per kg", category: "seafood", image: seafoodImg, tag: "Value", description: "Mixed fish pieces, ideal for curry" },

  /* ---- Dairy & Frozen ---- */
  { id: "d01", name: "Fresh Paneer 400g", price: 7.9, unit: "per pack", category: "dairy", image: heroImg, tag: "Popular", description: "Soft Indian cottage cheese" },
  { id: "d02", name: "Greek Yoghurt 1kg", price: 6.5, unit: "per tub", category: "dairy", image: heroImg, description: "Thick, creamy and tangy" },
  { id: "d03", name: "Frozen Samosas 12pk", price: 8.9, unit: "per pack", category: "dairy", image: heroImg, tag: "Family Pack", description: "Crispy vegetable samosas, ready to fry" },
  { id: "d04", name: "Frozen Paratha 5pk", price: 5.5, unit: "per pack", category: "dairy", image: heroImg, description: "Flaky layered flatbread" },
];
