import { Billing } from "./Billing";
import { Payment } from "./Payment";
import { Shopping } from "./Shopping";

export function CheckoutForm() {
  return (
    <div className="flex flex-col border border-opacity-50 border-black50 rounded-lg p-20 tablet:px-10 tablet:w-full">
      <h1 className="font-bold text-3xl leading-9 tracking-[1.14px]">
        CHECKOUT
      </h1>
      <div className="flex flex-col bg-white gap-14">
        <Billing />
        <Shopping />
        <Payment />
      </div>
    </div>
  );
}
