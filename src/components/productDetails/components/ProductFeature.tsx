import { useId } from "react";

interface includesProps {
  quantity: number;
  item: string;
}

interface ProductFeatureProps {
  feature?: string;
  includes?: includesProps[];
  id?:number;
}

export function ProductFeature({ feature, includes, id }: ProductFeatureProps) {
  return (
    <div className="flex gap-32   w-[67rem] tablet:flex-col tablet:w-full mobile:w-72 mobile:px-6">
      <div className="flex flex-col gap-8 w-[43rem] tablet:w-full">
        <h1 className="font-bold text-3xl leading-9 tracking-[1.14px]">
          FEATURES
        </h1>
        <p className="opacity-50 ">{feature}</p>
      </div>

      <div className="flex flex-col gap-8 tablet:flex-row mobile:flex-col">
        <h1 className="font-bold text-3xl leading-9 tracking-[1.14px]">
          IN THE BOX
        </h1>
        <ul className="flex flex-col gap-2">
          {includes && includes.map((item) => (
            <li key={Number(id) * Math.random()} className="flex items-center gap-6">
              <strong className="font-bold text-sm leading-6 text-orange300">
                {item.quantity}x
              </strong>
              <p className="opacity-50">{item.item} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
