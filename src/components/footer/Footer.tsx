import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";

export function Footer() {
  return (
    <div
      className="flex flex-col gap-9 w-full h-[22rem] bg-black  bottom-0 left-0 right-0 
      px-40 py-20 tablet:px-9 tablet:items-center tablet:h-[25rem] mobile:h-[40rem]"
    >
      <div className="w-24 h-1 bg-orange300  -mt-20 absolute " />

      <div className="flex justify-between w-full tablet:flex-col tablet:gap-8 mobile:justify-center mobile:items-center mobile:text-center">
        <div>
          <img src="audiophile.svg" className="cursor-pointer " />
        </div>
        <ul className="flex flex-wrap gap-8 text-white mobile:flex-col">
          <li className="cursor-pointer hover:text-orange300 transition duration-150 ease-in-out">
            HOME
          </li>
          <li className="cursor-pointer hover:text-orange300 transition duration-150 ease-in-out">
            HEADPHONES
          </li>
          <li className="cursor-pointer hover:text-orange300 transition duration-150 ease-in-out">
            SPEAKERS
          </li>
          <li className="cursor-pointer hover:text-orange300 transition duration-150 ease-in-out">
            EARPHONES
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-20 tablet:gap-4 mobile:justify-center mobile:items-center mobile:text-center">
        <div>
          <p className="font-medium text-xs leading-6 opacity-50 text-white w-[27rem] tablet:w-full">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
        </div>

        <div className="flex items-center mobile:flex-col gap-4 mobile:justify-center  mobile:text-center">
          <p className="font-bold text-xs leading-6 opacity-50 text-white">
            Copyright 2021. All Rights Reserved
          </p>
          <ul className="flex gap-4 ml-auto  mobile:ml-0 mobile:self-center">
            <li>
              <a href="#">
                <FacebookLogo
                  size={24}
                  weight="fill"
                  className="text-white hover:text-orange300 transition duration-150 ease-in-out"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterLogo
                  size={24}
                  weight="fill"
                  className="text-white hover:text-orange300 transition duration-150 ease-in-out"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramLogo
                  size={24}
                  className="text-white hover:text-orange300 transition duration-150 ease-in-out"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
