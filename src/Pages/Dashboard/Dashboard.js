import React from "react";
import Barchart from "../BarChart/Barchart";
import useData from "../Hooks/useData";
import LineChart from "../LineChart/LineChart";

const Dashboard = () => {
  const [users] = useData("https://assessment.api.vweb.app/users");
  console.log(users);
  return (
    <div>
      <div>
        <Barchart></Barchart>
      </div>
      {/* <div>
        <LineChart></LineChart>
      </div> */}
    </div>
  );
};

export default Dashboard;
