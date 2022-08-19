import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import useData from "../Hooks/useData";

const Areachart = () => {
  const [orders] = useData("https://assessment.api.vweb.app/orders");
  return (
    <div>
      <AreaChart
        width={1200}
        height={400}
        data={orders}
        margin={{
          top: 40,
          right: 10,
          left: 40,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="user_id" />
        <YAxis dataKey="quantity" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="product_id"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="quantity"
          stackId="2"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="user_id"
          stackId="3"
          stroke="#16E2F5"
          fill="#16E2F5"
        />
        <Area
          type="monotone"
          dataKey="order_date"
          stackId="4"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <Legend></Legend>
      </AreaChart>
    </div>
  );
};

export default Areachart;
