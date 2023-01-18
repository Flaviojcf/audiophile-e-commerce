export function MarkHeadphone() {
  return (
    <div className="w-full bg-black50 font-manrope px-10 pb-10 tablet:px-4  tablet:gap-0  tablet:bg-black50">
      <div className="flex gap-16 items-center justify-center text-white  tablet:text-center tablet:gap-0">
        
        <div className="flex flex-col  gap-6  h-96 tablet:self-center px-4 tablet:absolute tablet:z-40 tablet:mt-36">
          <p className="text-sm font-normal opacity-40 leading-5 tracking-medium ">
            NEW PRODUCT
          </p>
          <h1 className="text-6xl tracking-thin tablet:text-4xl w-96 tablet:self-center tablet:w-80  mobile:w-full">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-sm leading-6 opacity-75 font-medium  w-80 tablet:self-center mobile:w-full">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <button
            className="flex items-center justify-center w-40 h-12 text-sm leading-6 font-medium 
           bg-orange300 tablet:self-center hover:bg-orange100  transition duration-150 ease-in-out"
          >
            See Product
          </button>
        </div>

        <div className="text-white relative tablet:z-10 ">
          <img
            src="headphone.png"
            className="opacity-90 rounded-full tablet:hidden"
          />
          <img
            src="audiophileTablet.png"
            className="opacity-90 hidden  rounded-full tablet:flex mobile:hidden"
          />
          <img
            src="audiophileMobile.png"
            className="opacity-90 hidden rounded-full  mobile:flex"
          />
        </div>
      </div>
    </div>
  );
}
