import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
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
      { property: "og:image", content: "https://id-preview--b9cb7c82-6c46-44ac-99c9-2e1b54a4afed.lovable.app/og.jpg" },
    ],
  }),
  component: Home,
});

/* ----------------------------- Small helpers ----------------------------- */

function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------- Nav ---------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Rice<span className="text-saffron-deep">·</span>Spice<span className="text-saffron-deep">·</span>Dice
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Categories", "#categories"],
            ["Chicken", "#chicken"],
            ["Today", "#today"],
            ["Recipes", "#recipes"],
            ["Store", "#store"],
            ["Visit", "#visit"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-foreground/75 transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="#visit" className="btn-saffron hidden md:inline-flex text-sm">
          Visit Store <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
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
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
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

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-cream backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
            Kogarah · NSW · Est. Family Grocery
          </motion.div>

          <h1 className="display-xl text-cream">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              Fresh Food.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              Real Quality.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="block italic text-saffron"
              style={{ fontFamily: "'Poppins', serif" }}
            >
              Every&nbsp;Day.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-cream/85"
          >
            From farm-fresh produce and premium chicken to authentic international
            groceries — discover everything your family needs, gathered under one
            warm, welcoming roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#visit" className="btn-saffron">
              Visit Store <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur transition-all hover:bg-cream/15"
            >
              Explore Categories <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Floating trust cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { icon: Leaf, label: "Fresh Daily" },
            { icon: Drumstick, label: "Premium Chicken" },
            { icon: Globe2, label: "International" },
            { icon: Users, label: "Local Team" },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className="floaty flex items-center gap-2.5 rounded-2xl border border-cream/20 bg-cream/10 px-4 py-3 text-cream backdrop-blur-xl"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <Icon className="h-4 w-4 text-saffron" />
              <span className="text-xs font-medium tracking-wide">{label}</span>
            </motion.div>
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
    { icon: Sun, label: "Fresh Every Day" },
    { icon: ShieldCheck, label: "Quality Guaranteed" },
    { icon: Globe2, label: "International Selection" },
    { icon: MapPin, label: "Convenient Location" },
    { icon: Users, label: "Family Friendly" },
    { icon: Sparkles, label: "Excellent Service" },
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
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

/* --------------------------- Shop by Category -------------------------- */

const categories = [
  { name: "Fresh Produce", tag: "Farm Fresh", img: produceImg, span: "md:col-span-2 md:row-span-2", h: "h-[520px] md:h-full" },
  { name: "Premium Chicken", tag: "Cut Daily", img: chickenImg, span: "", h: "h-[260px]" },
  { name: "Spices", tag: "World Flavours", img: spicesImg, span: "", h: "h-[260px]" },
  { name: "Rice", tag: "Global Varieties", img: riceImg, span: "", h: "h-[260px]" },
  { name: "Fresh Fruit", tag: "Seasonal", img: fruitImg, span: "", h: "h-[260px]" },
  { name: "Bakery", tag: "Baked In-Store", img: bakeryImg, span: "", h: "h-[260px]" },
  { name: "Seafood", tag: "On Ice", img: seafoodImg, span: "", h: "h-[260px]" },
];

const extraCats = [
  { name: "Fresh Meat", icon: Flame },
  { name: "Frozen", icon: Snowflake },
  { name: "Dairy", icon: IceCream },
  { name: "Snacks", icon: Cookie },
  { name: "Drinks", icon: Coffee },
  { name: "Vegetables", icon: Leaf },
  { name: "Grains", icon: Wheat },
  { name: "Seafood", icon: Fish },
];

function Categories() {
  return (
    <section id="categories" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHead
            eyebrow="Shop by Category"
            title={
              <>
                Every aisle,{" "}
                <span className="italic text-saffron-deep">thoughtfully</span> curated.
              </>
            }
            intro="Wander through fresh produce, premium meats, and pantry staples sourced from every corner of the world."
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
              The Chicken Counter
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg">
              Premium chicken,{" "}
              <span className="italic text-saffron">cut fresh</span> every morning.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg text-cream/75">
              Sourced from trusted Australian farms and prepared in-store by our team. Whether
              you're roasting a whole bird or firing the grill with marinated thighs — you'll
              taste the difference from the first bite.
            </p>
          </Reveal>

          <div className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
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
            <div className="absolute -bottom-6 -left-4 hidden max-w-xs rounded-2xl bg-cream p-5 text-ink shadow-lift md:block">
              <div className="flex items-center gap-2 text-saffron-deep">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="mt-2 text-sm leading-snug">
                "Honestly the best chicken in Kogarah — always fresh, always trimmed properly."
              </p>
              <div className="mt-2 text-xs text-muted-foreground">— Rania, local since 2019</div>
            </div>
          </Reveal>
        </div>
      </div>
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
    <section id="today" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            eyebrow="Today's Fresh Arrivals"
            title={
              <>
                Updated <span className="italic text-saffron-deep">daily</span>.<br />
                Straight from the crate.
              </>
            }
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
                <div className="eyebrow text-ink/70">Weekly Specials</div>
                <h3 className="mt-4 display-lg">
                  Save up to <span className="italic">30%</span> on family favourites.
                </h3>
                <p className="mt-4 max-w-md text-ink/75">
                  New deals refreshed every Monday across fresh produce, pantry staples, and the
                  chicken counter.
                </p>
              </div>
              <div className="relative mt-10 flex items-end justify-between">
                <a href="#visit" className="btn-primary">
                  See this week's specials <ArrowRight className="h-4 w-4" />
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
                  Buy 2 get 1 free.<br />All whole spices.
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
    body: "Ingredients from India, Sri Lanka, Thailand, Korea, Lebanon, Italy — the flavours you grew up with.",
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
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <SectionHead
                eyebrow="Why people keep coming back"
                title={
                  <>
                    A neighbourhood store,<br />
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
    title: "Thai Fried Rice",
    region: "Bangkok, Thailand",
    img: recipeThai,
    time: "25 min",
    ingredients: ["Jasmine rice", "Egg", "Fish sauce", "Lime", "Chilli"],
  },
];

function Recipes() {
  return (
    <section id="recipes" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Recipe Inspiration"
          title={
            <>
              Cook the world,<br />
              <span className="italic text-saffron-deep">with what's on our shelves.</span>
            </>
          }
          intro="Every ingredient in these recipes is stocked in-store. Come in, and we'll help you find it."
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
    <section id="store" className="relative bg-secondary/40 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Inside the Store"
          title={
            <>
              A space that feels like{" "}
              <span className="italic text-saffron-deep">somewhere</span> to spend time.
            </>
          }
          intro="Warm wood, generous aisles, and produce arranged like it matters — because it does."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[200px]">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className={`img-zoom card-lift overflow-hidden rounded-2xl bg-muted ${img.className}`}>
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
    body:
      "This is the only grocery I trust for spices. Everything is fresh, well-labelled, and the staff actually know what they're selling.",
  },
  {
    name: "Daniel M.",
    role: "Family shopper",
    body:
      "We drive 20 minutes just to shop here. The chicken counter is incredible and the produce is always at its peak.",
  },
  {
    name: "Amira H.",
    role: "Home cook",
    body:
      "It feels like a proper community store. They remember my kids, help me find rare ingredients, and never rush you.",
  },
];

function Testimonials() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Customer stories"
          title={
            <>
              Loved by the <span className="italic text-saffron-deep">neighbourhood</span>.
            </>
          }
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="card-lift flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft">
                <div className="flex items-center gap-1 text-saffron-deep">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-lg leading-snug text-foreground">
                  "{r.body}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-saffron/25 font-display text-sm font-semibold text-ink">
                    {r.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-medium">{r.name}</div>
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
    <section id="visit" className="relative overflow-hidden bg-cream py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="Visit Us"
            title={
              <>
                Come <span className="italic text-saffron-deep">say hello</span>.
              </>
            }
            intro="Free parking. Accessible entry. And a friendly hello every time you walk in."
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
                </ul>
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
                src="https://www.openstreetmap.org/export/embed.html?bbox=151.129%2C-33.986%2C151.145%2C-33.976&layer=mapnik&marker=-33.981%2C151.137"
                className="h-[520px] w-full grayscale-[15%]"
                loading="lazy"
              />
              <div className="absolute left-6 top-6 rounded-2xl bg-cream/95 p-4 backdrop-blur shadow-soft">
                <div className="eyebrow">Now open</div>
                <div className="mt-1 font-display text-lg font-semibold">Rice Spice Dice</div>
                <div className="text-xs text-muted-foreground">Kogarah, NSW · 2.4km away</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Newsletter ------------------------------ */

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream">
      <div className="grain absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div>
            <div className="eyebrow text-cream/60">The Weekly</div>
            <h2 className="mt-3 display-lg text-cream">
              Get weekly specials{" "}
              <span className="italic text-saffron">before everyone else.</span>
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
              className="flex-1 rounded-full border border-cream/20 bg-cream/5 px-6 py-4 text-cream placeholder:text-cream/40 outline-none transition-all focus:border-saffron focus:bg-cream/10"
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
              <span className="font-display text-lg font-semibold">
                Rice·Spice·Dice
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              A family-run international grocery in Kogarah — bringing warmth, freshness,
              and the flavours of home to Sydney's south.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-4">Store</div>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li><a href="#categories" className="hover:text-saffron-deep">Categories</a></li>
              <li><a href="#chicken" className="hover:text-saffron-deep">Chicken Counter</a></li>
              <li><a href="#today" className="hover:text-saffron-deep">Today's Arrivals</a></li>
              <li><a href="#recipes" className="hover:text-saffron-deep">Recipes</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Visit</div>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li>Railway Parade</li>
              <li>Kogarah NSW 2217</li>
              <li>(02) 8123 4567</li>
              <li>hello@ricespicedice.com.au</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Rice Spice Dice · Kogarah, NSW</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------- Page --------------------------------- */

function Home() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <FeatureStrip />
      <Categories />
      <ChickenExperience />
      <TodaysArrivals />
      <WeeklySpecials />
      <WhyPeopleLove />
      <Recipes />
      <Gallery />
      <Testimonials />
      <Visit />
      <Newsletter />
      <Footer />
    </main>
  );
}
