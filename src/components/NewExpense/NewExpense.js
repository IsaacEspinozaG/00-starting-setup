import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = (props) => {
  const [isEditing, SetIsEditing] = useState(false);

  const saveNewExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
    SetIsEditing(false);
  };

  const startEditingHandler = () => {
    SetIsEditing(true);
  };

  const stopEditingHandler = () => {
    SetIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm saveExpenseData={saveNewExpenseHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};
export default NewExpense;
