import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Order from "./Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return (
    <div className="p-4">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>User ID</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <Order key={order.order_id} order={order}></Order>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
