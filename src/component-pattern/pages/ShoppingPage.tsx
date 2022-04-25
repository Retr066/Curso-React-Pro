import { ProductCard } from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { onProductOnChange, shoppingCart } = useShoppingCart();

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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductOnChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-card">
        {Object.values(shoppingCart).map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            className="bg-dark text-white "
            style={{
              width: "100px",
            }}
            value={product.count}
            onChange={onProductOnChange}
          >
            <ProductCard.Image
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
