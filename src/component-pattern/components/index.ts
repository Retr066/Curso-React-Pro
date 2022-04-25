import { ProductCard as ProductCardComponent } from "./ProductCard";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardProps } from "../interfaces/product.interface";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardProps = Object.assign(ProductCardComponent, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});
export default ProductCard;
