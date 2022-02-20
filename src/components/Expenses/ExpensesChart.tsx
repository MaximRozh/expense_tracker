import { FC, useMemo, useState } from "react";
import BarChartWidget from "../Chart/BarChartWidget";
import PieChartWidget from "../Chart/PieChartWidget";
import ModalChart from "../Modals/ModalChart";
import { chartDataPoints } from "./constants";

type ExpensesChartProp = {
  expenses: any
}

const ExpensesChart:FC<ExpensesChartProp> = ({ expenses }) => {
  const [modal, setModal] = useState(false)
  const [value, setValue] = useState([])

  const handleOpen = (val:any) => {
    setValue(val?.costs)
    setModal(true)
  }

  const handleClose = () => {
    setModal(false)
  }
  const getData = useMemo(() => chartDataPoints.reduce((result:any, value:any) => {
      const month = expenses.filter((item:any) => item.date.getMonth() === value.month)
      const spending = month.reduce((result:any, value:any ) => result = result + value.amount, 0)
     
      return [...result, {...value, spending, costs: [...month]}]
    },
    []), [expenses])


  return (
    <>
      <BarChartWidget dataPoints={getData} handleOpen={handleOpen}/>
      <ModalChart open={modal} handleClose={handleClose}>
        <PieChartWidget value={value}/>
      </ModalChart>
    </>
  )
};

export default ExpensesChart;