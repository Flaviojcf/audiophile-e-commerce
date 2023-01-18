export function BringingAudio() {
  return (
    <div className="flex gap-32 max-w-[67rem] items-center tablet:flex-col-reverse tablet:gap-16 mobile:w-72 mobile:mt-36">
      <div className="flex flex-col w-1/2 gap-8 tablet:w-full tablet:text-center">
        <h1 className="text-black font-bold text-4xl tracking-[1.43px] leading-10 uppercase w-[27rem] tablet:self-center tablet:w-full">
          Bringing you the <strong className="text-orange300">best</strong>{" "}
          audio gear
        </h1>

        <p className="font-medium text-xs opacity-50 leading-6">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="w-1/2 tablet:w-full">
        <img src="bringingDesktop.png" className="w-full tablet:hidden" />
        <img
          src="bringingTablet.png"
          className="w-full hidden tablet:flex mobile:hidden"
        />
        <img src="bringingMobile.png" className="w-full hidden mobile:flex" />
      </div>
    </div>
  );
}
