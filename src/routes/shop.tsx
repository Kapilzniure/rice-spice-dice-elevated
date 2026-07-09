import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import { products, categories, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

/* ------------------------------------------------------------------ */
/*  Route Definition                                                   */
/* ------------------------------------------------------------------ */

export const Route = createFileRoute("/shop")({
  component: Shop,
  head: () => ({ meta: [{ title: "Shop Online — Rice Spice Dice" }] }),
});

/* ------------------------------------------------------------------ */
/*  ShopNav                                                            */
/* ------------------------------------------------------------------ */

function ShopNav({
  onCartOpen,
  totalItems,
}: {
  onCartOpen: () => void;
  totalItems: number;
}) {
  return (
    <nav className="glass-nav fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-3 sm:px-8">
      {/* Left — back + logo */}
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="btn-ghost !p-0 flex h-10 w-10 items-center justify-center rounded-full"
          aria-label="Back to home"
        >
          <ArrowLeft size={20} />
        </Link>
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-foreground">
          Rice<span className="text-saffron">·</span>Spice<span className="text-saffron">·</span>Dice
        </Link>
      </div>

      {/* Right — cart button */}
      <button
        onClick={onCartOpen}
        className="btn-ghost !p-0 relative flex h-10 w-10 items-center justify-center rounded-full"
        aria-label="Open cart"
      >
        <ShoppingCart size={22} />
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-saffron text-[11px] font-bold text-ink"
          >
            {totalItems}
          </motion.span>
        )}
      </button>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  CategoryTabs                                                       */
/* ------------------------------------------------------------------ */

const CATEGORY_EMOJIS: Record<string, string> = {
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
  condiments: "🫙",
};

function CategoryTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (id: string) => void;
}) {
  const allCategories = [{ id: "all", name: "All Products" }, ...categories];

  return (
    <div className="hide-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 py-2 sm:-mx-0 sm:flex-wrap sm:px-0">
      {allCategories.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              isActive
                ? "bg-ink text-cream shadow-soft"
                : "bg-secondary text-foreground hover:bg-ink/10"
            }`}
          >
            <span>{CATEGORY_EMOJIS[cat.id] ?? "📦"}</span>
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ProductCard                                                        */
/* ------------------------------------------------------------------ */

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem, getItemQuantity, updateQuantity, removeItem } = useCart();
  const qty = getItemQuantity(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="card-lift group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="img-zoom h-full w-full object-cover"
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-saffron px-2.5 py-0.5 text-xs font-semibold text-ink">
            {product.tag}
          </span>
        )}
        {product.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-forest/90 px-2.5 py-0.5 text-xs font-semibold text-cream">
            {product.badge}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="font-display text-base font-semibold leading-snug text-foreground">
          {product.name}
        </h3>
        {product.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>
        )}
        <div className="mt-auto flex items-baseline gap-1 pt-2">
          <span className="text-lg font-bold text-saffron-deep">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-muted-foreground">/ {product.unit}</span>
        </div>

        {/* Add / Stepper */}
        {qty === 0 ? (
          <button
            onClick={() => addItem(product)}
            className="btn-saffron mt-2 w-full rounded-full py-2.5 text-sm font-semibold"
          >
            Add to Cart
          </button>
        ) : (
          <div className="mt-2 flex items-center justify-between rounded-full bg-ink px-1 py-1">
            <button
              onClick={() =>
                qty === 1 ? removeItem(product.id) : updateQuantity(product.id, qty - 1)
              }
              className="flex h-8 w-8 items-center justify-center rounded-full text-cream transition hover:bg-cream/10"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="min-w-[2rem] text-center text-sm font-bold text-cream">
              {qty}
            </span>
            <button
              onClick={() => updateQuantity(product.id, qty + 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-cream transition hover:bg-cream/10"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  CartDrawer                                                         */
/* ------------------------------------------------------------------ */

function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } =
    useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-cream shadow-lift"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="flex items-center gap-2">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Your Cart
                </h2>
                {totalItems > 0 && (
                  <span className="rounded-full bg-saffron/20 px-2.5 py-0.5 text-xs font-semibold text-saffron-deep">
                    {totalItems} {totalItems === 1 ? "item" : "items"}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="btn-ghost !p-0 flex h-9 w-9 items-center justify-center rounded-full"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            {items.length === 0 ? (
              /* Empty state */
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                  <ShoppingBag size={36} className="text-muted-foreground" />
                </div>
                <p className="font-display text-lg font-semibold text-foreground">
                  Your cart is empty
                </p>
                <p className="text-sm text-muted-foreground">
                  Browse our collection and add your favourites.
                </p>
                <button
                  onClick={onClose}
                  className="btn-saffron mt-2 rounded-full px-8 py-2.5 text-sm font-semibold"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                {/* Items list */}
                <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
                  {items.map(({ product, quantity }) => (
                    <li key={product.id} className="flex items-center gap-4 py-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-16 w-16 shrink-0 rounded-xl object-cover"
                      />
                      <div className="flex flex-1 flex-col gap-1">
                        <span className="text-sm font-semibold text-foreground">
                          {product.name}
                        </span>
                        <span className="text-sm font-medium text-saffron-deep">
                          ${product.price.toFixed(2)}{" "}
                          <span className="text-muted-foreground font-normal">
                            / {product.unit}
                          </span>
                        </span>
                        {/* Qty stepper */}
                        <div className="mt-1 flex items-center gap-2">
                          <div className="flex items-center rounded-full border border-border">
                            <button
                              onClick={() =>
                                quantity === 1
                                  ? removeItem(product.id)
                                  : updateQuantity(product.id, quantity - 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-secondary"
                              aria-label="Decrease"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="min-w-[1.5rem] text-center text-xs font-bold">
                              {quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(product.id, quantity + 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-secondary"
                              aria-label="Increase"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Remove */}
                      <button
                        onClick={() => removeItem(product.id)}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:bg-red-50 hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="border-t border-border px-6 py-5">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Subtotal</span>
                    <span className="text-lg font-bold text-foreground">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <p className="mb-4 text-xs text-muted-foreground">
                    Free pickup · Delivery from $5.90
                  </p>
                  <Link
                    to="/checkout"
                    onClick={onClose}
                    className="btn-saffron block w-full rounded-full py-3 text-center text-sm font-semibold"
                  >
                    Proceed to Checkout
                  </Link>
                  <button
                    onClick={clearCart}
                    className="btn-ghost mt-2 w-full rounded-full py-2 text-xs"
                  >
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Delivery Info Banner                                               */
/* ------------------------------------------------------------------ */

function DeliveryBanner() {
  const pills = [
    { emoji: "🚗", text: "Free Pickup" },
    { emoji: "🕐", text: "Ready in 30 min" },
    { emoji: "📦", text: "Delivery from $5.90" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-4">
      {pills.map((p) => (
        <span
          key={p.text}
          className="flex items-center gap-1.5 rounded-full bg-saffron/10 px-4 py-1.5 text-sm font-medium text-saffron-deep"
        >
          <span>{p.emoji}</span>
          {p.text}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Shop Component                                                */
/* ------------------------------------------------------------------ */

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-cream">
      {/* Nav */}
      <ShopNav onCartOpen={() => setCartOpen(true)} totalItems={totalItems} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-saffron/10 via-cream to-forest/5 pt-24 pb-10">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow mb-2 inline-flex items-center gap-1.5 text-saffron-deep">
              <Sparkles size={14} /> Online Grocery
            </span>
            <h1 className="display-md font-display mb-3 text-foreground">
              Shop Fresh, Shop Online
            </h1>
            <p className="mx-auto mb-6 max-w-lg text-muted-foreground">
              Authentic spices, premium rice &amp; everyday essentials — delivered
              to your door or ready for pickup.
            </p>

            {/* Search bar */}
            <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 shadow-soft focus-within:ring-2 focus-within:ring-saffron/40">
              <Search size={18} className="shrink-0 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products…"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="shrink-0 text-muted-foreground transition hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-8">
        {/* Categories */}
        <CategoryTabs active={selectedCategory} onChange={setSelectedCategory} />

        {/* Delivery info */}
        <DeliveryBanner />

        {/* Product count */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
            <Search size={40} className="text-muted-foreground/40" />
            <p className="font-display text-lg font-semibold text-foreground">
              No products found
            </p>
            <p className="text-sm text-muted-foreground">
              Try a different search term or category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="btn-ghost mt-2 rounded-full px-6 py-2 text-sm font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Cart drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
