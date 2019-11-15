import React , {useEffect} from "react";
import { Chart } from "react-google-charts";


const data = [
    ["age", "weight"],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7]
];

const options = {
    title: "Age vs. Weight comparison",
    hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
    vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
    legend: "none"
    
};
const BarChart = () => {
    return (
    <Chart
      chartType="Bar"
      data={data}
      options={options}
      graphID="ScatterChart"
      width="400px"
      height="400px"
    />
  );
};
 
export default BarChart;