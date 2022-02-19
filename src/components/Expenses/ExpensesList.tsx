import "./Styles/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import { FC } from "react";
import { ExpenseModel } from "../../models/ExpenseModel";

type ExpensesList = {
  filtredExpense: ExpenseModel[]
}

const ExpensesList:FC<ExpensesList> = ({ filtredExpense }) => {
  if (filtredExpense.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expense</h2>;
  }
  return (
    <ul className="expenses-list">
      {filtredExpense.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        ></ExpenseItem>
      ))}
    </ul>
  );
};
export default ExpensesList;