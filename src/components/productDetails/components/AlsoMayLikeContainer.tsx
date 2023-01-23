import { useId } from "react";
import { AlsoMayLikeContent } from "./AlsoMayLikeContent";

interface othersProps {
  name: string;
  slug: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface AlsoMayProps {
  others?: othersProps[];
}

export function AlsoMayLikeContainer({ others}: AlsoMayProps) {
  return (
    <div className="flex justify-center items-center gap-7 tablet:gap-2 flex-wrap ">
      {others && others.map((item) => (
        <AlsoMayLikeContent
          key={useId()}
          name={item.name}
          slug ={item.slug}
          image={
           item.image.desktop
          }
      
        />
      ))}
    </div>
  );
}
