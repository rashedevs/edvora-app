import React from "react";
import Card from "react-bootstrap/Card";

const Product = ({ product }) => {
  const { product_id, name, stock, selling_price } = product;
  return (
    <Card
      bg="secondary"
      text="white"
      style={{ width: "18rem", height: "13rem" }}
      className="my-3"
    >
      <Card.Header>
        <span className="text-warning">Product ID</span> : {product_id}
      </Card.Header>
      <Card.Body>
        <Card.Title>
          {" "}
          <span className="text-warning">Name</span> : {name}{" "}
        </Card.Title>
        <Card.Text>
          <span className="text-warning">Stock</span> : {stock}
        </Card.Text>
        <Card.Text>
          <span className="text-warning">Price</span> : ${selling_price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
