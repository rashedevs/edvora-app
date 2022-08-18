import Table from "react-bootstrap/Table";
import useData from "../Hooks/useData";
import Order from "./Order";

const Orders = () => {
  const [orders] = useData("https://assessment.api.vweb.app/orders");
  return (
    <div className="p-4">
      <Table bordered hover>
        <thead>
          <tr>
            <th>
              Order ID <br /> <p></p>
            </th>
            <th>
              Product ID <br />
              <p></p>
            </th>
            <th>
              Quantity <br />
              <p></p>
            </th>
            <th>
              User ID <br />
              <p></p>
            </th>
            <th>
              Order Date <br />
              <p>(MM/DD/YYYY)</p>
            </th>
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
