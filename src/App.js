import logo from './logo.svg';
//import './App.css';
import react,{useState} from 'react';
import ExpenseItem from './components/ExpenseItem';
import NewExpenses from './components/NewExpenses/NewExpenses';
import Expenses from './components/Expenses';
//import ExpenseItem from './components1/ExpenseItem';
//import Expenses from './components1/Expenses';
const DUMMY_EXPENSES=[
  {
    id:'e1',
    title:'Car Insurance',
    amount:250,
    date:new Date(2020,3,22)
  },
  {
    id:'e2',
    title:'Vegetables',
    amount:56,
    date:new Date(2020,3,25)
  },
  {
    id:'e3',
    title:'Grocery',
    amount:45,
    date:new Date(2020,3,29)
  },
  {
    id:'e4',
    title:'Laundry',
    amount:25,
    date:new Date(2020,4,22)
  }
]
function App() {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} />

    </div>
    
  );
}

export default App;
