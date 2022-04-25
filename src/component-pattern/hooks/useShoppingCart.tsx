import { useState } from "react";
import { onChangeArgs, ProductInCard } from "../interfaces/product.interface";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCard }>({});
  const onProductOnChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCard: ProductInCard = oldShoppingCart[product.id] || { ...product, count: 0 };

      if (Math.max(productInCard.count + count, 0) > 0) {
        productInCard.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCard,
        };
      }
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return { ...rest };
    });
  };

  return {
    shoppingCart,
    onProductOnChange,
  };
};
