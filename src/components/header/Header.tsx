import { ShoppingCart } from "phosphor-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HeaderComplement } from "../headerComplement/HeaderComplement";

import { Link, useLocation, useParams } from "react-router-dom";
import { HeaderHeadphone } from "../headerHeadphone/HeaderHeadphone";

export function Header() {
  const { pathname } = useLocation();
  const { category } = useParams();

  return (
    <>
      <header
        className={`${
          pathname === "/" ? "bg-black50" : "bg-black"
        } "justify-between items-center h-24 px-40 py-8  tablet:px-10 mobile:px-6  font-manrope tablet:bg-black"`}
      >
        <div className="flex justify-between items-center h-full py-4 pb-8 border-b-2 border-opacity-30  border-white  ">
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
            <ShoppingCart size={24} className="text-white cursor-pointer" />
          </div>
        </div>
      </header>
      {pathname === "/" ? (
        <HeaderHeadphone />
      ) : (
        <HeaderComplement section={String(category)} />
      )}
    </>
  );
}
