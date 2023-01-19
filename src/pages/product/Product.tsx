import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductPerPage } from "../../components/productPerPage/ProductPerPage";
import { Products } from "../../components/products/Products";
import db from "../../database/db.json";

interface databaseProps {
  id: number;
  image: string;
  isNewProduct: Boolean;
  name: string;
  description: string;
}

export function Product() {
  const { category } = useParams();
  const [product, setProduct] = useState<databaseProps[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const filteredDB = db.filter((d) => d.category === category?.toLowerCase());

    const mappedDB: databaseProps[] = filteredDB.map((product) => ({
      id: product.id,
      image: product.image.desktop,
      description: product.description,
      name: product.name,
      isNewProduct: product.new,
    }));

    setProduct((state) =>
      mappedDB.sort(function (a, b) {
        return b.id - a.id;
      })
    );
  }, [category]);

  console.log(product);

  return (
    <div className="flex flex-col gap-40  px-40 items-center justify-center mt-32 mb-40 tablet:gap-[34rem] tablet:px-10 mobile:px-6 mobile:gap-96">
      {product.map((prod, index) => (
        <ProductPerPage
          key={prod.id}
          isReversed={index % 2 === 0 ? true : false}
          isNewProduct={index === 0 && true}
          description={prod.description}
          image={prod.image}
          name={prod.name}
        />
      ))}

      <Products />
    </div>
  );
}
