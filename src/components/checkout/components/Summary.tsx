import { useCartContext } from "../../../hooks/useCartContext";
import { FormatPrice } from "../../../utils/format-price";
import { Item } from "./Item";

export function Summary() {
  const { totalPrice } = useCartContext();
  return (
    <div className="flex flex-col border border-opacity-50 border-black50 rounded-lg p-4 w-[350px] h-[812px] justify-between tablet:w-full">
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-lg leading-6 tracking-[1.29px]">
          Summary
        </h1>
        <Item />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="font-medium text-sm leading-8 opacity-50">TOTAL</p>
          <h1 className="font-bold text-lg leading-8">
            {FormatPrice(totalPrice)}
          </h1>
        </div>
        <button className="flex items-center justify-center bg-orange300 text-white h-12 hover:bg-orange100 transition-colors">
          CONTINUE & PAY
        </button>
      </div>
    </div>
  );
}
