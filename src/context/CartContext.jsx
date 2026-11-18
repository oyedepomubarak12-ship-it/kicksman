
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const STORAGE_KEY = "kicksman_cart";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, size = null) => {
    setCart((previousCart) => {
      const existingItem = previousCart.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItem) {
        return previousCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...previousCart,
        {
          ...product,
          quantity,
          size,
          cartItemId: `${product.id}-${size || "default"}`
        }
      ];
    });
  };

  const removeFromCart = (cartItemId) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.cartItemId !== cartItemId)
    );
  };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity < 1) return;

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.cartItemId === cartItemId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const increaseQuantity = (cartItemId) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (cartItemId) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartCount,
    cartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
