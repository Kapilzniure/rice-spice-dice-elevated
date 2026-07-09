import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useCart } from "./cart-context-CrjvjMqV.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { R as ArrowLeft, _ as Minus, a as Trash2, d as ShoppingCart, f as ShoppingBag, h as Plus, l as Sparkles, m as Search, t as X } from "../_libs/lucide-react.mjs";
import { a as produce_default, c as spices_default, i as hero_default, n as chicken_default, o as rice_default, r as fruit_default, s as seafood_default, t as bakery_default } from "./seafood-B-Cu_-sQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-CtMMKZ9V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	{
		id: "all",
		name: "All Products",
		icon: "🛒"
	},
	{
		id: "produce",
		name: "Fresh Produce",
		icon: "🥬"
	},
	{
		id: "chicken",
		name: "Premium Chicken",
		icon: "🍗"
	},
	{
		id: "rice",
		name: "Rice & Grains",
		icon: "🍚"
	},
	{
		id: "spices",
		name: "Spices",
		icon: "🌶️"
	},
	{
		id: "fruit",
		name: "Fresh Fruit",
		icon: "🥭"
	},
	{
		id: "bakery",
		name: "Bakery",
		icon: "🍞"
	},
	{
		id: "seafood",
		name: "Seafood",
		icon: "🐟"
	},
	{
		id: "dairy",
		name: "Dairy & Frozen",
		icon: "🧊"
	}
];
var products = [
	{
		id: "p01",
		name: "Heirloom Tomatoes",
		price: 6.9,
		unit: "per kg",
		category: "produce",
		image: produce_default,
		tag: "Local · NSW",
		description: "Vine-ripened, bursting with flavour"
	},
	{
		id: "p02",
		name: "Baby Spinach",
		price: 4.5,
		unit: "per bunch",
		category: "produce",
		image: produce_default,
		tag: "Fresh",
		description: "Tender leaves, perfect for salads or cooking"
	},
	{
		id: "p03",
		name: "Fresh Coriander",
		price: 2.5,
		unit: "per bunch",
		category: "produce",
		image: produce_default,
		tag: "Essential",
		description: "Fragrant bunches, picked fresh"
	},
	{
		id: "p04",
		name: "Green Chillies",
		price: 12.9,
		unit: "per kg",
		category: "produce",
		image: produce_default,
		description: "Medium heat, great for curries"
	},
	{
		id: "p05",
		name: "Fresh Ginger Root",
		price: 14.9,
		unit: "per kg",
		category: "produce",
		image: produce_default,
		tag: "Popular",
		description: "Aromatic and essential for Asian cooking"
	},
	{
		id: "c01",
		name: "Whole Chicken",
		price: 14.9,
		unit: "each (~1.6kg)",
		category: "chicken",
		image: chicken_default,
		badge: "Halal",
		tag: "Best Seller",
		description: "Free-range, cut and cleaned in-store"
	},
	{
		id: "c02",
		name: "Chicken Breast Fillet",
		price: 16.5,
		unit: "per kg",
		category: "chicken",
		image: chicken_default,
		badge: "Halal",
		description: "Lean and trimmed, ready to cook"
	},
	{
		id: "c03",
		name: "Chicken Thigh Fillet",
		price: 15.9,
		unit: "per kg",
		category: "chicken",
		image: chicken_default,
		badge: "Halal",
		tag: "Popular",
		description: "Juicy and flavourful, perfect for curries"
	},
	{
		id: "c04",
		name: "Chicken Drumsticks",
		price: 9.9,
		unit: "per kg",
		category: "chicken",
		image: chicken_default,
		badge: "Halal",
		tag: "Value",
		description: "Family favourite, great on the grill"
	},
	{
		id: "c05",
		name: "Chicken Wings",
		price: 11.5,
		unit: "per kg",
		category: "chicken",
		image: chicken_default,
		badge: "Halal",
		description: "Perfect for frying, grilling or baking"
	},
	{
		id: "c06",
		name: "Marinated Chicken Cuts",
		price: 18,
		unit: "per kg",
		category: "chicken",
		image: chicken_default,
		badge: "Halal",
		tag: "Chef's Pick",
		description: "Seasoned in-store with our signature spice blend"
	},
	{
		id: "r01",
		name: "Basmati Rice 5kg",
		price: 18.9,
		unit: "per bag",
		category: "rice",
		image: rice_default,
		tag: "Best Seller",
		description: "Premium aged long-grain basmati"
	},
	{
		id: "r02",
		name: "Jasmine Rice 5kg",
		price: 15.9,
		unit: "per bag",
		category: "rice",
		image: rice_default,
		description: "Fragrant Thai jasmine rice"
	},
	{
		id: "r03",
		name: "Brown Rice 2kg",
		price: 8.9,
		unit: "per bag",
		category: "rice",
		image: rice_default,
		tag: "Healthy",
		description: "Whole grain, nutty flavour"
	},
	{
		id: "r04",
		name: "Red Lentils 1kg",
		price: 5.5,
		unit: "per bag",
		category: "rice",
		image: rice_default,
		description: "Quick-cooking, great for daal"
	},
	{
		id: "r05",
		name: "Chickpeas 1kg",
		price: 4.9,
		unit: "per bag",
		category: "rice",
		image: rice_default,
		description: "Dried, perfect for curries and hummus"
	},
	{
		id: "s01",
		name: "Garam Masala 100g",
		price: 4.9,
		unit: "per pack",
		category: "spices",
		image: spices_default,
		tag: "Essential",
		description: "Aromatic blend for curries and stews"
	},
	{
		id: "s02",
		name: "Turmeric Powder 200g",
		price: 3.9,
		unit: "per pack",
		category: "spices",
		image: spices_default,
		description: "Vibrant colour, earthy warmth"
	},
	{
		id: "s03",
		name: "Cumin Seeds 100g",
		price: 3.5,
		unit: "per pack",
		category: "spices",
		image: spices_default,
		description: "Whole seeds, toast for best flavour"
	},
	{
		id: "s04",
		name: "Cardamom Pods 50g",
		price: 6.9,
		unit: "per pack",
		category: "spices",
		image: spices_default,
		tag: "Premium",
		description: "Green cardamom, intensely fragrant"
	},
	{
		id: "s05",
		name: "Kashmiri Chilli 200g",
		price: 4.5,
		unit: "per pack",
		category: "spices",
		image: spices_default,
		description: "Mild heat, deep red colour"
	},
	{
		id: "f01",
		name: "Alphonso Mangoes",
		price: 4.9,
		unit: "each",
		category: "fruit",
		image: fruit_default,
		tag: "Just Landed",
		description: "The king of mangoes — sweet and creamy"
	},
	{
		id: "f02",
		name: "Bananas",
		price: 3.9,
		unit: "per kg",
		category: "fruit",
		image: fruit_default,
		description: "Queensland grown, perfectly ripe"
	},
	{
		id: "f03",
		name: "Pomegranate",
		price: 5.9,
		unit: "each",
		category: "fruit",
		image: fruit_default,
		description: "Ruby red seeds, bursting with juice"
	},
	{
		id: "f04",
		name: "Dragon Fruit",
		price: 7.9,
		unit: "each",
		category: "fruit",
		image: fruit_default,
		tag: "Exotic",
		description: "Sweet, mild and stunning on any plate"
	},
	{
		id: "b01",
		name: "Artisan Sourdough",
		price: 7.5,
		unit: "per loaf",
		category: "bakery",
		image: bakery_default,
		tag: "Baked at 6am",
		description: "Crusty outside, soft inside"
	},
	{
		id: "b02",
		name: "Naan Bread 5pk",
		price: 5.9,
		unit: "per pack",
		category: "bakery",
		image: bakery_default,
		description: "Soft and fluffy, ready to warm"
	},
	{
		id: "b03",
		name: "Roti 10pk",
		price: 4.9,
		unit: "per pack",
		category: "bakery",
		image: bakery_default,
		tag: "Popular",
		description: "Traditional unleavened flatbread"
	},
	{
		id: "b04",
		name: "Pita Bread 6pk",
		price: 4.5,
		unit: "per pack",
		category: "bakery",
		image: bakery_default,
		description: "Perfect for wraps and dipping"
	},
	{
		id: "sf01",
		name: "King Prawns",
		price: 28.9,
		unit: "per kg",
		category: "seafood",
		image: seafood_default,
		tag: "Fresh Today",
		description: "Large, wild-caught, on ice"
	},
	{
		id: "sf02",
		name: "Salmon Fillet",
		price: 32.9,
		unit: "per kg",
		category: "seafood",
		image: seafood_default,
		tag: "Premium",
		description: "Atlantic salmon, skin-on fillets"
	},
	{
		id: "sf03",
		name: "Barramundi",
		price: 26.9,
		unit: "per kg",
		category: "seafood",
		image: seafood_default,
		description: "Australian farmed, clean and mild"
	},
	{
		id: "sf04",
		name: "Fish Curry Cut",
		price: 18.9,
		unit: "per kg",
		category: "seafood",
		image: seafood_default,
		tag: "Value",
		description: "Mixed fish pieces, ideal for curry"
	},
	{
		id: "d01",
		name: "Fresh Paneer 400g",
		price: 7.9,
		unit: "per pack",
		category: "dairy",
		image: hero_default,
		tag: "Popular",
		description: "Soft Indian cottage cheese"
	},
	{
		id: "d02",
		name: "Greek Yoghurt 1kg",
		price: 6.5,
		unit: "per tub",
		category: "dairy",
		image: hero_default,
		description: "Thick, creamy and tangy"
	},
	{
		id: "d03",
		name: "Frozen Samosas 12pk",
		price: 8.9,
		unit: "per pack",
		category: "dairy",
		image: hero_default,
		tag: "Family Pack",
		description: "Crispy vegetable samosas, ready to fry"
	},
	{
		id: "d04",
		name: "Frozen Paratha 5pk",
		price: 5.5,
		unit: "per pack",
		category: "dairy",
		image: hero_default,
		description: "Flaky layered flatbread"
	}
];
function ShopNav({ onCartOpen, totalItems }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "glass-nav fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-3 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "btn-ghost !p-0 flex h-10 w-10 items-center justify-center rounded-full",
				"aria-label": "Back to home",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 20 })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "font-display text-lg font-semibold tracking-tight text-foreground",
				children: [
					"Rice",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-saffron",
						children: "·"
					}),
					"Spice",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-saffron",
						children: "·"
					}),
					"Dice"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: onCartOpen,
			className: "btn-ghost !p-0 relative flex h-10 w-10 items-center justify-center rounded-full",
			"aria-label": "Open cart",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { size: 22 }), totalItems > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: { scale: 0 },
				animate: { scale: 1 },
				className: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-saffron text-[11px] font-bold text-ink",
				children: totalItems
			})]
		})]
	});
}
var CATEGORY_EMOJIS = {
	all: "🛒",
	rice: "🍚",
	spices: "🌶️",
	lentils: "🫘",
	flour: "🌾",
	oils: "🫒",
	snacks: "🍿",
	beverages: "🍵",
	dairy: "🧈",
	frozen: "❄️",
	pantry: "🥫",
	sweets: "🍬",
	condiments: "🫙"
};
function CategoryTabs({ active, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hide-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 py-2 sm:-mx-0 sm:flex-wrap sm:px-0",
		children: [{
			id: "all",
			name: "All Products"
		}, ...categories].map((cat) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => onChange(cat.id),
				className: `flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${active === cat.id ? "bg-ink text-cream shadow-soft" : "bg-secondary text-foreground hover:bg-ink/10"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CATEGORY_EMOJIS[cat.id] ?? "📦" }), cat.name]
			}, cat.id);
		})
	});
}
function ProductCard({ product, index }) {
	const { addItem, getItemQuantity, updateQuantity, removeItem } = useCart();
	const qty = getItemQuantity(product.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .35,
			delay: index * .04
		},
		className: "card-lift group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-48 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.name,
					className: "img-zoom h-full w-full object-cover",
					loading: "lazy"
				}),
				product.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 rounded-full bg-saffron px-2.5 py-0.5 text-xs font-semibold text-ink",
					children: product.tag
				}),
				product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute right-3 top-3 rounded-full bg-forest/90 px-2.5 py-0.5 text-xs font-semibold text-cream",
					children: product.badge
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-1.5 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-base font-semibold leading-snug text-foreground",
					children: product.name
				}),
				product.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-sm text-muted-foreground",
					children: product.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-baseline gap-1 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-lg font-bold text-saffron-deep",
						children: ["$", product.price.toFixed(2)]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted-foreground",
						children: ["/ ", product.unit]
					})]
				}),
				qty === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => addItem(product),
					className: "btn-saffron mt-2 w-full rounded-full py-2.5 text-sm font-semibold",
					children: "Add to Cart"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center justify-between rounded-full bg-ink px-1 py-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => qty === 1 ? removeItem(product.id) : updateQuantity(product.id, qty - 1),
							className: "flex h-8 w-8 items-center justify-center rounded-full text-cream transition hover:bg-cream/10",
							"aria-label": "Decrease quantity",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-[2rem] text-center text-sm font-bold text-cream",
							children: qty
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => updateQuantity(product.id, qty + 1),
							className: "flex h-8 w-8 items-center justify-center rounded-full text-cream transition hover:bg-cream/10",
							"aria-label": "Increase quantity",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 })
						})
					]
				})
			]
		})]
	});
}
function CartDrawer({ open, onClose }) {
	const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm",
		onClick: onClose
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
		initial: { x: "100%" },
		animate: { x: 0 },
		exit: { x: "100%" },
		transition: {
			type: "spring",
			damping: 28,
			stiffness: 300
		},
		className: "fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-cream shadow-lift",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border px-6 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "Your Cart"
				}), totalItems > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-full bg-saffron/20 px-2.5 py-0.5 text-xs font-semibold text-saffron-deep",
					children: [
						totalItems,
						" ",
						totalItems === 1 ? "item" : "items"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "btn-ghost !p-0 flex h-9 w-9 items-center justify-center rounded-full",
				"aria-label": "Close cart",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
			})]
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-20 w-20 items-center justify-center rounded-full bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
						size: 36,
						className: "text-muted-foreground"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-semibold text-foreground",
					children: "Your cart is empty"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Browse our collection and add your favourites."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "btn-saffron mt-2 rounded-full px-8 py-2.5 text-sm font-semibold",
					children: "Start Shopping"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex-1 divide-y divide-border overflow-y-auto px-6",
			children: items.map(({ product, quantity }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						className: "h-16 w-16 shrink-0 rounded-xl object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-foreground",
								children: product.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm font-medium text-saffron-deep",
								children: [
									"$",
									product.price.toFixed(2),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground font-normal",
										children: ["/ ", product.unit]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 flex items-center gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center rounded-full border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => quantity === 1 ? removeItem(product.id) : updateQuantity(product.id, quantity - 1),
											className: "flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-secondary",
											"aria-label": "Decrease",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 14 })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-[1.5rem] text-center text-xs font-bold",
											children: quantity
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => updateQuantity(product.id, quantity + 1),
											className: "flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-secondary",
											"aria-label": "Increase",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 })
										})
									]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => removeItem(product.id),
						className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:bg-red-50 hover:text-red-500",
						"aria-label": "Remove item",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
					})
				]
			}, product.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border px-6 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: "Subtotal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-lg font-bold text-foreground",
						children: ["$", totalPrice.toFixed(2)]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs text-muted-foreground",
					children: "Free pickup · Delivery from $5.90"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/checkout",
					onClick: onClose,
					className: "btn-saffron block w-full rounded-full py-3 text-center text-sm font-semibold",
					children: "Proceed to Checkout"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: clearCart,
					className: "btn-ghost mt-2 w-full rounded-full py-2 text-xs",
					children: "Clear Cart"
				})
			]
		})] })]
	})] }) });
}
function DeliveryBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap items-center justify-center gap-3 py-4",
		children: [
			{
				emoji: "🚗",
				text: "Free Pickup"
			},
			{
				emoji: "🕐",
				text: "Ready in 30 min"
			},
			{
				emoji: "📦",
				text: "Delivery from $5.90"
			}
		].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-1.5 rounded-full bg-saffron/10 px-4 py-1.5 text-sm font-medium text-saffron-deep",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.emoji }), p.text]
		}, p.text))
	});
}
function Shop() {
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	const { totalItems } = useCart();
	const filteredProducts = (0, import_react.useMemo)(() => {
		let result = products;
		if (selectedCategory !== "all") result = result.filter((p) => p.category === selectedCategory);
		if (searchQuery.trim()) {
			const q = searchQuery.toLowerCase();
			result = result.filter((p) => p.name.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
		}
		return result;
	}, [selectedCategory, searchQuery]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopNav, {
				onCartOpen: () => setCartOpen(true),
				totalItems
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden bg-gradient-to-br from-saffron/10 via-cream to-forest/5 pt-24 pb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-4 text-center sm:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow mb-2 inline-flex items-center gap-1.5 text-saffron-deep",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 14 }), " Online Grocery"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "display-md font-display mb-3 text-foreground",
								children: "Shop Fresh, Shop Online"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mb-6 max-w-lg text-muted-foreground",
								children: "Authentic spices, premium rice & everyday essentials — delivered to your door or ready for pickup."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto flex max-w-md items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 shadow-soft focus-within:ring-2 focus-within:ring-saffron/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
										size: 18,
										className: "shrink-0 text-muted-foreground"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: searchQuery,
										onChange: (e) => setSearchQuery(e.target.value),
										placeholder: "Search products…",
										className: "w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
									}),
									searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setSearchQuery(""),
										className: "shrink-0 text-muted-foreground transition hover:text-foreground",
										"aria-label": "Clear search",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
									})
								]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-6 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTabs, {
						active: selectedCategory,
						onChange: setSelectedCategory
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliveryBanner, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 flex items-center justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"Showing",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: filteredProducts.length
								}),
								" ",
								filteredProducts.length === 1 ? "product" : "products"
							]
						})
					}),
					filteredProducts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
						children: filteredProducts.map((product, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							product,
							index: i
						}, product.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-3 py-20 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								size: 40,
								className: "text-muted-foreground/40"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-semibold text-foreground",
								children: "No products found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Try a different search term or category."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setSearchQuery("");
									setSelectedCategory("all");
								},
								className: "btn-ghost mt-2 rounded-full px-6 py-2 text-sm font-medium",
								children: "Reset Filters"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {
				open: cartOpen,
				onClose: () => setCartOpen(false)
			})
		]
	});
}
//#endregion
export { Shop as component };
