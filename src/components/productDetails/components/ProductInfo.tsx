interface ProductInfo {
  image?: string;
  isNewProduct?: Boolean;
  name?: string;
  price?: number;
  description?: string;
}

export function ProductInfo({
  image,
  description,
  isNewProduct,
  name,
  price,
}: ProductInfo) {
  return (
    <div className="flex gap-32 max-w-[67rem] tablet:flex-col  tablet:gap-8   mobile:w-72 mobile:px-6 tablet:items-center">
      <picture className="flex items-center justify-center bg-white50 w-1/2 h-[35rem]  tablet:w-full max-w-lg">
        <img className="object-contain" src={image} />
      </picture>

      <div className="flex flex-col w-1/2  gap-6  justify-center  h-[35rem]  tablet:text-start tablet:w-full ">
        {isNewProduct === true && (
          <p className="text-sm font-normal text-orange300 opacity-40 leading-5 tracking-medium ">
            NEW PRODUCT
          </p>
        )}
        <h1 className="font-bold  text-4xl tracking-[1.43px]  tablet:text-4xl  tablet:text-start ">
          {name}
        </h1>
        <p className="text-sm leading-6 opacity-75 font-medium  tablet:text-start ">
          {description}
        </p>

        <div className="flex w-20 h-6 tablet:justify-start tablet:w-full">
          <p className="font-bold text-lg leading-6 tracking-[1.29px]">
            {price}
          </p>
        </div>

        <div className="flex gap-4  items-center justify-start tablet:gap-1">
          <button className="flex gap-5 items-center justify-center w-30 h-12 bg-white50 p-4">
            <span className="hover:text-orange300 transition-colors ">-</span>
            <span>1</span>
            <span className="hover:text-orange300 transition-colors">+</span>
          </button>
          <button
            className="flex items-center justify-center w-40 h-12 text-sm leading-6 font-medium text-white
             bg-orange300  hover:bg-orange100  transition-colors tablet:w-36"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
