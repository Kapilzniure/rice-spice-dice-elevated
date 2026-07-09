import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-context-CrjvjMqV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CartContext = (0, import_react.createContext)(null);
function useCart() {
	const ctx = (0, import_react.useContext)(CartContext);
	if (!ctx) throw new Error("useCart must be used within CartProvider");
	return ctx;
}
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const addItem = (0, import_react.useCallback)((product) => {
		setItems((prev) => {
			if (prev.find((i) => i.product.id === product.id)) return prev.map((i) => i.product.id === product.id ? {
				...i,
				quantity: i.quantity + 1
			} : i);
			return [...prev, {
				product,
				quantity: 1
			}];
		});
	}, []);
	const removeItem = (0, import_react.useCallback)((productId) => {
		setItems((prev) => prev.filter((i) => i.product.id !== productId));
	}, []);
	const updateQuantity = (0, import_react.useCallback)((productId, quantity) => {
		if (quantity <= 0) setItems((prev) => prev.filter((i) => i.product.id !== productId));
		else setItems((prev) => prev.map((i) => i.product.id === productId ? {
			...i,
			quantity
		} : i));
	}, []);
	const clearCart = (0, import_react.useCallback)(() => setItems([]), []);
	const getItemQuantity = (0, import_react.useCallback)((productId) => items.find((i) => i.product.id === productId)?.quantity ?? 0, [items]);
	const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
	const totalPrice = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value: {
			items,
			addItem,
			removeItem,
			updateQuantity,
			clearCart,
			getItemQuantity,
			totalItems,
			totalPrice
		},
		children
	});
}
//#endregion
export { useCart as n, CartProvider as t };
