import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import {
  Leaf,
  Drumstick,
  Globe2,
  Users,
  ShieldCheck,
  MapPin,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Phone,
  Mail,
  Star,
  Sun,
  Flame,
  Wheat,
  Fish,
  Coffee,
  Cookie,
  IceCream,
  Snowflake,
  Car,
  Gift,
  Bell,
  Heart,
  CalendarDays,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

import heroImg from "@/assets/hero.png";
import chickenImg from "@/assets/chicken.jpg";
import spicesImg from "@/assets/spices.jpg";
import produceImg from "@/assets/produce.jpg";
import riceImg from "@/assets/rice.jpg";
import fruitImg from "@/assets/fruit.jpg";
import recipeButter from "@/assets/recipe-butter-chicken.jpg";
import recipeBiryani from "@/assets/recipe-biryani.jpg";
import recipeThai from "@/assets/recipe-thai.jpg";
import storeInterior from "@/assets/store-interior.jpg";
import storyFresh from "@/assets/story-fresh.jpg";
import bakeryImg from "@/assets/bakery.jpg";
import seafoodImg from "@/assets/seafood.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content: "https://id-preview--b9cb7c82-6c46-44ac-99c9-2e1b54a4afed.lovable.app/og.jpg",
      },
      {
        name: "description",
        content:
          "Rice Spice Dice is Kogarah's neighbourhood destination for fresh food and authentic international flavours — premium chicken cut fresh daily, seasonal produce, and Nepali, Indian and Middle Eastern groceries you won't find at Woolworths or Coles.",
      },
      {
        title: "Rice Spice Dice — Fresh Food & International Grocery in Kogarah",
      },
    ],
  }),
  component: Home,
});

/* ----------------------------- Small helpers ----------------------------- */

