import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import { ExpenseModel } from "./models/ExpenseModel";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState<ExpenseModel[]>(DUMMY_EXPENSES);

  const addExpenseHandler = (expense:ExpenseModel) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <h2>Tap on button to add new expense or tap on chart bar to see expenses by month</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense expenses={expenses}></Expense>
    </div>
  );
}

export default App;