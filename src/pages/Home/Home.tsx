import { useEffect } from "react";
import { Main } from "../../components/main/Main";
import { ScrollToTop } from "../../utils/scroll-to-top";

export function Home() {
    ScrollToTop()

  return (
    <div>
      <Main />
    </div>
  );
}
