import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/product/Product";
import { ProductInfos } from "./pages/productInfos/ProductInfos";

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Product />} />
        <Route path="/products/:category/:details" element={<ProductInfos />} />
      </Route>
    </Routes>
  );
}
