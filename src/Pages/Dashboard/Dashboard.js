import React from "react";
import Areachart from "../AreaChart/Areachart";
import Barchart from "../BarChart/Barchart";
import LineChart from "../LineChart/LineChart";

const Dashboard = () => {
  return (
    <div>
      <div className="my-5">
        <Barchart></Barchart>
        <h5>Users Data</h5>
      </div>
      <div className="my-5">
        <LineChart></LineChart>
        <h5>Products Data</h5>
      </div>
      <div className="my-5">
        <Areachart></Areachart>
        <h5>Orders Data</h5>
      </div>
    </div>
  );
};

export default Dashboard;
