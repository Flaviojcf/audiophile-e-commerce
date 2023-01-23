import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import { FormatPrice } from "../../utils/format-price";

export function CheckoutModal() {
  const { totalPrice, onRemove } = useCartContext();

  function onRedirect() {
    onRemove();
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-full h-full inset-0 z-50 bg-modalOverlay px-2 ">
        <Dialog.Content
          className="flex flex-col z-50 w-1/2 max-w-[540px]  h-1/2 min-w-[310px] bg-white gap-2 m-auto mt-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
        p-6  rounded-lg items-center justify-center tablet:p-2"
        >
          <picture className="self-start">
            <img src="/assets/checkout/icon-order-confirmation.svg" />
          </picture>

          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl leading-9 tracking-[1.14px] max-w-[284px]">
              THANK YOU FOR YOUR ORDER
            </h1>
            <p className="opacity-50 text-sm leading-8">
              You will receive an email confirmation shortly.
            </p>
          </div>

          <div className="flex tablet:flex-col w-full h-full max-h-36 max-w-[444px]">
            <div className="flex flex-col bg-black items-center justify-center w-full h-full gap-2">
              <h1 className="font-medium text-base leading-6 opacity-50 text-white">
                GRAND TOTAL
              </h1>
              <p className="font-bold text-xl leading-6 text-white tracking-[1.49px]">
                {FormatPrice(totalPrice)}
              </p>
            </div>
          </div>
          <Link
            className="w-full max-w-[444px] bg-orange300 text-center hover:opacity-70 transition-opacity"
            to="/"
            onClick={onRedirect}
          >
            <button className=" h-12 text-white ">BACK TO HOME</button>
          </Link>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
