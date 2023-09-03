import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const years = props.years.filter((year, index, self) => self.indexOf(year) === index).sort((a, b) => b - a);
  const yearOptions = years.map((year) => <option value={year} key={Math.random()}>{year}</option>);
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Year</label>
        <select title="Filter by year" value={props.selected} onChange={(e) => props.onChangeFilter(e.target.value)}>
          {yearOptions}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
