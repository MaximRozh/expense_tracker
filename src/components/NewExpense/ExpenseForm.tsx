import { Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC, FormEvent, useState } from "react";
import { ExpenseModel } from "../../models/ExpenseModel";
import ViewsDatePicker from "../UI/DataPickerNew";
import "./Styles/ExpenseForm.css";

const useStyles = makeStyles({
  root: {
    background: 'white',
    borderRadius: 10,
    height: 56,
    width: 320,
    "& .MuiFormControl-root": {
      width: '100%',
      '& .MuiInputLabel-root': {
        color: 'black',
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: 'none',
      }
    }
  }
})

type ExpenseFormProp = {
  onSaveExpenseData: (expensedData: ExpenseModel) => void;
  startEditingHandler: () => void;
}

const initialValues = {
  enteredTitle: "",
  enteredAmount: "",
  enteridDate: "",
}

const ExpenseForm:FC<ExpenseFormProp> = ({ onSaveExpenseData, startEditingHandler }) => {
  const [userInput, setUserInput] = useState(initialValues);

  const classes = useStyles()

  const dateChangeHandler = (date:any) => {
    setUserInput((prev) => ({ ...prev, enteridDate: date }));
  };

  const changeHandler = (name:string) => (e:any) => {
    setUserInput((prev) => ({ ...prev, [name]: e.target.value }));
  }

  const changeView = (e:any) => {
    e.preventDefault();
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
    setUserInput(initialValues);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
      <Box className={classes.root}>
        <TextField variant="outlined" label='Title' onChange={(e) => changeHandler('enteredTitle')(e)}/>
      </Box>
      <Box className={classes.root}>
        <TextField variant="outlined" type='number' label='Amount' onChange={(e) => changeHandler('enteredAmount')(e)}/>
      </Box>
        <div className="new-expense__data-picker">
        <ViewsDatePicker selected={userInput.enteridDate} choseValue={dateChangeHandler} viewsArr={['year', 'month', 'day']}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="button" onClick={changeView}>Cancel</button>
        <button className="button" type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;