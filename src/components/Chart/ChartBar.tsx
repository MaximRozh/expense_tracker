import { FC } from "react";
import "./Styles/ChartBar.css";


type ChartBarProp = {
  value: any;
  label: any;
  sumOfValues: any;
}

const ChartBar:FC<ChartBarProp> = ({ value, label, sumOfValues }) => {
  let barFillHeight = "0%";

  if (sumOfValues > 0) {
    barFillHeight = Math.round((value / sumOfValues) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};
export default ChartBar;