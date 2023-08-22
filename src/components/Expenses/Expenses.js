import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.scss";

const Expenses = (props) => {
  const [yearFiltered, setYearFiltered] = useState("2023");

  const filterChangedHandler = (year) => {
    setYearFiltered(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === parseInt(yearFiltered);
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearFiltered}
          onChangeFilterHandler={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
};
export default Expenses;
