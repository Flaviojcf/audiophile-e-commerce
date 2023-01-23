
interface ProductImagesProps {
  firstImage?:string;
  secondImage?:string;
  thirdImage?: string;
}

export function ProductImagesContainer({firstImage,secondImage,thirdImage}:ProductImagesProps) {
  return (
    <div className="flex gap-2 tablet:items-center mobile:flex-col mobile:gap-4 max-w-[67rem] ">
      <div className="flex flex-col gap-8 w-1/2 mobile:w-full mobile:gap-4">
        <picture>
          <img src={firstImage} />
        </picture>
        <picture>
          <img src={secondImage}/>
        </picture>
      </div>

      <picture className="w-1/2 mobile:w-full">
        <img className="h-[37rem] object-contain tablet:h-full" src={thirdImage} />
      </picture>
    </div>
  );
}
