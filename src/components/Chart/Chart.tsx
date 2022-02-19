import { FC } from "react";
import "./Styles/Chart.css";
import ChartBar from "./ChartBar";

type ChartProp = {
  dataPoints: any
}

const Chart:FC<ChartProp> = ({ dataPoints }) => {
  const sumOfValues = dataPoints.reduce((acc:any, next:any) => acc + next.value, 0);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint:any) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          sumOfValues={sumOfValues}
        />
      ))}
    </div>
  );
};

export default Chart;