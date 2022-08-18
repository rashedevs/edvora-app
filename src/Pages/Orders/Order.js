import React from "react";

const Order = ({ order }) => {
  const { order_id, product_id, quantity, user_id, order_date } = order;
  const givenTime = order_date;
  const date = new Date(givenTime * 1000);
  const day = date.toLocaleDateString("en-US");
  return (
    <tr>
      <td>{order_id}</td>
      <td>{product_id}</td>
      <td>{quantity}</td>
      <td>{user_id}</td>
      <td>{day}</td>
    </tr>
  );
};

export default Order;
