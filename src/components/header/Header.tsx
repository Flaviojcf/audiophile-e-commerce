import { ShoppingCart } from "phosphor-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function Header() {
  return (
    <header className="bg-black50 justify-between items-center h-24 px-40 py-8  tablet:px-10 mobile:px-6  font-manrope ">
      <div className="flex justify-between items-center h-full py-4 pb-8 border-b-2 border-opacity-30  border-white  ">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="hidden tablet:flex">
            <img src="group.png" alt="" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <ul>
              <li>Home</li>
              <li>Headphones</li>
              <li>Speakers</li>
              <li>Earphones</li>
            </ul>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <div>
          <img src="audiophile.svg" className="cursor-pointer" />
        </div>

        <ul className="flex text-white gap-x-9  tablet:hidden ">
          <li className="cursor-pointer hover:text-orange300 transition duration-150 ease-in-out">
            HOME
          </li>
          <li className="cursor-pointer  hover:text-orange300 transition duration-150 ease-in-out">
            HEADPHONES
          </li>
          <li className="cursor-pointer  hover:text-orange300 transition duration-150 ease-in-out">
            SPEAKERS
          </li>
          <li className="cursor-pointer  hover:text-orange300 transition duration-150 ease-in-out">
            EARPHONES
          </li>
        </ul>

        <div>
          <ShoppingCart size={24} className="text-white cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
