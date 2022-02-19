import React, { FC } from "react";

import "./Styles/ExpenseFilter.css";

type ExpensesFilter = {
  selected: string;
  onChangeFilter: (selectedYear:string) => void;
}

const ExpensesFilter:FC<ExpensesFilter> = ({ selected, onChangeFilter }) => {
  const choseValue = (selectedYear: string) => {
    onChangeFilter(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={ e => choseValue(e.target.value)}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;