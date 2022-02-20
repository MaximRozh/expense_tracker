import "./Styles/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import { FC } from "react";
import { ExpenseModel } from "../../models/ExpenseModel";

type ExpensesListProp = {
  filtredExpense: ExpenseModel[]
}

const ExpensesList:FC<ExpensesListProp> = ({ filtredExpense }) => {
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
        />
      ))}
    </ul>
  );
};
export default ExpensesList;