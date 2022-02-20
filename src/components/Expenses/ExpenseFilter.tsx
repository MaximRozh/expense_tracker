import React, { FC } from "react";
import ViewsDatePicker from "../UI/DataPickerNew";

import "./Styles/ExpenseFilter.css";

type ExpensesFilterProp = {
  selected: string;
  onChangeFilter: (selectedYear:string) => void;
}

const ExpensesFilter:FC<ExpensesFilterProp> = ({ selected, onChangeFilter }) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <ViewsDatePicker selected={selected} choseValue={onChangeFilter} viewsArr={['year']} label="Select year" />
      </div>
      
    </div>
  );
};

export default ExpensesFilter;