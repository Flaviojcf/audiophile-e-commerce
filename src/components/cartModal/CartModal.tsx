import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import { FormatPrice } from "../../utils/format-price";
import { ItemCart } from "./ItemCart";

interface CartModal {
  handleOpen: () => void;
}

export function CartModal({ handleOpen }: CartModal) {
  const { productInCart, onRemove, totalPrice } = useCartContext();

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-full h-full inset-0 z-50 bg-modalOverlay px-2">
        <Dialog.Content
          className="flex flex-col z-50 w-[377px]  bg-white py-10 gap-8
        px-4 ml-auto mr-48 mt-20 rounded-lg tablet:mr-16 mobile:mx-auto mobile:w-full"
        >
          <Dialog.Title className="flex justify-between">
            <p className="font-bold text-lg leading-6 tracking-[1.29px]">
              {` CART (${productInCart.length})`}
            </p>
            <div>
              <button
                className="opacity-50 hover:opacity-100 underline"
                onClick={onRemove}
              >
                Remove all
              </button>
            </div>
          </Dialog.Title>
          <ItemCart />
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="font-medium text-sm leading-8 opacity-50">TOTAL</p>
              <h1 className="font-bold text-lg leading-8">
                {FormatPrice(totalPrice)}
              </h1>
            </div>

            {productInCart.length === 0 ? (
              <button
                className="flex items-center justify-center bg-orange300 text-white h-12
              transition-colors cursor-not-allowed"
              >
                CHECKOUT
              </button>
            ) : (
              <Link
                to="/checkout"
                className="flex items-center justify-center bg-orange300 text-white h-12 hover:bg-orange100 transition-colors"
                onClick={handleOpen}
              >
                <button>CHECKOUT</button>
              </Link>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
