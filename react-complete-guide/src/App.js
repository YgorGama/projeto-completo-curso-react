import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";

const dummyExpense = [
  { title: "Phone", amount: 50, date: new Date("2020,12,05"), id: 1 },
  { title: "Chips", amount: 1.6, date: new Date("2022,11,04"), id: 2 },
  { title: "Car", amount: 29140.67, date: new Date("2021,6,05"), id: 3 },
  { title: "Smartphone", amount: 500, date: new Date("2020,02,05"), id: 4 },
  { title: "TV", amount: 1234.67, date: new Date("2020,12,05"), id: 5 },
];

const App = () => {
  const [expense, setExpense] = useState(dummyExpense);
  const addExpense = (expense) => {
    setExpense((oldExpense) => {
      return [expense, ...oldExpense];
    });
  };

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Expenses item={expense}></Expenses>
    </div>
  );
};

export default App;
