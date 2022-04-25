import { ProductCard } from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValue={{
            count: 0,
            maxCount: 20,
          }}
        >
          {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
            <>
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className="text-bold" />
              <ProductCard.Buttons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}> -2</button>
              {!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>}
              <span>
                {count} - {maxCount}
              </span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
