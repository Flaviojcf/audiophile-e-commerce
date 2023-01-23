import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { Router } from "./Router";

import "./styles/global.css";

export function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </CartContextProvider>
  );
}
