import { useState } from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ title, amount, date }) => {
    //impostiamo lo stato del titolo della spesa che dovrà mutare
    const [expenseTitle, setExpenseTitle] = useState(title);

    const clickHandler = () => {
        setExpenseTitle('Updated!');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">€{amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    )
}

export default ExpenseItem;