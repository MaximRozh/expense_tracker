import React, { FC } from 'react'
import { Bar, BarChart, Tooltip, XAxis, YAxis} from "recharts";

type BarChartWidgetProp = {
    dataPoints: any;
    handleOpen: (value: any) => void;
}

const BarChartWidget:FC<BarChartWidgetProp> = ({dataPoints, handleOpen}) => {
    return (
    <BarChart width={730} height={250} data={dataPoints}>
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="spending" fill="#8884d8" onClick={val => handleOpen(val.payload)}/>
    </BarChart>
    )
}

export default BarChartWidget