import React, { FC } from 'react'
import { Legend, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { renderColorfulLegendText, renderCustomizedLabel } from './customRender';
import { COLORS } from './constants';

type PieChartWidgetProp = {
    value:any
}

const PieChartWidget:FC<PieChartWidgetProp> = ({value}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
          <Legend formatter={renderColorfulLegendText}/>
            <Pie
              data={value}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="amount"
            >
              {value.map((entry:any, index:any) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
    )
}

export default PieChartWidget