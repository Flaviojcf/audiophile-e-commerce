import { useCartContext } from "../../hooks/useCartContext";
import { FormatPrice } from "../../utils/format-price";

export function ItemCart() {
  const { productInCart, onAddOrMinusAmountInCart } = useCartContext();

  function onClick(id: string, type: string){
    onAddOrMinusAmountInCart(id, type)
  }

  return (
    <div className="flex flex-col gap-9">
      {productInCart.map((product) => (
        <div key={product.id} className="flex justify-between">
          <div className="flex gap-4 items-center">
            <picture className="flex items-center justify-center bg-white50 w-16 h-16 rounded-lg border border-white50">
              <img src={product.img} />
            </picture>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-base leading-6">XX99 MK II</h1>
              <h2 className="font-bold text-base leading-6 opacity-50">
                {FormatPrice(product.price)}
              </h2>
            </div>
          </div>

          <div className="flex gap-4  items-center justify-start tablet:gap-1">
            <div className="flex gap-5 items-center justify-center w-30 h-12 bg-white50 p-4">
              <span className="hover:text-orange300 transition-colors  cursor-pointer" onClick={()=>onClick(product.id, '-')}>
                -
              </span>
              <span>{product.amount}</span>
              <span className="hover:text-orange300 transition-colors cursor-pointer" onClick={()=>onClick(product.id, '+')}>
                +
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
