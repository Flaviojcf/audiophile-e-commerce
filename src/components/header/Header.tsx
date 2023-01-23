import { ShoppingCart } from "phosphor-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { HeaderComplement } from "../headerComplement/HeaderComplement";

import { Link, useLocation, useParams } from "react-router-dom";
import { HeaderHeadphone } from "../headerHeadphone/HeaderHeadphone";
import { CartModal } from "../cartModal/CartModal";
import { useState } from "react";

export function Header() {
  const { pathname } = useLocation();
  const { category, details } = useParams();
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(state=>!state);
  }


  return (
    <>
      <header
        className={`${
          pathname === "/" ? "bg-black50" : "bg-black"
        } "justify-between items-center h-24 px-40 py-8  tablet:px-10 mobile:px-6  font-manrope tablet:bg-black"`}
      >
        <div
          className={
            !details || pathname === "/checkout"
              ? "flex justify-between items-center h-full"
              : "flex justify-between items-center h-full py-4 pb-8 border-b-2 border-opacity-30  border-white "
          }
        >
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="hidden tablet:flex">
              <img src="/group.png" alt="" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="z-50">
              <ul className="bg-white flex flex-col p-8 rounded-md gap-4 text-black mt-4 ml-6 ">
                <li className="cursor-pointer hover:text-orange300 transition duration-150 ease-in-out">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="cursor-pointer  hover:text-orange300 transition duration-150 ease-in-out">
                  <Link to={"/products/HEADPHONES"}>Headphones</Link>
                </li>
                <li className="cursor-pointer  hover:text-orange300 transition duration-150 ease-in-out">
                  <Link to={"/products/SPEAKERS"}>Speakers</Link>
                </li>
                <li className="cursor-pointer  hover:text-orange300 transition duration-150 ease-in-out">
                  <Link to={"/products/EARPHONES"}>Earphones</Link>
                </li>
              </ul>
            </DropdownMenu.Content>
          </DropdownMenu.Root>

          <div>
            <img src="/audiophile.svg" className="cursor-pointer" />
          </div>

          <ul className="flex text-white gap-x-9  tablet:hidden ">
            <li className="cursor-pointer hover:text-orange300 transition duration-150 ease-in-out">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="cursor-pointer  hover:text-orange300 transition duration-150 ease-in-out">
              <Link to={"/products/HEADPHONES"}>Headphones</Link>
            </li>
            <li className="cursor-pointer  hover:text-orange300 transition duration-150 ease-in-out">
              <Link to={"/products/SPEAKERS"}>Speakers</Link>
            </li>
            <li className="cursor-pointer  hover:text-orange300 transition duration-150 ease-in-out">
              <Link to={"/products/EARPHONES"}>Earphones</Link>
            </li>
          </ul>

          <div>
            <Dialog.Root open={open} onOpenChange={handleOpen}>
              <Dialog.Trigger asChild>
                <ShoppingCart size={24} className="text-white cursor-pointer" />
              </Dialog.Trigger>
              <CartModal handleOpen={handleOpen}/>
            </Dialog.Root>
          </div>
        </div>
      </header>
      {details || pathname === "/checkout" ? (
        <></>
      ) : pathname === "/" ? (
        <HeaderHeadphone />
      ) : (
        <HeaderComplement section={String(category)} />
      )}
    </>
  );
}
