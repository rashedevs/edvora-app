import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.product_id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
