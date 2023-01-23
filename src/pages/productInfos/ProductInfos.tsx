import { useEffect } from "react";
import { ProductDetails } from "../../components/productDetails/ProductDetails";
import { Products } from "../../components/products/Products";

export function ProductInfos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col tablet:px-10 mobile:px-9 mb-40 gap-20 mobile:mb-4 ">
      <ProductDetails />
      <Products />
    </div>
  );
}