function Reveal({
  children,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------ Signature FX ----------------------------- */

/** Organic curved seam between sections of different background tones — part of the
 * site's visual signature (inspired by a grain husk / leaf edge) instead of a hard cut. */
function OrganicSeam({
  fromClass = "text-cream",
  flip = false,
}: {
  fromClass?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative z-10 -mb-px h-14 w-full overflow-hidden md:h-20 ${
        flip ? "-scale-y-100" : ""
      }`}
    >
      <svg
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        className={`h-full w-full ${fromClass}`}
      >
        <path
          d="M0,32 C180,90 320,0 540,28 C760,56 880,4 1040,20 C1120,28 1160,44 1200,36 L1200,90 L0,90 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

/** Faint organic blob accent (grain/leaf silhouette) used as a background texture cue. */
function OrganicBlob({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute text-saffron/[0.08] ${className}`}
    >
      <path
        fill="currentColor"
        d="M45.8,-58.6C58.6,-49.6,67.4,-33.7,71.1,-16.6C74.8,0.5,73.5,18.9,65.3,33.4C57.1,47.9,42,58.6,25.3,65.2C8.6,71.8,-9.7,74.3,-26.3,69.5C-42.9,64.6,-57.8,52.4,-66.1,36.9C-74.4,21.5,-76.1,2.9,-71.9,-13.6C-67.7,-30.1,-57.6,-44.5,-44.2,-53.5C-30.8,-62.5,-15.4,-66.2,1.6,-68.1C18.5,-70,37.1,-70.1,45.8,-58.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/* --------------------------------- Nav ---------------------------------- */

const navLinks = [
  ["Today", "#today"],
  ["Chicken", "#chicken"],
  ["Categories", "#categories"],
  ["Groceries", "#world"],
  ["Recipes", "#recipes"],
  ["Store", "#store"],
  ["Visit", "#visit"],
] as const;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav py-3 text-foreground" : "py-5 text-cream"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-2.5">
            <span className={`grid h-9 w-9 place-items-center rounded-full transition-colors ${scrolled ? 'bg-ink text-cream' : 'bg-cream text-ink'}`}>
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Rice<span className="text-saffron-deep">·</span>Spice
              <span className="text-saffron-deep">·</span>Dice
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  scrolled
                    ? "text-foreground/75 hover:text-foreground"
                    : "text-cream/80 hover:text-cream"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/shop" className="btn-saffron hidden md:inline-flex text-sm">
              Shop Online <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/shop" className={`btn-ghost hidden md:inline-flex text-sm ${scrolled ? '' : '!border-cream/30 !text-cream hover:!bg-cream/15 hover:!text-cream'}`}>
              Visit Store
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div
          className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-72 flex-col bg-cream shadow-lift transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              Rice<span className="text-saffron-deep">·</span>Spice
              <span className="text-saffron-deep">·</span>Dice
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground"
              aria-label="Close navigation menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-2">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-border/60 py-3.5 text-base font-medium text-foreground/80 transition-colors hover:text-saffron-deep"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="border-t border-border p-6">
            <Link
              to="/shop"
              onClick={() => setMobileOpen(false)}
              className="btn-saffron w-full justify-center text-sm"
            >
              Visit Store <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

/* --------------------------------- Hero --------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Fresh vegetables and fruits at Rice Spice Dice"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-20 pt-32 lg:px-10 lg:pb-28"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-cream backdrop-blur"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-saffron" /> Kogarah
              </div>
              <div className="hidden h-3 w-px bg-cream/30 sm:block" />
              <div className="hidden items-center gap-1.5 sm:flex">
                <Clock className="h-3.5 w-3.5 text-saffron" /> Open until 8:30 PM
              </div>
              <div className="hidden h-3 w-px bg-cream/30 sm:block" />
              <div className="hidden items-center gap-1.5 sm:flex">
                <Car className="h-3.5 w-3.5 text-saffron" /> Free Parking
              </div>
            </div>
          </motion.div>

          <h1 className="display-xl text-cream">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              Fresh Food.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              Real Quality.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="block italic text-saffron"
            >
              Every&nbsp;Day.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-cream/85"
          >
            Chicken cut fresh this morning. Vegetables picked this week. Spices, rice and
            ingredients from Nepal, India, Sri Lanka, and the Middle East that the big
            supermarkets simply don't stock. This is your neighbourhood destination for fresh food
            and authentic flavours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link to="/shop" className="btn-saffron">
              Shop Online <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/shop" className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur transition-all hover:bg-cream/15">
              Visit Store <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Floating trust cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { icon: Leaf, label: "Fresh Daily" },
            { icon: Drumstick, label: "Premium Chicken" },
            { icon: Globe2, label: "International" },
            { icon: Users, label: "Local Team" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-2xl border border-cream/20 bg-cream/10 px-4 py-3 text-cream backdrop-blur-xl"
            >
              <Icon className="h-4 w-4 text-saffron" />
              <span className="text-xs font-medium tracking-wide">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 md:flex"
      >
        <span className="eyebrow text-cream/70">Scroll</span>
        <div className="h-10 w-px animate-pulse bg-cream/40" />
      </motion.div>
    </section>
  );
}

/* ---------------------------- Feature strip ---------------------------- */

function FeatureStrip() {
  const items = [
    { icon: Sun, label: "Today's Fresh Picks" },
    { icon: Clock, label: "Open 7 Days" },
    { icon: Drumstick, label: "Prepared Fresh Daily" },
    { icon: ShieldCheck, label: "Quality Checked" },
    { icon: Globe2, label: "Hard-to-Find Imports" },
    { icon: Users, label: "Family Friendly" },
  ];
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-cream py-6">
      <div className="flex gap-14 marquee whitespace-nowrap will-change-transform">
        {[...items, ...items, ...items].map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3 text-foreground/80">
            <Icon className="h-4 w-4 text-saffron-deep" />
            <span className="text-sm font-medium tracking-wide">{label}</span>
            <span className="ml-14 h-1 w-1 rounded-full bg-foreground/25" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------- Community Welcome Strip ----------------------- */

function CommunityWelcome() {
  const greetings = [
    { lang: "English", text: "Welcome" },
    { lang: "Nepali", text: "\u0938\u094d\u0935\u093e\u0917\u0924 \u091b" },
    { lang: "Hindi", text: "\u0938\u094d\u0935\u093e\u0917\u0924 \u0939\u0948" },
    { lang: "Arabic", text: "\u0623\u0647\u0644\u0627\u064b \u0648\u0633\u0647\u0644\u0627\u064b" },
    { lang: "Sinhala", text: "\u0dc3\u0dcf\u0daf\u0dbb\u0dba\u0dd9\u0db1\u0dca" },
  ];
  return (
    <section className="relative overflow-hidden bg-ink py-10 text-cream">
      <div className="grain absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="eyebrow mb-4 text-cream/60">A store for every community</div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {greetings.map((g) => (
                <div key={g.lang} className="flex flex-col items-center gap-1">
                  <span className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{g.text}</span>
                  <span className="text-xs text-cream/50">{g.lang}</span>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-cream/65">
              Wherever home is, you&rsquo;ll find its flavours here. Our shelves are stocked for
              Nepali, Indian, Sri Lankan, Middle Eastern, and Australian families alike.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------- Festival Awareness -------------------------- */

function FestivalStrip() {
  const festivals = [
    { name: "Eid al-Adha", icon: Star, note: "Everything for your feast \u2014 fresh lamb, spices & sweets" },
    { name: "Dashain & Tihar", icon: Sparkles, note: "Authentic Nepali essentials for the biggest celebrations" },
    { name: "Diwali", icon: Flame, note: "Sweets, dry fruits, ghee & festive pantry staples" },
    { name: "Lunar New Year", icon: Gift, note: "Fresh produce, noodles & specialty ingredients" },
  ];
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <div className="eyebrow mb-2 flex items-center gap-3">
                  <span className="h-px w-8 bg-foreground/30" />
                  Festival-Ready All Year
                </div>
                <h3 className="font-display text-2xl font-semibold md:text-3xl">
                  We know what <span className="italic text-saffron-deep">your celebration</span> needs.
                </h3>
              </div>
              <a href="#visit" className="btn-ghost shrink-0 text-sm">
                Ask in-store <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {festivals.map((f) => (
                <div
                  key={f.name}
                  className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/50 p-4 transition-all hover:border-saffron/40 hover:bg-saffron/5"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-saffron/20 text-saffron-deep transition-colors group-hover:bg-saffron group-hover:text-ink">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{f.name}</div>
                    <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{f.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- Section chrome ----------------------------- */

function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <div className="eyebrow mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-foreground/30" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="display-lg text-foreground">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className={`mt-6 max-w-[65ch] text-lg leading-relaxed text-muted-foreground ${align === "center" ? "mx-auto" : ""}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* --------------------------- Shop by Category -------------------------- */

const categories = [
  {
    name: "Fresh Produce",
    tag: "Farm Fresh",
    img: produceImg,
    span: "md:col-span-2 md:row-span-2",
    h: "h-[520px] md:h-full",
  },
  { name: "Premium Chicken", tag: "Cut Daily", img: chickenImg, span: "", h: "h-[260px]" },
  { name: "Spices", tag: "World Flavours", img: spicesImg, span: "", h: "h-[260px]" },
  { name: "Rice", tag: "Global Varieties", img: riceImg, span: "", h: "h-[260px]" },
  { name: "Fresh Fruit", tag: "Seasonal", img: fruitImg, span: "", h: "h-[260px]" },
  { name: "Bakery", tag: "Baked In-Store", img: bakeryImg, span: "md:col-span-2", h: "h-[260px]" },
  { name: "Seafood", tag: "On Ice", img: seafoodImg, span: "md:col-span-2", h: "h-[260px]" },
];

const extraCats = [
  { name: "Fresh Meat", icon: Flame },
  { name: "Frozen", icon: Snowflake },
  { name: "Dairy", icon: IceCream },
  { name: "Snacks", icon: Cookie },
  { name: "Drinks", icon: Coffee },
  { name: "Vegetables", icon: Leaf },
  { name: "Grains", icon: Wheat },
  { name: "Ready Meals", icon: Fish },
];

function Categories() {
  return (
    <section id="categories" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <OrganicBlob className="-right-16 top-10 h-72 w-72" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHead
            eyebrow="Shop by Category"
            title={
              <>
                Every aisle, <span className="italic text-saffron-deep">thoughtfully</span> curated.
              </>
            }
            intro="Wander through fresh produce, premium meats, and pantry staples sourced from every corner of the world — including the Nepali, Indian and Middle Eastern ingredients you'd struggle to find at Woolworths or Coles."
          />
          <Reveal delay={0.15}>
            <a href="#visit" className="btn-ghost">
              See them in store <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[260px]">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <a
                href="#visit"
                className={`group img-zoom card-lift relative block ${c.span} ${c.h} overflow-hidden rounded-3xl bg-muted`}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <div className="eyebrow text-cream/80">{c.tag}</div>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-cream md:text-3xl">
                      {c.name}
                    </h3>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream/15 text-cream backdrop-blur transition-all group-hover:bg-saffron group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Pill row of extra categories */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {extraCats.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-2 text-sm text-foreground/80 transition-all hover:border-saffron hover:text-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-saffron-deep" />
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- Chicken Section --------------------------- */

function ChickenExperience() {
  const cuts = [
    { name: "Whole Chicken", weight: "~1.6 kg", price: "$14.90" },
    { name: "Breast Fillet", weight: "per kg", price: "$16.50" },
    { name: "Thigh Fillet", weight: "per kg", price: "$15.90" },
    { name: "Drumsticks", weight: "per kg", price: "$9.90" },
    { name: "Wings", weight: "per kg", price: "$11.50" },
    { name: "Marinated Cuts", weight: "chef selection", price: "from $18" },
  ];
  return (
    <section id="chicken" className="relative overflow-hidden bg-ink py-28 text-cream lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="eyebrow mb-4 flex items-center gap-3 text-cream/70">
              <span className="h-px w-8 bg-cream/40" />
              Fresh Chicken Prepared Daily
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg">
              100% Halal premium chicken, <span className="italic text-saffron">cut fresh</span> every morning.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg text-cream/75">
              Sourced from trusted Australian farms and cut in-store by our own team — not shipped
              pre-packed from a warehouse. Whether you need a whole bird for roasting or family-sized 
              packs of marinated thighs, we guarantee freshness and 100% Halal certification on every cut.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Sun, label: "Cut Fresh Daily" },
                { icon: ShieldCheck, label: "100% Halal" },
                { icon: Users, label: "Family Packs" },
                { icon: Drumstick, label: "Clean Handling" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-2xl border border-cream/15 bg-cream/5 px-3.5 py-3 text-cream/85"
                >
                  <Icon className="h-4 w-4 shrink-0 text-saffron" />
                  <span className="text-xs font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 divide-y divide-cream/10 border-y border-cream/10">
            {cuts.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05}>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5">
                  <div className="min-w-0">
                    <div className="font-display text-xl font-medium">{c.name}</div>
                    <div className="text-sm text-cream/55">{c.weight}</div>
                  </div>
                  <div className="shrink-0 font-display text-lg text-saffron">{c.price}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#visit" className="btn-saffron">
                See at the counter <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs uppercase tracking-[0.22em] text-cream/50">
                * Indicative pricing
              </span>
            </div>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6">
          <Reveal delay={0.1}>
            <div className="img-zoom relative overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={chickenImg}
                alt="Premium chicken cuts"
                loading="lazy"
                width={1400}
                height={1600}
                className="h-[560px] w-full object-cover md:h-[720px]"
              />
              <div className="absolute left-6 top-6 rounded-full bg-cream/95 px-4 py-1.5 text-xs font-medium tracking-wide text-ink shadow-soft">
                Fresh Daily · Cut In-Store
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="absolute -bottom-8 -left-6 hidden w-56 overflow-hidden rounded-[1.5rem] shadow-lift ring-4 ring-ink md:block">
              <img
                src={spicesImg}
                alt="Marinade spices used on our chicken cuts"
                loading="lazy"
                width={500}
                height={500}
                className="h-56 w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <Drumstick className="mx-auto h-6 w-6 text-saffron" />
          <p className="mt-6 font-display text-2xl leading-snug text-cream/90 md:text-3xl">
            "Honestly the best chicken in Kogarah —{" "}
            <span className="italic text-saffron">always fresh, always trimmed properly.</span>"
          </p>
          <div className="mt-4 text-sm text-cream/50">— Rania, local since 2019</div>
        </Reveal>
      </div>

      <OrganicSeam fromClass="text-background" />
    </section>
  );
}

/* ---------------------------- Today's Arrivals -------------------------- */

const arrivals = [
  { name: "Heirloom Tomatoes", meta: "Local · NSW", img: produceImg },
  { name: "Alphonso Mangoes", meta: "Just Landed", img: fruitImg },
  { name: "Free-Range Chicken", meta: "Cut this morning", img: chickenImg },
  { name: "Artisan Sourdough", meta: "Baked at 6am", img: bakeryImg },
];

function TodaysArrivals() {
  return (
    <section id="today" className="relative py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            eyebrow="Arrived Fresh Today"
            title={
              <>
                Why you should visit <span className="italic text-saffron-deep">today</span>.
              </>
            }
            intro="Fresh produce, rare imports, and seasonal items that just landed. Grab them before they sell out."
          />
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-4 py-2 text-sm text-forest">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-forest" />
              </span>
              Live · Updated today
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {arrivals.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.06}>
              <div className="card-lift img-zoom group relative overflow-hidden rounded-3xl bg-card shadow-soft">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-saffron px-3 py-1 text-xs font-semibold tracking-wide text-ink">
                    Updated Today
                  </span>
                </div>
                <div className="p-5">
                  <div className="eyebrow">{a.meta}</div>
                  <h3 className="mt-1.5 font-display text-xl font-semibold">{a.name}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- International Flavours ---------------------- */

const countries = [
  { name: "Nepal", note: "Authentic staples, teas & local spices", img: recipeThai },
  { name: "India", note: "Basmati, ghee, masalas & pickles", img: riceImg },
  { name: "Sri Lanka", note: "Curry powders & coconut staples", img: spicesImg },
  { name: "Middle East", note: "Tahini, dates & flatbreads", img: bakeryImg },
];

function InternationalFlavours() {
  return (
    <section id="world" className="relative overflow-hidden bg-forest py-28 text-cream lg:py-36">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Reveal>
              <div className="eyebrow mb-4 flex items-center gap-3 text-cream/70">
                <span className="h-px w-8 bg-cream/40" />
                Your Favourite Groceries from Home
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg text-cream">
                Ingredients you can't find at{" "}
                <span className="italic text-saffron">Woolworths or Coles</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-cream/75">
                A shelf that tastes like home — wherever home is. We stock authentic Nepali groceries, 
                Indian spices, and Middle Eastern staples sourced directly, so you're not settling for 
                the one token spice jar at the big supermarket.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a href="#visit" className="btn-saffron shrink-0">
              Find your favourites <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <div className="img-zoom card-lift group relative h-72 overflow-hidden rounded-3xl">
                <img
                  src={c.img}
                  alt={`${c.name} groceries`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-cream">{c.name}</h3>
                  <p className="mt-1 text-xs leading-snug text-cream/75">{c.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <OrganicSeam fromClass="text-background" />
    </section>
  );
}

/* --------------------------- Weekly Specials --------------------------- */

function WeeklySpecials() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-saffron p-10 text-ink lg:col-span-2 lg:row-span-1">
              <div className="grain absolute inset-0" />
              <div className="relative">
                <div className="eyebrow text-ink/70">Today's Best Value</div>
                <h3 className="mt-4 display-lg">
                  Save up to <span className="italic">30%</span> on family favourites.
                </h3>
                <p className="mt-4 max-w-[65ch] text-ink/75">
                  Save on seasonal fresh produce, bulk rice, and family-sized chicken packs available in-store today. We pass our supplier discounts directly to you.
                </p>
              </div>
              <div className="relative mt-10 flex items-end justify-between">
                <a href="#visit" className="btn-primary">
                  See today's best value <ArrowRight className="h-4 w-4" />
                </a>
                <div className="hidden font-display text-8xl font-bold leading-none text-ink/15 md:block">
                  30%
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="img-zoom card-lift relative flex h-full min-h-[300px] overflow-hidden rounded-3xl bg-forest text-cream">
              <img
                src={spicesImg}
                alt="Spices"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8">
                <div className="eyebrow text-cream/80">Spice Aisle</div>
                <h3 className="mt-2 font-display text-3xl font-semibold">
                  Buy 2 get 1 free.
                  <br />
                  All whole spices.
                </h3>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------- Why People Love Shopping ---------------------- */

const stories = [
  {
    icon: Leaf,
    title: "Fresh every morning",
    body: "Deliveries land at dawn. What's on the shelf today didn't sit in a warehouse yesterday.",
  },
  {
    icon: Globe2,
    title: "Authentic, from everywhere",
    body: "Ingredients from Nepal, India, Sri Lanka, Korea, Lebanon, Italy — the flavours you grew up with.",
  },
  {
    icon: Users,
    title: "A team who knows",
    body: "Ask us anything. Our staff cook these dishes at home — they'll point you to the right rice, oil, or masala.",
  },
  {
    icon: ShieldCheck,
    title: "Fair, honest pricing",
    body: "Family-run means no corporate markup. Great quality, priced the way a neighbour would.",
  },
  {
    icon: Sparkles,
    title: "A store you enjoy",
    body: "Clean, calm, and organised. No fluorescent chaos — just a place that respects your time.",
  },
  {
    icon: Star,
    title: "Quality you can trust",
    body: "We taste, test, and stand behind everything on our shelves. If it's not right, tell us.",
  },
];

function WhyPeopleLove() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <SectionHead
                eyebrow="Why people keep coming back"
                title={
                  <>
                    A neighbourhood store,
                    <br />
                    <span className="italic text-saffron-deep">worth the trip</span>.
                  </>
                }
                intro="We're not the biggest grocery on the street. We just try to be the one you tell your friends about."
              />
              <Reveal delay={0.1}>
                <div className="mt-10 img-zoom overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={storyFresh}
                    alt="Hands arranging fresh herbs"
                    loading="lazy"
                    className="h-80 w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stories.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.05}>
                  <div className="card-lift group h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-saffron/20 text-saffron-deep transition-colors group-hover:bg-saffron group-hover:text-ink">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Recipe Inspiration ------------------------- */

const recipes = [
  {
    title: "Butter Chicken",
    region: "Northern India",
    img: recipeButter,
    time: "45 min",
    ingredients: ["Chicken thigh", "Tomato", "Cream", "Garam masala", "Fenugreek"],
  },
  {
    title: "Chicken Biryani",
    region: "Hyderabad, India",
    img: recipeBiryani,
    time: "1h 20m",
    ingredients: ["Basmati", "Chicken", "Saffron", "Mint", "Fried onion"],
  },
  {
    title: "Chicken Momo",
    region: "Kathmandu, Nepal",
    img: recipeThai,
    time: "1 hour",
    ingredients: ["Chicken mince", "Flour", "Ginger", "Garlic", "Coriander"],
  },
];

function Recipes() {
  return (
    <section id="recipes" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <OrganicBlob className="-left-20 bottom-0 h-80 w-80" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Cook Tonight"
          title={
            <>
              Complete meals,
              <br />
              <span className="italic text-saffron-deep">in one shopping basket.</span>
            </>
          }
          intro="Don't know what to cook? Pick a recipe and grab every single ingredient you need from our shelves today. We've got everything from the protein to the exact spice blend."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-soft">
                <div className="img-zoom relative h-80 overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <div className="absolute inset-x-6 bottom-5 flex items-end justify-between text-cream">
                    <div>
                      <div className="eyebrow text-cream/80">{r.region}</div>
                      <h3 className="mt-1 font-display text-2xl font-semibold">{r.title}</h3>
                    </div>
                    <div className="rounded-full bg-cream/15 px-3 py-1 text-xs backdrop-blur">
                      {r.time}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="eyebrow">Available in store</div>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {r.ingredients.map((ing) => (
                      <li
                        key={ing}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground/80"
                      >
                        {ing}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#visit"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-saffron-deep"
                  >
                    Find these ingredients <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Gallery ------------------------------- */

function Gallery() {
  const images = [
    { src: storeInterior, alt: "Inside the store", className: "col-span-2 row-span-2 h-full" },
    { src: produceImg, alt: "Fresh produce", className: "" },
    { src: chickenImg, alt: "Chicken counter", className: "" },
    { src: fruitImg, alt: "Fresh fruits", className: "" },
    { src: spicesImg, alt: "Spice display", className: "" },
    { src: bakeryImg, alt: "Bakery", className: "col-span-2" },
    { src: seafoodImg, alt: "Seafood", className: "" },
  ];
  return (
    <section id="store" className="relative bg-secondary/40 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Explore Our Store Before You Visit"
          title={
            <>
              Clean, organised, and <span className="italic text-saffron-deep">ready to explore</span>.
            </>
          }
          intro="Wide aisles, premium presentation, and a welcoming atmosphere. This is a store that respects your time and your standards."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[200px]">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div
                className={`img-zoom card-lift overflow-hidden rounded-2xl bg-muted ${img.className}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Testimonials ----------------------------- */

const reviews = [
  {
    name: "Priya S.",
    role: "Kogarah local",
    body: "This is the only grocery I trust for spices. Everything is fresh, well-labelled, and the staff actually know what they're selling.",
  },
  {
    name: "Daniel M.",
    role: "Family shopper",
    body: "We drive 20 minutes just to shop here. The chicken counter is incredible and the produce is always at its peak.",
  },
  {
    name: "Amira H.",
    role: "Home cook",
    body: "It feels like a proper community store. They remember my kids, help me find rare ingredients, and never rush you.",
  },
];

function Testimonials() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            eyebrow="Customer stories"
            title={
              <>
                Loved by the <span className="italic text-saffron-deep">neighbourhood</span>.
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft">
              <div className="flex items-center gap-0.5 text-saffron-deep">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-display text-lg font-semibold">4.9</span>
                <span className="ml-1.5 text-muted-foreground">· 300+ Google reviews</span>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="card-lift flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="flex items-center gap-1 text-saffron-deep">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 font-display text-lg leading-snug text-foreground">
                  "{r.body}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-saffron/20 font-display text-sm font-semibold text-saffron-deep">
                    {r.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">{r.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Visit --------------------------------- */

function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-cream py-16 md:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="Plan Your Visit"
            title={
              <>
                Come <span className="italic text-saffron-deep">say hello</span>.
              </>
            }
            intro="We've made visiting easy. Free parking right out front, accessible entry, and we're open late. Have a question about bulk orders or special events? Check below or give us a call."
          />

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="eyebrow">Address</div>
                <p className="mt-1 font-display text-lg">
                  Railway Parade, Kogarah NSW 2217, Australia
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream">
                <Clock className="h-4 w-4" />
              </span>
              <div>
                <div className="eyebrow">Opening Hours</div>
                <ul className="mt-1 space-y-0.5 text-sm text-foreground/80">
                  <li>Mon – Fri &nbsp;·&nbsp; 8:00 am – 8:30 pm</li>
                  <li>Saturday &nbsp;·&nbsp; 8:00 am – 9:00 pm</li>
                  <li>Sunday &nbsp;·&nbsp; 9:00 am – 7:00 pm</li>
                  <li className="text-foreground/60">
                    Public holidays &nbsp;·&nbsp; 9:00 am – 6:00 pm (closed Christmas Day)
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream">
                <Car className="h-4 w-4" />
              </span>
              <div>
                <div className="eyebrow">Parking</div>
                <p className="mt-1 text-sm text-foreground/80">
                  Free customer parking directly out front on Railway Parade.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream">
                <Users className="h-4 w-4" />
              </span>
              <div>
                <div className="eyebrow">Bulk & Special Orders</div>
                <p className="mt-1 text-sm text-foreground/80">
                  Need bulk rice, large meat orders, or specific festival items? Call us 2 days ahead and we'll have it ready for pickup.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="eyebrow">Call</div>
                  <p className="mt-1 truncate">(02) 8123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-cream">
                  <Mail className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="eyebrow">Email</div>
                  <p className="mt-1 truncate">hello@ricespicedice.com.au</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://maps.google.com/?q=Kogarah+NSW"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Get directions <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+61281234567" className="btn-ghost">
              <Phone className="h-4 w-4" /> Call the store
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="img-zoom relative overflow-hidden rounded-[2rem] shadow-lift">
              <iframe
                title="Rice Spice Dice location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5!2d151.131!3d-33.9788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU4JzQzLjciUyAxNTHCsDA4JzEzLjIiRQ!5e0!3m2!1sen!2sau!4v1"
                className="h-[520px] w-full"
                loading="lazy"
              />
              <div className="absolute left-6 top-6 rounded-2xl bg-cream/95 p-4 backdrop-blur shadow-soft">
                <div className="eyebrow">Now open</div>
                <div className="mt-1 font-display text-lg font-semibold">Rice Spice Dice</div>
                <div className="text-xs text-muted-foreground">Railway Parade, Kogarah NSW 2217</div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-ink/90 p-4 text-cream backdrop-blur shadow-soft">
                <Bell className="h-4 w-4 shrink-0 text-saffron" />
                <p className="text-sm leading-snug">
                  <span className="font-medium">This week's notice:</span> fresh king prawns &amp;
                  mangoes just landed — ask in-store.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <OrganicSeam fromClass="text-ink" />
    </section>
  );
}

/* ---------------------------- Future Vision ----------------------------- */

const futureFeatures = [
  {
    icon: ShoppingBag,
    title: "Click & Collect",
    body: "Order online, skip the queue, pick up fresh at the counter.",
  },
  {
    icon: Drumstick,
    title: "Reserve Fresh Chicken",
    body: "Call ahead or book online for your exact cut, ready when you arrive.",
  },
  {
    icon: Heart,
    title: "Loyalty Rewards",
    body: "Earn points on every visit and unlock member-only pricing.",
  },
];

function FutureVision() {
  return (
    <section id="future" className="relative overflow-hidden bg-ink py-28 text-cream lg:py-36">
      <div className="grain absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <div className="eyebrow mb-4 flex items-center gap-3 text-cream/70">
              <span className="h-px w-8 bg-cream/40" />
              What's Next
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg text-cream">
              This is just <span className="italic text-saffron">the beginning</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-cream/75">
              Rice Spice Dice keeps growing with its neighbourhood. Here's what we're building
              next to make shopping with us even easier.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {futureFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-cream/15 bg-cream/[0.04] p-7">
                <span className="absolute right-5 top-5 rounded-full border border-cream/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-cream/50">
                  Coming soon
                </span>
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-saffron/20 text-saffron transition-colors group-hover:bg-saffron group-hover:text-ink">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="#newsletter" className="btn-saffron">
              Be the first to know <ArrowRight className="h-4 w-4" />
            </a>
            <span className="text-sm text-cream/50">
              Join the list below and we'll let you know the moment each one launches.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Newsletter ------------------------------ */

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section id="newsletter" className="relative overflow-hidden bg-ink py-24 text-cream">
      <div className="grain absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div>
            <div className="eyebrow text-cream/60">The Weekly</div>
            <h2 className="mt-3 display-lg text-cream">
              Get weekly specials <span className="italic text-saffron">before everyone else.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-cream/20 bg-cream/5 px-6 py-4 text-cream placeholder:text-cream/40 outline-none transition-all focus-visible:ring-2 focus-visible:ring-saffron focus-visible:bg-cream/10"
            />
            <button type="submit" className="btn-saffron">
              {done ? "See you Monday " : "Subscribe "} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- Sticky Mobile CTA --------------------------- */

function MobileCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY > document.body.offsetHeight - 480;
      setVisible(window.scrollY > 640 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      className={`fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-border bg-cream/95 px-4 pt-3 shadow-lift backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a href="tel:+61281234567" className="btn-ghost flex-1 !px-3 !py-3 min-h-[44px] text-sm">
        <Phone className="h-4 w-4" /> Call
      </a>
      <a
        href="https://wa.me/61XXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full min-h-[44px] !px-3 !py-3 text-sm font-medium text-white"
        style={{ background: '#25D366' }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
      <a
        href="https://maps.google.com/?q=Kogarah+NSW"
        target="_blank"
        rel="noreferrer"
        className="btn-saffron flex-[1.2] !px-3 !py-3 min-h-[44px] text-sm"
      >
        Directions <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

/* -------------------------------- Footer ------------------------------- */

function Footer() {
  return (
    <footer className="bg-cream pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-display text-lg font-semibold">Rice·Spice·Dice</span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              A family-run international grocery in Kogarah — bringing warmth, freshness, and the
              flavours of home to Sydney's south.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground/70 transition-all hover:bg-saffron hover:text-ink"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground/70 transition-all hover:bg-saffron hover:text-ink"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="https://wa.me/61XXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground/70 transition-all hover:bg-[#25D366] hover:text-white"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <div className="eyebrow mb-4">Store</div>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li>
                <a href="#categories" className="hover:text-saffron-deep">
                  Categories
                </a>
              </li>
              <li>
                <a href="#chicken" className="hover:text-saffron-deep">
                  Chicken Counter
                </a>
              </li>
              <li>
                <a href="#today" className="hover:text-saffron-deep">
                  Today's Arrivals
                </a>
              </li>
              <li>
                <a href="#recipes" className="hover:text-saffron-deep">
                  Recipes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Visit</div>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li>Railway Parade</li>
              <li>Kogarah NSW 2217</li>
              <li><a href="tel:+61281234567" className="transition-colors hover:text-saffron-deep">(02) 8123 4567</a></li>
              <li><a href="mailto:hello@ricespicedice.com.au" className="transition-colors hover:text-saffron-deep">hello@ricespicedice.com.au</a></li>
            </ul>
            <div className="mt-6">
              <div className="eyebrow mb-2">Follow Us</div>
              <div className="flex items-center gap-2">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-sm text-foreground/60 hover:text-saffron-deep">Facebook</a>
                <span className="text-foreground/30">·</span>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm text-foreground/60 hover:text-saffron-deep">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Rice Spice Dice · Kogarah, NSW</div>
          <div className="text-foreground/40">Fresh food. Real quality. Every day.</div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- WhatsApp Float ----------------------------- */

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/61XXXXXXXXX?text=Hi%20Rice%20Spice%20Dice%2C%20I%27d%20like%20to%20enquire%20about..."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <span className="wa-ring" />
      <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-6 w-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

/* -------------------------------- Page --------------------------------- */

function Home() {
  return (
    <main id="main-content" className="bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-saffron focus:px-5 focus:py-2.5 focus:font-medium focus:text-ink focus:shadow-lift"
      >
        Skip to content
      </a>
      <Nav />
      <Hero />
      <FeatureStrip />
      <CommunityWelcome />
      <TodaysArrivals />
      <ChickenExperience />
      <Categories />
      <InternationalFlavours />
      <WeeklySpecials />
      <FestivalStrip />
      <Recipes />
      <WhyPeopleLove />
      <Gallery />
      <Testimonials />
      <Visit />
      <FutureVision />
      <Newsletter />
      <Footer />
      <WhatsAppFloat />
      <MobileCta />
    </main>
  );
}
