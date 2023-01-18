import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { MarkHeadphone } from "./components/markHeadphone/MarkHeadphone";
import { Router } from "./Router";

import "./styles/global.css";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
