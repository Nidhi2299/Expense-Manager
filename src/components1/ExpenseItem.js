import ExpenseDate from "./ExpenseDate";
import react,{useState} from "react";
const ExpenseItem=(props)=>{
    const [title,titleHandler]=useState(props.title);
    const clickHandler=()=>{
        titleHandler('updated');

    }
    return(
    <div>
        <div>
           <h1>{title}</h1> 
        </div>
        <div>
            {props.amount}
        </div>
        <div>
            <ExpenseDate date={props.date}/>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </div>
    )
}
export default ExpenseItem;