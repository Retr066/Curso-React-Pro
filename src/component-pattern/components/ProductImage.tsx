import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = "", className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imgShow: string;
  if (img) {
    imgShow = img;
  } else if (product.img) {
    imgShow = product.img;
  } else {
    imgShow = noImage;
  }

  return <img style={style} className={`${styles.productImg} ${className}`} src={imgShow} alt="coffee mug" />;
};
