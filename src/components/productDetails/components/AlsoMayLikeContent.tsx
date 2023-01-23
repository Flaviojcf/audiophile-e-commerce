import { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import db from "../../../database/db.json";



interface AlsoMayLikeContainerProps {
  image: string;
  name: string;
  slug:string;

}

export function AlsoMayLikeContent({ image, name, slug }: AlsoMayLikeContainerProps) {
  const [preSlug, setPreSlug] = useState('')

  const {details} = useParams()

  function onChangePreSlug(slug:string){
    if(slug.includes('headphones')){
      setPreSlug('headphones')
    }
    else if(slug.includes('earphones')){
      setPreSlug('earphones')
    } else {
      setPreSlug('speakers')
    }
  }

  useEffect(()=>{
    onChangePreSlug(slug)
  },[details])




  return (
    <div className="flex flex-col items-center text-center gap-9">
      <div className="flex flex-col bg-white50 w-[350px] h-[318px] items-center justify-center tablet:w-56 tablet:h-42 tablet:mt-12 mt-12 mobile:w-72">
        <img src={image} className="flex self-center " />
      </div>

      <div className="flex flex-col gap-8">
        <p className="font-bold text-2xl leading-8 tracking-[1.71px]">{name}</p>

        <Link to={`/products/${preSlug}/${slug}`}>
          <button
            className="flex items-center justify-center w-40 h-12 text-sm leading-6 font-medium text-white
           bg-orange300 tablet:self-center hover:bg-orange100  transition duration-150 ease-in-out"
          >
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
}
