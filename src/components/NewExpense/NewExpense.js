import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            //not best practice ma va bene a scopo didattico
            id: Math.random().toString(),
        };
        console.log(expenseData);
        onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;
