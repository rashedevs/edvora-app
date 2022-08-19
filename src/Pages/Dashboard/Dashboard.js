import React from "react";
import Areachart from "../AreaChart/Areachart";
import Barchart from "../BarChart/Barchart";
import useData from "../Hooks/useData";
import LineChart from "../LineChart/LineChart";

const Dashboard = () => {
  const [users] = useData("https://assessment.api.vweb.app/users");
  console.log(users);
  return (
    <div>
      <div className="my-5">
        <Barchart></Barchart>
        <h5>Users</h5>
      </div>
      <div className="my-5">
        <LineChart></LineChart>
        <h5>Products</h5>
      </div>
      <div className="my-5">
        <Areachart></Areachart>
        <h5>Orders</h5>
      </div>
    </div>
  );
};

export default Dashboard;
