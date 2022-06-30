import "./ExpensemForm.css";
import { useState } from "react";

const ExpensemForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //const [userInput, setUserInput] = useState({
  // enteredTitle: '',
  // enteredAmount: '',
  //enteredDate: ''
  //})

  const titleChangeHandle = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) =>{
    // return {...prevState, enteredTitle: event.target.value}
    // });
  };

  const amountChangeHandle = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) =>{
    //   return {...prevState, enteredAmount: event.target.value}
    // });
  };

  const dateChangeHandle = (event) => {
    setEnteredDate(event.target.value);
    //  setUserInput((prevState) =>{
    //  return {...prevState, enteredDate: event.target.value}
    // });
  };

  const submitHandle = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  const timeoutCloseForm = () => setTimeout(props.close, 200);

  return (
    <form onSubmit={submitHandle}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={titleChangeHandle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandle}
            type="date"
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit" onClick={timeoutCloseForm}>
          Add Expense
        </button>
        <button onClick={props.close}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpensemForm;
