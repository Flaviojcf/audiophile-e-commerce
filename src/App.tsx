import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { MarkHeadphone } from "./components/markHeadphone/MarkHeadphone";

import "./styles/global.css";

export function App() {
  return (
    <div>
      <Header />
      <MarkHeadphone />
      <Main />
      <Footer />
    </div>
  );
}
