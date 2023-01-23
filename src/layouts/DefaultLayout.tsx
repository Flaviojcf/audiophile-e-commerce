import { Outlet, useLocation } from "react-router-dom";
import { BringingAudio } from "../components/bringingAudio/BringingAudio";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export function DefaultLayout() {
  const { pathname } = useLocation();

  return (
    <div>
      <Header />
      <Outlet />
      <div
        className={
          pathname === "/checkout"
            ? "hidden"
            : "flex items-center justify-center mb-48 px-40 tablet:px-10 mobile:px-6 "
        }
      >
        <BringingAudio />
      </div>
      <Footer />
    </div>
  );
}
