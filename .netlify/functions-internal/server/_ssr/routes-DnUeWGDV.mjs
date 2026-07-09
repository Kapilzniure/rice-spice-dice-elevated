import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useTransform, r as useScroll, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { A as Cookie, C as Heart, D as Earth, E as Fish, F as Bell, I as ArrowUpRight, L as ArrowRight, M as Clock, O as Drumstick, P as Car, S as IceCreamCone, T as Flame, b as Mail, c as Star, f as ShoppingBag, g as Phone, j as Coffee, l as Sparkles, n as Wheat, o as Sun, p as ShieldCheck, r as Users, t as X, u as Snowflake, v as Menu, w as Gift, x as Leaf, y as MapPin } from "../_libs/lucide-react.mjs";
import { a as produce_default, c as spices_default, i as hero_default, n as chicken_default, o as rice_default, r as fruit_default, s as seafood_default, t as bakery_default } from "./seafood-B-Cu_-sQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DnUeWGDV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var recipe_butter_chicken_default = "/assets/recipe-butter-chicken-CzJLmAji.jpg";
var recipe_biryani_default = "/assets/recipe-biryani-B0nnyf9H.jpg";
var recipe_thai_default = "/assets/recipe-thai-Bj5GF3hr.jpg";
var store_interior_default = "/assets/store-interior-CE6oiGXN.jpg";
var story_fresh_default = "/assets/story-fresh-81MLjW2P.jpg";
function Reveal({ children, delay = 0, y = 24 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .6,
			delay,
			ease: [
				.2,
				.8,
				.2,
				1
			]
		},
		children
	});
}
/** Organic curved seam between sections of different background tones — part of the
* site's visual signature (inspired by a grain husk / leaf edge) instead of a hard cut. */
function OrganicSeam({ fromClass = "text-cream", flip = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: `pointer-events-none relative z-10 -mb-px h-14 w-full overflow-hidden md:h-20 ${flip ? "-scale-y-100" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 1200 90",
			preserveAspectRatio: "none",
			className: `h-full w-full ${fromClass}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0,32 C180,90 320,0 540,28 C760,56 880,4 1040,20 C1120,28 1160,44 1200,36 L1200,90 L0,90 Z",
				fill: "currentColor"
			})
		})
	});
}
/** Faint organic blob accent (grain/leaf silhouette) used as a background texture cue. */
function OrganicBlob({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 200 200",
		className: `pointer-events-none absolute text-saffron/[0.08] ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M45.8,-58.6C58.6,-49.6,67.4,-33.7,71.1,-16.6C74.8,0.5,73.5,18.9,65.3,33.4C57.1,47.9,42,58.6,25.3,65.2C8.6,71.8,-9.7,74.3,-26.3,69.5C-42.9,64.6,-57.8,52.4,-66.1,36.9C-74.4,21.5,-76.1,2.9,-71.9,-13.6C-67.7,-30.1,-57.6,-44.5,-44.2,-53.5C-30.8,-62.5,-15.4,-66.2,1.6,-68.1C18.5,-70,37.1,-70.1,45.8,-58.6Z",
			transform: "translate(100 100)"
		})
	});
}
var navLinks = [
	["Today", "#today"],
	["Chicken", "#chicken"],
	["Categories", "#categories"],
	["Groceries", "#world"],
	["Recipes", "#recipes"],
	["Store", "#store"],
	["Visit", "#visit"]
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav py-3 text-foreground" : "py-5 text-cream"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid h-9 w-9 place-items-center rounded-full transition-colors ${scrolled ? "bg-ink text-cream" : "bg-cream text-ink"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: [
							"Rice",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-saffron-deep",
								children: "·"
							}),
							"Spice",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-saffron-deep",
								children: "·"
							}),
							"Dice"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Main navigation",
					children: navLinks.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: `text-sm transition-colors ${scrolled ? "text-foreground/75 hover:text-foreground" : "text-cream/80 hover:text-cream"}`,
						children: label
					}, href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/shop",
							className: "btn-saffron hidden md:inline-flex text-sm",
							children: ["Shop Online ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: `btn-ghost hidden md:inline-flex text-sm ${scrolled ? "" : "!border-cream/30 !text-cream hover:!bg-cream/15 hover:!text-cream"}`,
							children: "Visit Store"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMobileOpen(true),
							className: "grid h-10 w-10 place-items-center rounded-full md:hidden",
							"aria-label": "Open navigation menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"}`,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Navigation menu",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-ink/50 backdrop-blur-sm",
			onClick: () => setMobileOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `absolute right-0 top-0 flex h-full w-72 flex-col bg-cream shadow-lift transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${mobileOpen ? "translate-x-0" : "translate-x-full"}`,
			"aria-label": "Mobile navigation",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-6 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg font-semibold tracking-tight text-foreground",
						children: [
							"Rice",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-saffron-deep",
								children: "·"
							}),
							"Spice",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-saffron-deep",
								children: "·"
							}),
							"Dice"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMobileOpen(false),
						className: "grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground",
						"aria-label": "Close navigation menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto px-6 py-2",
					children: navLinks.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						onClick: () => setMobileOpen(false),
						className: "block border-b border-border/60 py-3.5 text-base font-medium text-foreground/80 transition-colors hover:text-saffron-deep",
						children: label
					}, href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						onClick: () => setMobileOpen(false),
						className: "btn-saffron w-full justify-center text-sm",
						children: ["Visit Store ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})
			]
		})]
	})] });
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
	const fade = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		ref,
		className: "relative flex min-h-[100svh] w-full flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y,
					scale
				},
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "Fresh vegetables and fruits at Rice Spice Dice",
						width: 1920,
						height: 1280,
						className: "h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity: fade },
				className: "relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-20 pt-32 lg:px-10 lg:pb-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								ease: [
									.2,
									.8,
									.2,
									1
								]
							},
							className: "mb-6 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-cream backdrop-blur",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-saffron" }), " Kogarah"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-3 w-px bg-cream/30 sm:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hidden items-center gap-1.5 sm:flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-saffron" }), " Open until 8:30 PM"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-3 w-px bg-cream/30 sm:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hidden items-center gap-1.5 sm:flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, { className: "h-3.5 w-3.5 text-saffron" }), " Free Parking"]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display-xl text-cream",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: {
										opacity: 0,
										y: 40
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .8,
										delay: .1,
										ease: [
											.2,
											.8,
											.2,
											1
										]
									},
									className: "block",
									children: "Fresh Food."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: {
										opacity: 0,
										y: 40
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .8,
										delay: .25,
										ease: [
											.2,
											.8,
											.2,
											1
										]
									},
									className: "block",
									children: "Real Quality."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: {
										opacity: 0,
										y: 40
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .8,
										delay: .4,
										ease: [
											.2,
											.8,
											.2,
											1
										]
									},
									className: "block italic text-saffron",
									children: "Every\xA0Day."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .6
							},
							className: "mt-8 max-w-xl text-lg leading-relaxed text-cream/85",
							children: "Chicken cut fresh this morning. Vegetables picked this week. Spices, rice and ingredients from Nepal, India, Sri Lanka, and the Middle East that the big supermarkets simply don't stock. This is your neighbourhood destination for fresh food and authentic flavours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .75
							},
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop",
								className: "btn-saffron",
								children: ["Shop Online ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop",
								className: "inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur transition-all hover:bg-cream/15",
								children: ["Visit Store ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						delay: .9
					},
					className: "mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4",
					children: [
						{
							icon: Leaf,
							label: "Fresh Daily"
						},
						{
							icon: Drumstick,
							label: "Premium Chicken"
						},
						{
							icon: Earth,
							label: "International"
						},
						{
							icon: Users,
							label: "Local Team"
						}
					].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 rounded-2xl border border-cream/20 bg-cream/10 px-4 py-3 text-cream backdrop-blur-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-saffron" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium tracking-wide",
							children: label
						})]
					}, label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity: fade },
				className: "absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 md:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-cream/70",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-px animate-pulse bg-cream/40" })]
			})
		]
	});
}
function FeatureStrip() {
	const items = [
		{
			icon: Sun,
			label: "Today's Fresh Picks"
		},
		{
			icon: Clock,
			label: "Open 7 Days"
		},
		{
			icon: Drumstick,
			label: "Prepared Fresh Daily"
		},
		{
			icon: ShieldCheck,
			label: "Quality Checked"
		},
		{
			icon: Earth,
			label: "Hard-to-Find Imports"
		},
		{
			icon: Users,
			label: "Family Friendly"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden border-y border-border/60 bg-cream py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-14 marquee whitespace-nowrap will-change-transform",
			children: [
				...items,
				...items,
				...items
			].map(({ icon: Icon, label }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-3 text-foreground/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-saffron-deep" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium tracking-wide",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-14 h-1 w-1 rounded-full bg-foreground/25" })
				]
			}, i))
		})
	});
}
function CommunityWelcome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-ink py-10 text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow mb-4 text-cream/60",
						children: "A store for every community"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center justify-center gap-x-8 gap-y-4",
						children: [
							{
								lang: "English",
								text: "Welcome"
							},
							{
								lang: "Nepali",
								text: "स्वागत छ"
							},
							{
								lang: "Hindi",
								text: "स्वागत है"
							},
							{
								lang: "Arabic",
								text: "أهلاً وسهلاً"
							},
							{
								lang: "Sinhala",
								text: "සාදරයෙන්"
							}
						].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl font-semibold tracking-tight md:text-3xl",
								children: g.text
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-cream/50",
								children: g.lang
							})]
						}, g.lang))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-lg text-sm leading-relaxed text-cream/65",
						children: "Wherever home is, you’ll find its flavours here. Our shelves are stocked for Nepali, Indian, Sri Lankan, Middle Eastern, and Australian families alike."
					})
				]
			}) })
		})]
	});
}
function FestivalStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-16 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "eyebrow mb-2 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-foreground/30" }), "Festival-Ready All Year"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display text-2xl font-semibold md:text-3xl",
						children: [
							"We know what ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-saffron-deep",
								children: "your celebration"
							}),
							" needs."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#visit",
						className: "btn-ghost shrink-0 text-sm",
						children: ["Ask in-store ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							name: "Eid al-Adha",
							icon: Star,
							note: "Everything for your feast — fresh lamb, spices & sweets"
						},
						{
							name: "Dashain & Tihar",
							icon: Sparkles,
							note: "Authentic Nepali essentials for the biggest celebrations"
						},
						{
							name: "Diwali",
							icon: Flame,
							note: "Sweets, dry fruits, ghee & festive pantry staples"
						},
						{
							name: "Lunar New Year",
							icon: Gift,
							note: "Fresh produce, noodles & specialty ingredients"
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/50 p-4 transition-all hover:border-saffron/40 hover:bg-saffron/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-saffron/20 text-saffron-deep transition-colors group-hover:bg-saffron group-hover:text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: f.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs leading-snug text-muted-foreground",
							children: f.note
						})] })]
					}, f.name))
				})]
			}) })
		})
	});
}
function SectionHead({ eyebrow, title, intro, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "eyebrow mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-foreground/30" }), eyebrow]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg text-foreground",
					children: title
				})
			}),
			intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-6 max-w-[65ch] text-lg leading-relaxed text-muted-foreground ${align === "center" ? "mx-auto" : ""}`,
					children: intro
				})
			})
		]
	});
}
var categories = [
	{
		name: "Fresh Produce",
		tag: "Farm Fresh",
		img: produce_default,
		span: "md:col-span-2 md:row-span-2",
		h: "h-[520px] md:h-full"
	},
	{
		name: "Premium Chicken",
		tag: "Cut Daily",
		img: chicken_default,
		span: "",
		h: "h-[260px]"
	},
	{
		name: "Spices",
		tag: "World Flavours",
		img: spices_default,
		span: "",
		h: "h-[260px]"
	},
	{
		name: "Rice",
		tag: "Global Varieties",
		img: rice_default,
		span: "",
		h: "h-[260px]"
	},
	{
		name: "Fresh Fruit",
		tag: "Seasonal",
		img: fruit_default,
		span: "",
		h: "h-[260px]"
	},
	{
		name: "Bakery",
		tag: "Baked In-Store",
		img: bakery_default,
		span: "md:col-span-2",
		h: "h-[260px]"
	},
	{
		name: "Seafood",
		tag: "On Ice",
		img: seafood_default,
		span: "md:col-span-2",
		h: "h-[260px]"
	}
];
var extraCats = [
	{
		name: "Fresh Meat",
		icon: Flame
	},
	{
		name: "Frozen",
		icon: Snowflake
	},
	{
		name: "Dairy",
		icon: IceCreamCone
	},
	{
		name: "Snacks",
		icon: Cookie
	},
	{
		name: "Drinks",
		icon: Coffee
	},
	{
		name: "Vegetables",
		icon: Leaf
	},
	{
		name: "Grains",
		icon: Wheat
	},
	{
		name: "Ready Meals",
		icon: Fish
	}
];
function Categories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "categories",
		className: "relative overflow-hidden py-16 md:py-24 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrganicBlob, { className: "-right-16 top-10 h-72 w-72" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Shop by Category",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Every aisle, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-saffron-deep",
								children: "thoughtfully"
							}),
							" curated."
						] }),
						intro: "Wander through fresh produce, premium meats, and pantry staples sourced from every corner of the world — including the Nepali, Indian and Middle Eastern ingredients you'd struggle to find at Woolworths or Coles."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#visit",
							className: "btn-ghost",
							children: ["See them in store ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[260px]",
					children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#visit",
							className: `group img-zoom card-lift relative block ${c.span} ${c.h} overflow-hidden rounded-3xl bg-muted`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.img,
									alt: c.name,
									loading: "lazy",
									className: "absolute inset-0 h-full w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 flex items-end justify-between p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow text-cream/80",
										children: c.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-2xl font-semibold text-cream md:text-3xl",
										children: c.name
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream/15 text-cream backdrop-blur transition-all group-hover:bg-saffron group-hover:text-ink",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
									})]
								})
							]
						})
					}, c.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex flex-wrap gap-2.5",
						children: extraCats.map(({ name, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-2 text-sm text-foreground/80 transition-all hover:border-saffron hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 text-saffron-deep" }), name]
						}, name))
					})
				})
			]
		})]
	});
}
function ChickenExperience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "chicken",
		className: "relative overflow-hidden bg-ink py-28 text-cream lg:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eyebrow mb-4 flex items-center gap-3 text-cream/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-cream/40" }), "Fresh Chicken Prepared Daily"]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "display-lg",
								children: [
									"100% Halal premium chicken, ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-saffron",
										children: "cut fresh"
									}),
									" every morning."
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-lg text-lg text-cream/75",
								children: "Sourced from trusted Australian farms and cut in-store by our own team — not shipped pre-packed from a warehouse. Whether you need a whole bird for roasting or family-sized packs of marinated thighs, we guarantee freshness and 100% Halal certification on every cut."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .12,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4",
								children: [
									{
										icon: Sun,
										label: "Cut Fresh Daily"
									},
									{
										icon: ShieldCheck,
										label: "100% Halal"
									},
									{
										icon: Users,
										label: "Family Packs"
									},
									{
										icon: Drumstick,
										label: "Clean Handling"
									}
								].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 rounded-2xl border border-cream/15 bg-cream/5 px-3.5 py-3 text-cream/85",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 shrink-0 text-saffron" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium leading-tight",
										children: label
									})]
								}, label))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 divide-y divide-cream/10 border-y border-cream/10",
							children: [
								{
									name: "Whole Chicken",
									weight: "~1.6 kg",
									price: "$14.90"
								},
								{
									name: "Breast Fillet",
									weight: "per kg",
									price: "$16.50"
								},
								{
									name: "Thigh Fillet",
									weight: "per kg",
									price: "$15.90"
								},
								{
									name: "Drumsticks",
									weight: "per kg",
									price: "$9.90"
								},
								{
									name: "Wings",
									weight: "per kg",
									price: "$11.50"
								},
								{
									name: "Marinated Cuts",
									weight: "chef selection",
									price: "from $18"
								}
							].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .05,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-xl font-medium",
											children: c.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-cream/55",
											children: c.weight
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "shrink-0 font-display text-lg text-saffron",
										children: c.price
									})]
								})
							}, c.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#visit",
									className: "btn-saffron",
									children: ["See at the counter ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-[0.22em] text-cream/50",
									children: "* Indicative pricing"
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative lg:col-span-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "img-zoom relative overflow-hidden rounded-[2rem] shadow-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: chicken_default,
								alt: "Premium chicken cuts",
								loading: "lazy",
								width: 1400,
								height: 1600,
								className: "h-[560px] w-full object-cover md:h-[720px]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-6 top-6 rounded-full bg-cream/95 px-4 py-1.5 text-xs font-medium tracking-wide text-ink shadow-soft",
								children: "Fresh Daily · Cut In-Store"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .25,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -bottom-8 -left-6 hidden w-56 overflow-hidden rounded-[1.5rem] shadow-lift ring-4 ring-ink md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: spices_default,
								alt: "Marinade spices used on our chicken cuts",
								loading: "lazy",
								width: 500,
								height: 500,
								className: "h-56 w-full object-cover"
							})
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto mt-20 max-w-4xl px-6 text-center lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drumstick, { className: "mx-auto h-6 w-6 text-saffron" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 font-display text-2xl leading-snug text-cream/90 md:text-3xl",
						children: [
							"\"Honestly the best chicken in Kogarah —",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-saffron",
								children: "always fresh, always trimmed properly."
							}),
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-sm text-cream/50",
						children: "— Rania, local since 2019"
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrganicSeam, { fromClass: "text-background" })
		]
	});
}
var arrivals = [
	{
		name: "Heirloom Tomatoes",
		meta: "Local · NSW",
		img: produce_default
	},
	{
		name: "Alphonso Mangoes",
		meta: "Just Landed",
		img: fruit_default
	},
	{
		name: "Free-Range Chicken",
		meta: "Cut this morning",
		img: chicken_default
	},
	{
		name: "Artisan Sourdough",
		meta: "Baked at 6am",
		img: bakery_default
	}
];
function TodaysArrivals() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "today",
		className: "relative py-16 md:py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Arrived Fresh Today",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Why you should visit ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-saffron-deep",
							children: "today"
						}),
						"."
					] }),
					intro: "Fresh produce, rare imports, and seasonal items that just landed. Grab them before they sell out."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full bg-forest/10 px-4 py-2 text-sm text-forest",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2 w-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-forest" })]
					}), "Live · Updated today"]
				}) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: arrivals.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-lift img-zoom group relative overflow-hidden rounded-3xl bg-card shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-64 overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: a.img,
								alt: a.name,
								loading: "lazy",
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-4 top-4 rounded-full bg-saffron px-3 py-1 text-xs font-semibold tracking-wide text-ink",
								children: "Updated Today"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: a.meta
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1.5 font-display text-xl font-semibold",
								children: a.name
							})]
						})]
					})
				}, a.name))
			})]
		})
	});
}
var countries = [
	{
		name: "Nepal",
		note: "Authentic staples, teas & local spices",
		img: recipe_thai_default
	},
	{
		name: "India",
		note: "Basmati, ghee, masalas & pickles",
		img: rice_default
	},
	{
		name: "Sri Lanka",
		note: "Curry powders & coconut staples",
		img: spices_default
	},
	{
		name: "Middle East",
		note: "Tahini, dates & flatbreads",
		img: bakery_default
	}
];
function InternationalFlavours() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "world",
		className: "relative overflow-hidden bg-forest py-28 text-cream lg:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "eyebrow mb-4 flex items-center gap-3 text-cream/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-cream/40" }), "Your Favourite Groceries from Home"]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .05,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "display-lg text-cream",
									children: [
										"Ingredients you can't find at",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-saffron",
											children: "Woolworths or Coles"
										}),
										"."
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-lg leading-relaxed text-cream/75",
									children: "A shelf that tastes like home — wherever home is. We stock authentic Nepali groceries, Indian spices, and Middle Eastern staples sourced directly, so you're not settling for the one token spice jar at the big supermarket."
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#visit",
							className: "btn-saffron shrink-0",
							children: ["Find your favourites ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: countries.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "img-zoom card-lift group relative h-72 overflow-hidden rounded-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.img,
									alt: `${c.name} groceries`,
									loading: "lazy",
									className: "absolute inset-0 h-full w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold text-cream",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs leading-snug text-cream/75",
										children: c.note
									})]
								})
							]
						})
					}, c.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrganicSeam, { fromClass: "text-background" })
		]
	});
}
function WeeklySpecials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-saffron p-10 text-ink lg:col-span-2 lg:row-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain absolute inset-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow text-ink/70",
									children: "Today's Best Value"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-4 display-lg",
									children: [
										"Save up to ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic",
											children: "30%"
										}),
										" on family favourites."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-[65ch] text-ink/75",
									children: "Save on seasonal fresh produce, bulk rice, and family-sized chicken packs available in-store today. We pass our supplier discounts directly to you."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-10 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#visit",
								className: "btn-primary",
								children: ["See today's best value ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden font-display text-8xl font-bold leading-none text-ink/15 md:block",
								children: "30%"
							})]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "img-zoom card-lift relative flex h-full min-h-[300px] overflow-hidden rounded-3xl bg-forest text-cream",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: spices_default,
								alt: "Spices",
								loading: "lazy",
								className: "absolute inset-0 h-full w-full object-cover opacity-70"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex h-full flex-col justify-end p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow text-cream/80",
									children: "Spice Aisle"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-2 font-display text-3xl font-semibold",
									children: [
										"Buy 2 get 1 free.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"All whole spices."
									]
								})]
							})
						]
					})
				})]
			})
		})
	});
}
var stories = [
	{
		icon: Leaf,
		title: "Fresh every morning",
		body: "Deliveries land at dawn. What's on the shelf today didn't sit in a warehouse yesterday."
	},
	{
		icon: Earth,
		title: "Authentic, from everywhere",
		body: "Ingredients from Nepal, India, Sri Lanka, Korea, Lebanon, Italy — the flavours you grew up with."
	},
	{
		icon: Users,
		title: "A team who knows",
		body: "Ask us anything. Our staff cook these dishes at home — they'll point you to the right rice, oil, or masala."
	},
	{
		icon: ShieldCheck,
		title: "Fair, honest pricing",
		body: "Family-run means no corporate markup. Great quality, priced the way a neighbour would."
	},
	{
		icon: Sparkles,
		title: "A store you enjoy",
		body: "Clean, calm, and organised. No fluorescent chaos — just a place that respects your time."
	},
	{
		icon: Star,
		title: "Quality you can trust",
		body: "We taste, test, and stand behind everything on our shelves. If it's not right, tell us."
	}
];
function WhyPeopleLove() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-16 md:py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-16 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-32",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							eyebrow: "Why people keep coming back",
							title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"A neighbourhood store,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-saffron-deep",
									children: "worth the trip"
								}),
								"."
							] }),
							intro: "We're not the biggest grocery on the street. We just try to be the one you tell your friends about."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 img-zoom overflow-hidden rounded-3xl shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: story_fresh_default,
									alt: "Hands arranging fresh herbs",
									loading: "lazy",
									className: "h-80 w-full object-cover"
								})
							})
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
						children: stories.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-lift group h-full rounded-3xl border border-border bg-card p-7 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-11 w-11 place-items-center rounded-2xl bg-saffron/20 text-saffron-deep transition-colors group-hover:bg-saffron group-hover:text-ink",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-display text-xl font-semibold",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: s.body
									})
								]
							})
						}, s.title))
					})
				})]
			})
		})
	});
}
var recipes = [
	{
		title: "Butter Chicken",
		region: "Northern India",
		img: recipe_butter_chicken_default,
		time: "45 min",
		ingredients: [
			"Chicken thigh",
			"Tomato",
			"Cream",
			"Garam masala",
			"Fenugreek"
		]
	},
	{
		title: "Chicken Biryani",
		region: "Hyderabad, India",
		img: recipe_biryani_default,
		time: "1h 20m",
		ingredients: [
			"Basmati",
			"Chicken",
			"Saffron",
			"Mint",
			"Fried onion"
		]
	},
	{
		title: "Chicken Momo",
		region: "Kathmandu, Nepal",
		img: recipe_thai_default,
		time: "1 hour",
		ingredients: [
			"Chicken mince",
			"Flour",
			"Ginger",
			"Garlic",
			"Coriander"
		]
	}
];
function Recipes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "recipes",
		className: "relative overflow-hidden py-16 md:py-24 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrganicBlob, { className: "-left-20 bottom-0 h-80 w-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Cook Tonight",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Complete meals,",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-saffron-deep",
						children: "in one shopping basket."
					})
				] }),
				intro: "Don't know what to cook? Pick a recipe and grab every single ingredient you need from our shelves today. We've got everything from the protein to the exact spice blend."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: recipes.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-lift group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "img-zoom relative h-80 overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: r.img,
									alt: r.title,
									loading: "lazy",
									className: "h-full w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-6 bottom-5 flex items-end justify-between text-cream",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow text-cream/80",
										children: r.region
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-2xl font-semibold",
										children: r.title
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-full bg-cream/15 px-3 py-1 text-xs backdrop-blur",
										children: r.time
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow",
									children: "Available in store"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 flex flex-wrap gap-1.5",
									children: r.ingredients.map((ing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-full bg-secondary px-3 py-1 text-xs text-foreground/80",
										children: ing
									}, ing))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#visit",
									className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-saffron-deep",
									children: ["Find these ingredients ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							]
						})]
					})
				}, r.title))
			})]
		})]
	});
}
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "store",
		className: "relative bg-secondary/40 py-16 md:py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Explore Our Store Before You Visit",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Clean, organised, and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-saffron-deep",
						children: "ready to explore"
					}),
					"."
				] }),
				intro: "Wide aisles, premium presentation, and a welcoming atmosphere. This is a store that respects your time and your standards."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[200px]",
				children: [
					{
						src: store_interior_default,
						alt: "Inside the store",
						className: "col-span-2 row-span-2 h-full"
					},
					{
						src: produce_default,
						alt: "Fresh produce",
						className: ""
					},
					{
						src: chicken_default,
						alt: "Chicken counter",
						className: ""
					},
					{
						src: fruit_default,
						alt: "Fresh fruits",
						className: ""
					},
					{
						src: spices_default,
						alt: "Spice display",
						className: ""
					},
					{
						src: bakery_default,
						alt: "Bakery",
						className: "col-span-2"
					},
					{
						src: seafood_default,
						alt: "Seafood",
						className: ""
					}
				].map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `img-zoom card-lift overflow-hidden rounded-2xl bg-muted ${img.className}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.src,
							alt: img.alt,
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					})
				}, i))
			})]
		})
	});
}
var reviews = [
	{
		name: "Priya S.",
		role: "Kogarah local",
		body: "This is the only grocery I trust for spices. Everything is fresh, well-labelled, and the staff actually know what they're selling."
	},
	{
		name: "Daniel M.",
		role: "Family shopper",
		body: "We drive 20 minutes just to shop here. The chicken counter is incredible and the produce is always at its peak."
	},
	{
		name: "Amira H.",
		role: "Home cook",
		body: "It feels like a proper community store. They remember my kids, help me find rare ingredients, and never rush you."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-16 md:py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Customer stories",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Loved by the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-saffron-deep",
							children: "neighbourhood"
						}),
						"."
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-0.5 text-saffron-deep",
							children: [...Array(5)].map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, j))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-semibold",
								children: "4.9"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 text-muted-foreground",
								children: "· 300+ Google reviews"
							})]
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-3",
				children: reviews.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "card-lift flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-saffron-deep",
								children: [...Array(5)].map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, j))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-4 flex-1 font-display text-lg leading-snug text-foreground",
								children: [
									"\"",
									r.body,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-6 flex items-center gap-3 border-t border-border/60 pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-full bg-saffron/20 font-display text-sm font-semibold text-saffron-deep",
									children: r.name[0]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-sm font-medium",
										children: r.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-xs text-muted-foreground",
										children: r.role
									})]
								})]
							})
						]
					})
				}, r.name))
			})]
		})
	});
}
function Visit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "visit",
		className: "relative overflow-hidden bg-cream py-16 md:py-24 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Plan Your Visit",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Come ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-saffron-deep",
								children: "say hello"
							}),
							"."
						] }),
						intro: "We've made visiting easy. Free parking right out front, accessible entry, and we're open late. Have a question about bulk orders or special events? Check below or give us a call."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow",
									children: "Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-lg",
									children: "Railway Parade, Kogarah NSW 2217, Australia"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow",
									children: "Opening Hours"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-1 space-y-0.5 text-sm text-foreground/80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mon – Fri \xA0·\xA0 8:00 am – 8:30 pm" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Saturday \xA0·\xA0 8:00 am – 9:00 pm" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sunday \xA0·\xA0 9:00 am – 7:00 pm" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "text-foreground/60",
											children: "Public holidays \xA0·\xA0 9:00 am – 6:00 pm (closed Christmas Day)"
										})
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow",
									children: "Parking"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-foreground/80",
									children: "Free customer parking directly out front on Railway Parade."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow",
									children: "Bulk & Special Orders"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-foreground/80",
									children: "Need bulk rice, large meat orders, or specific festival items? Call us 2 days ahead and we'll have it ready for pickup."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "eyebrow",
											children: "Call"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 truncate",
											children: "(02) 8123 4567"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "eyebrow",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 truncate",
											children: "hello@ricespicedice.com.au"
										})]
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://maps.google.com/?q=Kogarah+NSW",
							target: "_blank",
							rel: "noreferrer",
							className: "btn-primary",
							children: ["Get directions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+61281234567",
							className: "btn-ghost",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call the store"]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "img-zoom relative overflow-hidden rounded-[2rem] shadow-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Rice Spice Dice location",
								src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5!2d151.131!3d-33.9788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU4JzQzLjciUyAxNTHCsDA4JzEzLjIiRQ!5e0!3m2!1sen!2sau!4v1",
								className: "h-[520px] w-full",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-6 top-6 rounded-2xl bg-cream/95 p-4 backdrop-blur shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow",
										children: "Now open"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-display text-lg font-semibold",
										children: "Rice Spice Dice"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "Railway Parade, Kogarah NSW 2217"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-ink/90 p-4 text-cream backdrop-blur shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4 shrink-0 text-saffron" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm leading-snug",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: "This week's notice:"
									}), " fresh king prawns & mangoes just landed — ask in-store."]
								})]
							})
						]
					})
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrganicSeam, { fromClass: "text-ink" })]
	});
}
var futureFeatures = [
	{
		icon: ShoppingBag,
		title: "Click & Collect",
		body: "Order online, skip the queue, pick up fresh at the counter."
	},
	{
		icon: Drumstick,
		title: "Reserve Fresh Chicken",
		body: "Call ahead or book online for your exact cut, ready when you arrive."
	},
	{
		icon: Heart,
		title: "Loyalty Rewards",
		body: "Earn points on every visit and unlock member-only pricing."
	}
];
function FutureVision() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "future",
		className: "relative overflow-hidden bg-ink py-28 text-cream lg:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eyebrow mb-4 flex items-center gap-3 text-cream/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-cream/40" }), "What's Next"]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "display-lg text-cream",
								children: [
									"This is just ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-saffron",
										children: "the beginning"
									}),
									"."
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-lg leading-relaxed text-cream/75",
								children: "Rice Spice Dice keeps growing with its neighbourhood. Here's what we're building next to make shopping with us even easier."
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: futureFeatures.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative h-full overflow-hidden rounded-3xl border border-cream/15 bg-cream/[0.04] p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-5 top-5 rounded-full border border-cream/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-cream/50",
									children: "Coming soon"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 place-items-center rounded-2xl bg-saffron/20 text-saffron transition-colors group-hover:bg-saffron group-hover:text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-xl font-semibold",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-cream/65",
									children: f.body
								})
							]
						})
					}, f.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#newsletter",
							className: "btn-saffron",
							children: ["Be the first to know ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-cream/50",
							children: "Join the list below and we'll let you know the moment each one launches."
						})]
					})
				})
			]
		})]
	});
}
function Newsletter() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "newsletter",
		className: "relative overflow-hidden bg-ink py-24 text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain absolute inset-0 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow text-cream/60",
				children: "The Weekly"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-3 display-lg text-cream",
				children: ["Get weekly specials ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic text-saffron",
					children: "before everyone else."
				})]
			})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						if (email) setDone(true);
					},
					className: "flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "your@email.com",
						className: "flex-1 rounded-full border border-cream/20 bg-cream/5 px-6 py-4 text-cream placeholder:text-cream/40 outline-none transition-all focus-visible:ring-2 focus-visible:ring-saffron focus-visible:bg-cream/10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "btn-saffron",
						children: [
							done ? "See you Monday " : "Subscribe ",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})]
				})
			})]
		})]
	});
}
function MobileCta() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const nearBottom = window.innerHeight + window.scrollY > document.body.offsetHeight - 480;
			setVisible(window.scrollY > 640 && !nearBottom);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: { paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" },
		className: `fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-border bg-cream/95 px-4 pt-3 shadow-lift backdrop-blur transition-transform duration-300 md:hidden ${visible ? "translate-y-0" : "translate-y-full"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "tel:+61281234567",
				className: "btn-ghost flex-1 !px-3 !py-3 min-h-[44px] text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://wa.me/61XXXXXXXXX",
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-full min-h-[44px] !px-3 !py-3 text-sm font-medium text-white",
				style: { background: "#25D366" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 24 24",
					fill: "currentColor",
					className: "h-4 w-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
				}), "WhatsApp"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://maps.google.com/?q=Kogarah+NSW",
				target: "_blank",
				rel: "noreferrer",
				className: "btn-saffron flex-[1.2] !px-3 !py-3 min-h-[44px] text-sm",
				children: ["Directions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-cream pt-20 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-10 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-full bg-ink text-cream",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-semibold",
									children: "Rice·Spice·Dice"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-sm text-sm text-muted-foreground",
								children: "A family-run international grocery in Kogarah — bringing warmth, freshness, and the flavours of home to Sydney's south."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://facebook.com",
										target: "_blank",
										rel: "noreferrer",
										className: "grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground/70 transition-all hover:bg-saffron hover:text-ink",
										"aria-label": "Facebook",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 24 24",
											fill: "currentColor",
											className: "h-4 w-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://instagram.com",
										target: "_blank",
										rel: "noreferrer",
										className: "grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground/70 transition-all hover:bg-saffron hover:text-ink",
										"aria-label": "Instagram",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 24 24",
											fill: "currentColor",
											className: "h-4 w-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://wa.me/61XXXXXXXXX",
										target: "_blank",
										rel: "noreferrer",
										className: "grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground/70 transition-all hover:bg-[#25D366] hover:text-white",
										"aria-label": "WhatsApp",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 24 24",
											fill: "currentColor",
											className: "h-4 w-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
										})
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow mb-4",
						children: "Store"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2.5 text-sm text-foreground/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#categories",
								className: "hover:text-saffron-deep",
								children: "Categories"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#chicken",
								className: "hover:text-saffron-deep",
								children: "Chicken Counter"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#today",
								className: "hover:text-saffron-deep",
								children: "Today's Arrivals"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#recipes",
								className: "hover:text-saffron-deep",
								children: "Recipes"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow mb-4",
							children: "Visit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2.5 text-sm text-foreground/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Railway Parade" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Kogarah NSW 2217" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+61281234567",
									className: "transition-colors hover:text-saffron-deep",
									children: "(02) 8123 4567"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:hello@ricespicedice.com.au",
									className: "transition-colors hover:text-saffron-deep",
									children: "hello@ricespicedice.com.au"
								}) })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow mb-2",
								children: "Follow Us"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://facebook.com",
										target: "_blank",
										rel: "noreferrer",
										className: "text-sm text-foreground/60 hover:text-saffron-deep",
										children: "Facebook"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground/30",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://instagram.com",
										target: "_blank",
										rel: "noreferrer",
										className: "text-sm text-foreground/60 hover:text-saffron-deep",
										children: "Instagram"
									})
								]
							})]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Rice Spice Dice · Kogarah, NSW"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-foreground/40",
					children: "Fresh food. Real quality. Every day."
				})]
			})]
		})
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "https://wa.me/61XXXXXXXXX?text=Hi%20Rice%20Spice%20Dice%2C%20I%27d%20like%20to%20enquire%20about...",
		target: "_blank",
		rel: "noreferrer",
		className: "whatsapp-float",
		"aria-label": "Chat on WhatsApp",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "wa-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "currentColor",
			className: "relative h-6 w-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main-content",
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-saffron focus:px-5 focus:py-2.5 focus:font-medium focus:text-ink focus:shadow-lift",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityWelcome, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodaysArrivals, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChickenExperience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Categories, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InternationalFlavours, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeeklySpecials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FestivalStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipes, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyPeopleLove, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visit, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FutureVision, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCta, {})
		]
	});
}
//#endregion
export { Home as component };
