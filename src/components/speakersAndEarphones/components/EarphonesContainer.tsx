export function EarphonesContainer() {
  return (
    <div className="flex gap-3 h-80 mobile:flex-col">

      <div className="w-1/2 h-80 mobile:w-full">
        <img src="yx1Desktop.png" className="w-full  h-80 object-cover" />
      </div>

      <div className="flex flex-col justify-center bg-gray200 w-1/2 h-80  px-24 p-4 gap-8 tablet:px-2 mobile:w-full mobile:py-8 ">
        <p className="font-bold text-3xl tracking-[2px] tablet:text-2xl">YX1 EARPHONES</p>
        <button
          className="flex  items-center justify-center bg-none transition duration-150 ease-in-out
         hover:bg-black hover:text-white border w-40 h-12"
        >
          SEE PRODUCT
        </button>
      </div>
      
    </div>
  );
}
