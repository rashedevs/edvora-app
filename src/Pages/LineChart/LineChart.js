import React from "react";
import { Tooltip } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, Legend, CartesianGrid } from "recharts";
import useData from "../Hooks/useData";

const Linechart = () => {
  const [products] = useData("https://assessment.api.vweb.app/products");
  return (
    <div>
      <LineChart
        width={1200}
        height={400}
        data={products}
        margin={{
          top: 40,
          right: 10,
          left: 40,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Line dataKey="selling_price" stroke="#8884d8"></Line>
        <Line dataKey="stock" stroke="#82ca9d"></Line>
        <Line dataKey="product_id" stroke="#16E2F5"></Line>
        <XAxis dataKey=""></XAxis>
        <YAxis dataKey=""></YAxis>
        <Legend />
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Linechart;
