import React from 'react';
import './ExpenseFilter.css';
import Search from './Search/Search';

const ExpenseFilter = (props) => {
  
  const dropDownHandler=(event)=>{
    props.onSelectedYear(event.target.value);
    queryHandler("")
  }
  const queryHandler = (eventData) => {
    const data = (eventData)
    console.log(data)
    props.searchData(data)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <Search enteredQuery={queryHandler}/> 
        <select value={props.selected} onChange={dropDownHandler}>
          <option value='2022,2021,2020,2019'>All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;