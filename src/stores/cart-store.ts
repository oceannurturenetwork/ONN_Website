// store/cart.ts
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

type CartItem = {
  id: string;
  title: string;
  image: string;
  price: string;
  name: string;
  quantity: number;
  size: string;
  location: string;
};

type CartState = {
  items: CartItem[];
  count: () => number;
  addToCart: (item: Omit<CartItem, "id">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
};

const getInitialItems = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

export const useCart = create<CartState>((set, get) => ({
  items: getInitialItems(),

  count: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

  addToCart: (item) => {
    const newItem = { id: uuidv4(), ...item };
    const updatedItems = [...get().items, newItem];
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    set({ items: updatedItems });
  },

  removeFromCart: (id) => {
    const updatedItems = get().items.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    set({ items: updatedItems });
  },

  updateQuantity: (id, quantity) => {
    const updatedItems = get().items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    set({ items: updatedItems });
  },
}));
