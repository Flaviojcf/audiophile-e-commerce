import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AlsoMayLikeContainer } from "./components/AlsoMayLikeContainer";
import { ProductFeature } from "./components/ProductFeature";
import { ProductImagesContainer } from "./components/ProductImagesContainer";
import { ProductInfo } from "./components/ProductInfo";
import db from "../../database/db.json";

interface includesProps {
  quantity: number;
  item: string;
}

interface othersProps {
  name: string;
  slug: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

interface galleryProps {
  first: {
    mobile: string;
    desktop: string;
    tablet: string;
  };
  second: {
    mobile: string;
    desktop: string;
    tablet: string;
  };
  third: {
    mobile: string;
    desktop: string;
    tablet: string;
  };
}

interface databaseProps {
  id?: number;
  image?: string;
  isNewProduct?: Boolean;
  name?: string;
  description?: string;
  price?: number;
  features?: string;
  includes?: includesProps[];
  gallery: galleryProps;
  others?: othersProps[];
}

export function ProductDetails() {
  const { category, details } = useParams();
  const [productInfo, setProductInfo] = useState<databaseProps>();

  useEffect(() => {
    async function fetchData() {
      window.scrollTo(0, 0);

      const filteredDb = await db.find(
        (d) => d.category === category?.toLowerCase() && details === d.slug
      );

      const mappedDb: databaseProps = {
        id: filteredDb?.id,
        image: filteredDb?.image.desktop,
        isNewProduct: filteredDb?.new,
        name: filteredDb?.name,
        description: filteredDb?.description,
        price: filteredDb?.price,
        features: filteredDb?.features,
        includes: filteredDb?.includes,
        gallery: filteredDb!.gallery,
        others: filteredDb?.others,
      };
      setProductInfo(mappedDb);
    }
    fetchData();
  }, [details]);

  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-20 gap-20 mobile:px-6">

      <ProductInfo
        image={productInfo?.image}
        description={productInfo?.description}
        name={productInfo?.name}
        isNewProduct={productInfo?.isNewProduct}
        price={productInfo?.price}
        id = {productInfo?.id}
      />
      <ProductFeature
        feature={productInfo?.features}
        includes={productInfo?.includes}
        id={productInfo?.id}
      />
      <ProductImagesContainer
        firstImage={productInfo?.gallery.first.desktop}
        secondImage={productInfo?.gallery.second.desktop}
        thirdImage={productInfo?.gallery.third.desktop}
      />
      <AlsoMayLikeContainer others={productInfo?.others} />
    </div>
  );
}
