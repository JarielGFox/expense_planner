import './ExpenseForm.css';
import { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    //gruppo di funzioni per modificare titolo, importo e data
    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setDate(event.target.value);
    }

    //funzione per inviare i dati al submit del form
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date),
        };
        console.log(expenseData);
        onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text"
                        value={title}
                        onChange={titleHandler} />
                </div>

                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number"
                        value={amount}
                        onChange={amountHandler} />
                </div>

                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"
                        value={date}
                        onChange={dateHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form >
    );

}

export default ExpenseForm;