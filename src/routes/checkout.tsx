import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Phone,
  CreditCard,
  Truck,
  Store,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";
import { useCart } from "../lib/cart-context";

/* ------------------------------------------------------------------ */
/*  Route Definition                                                   */
/* ------------------------------------------------------------------ */

export const Route = createFileRoute("/checkout")({
  component: Checkout,
  head: () => ({ meta: [{ title: "Checkout — Rice Spice Dice" }] }),
});

/* ------------------------------------------------------------------ */
/*  CheckoutNav                                                        */
/* ------------------------------------------------------------------ */

function CheckoutNav() {
  return (
    <nav className="glass-nav fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-3 sm:px-8 border-b border-border">
      <Link
        to="/shop"
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={16} /> Back to Shop
      </Link>
      
      <div className="flex items-center gap-1.5 text-foreground font-display font-semibold tracking-tight">
        <Sparkles size={16} className="text-saffron-deep" />
        Rice·Spice·Dice
      </div>

      <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-forest">
        <ShieldCheck size={14} /> Secure Checkout
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  OrderSummary                                                       */
/* ------------------------------------------------------------------ */

function OrderSummary({ deliveryType }: { deliveryType: "pickup" | "delivery" }) {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();
  const deliveryFee = deliveryType === "pickup" ? 0 : 5.9;
  const finalTotal = totalPrice + deliveryFee;

  return (
    <div className="card-lift sticky top-24 rounded-3xl bg-white shadow-soft p-6">
      <h2 className="font-display text-lg font-semibold border-b border-border pb-4 mb-4">
        Order Summary <span className="text-muted-foreground font-normal text-sm ml-2">({totalItems} items)</span>
      </h2>

      <div className="flex flex-col gap-4 max-h-[40vh] overflow-y-auto hide-scrollbar">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex gap-4">
            <img src={product.image} alt={product.name} className="h-12 w-12 rounded-lg object-cover bg-secondary shrink-0" />
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium text-foreground leading-snug pr-2">{product.name}</span>
                <span className="text-sm font-semibold">${(product.price * quantity).toFixed(2)}</span>
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center rounded-full border border-border bg-secondary/50">
                  <button onClick={() => quantity > 1 ? updateQuantity(product.id, quantity - 1) : removeItem(product.id)} className="h-6 w-6 flex items-center justify-center hover:bg-secondary rounded-full transition-colors"><Minus size={12} /></button>
                  <span className="text-xs font-medium w-4 text-center">{quantity}</span>
                  <button onClick={() => updateQuantity(product.id, quantity + 1)} className="h-6 w-6 flex items-center justify-center hover:bg-secondary rounded-full transition-colors"><Plus size={12} /></button>
                </div>
                <button onClick={() => removeItem(product.id)} className="text-muted-foreground hover:text-red-500 transition-colors p-1 rounded-full"><Trash2 size={12}/></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Fulfillment</span>
          <span className="font-medium">{deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-border">
          <span className="font-display font-semibold text-lg">Total</span>
          <span className="font-display font-bold text-2xl text-ink">${finalTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SuccessModal                                                       */
/* ------------------------------------------------------------------ */

function SuccessModal({ open, deliveryType, total }: { open: boolean, deliveryType: "pickup" | "delivery", total: number }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden text-center"
      >
        <div className="bg-forest/10 pt-10 pb-8 px-6 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            className="h-16 w-16 bg-forest rounded-full flex items-center justify-center text-white shadow-soft mb-4"
          >
            <CheckCircle size={32} />
          </motion.div>
          <h2 className="font-display text-2xl font-bold text-ink">Order Placed!</h2>
          <p className="text-forest text-sm mt-1 font-medium">Thank you for your order.</p>
        </div>
        
        <div className="p-6">
          <div className="bg-secondary/50 rounded-2xl p-4 mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Order Number</span>
              <span className="font-semibold">#RSD-{Math.floor(1000 + Math.random() * 9000)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Method</span>
              <span className="font-semibold capitalize">{deliveryType}</span>
            </div>
            <div className="flex justify-between text-sm border-t border-border/60 pt-2 mt-2">
              <span className="text-muted-foreground">Total Paid</span>
              <span className="font-bold text-ink">${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-3">
            <Link to="/shop" className="btn-saffron w-full block py-3 text-sm">
              Continue Shopping
            </Link>
            <Link to="/" className="btn-ghost w-full block py-3 text-sm">
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  EmptyCartState                                                     */
/* ------------------------------------------------------------------ */

function EmptyCartState() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-12 flex flex-col items-center justify-center px-4">
      <CheckoutNav />
      <div className="text-center flex flex-col items-center">
        <div className="h-24 w-24 bg-secondary rounded-full flex items-center justify-center text-muted-foreground mb-6">
          <ShoppingBag size={40} />
        </div>
        <h1 className="font-display text-2xl font-semibold mb-2 text-ink">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">Add some fresh ingredients before checking out.</p>
        <Link to="/shop" className="btn-saffron px-8 py-3 rounded-full font-medium">
          Start Shopping
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Checkout Component                                            */
/* ------------------------------------------------------------------ */

function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [deliveryType, setDeliveryType] = useState<"pickup" | "delivery">("pickup");
  const [timeSlot, setTimeSlot] = useState("Today 11:00am");
  const [paymentMethod, setPaymentMethod] = useState("instore");
  const [showSuccess, setShowSuccess] = useState(false);

  const deliveryFee = deliveryType === "pickup" ? 0 : 5.9;
  const finalTotal = totalPrice + deliveryFee;

  if (items.length === 0 && !showSuccess) {
    return <EmptyCartState />;
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    // Don't clear cart immediately so modal can show total, clear when leaving
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  const timeSlots = [
    "Today 11:00am", "Today 12:30pm", "Today 2:00pm",
    "Tomorrow 9:00am", "Tomorrow 11:00am", "Tomorrow 2:00pm"
  ];

  return (
    <div className="min-h-screen bg-background pb-24 pt-24 selection:bg-saffron/30">
      <CheckoutNav />
      <SuccessModal open={showSuccess} deliveryType={deliveryType} total={finalTotal} />

      <main className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handlePlaceOrder} className="space-y-10">
              
              {/* Section A: Fulfillment */}
              <section>
                <div className="eyebrow mb-4">1. Fulfillment Method</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDeliveryType("pickup")}
                    className={`flex flex-col items-start p-5 rounded-2xl border-2 transition-all text-left ${deliveryType === "pickup" ? "border-saffron bg-saffron/5" : "border-border bg-white hover:border-saffron/30"}`}
                  >
                    <Store size={24} className={deliveryType === "pickup" ? "text-saffron-deep" : "text-muted-foreground"} />
                    <span className="font-semibold mt-3 text-foreground text-lg">Click & Collect</span>
                    <span className="text-sm text-muted-foreground mt-1">Ready in ~30 minutes</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryType("delivery")}
                    className={`flex flex-col items-start p-5 rounded-2xl border-2 transition-all text-left ${deliveryType === "delivery" ? "border-saffron bg-saffron/5" : "border-border bg-white hover:border-saffron/30"}`}
                  >
                    <Truck size={24} className={deliveryType === "delivery" ? "text-saffron-deep" : "text-muted-foreground"} />
                    <span className="font-semibold mt-3 text-foreground text-lg">Local Delivery</span>
                    <span className="text-sm text-muted-foreground mt-1">Within 5km · From $5.90</span>
                  </button>
                </div>
              </section>

              {/* Section B: Details */}
              <section>
                <div className="eyebrow mb-4">2. Your Details</div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 ml-1">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 ml-1">Phone Number</label>
                      <input required type="tel" placeholder="0400 000 000" className="w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 ml-1">Email Address</label>
                      <input required type="email" placeholder="john@example.com" className="w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron" />
                    </div>
                  </div>

                  {/* Delivery Address fields */}
                  <AnimatePresence>
                    {deliveryType === "delivery" && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-1 space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 ml-1">Street Address</label>
                            <input required type="text" placeholder="123 Railway Parade" className="w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 ml-1">Suburb</label>
                              <input required type="text" placeholder="Kogarah" className="w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron" />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 ml-1">Postcode</label>
                              <input required type="text" placeholder="2217" className="w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </section>

              {/* Section C: Time Slot */}
              <section>
                <div className="eyebrow mb-4">3. {deliveryType === "pickup" ? "Pickup Time" : "Delivery Window"}</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`py-3 px-2 text-sm rounded-xl font-medium transition-all ${timeSlot === slot ? "bg-ink text-cream" : "bg-white border border-border text-foreground hover:border-saffron/40"}`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </section>

              {/* Section D: Payment Method */}
              <section>
                <div className="eyebrow mb-4">4. Payment Method</div>
                <div className="space-y-3">
                  <button type="button" onClick={() => setPaymentMethod("instore")} className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${paymentMethod === "instore" ? "border-saffron bg-saffron/5" : "border-border bg-white hover:border-saffron/30"}`}>
                    <div className="flex items-center gap-3">
                      <Store className={paymentMethod === "instore" ? "text-saffron-deep" : "text-muted-foreground"} />
                      <div className="text-left">
                        <div className="font-semibold text-foreground">Pay in Store</div>
                        <div className="text-xs text-muted-foreground">Pay when you collect your order</div>
                      </div>
                    </div>
                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "instore" ? "border-saffron" : "border-border"}`}>
                      {paymentMethod === "instore" && <div className="h-2.5 w-2.5 rounded-full bg-saffron-deep" />}
                    </div>
                  </button>

                  <button type="button" onClick={() => setPaymentMethod("card")} className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${paymentMethod === "card" ? "border-saffron bg-saffron/5" : "border-border bg-white hover:border-saffron/30"}`}>
                    <div className="flex items-center gap-3">
                      <CreditCard className={paymentMethod === "card" ? "text-saffron-deep" : "text-muted-foreground"} />
                      <div className="text-left">
                        <div className="font-semibold text-foreground">Credit Card</div>
                        <div className="text-xs text-muted-foreground">Visa, Mastercard, Amex</div>
                      </div>
                    </div>
                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "card" ? "border-saffron" : "border-border"}`}>
                      {paymentMethod === "card" && <div className="h-2.5 w-2.5 rounded-full bg-saffron-deep" />}
                    </div>
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1.5 bg-secondary/50 p-2 rounded-lg">
                  <ShieldCheck size={14} className="text-forest" />
                  This is a prototype — no real payment will be processed.
                </p>
              </section>

              {/* Section E: Notes */}
              <section>
                <div className="eyebrow mb-4">5. Special Instructions (Optional)</div>
                <textarea 
                  rows={3} 
                  placeholder="Any special requests? e.g., 'Please cut chicken into curry pieces'" 
                  className="w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron resize-none" 
                />
              </section>

              <button type="submit" className="btn-saffron w-full py-4 text-lg rounded-2xl shadow-lift">
                Place Order — ${finalTotal.toFixed(2)}
              </button>

            </form>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-2 order-first lg:order-last mb-8 lg:mb-0">
            <OrderSummary deliveryType={deliveryType} />
          </div>

        </div>
      </main>
    </div>
  );
}
