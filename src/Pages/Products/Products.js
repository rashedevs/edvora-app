import useData from "../Hooks/useData";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  const [products] = useData("https://assessment.api.vweb.app/products");
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.product_id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
