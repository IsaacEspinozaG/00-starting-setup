import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.scss";

const Expenses = (props) => {
  const [yearFiltered, setYearFiltered] = useState("2023");

  const filterChangedHandler = (year) => {
    setYearFiltered(year);
  };
  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={yearFiltered}
        onChangeFilterHandler={filterChangedHandler}
      />
      {props.expenses
        .filter((expense) => {
          return expense.date.getFullYear() === parseInt(yearFiltered);
        })
        .map((expense, index) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
    </Card>
  );
};
export default Expenses;
