import { useEffect, useRef, useState } from "react";
import { InitialValue, onChangeArgs, Product } from "../interfaces/product.interface";

interface Props {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValue?: InitialValue;
}

export const useProduct = ({ product, onChange, value = 0, initialValue }: Props) => {
  const [counter, setCounter] = useState<number>(initialValue?.count || value);
  const isMounted = useRef(false);
  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    if (initialValue?.maxCount && newValue > initialValue.maxCount) {
      return;
    }
    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    setCounter(initialValue?.count || 0);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);
  useEffect(() => {
    isMounted.current = true;
  }, []);
  return {
    increaseBy,
    counter,
    maxCount: initialValue?.maxCount,
    isMaxCountReached: !!initialValue?.count && counter === initialValue.maxCount,
    reset,
  };
};
