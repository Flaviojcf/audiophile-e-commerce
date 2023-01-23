import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCartContext() {
  const context = useContext(CartContext);

  return context;
}
