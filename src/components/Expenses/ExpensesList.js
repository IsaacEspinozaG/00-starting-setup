import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";

const ExpensesList = (props) => {
  if (!props.expenses.length) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }
  return props.expenses.map((expense) => {
    return (
      <ul className="expenses-list">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </ul>
    );
  });
};

export default ExpensesList;
