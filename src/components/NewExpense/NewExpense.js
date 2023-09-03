import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showFormHandler = () => {
    setIsFormVisible(true);
  };

  const cancelHandler = () => {
    setIsFormVisible(false);
  };

  const addExpenseHandler = (expenseData) => {
    setIsFormVisible(false);
    props.onAddExpense(expenseData);
  };



  return (
    <div className="new-expense">
      {!isFormVisible && <button onClick={showFormHandler}>Add New Expense</button>}
      {isFormVisible && <ExpenseForm onSaveExpenseData={addExpenseHandler} onCancel={cancelHandler} />}

    </div>
  );
}

export default NewExpense;
