import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
import SearchedExpenses from './Search/SearchedExpenses';

const ExpensesList = (props) => {
  /*if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }*/

  return (
    props.item2.length==0 ?
   ( <ul className='expenses-list'>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        </ul>):
      (<SearchedExpenses list={props.item2} add={props.additional}/>)
    
  );
};

export default ExpensesList;