import React, { FC, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { ExpenseModel } from "../../models/ExpenseModel";
import "./Styles/NewExpense.css";

type NewExpenseProp = {
  onAddExpense: (expensedData: ExpenseModel) => void;
}

const NewExpense: FC<NewExpenseProp> = ({ onAddExpense }) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData:ExpenseModel) => {
    onAddExpense(enteredExpenseData);
    startEditingHandler();
  };

  const startEditingHandler = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          startEditingHandler={startEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;