import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            //not best practice ma va bene a scopo didattico
            id: Math.random().toString(),
        };
        onAddExpense(expenseData);
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>
                    Add new expense
                </button>
            )}
            {isEditing && (
                <ExpenseForm
                    onCancel={stopEditingHandler}
                    onSaveExpenseData={saveExpenseDataHandler}
                />
            )}
        </div>
    );
}

export default NewExpense;
