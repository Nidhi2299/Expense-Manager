import react,{useState} from 'react';
import './Expenses.css';
import ExpensesChart from './ExpenseChart';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import SearchedExpenses from './Search/SearchedExpenses';

function Expenses(props){
    const [filteredYear,setSelectedYear]=useState('All');
    const selectedYearHandler=(selectedYear)=>{
        setSelectedYear(selectedYear);
    }
    console.log(filteredYear.length)
    const [search, setSearch] = useState('Search');
    const searchDataHandler = (searchData) => {
        setSearch(searchData)
        console.log(search)
    }
    
    const filteredYearExpenses = props.item.filter(expenses => expenses.date.getFullYear()
        == filteredYear);
    const searchQuery = filteredYearExpenses.filter(filteredYearExpenses =>filteredYearExpenses.title===search);
    
    return(
        <div>
           
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onSelectedYear={selectedYearHandler} searchData={searchDataHandler} />
            <ExpensesChart expenses={filteredYearExpenses} />
            <ExpensesList items={filteredYearExpenses} item2={searchQuery}/>
            

        </Card>
    </div>
)}
export default Expenses;