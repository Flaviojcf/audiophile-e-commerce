export function OrangeSpeakerContainer() {
  return (
    <div
      className="flex bg-orange300 gap-32  h-[35rem] px-24 w-[67rem]  tablet:flex-col tablet:w-full
      tablet:h-[45rem] tablet:self-center tablet:items-center  tablet:text-center tablet:gap-12 mobile:h-[37.5rem]  "
    >
      <div className="flex tablet:items-center tablet:justify-center tablet:w-48 tablet:h-60">
        <img src="/speakerOrange.png" className="mt-auto tablet:hidden" />
        <img
          src="/speakerOrangeTablet.png"
          className="mt-12 tablet:ml-0 hidden tablet:flex mobile:hidden"
        />
        <img
          src="/speakerOrangeMobile.png"
          className="mt-12 tablet:ml-0 hidden mobile:flex w-48 h-60"
        />
      </div>

      <div className="flex flex-col items-start gap-6 mt-32 tablet:mt-0 tablet:text-center tablet:items-center">
        <h1 className="font-bold tracking-[2px] leading-[3.6rem] text-6xl text-white  w-80 mobile:text-4xl mobile:w-60">
          ZX9 SPEAKER
        </h1>

        <p className="font-medium opacity-75 leading-6 text-sm text-white w-80 mobile:w-60">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button
          className="flex items-center justify-center bg-black hover:bg-gray300 transition duration-150 ease-in-out w-40 
          h-12 font-bold text-sm leading-4 tracking-[1px] text-white tablet:self-center"
        >
          See Product
        </button>
      </div>
    </div>
  );
}
