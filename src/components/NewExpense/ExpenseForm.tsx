import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { ExpenseModel } from "../../models/ExpenseModel";
import "./Styles/ExpenseForm.css";


type ExpenseFormProp = {
  onSaveExpenseData: (expensedData: ExpenseModel) => void;
  startEditingHandler: () => void;
}

const ExpenseForm:FC<ExpenseFormProp> = ({ onSaveExpenseData, startEditingHandler }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteridDate: "",
  });

  const titleChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => {
      return { ...prev, enteredTitle: e.target.value };
    });
  };
  const amountChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => {
      return { ...prev, enteredAmount: e.target.value };
    });
  };
  const dateChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => {
      return { ...prev, enteridDate: e.target.value };
    });
  };
  const changeView = () => {
    startEditingHandler();
  };

  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSaveExpenseData({
      title: userInput.enteredTitle,
      amount: Number(userInput.enteredAmount),
      date: new Date(userInput.enteridDate),
      id: Date.now(),
    });
    setUserInput({ enteredTitle: "", enteredAmount: "", enteridDate: "" });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteridDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={changeView}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;