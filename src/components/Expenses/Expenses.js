import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({items}) {

  const highestYear = Math.max(...items.map((item) => {return item.date.getFullYear()}));
  const [filteredYear, setFilteredYear] = useState(highestYear);

  const years = items.map((item) => (item.date.getFullYear()));
  const filteredItems = items.filter((item) => (item.date.getFullYear() === parseInt(filteredYear)));
  

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} years={years} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredItems}/>
      <ExpensesList items={filteredItems}/>
    </Card>
  );
}

export default Expenses;