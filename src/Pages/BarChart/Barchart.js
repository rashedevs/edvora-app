import React from "react";
import useData from "../Hooks/useData";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Barchart = () => {
  const [users] = useData("https://assessment.api.vweb.app/users");
  return (
    <div>
      <BarChart
        width={1200}
        height={450}
        data={users}
        margin={{
          top: 40,
          right: 10,
          left: 40,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis dataKey="user_id" />
        <XAxis dataKey="" />
        <Tooltip />
        <Legend />
        <Bar dataKey="user_id" fill="#8884d8" />
        <Bar dataKey="name" fill="#2B547E" />
      </BarChart>
    </div>
  );
};

export default Barchart;
