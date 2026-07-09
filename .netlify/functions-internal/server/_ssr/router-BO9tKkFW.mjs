import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as CartProvider } from "./cart-context-CrjvjMqV.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BO9tKkFW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DWrEuJ4N.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-lg text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This aisle doesn't exist. Let's get you back to the fresh stuff."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-primary",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-md text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-ghost",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Rice Spice Dice — Fresh Food. Real Quality. Every Day." },
			{
				name: "description",
				content: "A premium international grocery in Kogarah NSW. Farm-fresh produce, premium chicken, authentic spices and world groceries — under one warm, welcoming roof."
			},
			{
				name: "author",
				content: "Rice Spice Dice"
			},
			{
				name: "theme-color",
				content: "#FFFDF8"
			},
			{
				property: "og:title",
				content: "Rice Spice Dice — International Grocery, Kogarah"
			},
			{
				property: "og:description",
				content: "Farm-fresh produce, premium chicken and authentic international groceries. A neighbourhood store worth the trip."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "GroceryStore",
				name: "Rice Spice Dice",
				description: "A premium international grocery in Kogarah NSW. Farm-fresh produce, premium halal chicken, authentic spices and world groceries.",
				url: "https://ricespicedice.com.au",
				telephone: "(02) 8123 4567",
				email: "hello@ricespicedice.com.au",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Railway Parade",
					addressLocality: "Kogarah",
					addressRegion: "NSW",
					postalCode: "2217",
					addressCountry: "AU"
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: -33.981,
					longitude: 151.137
				},
				openingHoursSpecification: [
					{
						"@type": "OpeningHoursSpecification",
						dayOfWeek: [
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday"
						],
						opens: "08:00",
						closes: "20:30"
					},
					{
						"@type": "OpeningHoursSpecification",
						dayOfWeek: "Saturday",
						opens: "08:00",
						closes: "21:00"
					},
					{
						"@type": "OpeningHoursSpecification",
						dayOfWeek: "Sunday",
						opens: "09:00",
						closes: "19:00"
					}
				],
				priceRange: "$$",
				servesCuisine: [
					"International",
					"Indian",
					"Nepali",
					"Middle Eastern",
					"Sri Lankan"
				],
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "Store Products",
					itemListElement: [
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Product",
								name: "Premium Halal Chicken",
								description: "Cut fresh daily, 100% Halal certified"
							}
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Product",
								name: "Fresh Produce",
								description: "Farm-fresh seasonal fruits and vegetables"
							}
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Product",
								name: "International Spices",
								description: "Authentic spices from Nepal, India, Sri Lanka and Middle East"
							}
						}
					]
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$2 = () => import("./shop-CtMMKZ9V.mjs");
var Route$2 = createFileRoute("/shop")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Shop Online — Rice Spice Dice" }] })
});
var $$splitComponentImporter$1 = () => import("./checkout-C4n2uZXR.mjs");
var Route$1 = createFileRoute("/checkout")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Checkout — Rice Spice Dice" }] })
});
var $$splitComponentImporter = () => import("./routes-DnUeWGDV.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{
			property: "og:image",
			content: "https://id-preview--b9cb7c82-6c46-44ac-99c9-2e1b54a4afed.lovable.app/og.jpg"
		},
		{
			name: "description",
			content: "Rice Spice Dice is Kogarah's neighbourhood destination for fresh food and authentic international flavours — premium chicken cut fresh daily, seasonal produce, and Nepali, Indian and Middle Eastern groceries you won't find at Woolworths or Coles."
		},
		{ title: "Rice Spice Dice — Fresh Food & International Grocery in Kogarah" }
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
/** Organic curved seam between sections of different background tones — part of the
* site's visual signature (inspired by a grain husk / leaf edge) instead of a hard cut. */
/** Faint organic blob accent (grain/leaf silhouette) used as a background texture cue. */
var ShopRoute = Route$2.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$3
});
var CheckoutRoute = Route$1.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$3
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	CheckoutRoute,
	ShopRoute
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
