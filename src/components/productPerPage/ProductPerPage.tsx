interface ProductPerPage {
  image: string;
  isNewProduct: Boolean;
  name: string;
  description: string;
  isReversed?: boolean;
}

export function ProductPerPage({
  isReversed = false,
  isNewProduct,
  description,
  image,
  name,
}: ProductPerPage) {
  return (
    <div
      className={
        isReversed === true
          ? "flex flex-row-reverse gap-32 max-w-[67rem] tablet:flex-col tablet:items-center tablet:h-[22rem] tablet:gap-12 mobile:gap-8"
          : "flex gap-32 max-w-[67rem] tablet:flex-col tablet:items-center tablet:max-h-[22rem] tablet:gap-12 mobile:gap-8"
      }
    >
      <picture className="flex items-center justify-center bg-white50 w-1/2 h-[35rem] max-w-[33rem] tablet:w-full ">
        <img src={image} />
      </picture>

      <div className="flex flex-col w-1/2  gap-6  justify-center h-[35rem] tablet:w-full tablet:text-center">
        {isNewProduct === true && (
          <p className="text-sm font-normal text-orange300 opacity-40 leading-5 tracking-medium ">
            NEW PRODUCT
          </p>
        )}
        <h1 className="font-bold  text-4xl tracking-[1.43px] tablet:text-4xl  tablet:self-center  tablet:w-full">
          {name}
        </h1>
        <p className="text-sm leading-6 opacity-75 font-medium  tablet:self-center mobile:w-full">
          {description}
        </p>

        <button
          className="flex items-center justify-center w-40 h-12 text-sm leading-6 font-medium text-white
           bg-orange300 tablet:self-center hover:bg-orange100  transition duration-150 ease-in-out"
        >
          See Product
        </button>
      </div>
    </div>
  );
}
