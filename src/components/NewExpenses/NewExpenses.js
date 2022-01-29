import react,{useState} from 'react';
import './NewExpenses.css';
import './ExpenseForm'
import ExpenseForm from './ExpenseForm';
const NewExpenses=(props)=>{
    const saveDateExpenseHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        
        props.onAddExpense(expenseData);
        setAddEvent(false)
    }
    const [addEvent, setAddEvent] = useState(false);
    const isEditing = () => { setAddEvent(true) }
    const isNotEditing = () => { setAddEvent(false)}
    return(
        <div className='new-expense'>
            {addEvent ? <ExpenseForm onSaveExpenseData={saveDateExpenseHandler} onCancel={isNotEditing} /> :
            <button type='button' onClick={isEditing}>Add New Expense</button>}
           
        </div>
    )

}
export default NewExpenses;