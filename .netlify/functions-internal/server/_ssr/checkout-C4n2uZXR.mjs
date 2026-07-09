import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useCart } from "./cart-context-CrjvjMqV.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { N as CircleCheckBig, R as ArrowLeft, _ as Minus, a as Trash2, f as ShoppingBag, h as Plus, i as Truck, k as CreditCard, l as Sparkles, p as ShieldCheck, s as Store } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-C4n2uZXR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "glass-nav fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-3 sm:px-8 border-b border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/shop",
				className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 16 }), " Back to Shop"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 text-foreground font-display font-semibold tracking-tight",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
					size: 16,
					className: "text-saffron-deep"
				}), "Rice·Spice·Dice"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden sm:flex items-center gap-1.5 text-xs font-semibold text-forest",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " Secure Checkout"]
			})
		]
	});
}
function OrderSummary({ deliveryType }) {
	const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();
	const deliveryFee = deliveryType === "pickup" ? 0 : 5.9;
	const finalTotal = totalPrice + deliveryFee;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-lift sticky top-24 rounded-3xl bg-white shadow-soft p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-lg font-semibold border-b border-border pb-4 mb-4",
				children: ["Order Summary ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted-foreground font-normal text-sm ml-2",
					children: [
						"(",
						totalItems,
						" items)"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-4 max-h-[40vh] overflow-y-auto hide-scrollbar",
				children: items.map(({ product, quantity }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						className: "h-12 w-12 rounded-lg object-cover bg-secondary shrink-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex flex-col justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-foreground leading-snug pr-2",
								children: product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm font-semibold",
								children: ["$", (product.price * quantity).toFixed(2)]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center rounded-full border border-border bg-secondary/50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => quantity > 1 ? updateQuantity(product.id, quantity - 1) : removeItem(product.id),
										className: "h-6 w-6 flex items-center justify-center hover:bg-secondary rounded-full transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 12 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium w-4 text-center",
										children: quantity
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => updateQuantity(product.id, quantity + 1),
										className: "h-6 w-6 flex items-center justify-center hover:bg-secondary rounded-full transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 12 })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => removeItem(product.id),
								className: "text-muted-foreground hover:text-red-500 transition-colors p-1 rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 12 })
							})]
						})]
					})]
				}, product.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 pt-4 border-t border-border space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Subtotal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium",
							children: ["$", totalPrice.toFixed(2)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Fulfillment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}`
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center pt-3 border-t border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-semibold text-lg",
							children: "Total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display font-bold text-2xl text-ink",
							children: ["$", finalTotal.toFixed(2)]
						})]
					})
				]
			})
		]
	});
}
function SuccessModal({ open, deliveryType, total }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/60 backdrop-blur-sm p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				scale: .95,
				y: 10
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			className: "bg-white rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-forest/10 pt-10 pb-8 px-6 flex flex-col items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { scale: 0 },
						animate: { scale: 1 },
						transition: {
							type: "spring",
							bounce: .5,
							delay: .2
						},
						className: "h-16 w-16 bg-forest rounded-full flex items-center justify-center text-white shadow-soft mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { size: 32 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold text-ink",
						children: "Order Placed!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-forest text-sm mt-1 font-medium",
						children: "Thank you for your order."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-secondary/50 rounded-2xl p-4 mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Order Number"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold",
								children: ["#RSD-", Math.floor(1e3 + Math.random() * 9e3)]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Method"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold capitalize",
								children: deliveryType
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm border-t border-border/60 pt-2 mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Total Paid"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-bold text-ink",
								children: ["$", total.toFixed(2)]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "btn-saffron w-full block py-3 text-sm",
						children: "Continue Shopping"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-ghost w-full block py-3 text-sm",
						children: "Back to Home"
					})]
				})]
			})]
		})
	});
}
function EmptyCartState() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream pt-24 pb-12 flex flex-col items-center justify-center px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center flex flex-col items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-24 w-24 bg-secondary rounded-full flex items-center justify-center text-muted-foreground mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 40 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-semibold mb-2 text-ink",
					children: "Your cart is empty"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mb-8",
					children: "Add some fresh ingredients before checking out."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "btn-saffron px-8 py-3 rounded-full font-medium",
					children: "Start Shopping"
				})
			]
		})]
	});
}
function Checkout() {
	const { items, totalPrice, clearCart } = useCart();
	const [deliveryType, setDeliveryType] = (0, import_react.useState)("pickup");
	const [timeSlot, setTimeSlot] = (0, import_react.useState)("Today 11:00am");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("instore");
	const [showSuccess, setShowSuccess] = (0, import_react.useState)(false);
	const finalTotal = totalPrice + (deliveryType === "pickup" ? 0 : 5.9);
	if (items.length === 0 && !showSuccess) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyCartState, {});
	const handlePlaceOrder = (e) => {
		e.preventDefault();
		setShowSuccess(true);
		setTimeout(() => {
			clearCart();
		}, 500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background pb-24 pt-24 selection:bg-saffron/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessModal, {
				open: showSuccess,
				deliveryType,
				total: finalTotal
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-6xl px-4 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-5 gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handlePlaceOrder,
							className: "space-y-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow mb-4",
									children: "1. Fulfillment Method"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setDeliveryType("pickup"),
										className: `flex flex-col items-start p-5 rounded-2xl border-2 transition-all text-left ${deliveryType === "pickup" ? "border-saffron bg-saffron/5" : "border-border bg-white hover:border-saffron/30"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, {
												size: 24,
												className: deliveryType === "pickup" ? "text-saffron-deep" : "text-muted-foreground"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold mt-3 text-foreground text-lg",
												children: "Click & Collect"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-muted-foreground mt-1",
												children: "Ready in ~30 minutes"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setDeliveryType("delivery"),
										className: `flex flex-col items-start p-5 rounded-2xl border-2 transition-all text-left ${deliveryType === "delivery" ? "border-saffron bg-saffron/5" : "border-border bg-white hover:border-saffron/30"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, {
												size: 24,
												className: deliveryType === "delivery" ? "text-saffron-deep" : "text-muted-foreground"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold mt-3 text-foreground text-lg",
												children: "Local Delivery"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-muted-foreground mt-1",
												children: "Within 5km · From $5.90"
											})
										]
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow mb-4",
									children: "2. Your Details"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 ml-1",
											children: "Full Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "text",
											placeholder: "John Doe",
											className: "w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 ml-1",
												children: "Phone Number"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "tel",
												placeholder: "0400 000 000",
												className: "w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 ml-1",
												children: "Email Address"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "email",
												placeholder: "john@example.com",
												className: "w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: deliveryType === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											initial: {
												opacity: 0,
												height: 0
											},
											animate: {
												opacity: 1,
												height: "auto"
											},
											exit: {
												opacity: 0,
												height: 0
											},
											className: "overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 pb-1 space-y-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 ml-1",
													children: "Street Address"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													required: true,
													type: "text",
													placeholder: "123 Railway Parade",
													className: "w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid grid-cols-2 gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 ml-1",
														children: "Suburb"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														required: true,
														type: "text",
														placeholder: "Kogarah",
														className: "w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 ml-1",
														children: "Postcode"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														required: true,
														type: "text",
														placeholder: "2217",
														className: "w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron"
													})] })]
												})]
											})
										}) })
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "eyebrow mb-4",
									children: ["3. ", deliveryType === "pickup" ? "Pickup Time" : "Delivery Window"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
									children: [
										"Today 11:00am",
										"Today 12:30pm",
										"Today 2:00pm",
										"Tomorrow 9:00am",
										"Tomorrow 11:00am",
										"Tomorrow 2:00pm"
									].map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setTimeSlot(slot),
										className: `py-3 px-2 text-sm rounded-xl font-medium transition-all ${timeSlot === slot ? "bg-ink text-cream" : "bg-white border border-border text-foreground hover:border-saffron/40"}`,
										children: slot
									}, slot))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow mb-4",
										children: "4. Payment Method"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPaymentMethod("instore"),
											className: `w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${paymentMethod === "instore" ? "border-saffron bg-saffron/5" : "border-border bg-white hover:border-saffron/30"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: paymentMethod === "instore" ? "text-saffron-deep" : "text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-left",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-semibold text-foreground",
														children: "Pay in Store"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs text-muted-foreground",
														children: "Pay when you collect your order"
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `h-5 w-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "instore" ? "border-saffron" : "border-border"}`,
												children: paymentMethod === "instore" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-saffron-deep" })
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPaymentMethod("card"),
											className: `w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${paymentMethod === "card" ? "border-saffron bg-saffron/5" : "border-border bg-white hover:border-saffron/30"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: paymentMethod === "card" ? "text-saffron-deep" : "text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-left",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-semibold text-foreground",
														children: "Credit Card"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs text-muted-foreground",
														children: "Visa, Mastercard, Amex"
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `h-5 w-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "card" ? "border-saffron" : "border-border"}`,
												children: paymentMethod === "card" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-saffron-deep" })
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground mt-3 flex items-center gap-1.5 bg-secondary/50 p-2 rounded-lg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
											size: 14,
											className: "text-forest"
										}), "This is a prototype — no real payment will be processed."]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow mb-4",
									children: "5. Special Instructions (Optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 3,
									placeholder: "Any special requests? e.g., 'Please cut chicken into curry pieces'",
									className: "w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground outline-none transition-all focus:ring-2 focus:ring-saffron focus:border-saffron resize-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "btn-saffron w-full py-4 text-lg rounded-2xl shadow-lift",
									children: ["Place Order — $", finalTotal.toFixed(2)]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-2 order-first lg:order-last mb-8 lg:mb-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSummary, { deliveryType })
					})]
				})
			})
		]
	});
}
//#endregion
export { Checkout as component };
