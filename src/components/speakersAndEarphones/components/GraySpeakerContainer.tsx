export function GraySpeakerContainer() {
  return (
    <div className="flex h-80  text-black100  ">
      
      <div className="flex flex-col mt-24 absolute z-50 px-24 gap-8 tablet:px-10 mobile:px-2 ">
        <p className="font-bold text-3xl tracking-[2px]">ZX7 SPEAKER</p>
        <button
          className="flex  items-center justify-center bg-none transition duration-150 ease-in-out
         hover:bg-black hover:text-white border w-40 h-12"
        >
          SEE PRODUCT
        </button>
      </div>

      <div className="flex  w-[67rem]  ">
        <img src="/zx7Desktop.png" className="w-fit tablet:hidden" />
        <img
          src="/zx7Tablet.png"
          className="hidden tablet:flex h-80 tablet:w-full mobile:hidden"
        />
        <img
          src="/zx7Mobile.png"
          className="hidden mobile:flex h-80 tablet:w-full"
        />
      </div>
    </div>
  );
}
