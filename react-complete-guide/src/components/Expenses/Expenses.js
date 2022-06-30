import ExpensemItem from "./ExpensemItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensemList from "./ExpensemList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseYear = (value) => {
    setFilteredYear(value);
  };

  const filterExpenses = props.item.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveExpenseYear={expenseYear}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensemList items={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
