import { useCartContext } from "../../../hooks/useCartContext";
import { FormatPrice } from "../../../utils/format-price";

export function Item() {
  const { productInCart } = useCartContext();

  return (
    <div className="flex flex-col gap-8">
      {productInCart.map((item) => (
        <div key={item.id} className="flex justify-between">
          <div className="flex gap-4 items-center">
            <picture className="flex items-center justify-center bg-white50 w-16 h-16 rounded-lg border border-white50">
              <img src={item.img} />
            </picture>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-base leading-6">{item.name}</h1>
              <h2 className="font-bold text-base leading-6 opacity-50">
                {FormatPrice(item.price)}
              </h2>
            </div>
          </div>

          <p className="font-bold text-base leading-6 opacity-50">x{item.amount}</p>
        </div>
      ))}
    </div>
  );
}
