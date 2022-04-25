import { Props } from "../components/ProductCard";
import { Props as ProducTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export interface ProductCardProps {
  ({ children, product }: Props): JSX.Element;
  Title: (Props: ProducTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface ProductInCard extends Product {
  count: number;
}

export interface InitialValue {
  maxCount?: number;
  count?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
