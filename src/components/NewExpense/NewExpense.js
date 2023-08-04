import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.scss';

const NewExpense = (props) => {
    const saveNewExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddNewExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm saveExpenseData={saveNewExpenseHandler} />
        </div>
    );
}
export default NewExpense;