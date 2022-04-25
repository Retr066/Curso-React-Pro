import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/product.interface";

interface Props {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ product, onChange, value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    console.log({ value });
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };
  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    increaseBy,
    counter,
  };
};
