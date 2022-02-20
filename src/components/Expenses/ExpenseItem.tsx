import "./Styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { FC } from "react";

type ExpenseItemProp = {
  title: string;
  date: string|Date;
  amount: number;
}

const ExpenseItem:FC<ExpenseItemProp> = ({ title, date, amount }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amount}$</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpenseItem;