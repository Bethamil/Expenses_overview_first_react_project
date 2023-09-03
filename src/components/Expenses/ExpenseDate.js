import './ExpenseDate.css'

function ExpenseDate({ date }) {
	const fullMonth = date.toLocaleString('en-US', { month: 'long' });
	const day = date.toLocaleString('en-US', { day: '2-digit' });
	const year = date.getFullYear();
	return (
		<div className='expense-date'>
			<div className='expense-date__month'>{fullMonth}</div>
			<div className='expense-date__year'>{year}</div>
			<div className='expense-date__day'>{day}</div>
		</div>
	);

}

export default ExpenseDate;