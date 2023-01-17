interface ProductProps {
  image: string;
  name: string;
}

export function Product({ image, name }: ProductProps) {
  return (
    <div className="flex flex-col bg-white50 w-[21rem] h-48 items-center tablet:w-56 tablet:h-42 tablet:mt-12 mt-12">
      <img
        src={image}
        className={
          image === "/earphonesProduct.png"
            ? "w-40 h-36 -mt-14 mb-6 tablet:w-36 tablet:h-32 tablet:-mt-10 tablet:mb-2 "
            : "w-44 h-44 -mt-20 mb-6 tablet:w-32 tablet:h-32 tablet:-mt-12 tablet:mb-2"
        }
      />
      <h1 className="mb-4 text-black font-bold tracking-[1.29px] leading-5 text-lg ">
        {name}
      </h1>
      <p
        className="flex items-center justify-center gap-3 text-black opacity-50 tracking-[1px] leading-4 cursor-pointer 
        transition duration-150 ease-in-out hover:text-orange100 "
      >
        SHOP
        <img src="rightArrow.png" />
      </p>
    </div>
  );
}
