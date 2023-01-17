import { Product } from "../product/Product";

export function Products() {
  return (
    <div className="flex justify-center items-center gap-7 tablet:gap-2 flex-wrap">
      <Product name="HEADPHONES" image={"/headphoneProduct.png"} />
      <Product name="SPEAKERS" image={"/speakerProduct.png"} />
      <Product name="EARPHONES" image={"/earphonesProduct.png"} />
    </div>
  );
}
