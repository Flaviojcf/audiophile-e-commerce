import { createContext, ReactNode, useEffect, useState } from "react";

interface CartContextProps {
  onAddProductToCart: (data: ProductInformations) => void;
  onRemove: () => void;
  productInCart: ProductInformations[];
  TotalPrice: (id:string)=>void;
  totalPrice: number;
  onAddOrMinusAmountInCart: (id: string, type: string) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

type ProductInformations = {
  id: string;
  img: string;
  name:string;
  price: number;
  amount: number;
  totalPrice: number;
};

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [productInCart, setProductInCart] = useState<ProductInformations[]>(
    () => {
      const storedProduct = localStorage.getItem("@ProductItems");
      if (storedProduct) {
        return JSON.parse(storedProduct);
      }
      return [];
    }
  );

  function onAddProductToCart(data: ProductInformations) {
    const newArrayProduct = [...productInCart];

    const getProductIndex = newArrayProduct.findIndex(
      (product) => product.id === data.id
    );
    if (getProductIndex === -1) {
      setProductInCart([...productInCart, data]);
    } else {
      newArrayProduct[getProductIndex].amount += data.amount;
      setProductInCart(newArrayProduct);
    }
  }

  const allTotalPricePerProduct = productInCart.map(
    (value) => value.totalPrice
  );

 const totalPrice = allTotalPricePerProduct.reduce(
      (currentValue, previousValue) => currentValue + previousValue,
      0
    );

  function TotalPrice(id:string){
     const newArrayProduct = [...productInCart];
    const getProductIndex = newArrayProduct.findIndex(
      (product) => product.id === id
    );
    newArrayProduct[getProductIndex].totalPrice =
        newArrayProduct[getProductIndex].price *
        newArrayProduct[getProductIndex].amount;
      setProductInCart(newArrayProduct);
  }
  

  function onAddOrMinusAmountInCart(id: string, type: string) {
    const newArrayProduct = [...productInCart];
    const getProductIndex = newArrayProduct.findIndex(
      (product) => product.id === id
    );
    if (type === "+") {
      newArrayProduct[getProductIndex].amount += 1;
      newArrayProduct[getProductIndex].totalPrice =
        newArrayProduct[getProductIndex].price *
        newArrayProduct[getProductIndex].amount;
      setProductInCart(newArrayProduct);
    } else if (type === "-") {
      if (newArrayProduct[getProductIndex].amount > 1) {
        newArrayProduct[getProductIndex].amount -= 1;
        newArrayProduct[getProductIndex].totalPrice =
          newArrayProduct[getProductIndex].price *
          newArrayProduct[getProductIndex].amount;
        setProductInCart(newArrayProduct);
      } else {
        const removeProduct = newArrayProduct.filter(
          (product) => product.id !== id
        );
        setProductInCart(removeProduct);
      }
    }
  }

  function onRemove() {
    setProductInCart([]);
  }

  useEffect(() => {
    localStorage.setItem("@ProductItems", JSON.stringify(productInCart));
  }, [productInCart]);

  return (
    <CartContext.Provider
      value={{
        onAddProductToCart,
        productInCart,
        onRemove,
        onAddOrMinusAmountInCart,
        TotalPrice,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
