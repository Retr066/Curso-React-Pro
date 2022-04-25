import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties } from "react";
import { ProductContextProps, Product, onChangeArgs, InitialValue, ProductCardHandlers } from "../interfaces/product.interface";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[] ;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValue?: InitialValue;
}
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValue }: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValue });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          maxCount: maxCount,
          isMaxCountReached,
          increaseBy,
          reset,
          product,
        })}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
