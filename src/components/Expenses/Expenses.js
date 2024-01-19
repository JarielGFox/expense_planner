import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import '../ExpenseFilter/ExpenseFilter.css';
import { useState } from "react"
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('');

    //funzione da passare al componente ExpenseFilter
    const filterChangeHandler = (filteredYear) => {
        setFilteredYear(filteredYear);
    }

    //filtro per date
    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter
                filteredYear={filteredYear}
                setFilteredYear={filterChangeHandler}
            />

            <ExpensesList filteredExpenses={filteredExpenses} />

        </Card>
    );
}

export default Expenses;