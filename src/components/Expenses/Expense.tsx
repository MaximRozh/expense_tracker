import { FC, useMemo, useState } from "react";
import { ExpenseModel } from "../../models/ExpenseModel";
import Card from "../UI/Card";
import "./Styles/Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

type ExpenseProp = {
  expenses: ExpenseModel[]
} 

const Expense:FC<ExpenseProp> = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState<string>("2021");

  const filterChangeHandler = (selectedYear:string) => {
    setFilteredYear(new Date(selectedYear).getFullYear().toString());
  };

  const filtredExpense = useMemo(() => expenses.filter(
    (item:any) => item.date.getFullYear().toString() === filteredYear
  ), [filteredYear, expenses])

  return (
    <div>
      <Card className="expenses" >
        <div style={{backgroundColor:'silver', padding: 10, borderRadius:10}}>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filtredExpense}></ExpensesChart>
        </div>
        <ExpensesList filtredExpense={filtredExpense}></ExpensesList>
      </Card>
    </div>
  );
}
export default Expense;