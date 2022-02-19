import { FC, useState } from "react";
import { ExpenseModel } from "../../models/ExpenseModel";
import Card from "../UI/Card";
import "./Styles/Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

type Expense = {
  expenses: ExpenseModel[]
} 

const Expense:FC<Expense> = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState<string>("2021");

  const filterChangeHandler = (selectedYear:string) => {
    setFilteredYear(selectedYear);
  };
  const filtredExpense = expenses.filter(
    (item:any) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filtredExpense}></ExpensesChart>
        <ExpensesList filtredExpense={filtredExpense}></ExpensesList>
      </Card>
    </div>
  );
}
export default Expense;