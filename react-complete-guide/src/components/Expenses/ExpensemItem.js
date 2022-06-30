import "./ExpensemItem.css";
import ExpensemDate from "./ExpensemDate";
import Card from "./Card";
import React, { useState } from "react";

const ExpensemItem = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpensemDate date={props.date}></ExpensemDate>
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpensemItem;
