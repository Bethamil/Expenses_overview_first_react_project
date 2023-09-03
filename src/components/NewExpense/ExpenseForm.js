import './ExpenseForm.css'
import { useState } from 'react';

function ExpenseForm(props) {
  ;
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const inputChangeHandler = (identifier, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [identifier]: value };
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date)
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({
      title: '',
      amount: '',
      date: ''
    });
  }



  return (

      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={userInput.title} onChange={(e) => inputChangeHandler('title', e.target.value)} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={userInput.amount} min="0.01" step="0.01" onChange={(e) => inputChangeHandler('amount', e.target.value)} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={userInput.date} min="2019-01-01" max="2023-12-31" onChange={(e) => inputChangeHandler('date', e.target.value)} />
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
      
  )
}

export default ExpenseForm;