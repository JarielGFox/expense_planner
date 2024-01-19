const ExpenseFilter = ({ filteredYear, setFilteredYear }) => {

    const filterChangeHandler = (event) => {
        setFilteredYear(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label htmlFor="year">Filter by year</label>
                <select value={filteredYear} onChange={filterChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;