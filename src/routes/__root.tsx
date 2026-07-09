import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "../lib/cart-context";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-lg text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This aisle doesn't exist. Let's get you back to the fresh stuff.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-md text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rice Spice Dice — Fresh Food. Real Quality. Every Day." },
      {
        name: "description",
        content:
          "A premium international grocery in Kogarah NSW. Farm-fresh produce, premium chicken, authentic spices and world groceries — under one warm, welcoming roof.",
      },
      { name: "author", content: "Rice Spice Dice" },
      { name: "theme-color", content: "#FFFDF8" },
      { property: "og:title", content: "Rice Spice Dice — International Grocery, Kogarah" },
      {
        property: "og:description",
        content:
          "Farm-fresh produce, premium chicken and authentic international groceries. A neighbourhood store worth the trip.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'GroceryStore',
          name: 'Rice Spice Dice',
          description: 'A premium international grocery in Kogarah NSW. Farm-fresh produce, premium halal chicken, authentic spices and world groceries.',
          url: 'https://ricespicedice.com.au',
          telephone: '(02) 8123 4567',
          email: 'hello@ricespicedice.com.au',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Railway Parade',
            addressLocality: 'Kogarah',
            addressRegion: 'NSW',
            postalCode: '2217',
            addressCountry: 'AU',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -33.981,
            longitude: 151.137,
          },
          openingHoursSpecification: [
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:30' },
            { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '21:00' },
            { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '09:00', closes: '19:00' },
          ],
          priceRange: '$$',
          servesCuisine: ['International', 'Indian', 'Nepali', 'Middle Eastern', 'Sri Lankan'],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Store Products',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Premium Halal Chicken', description: 'Cut fresh daily, 100% Halal certified' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Fresh Produce', description: 'Farm-fresh seasonal fruits and vegetables' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'International Spices', description: 'Authentic spices from Nepal, India, Sri Lanka and Middle East' } },
            ],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Outlet />
      </CartProvider>
    </QueryClientProvider>
  );
}
