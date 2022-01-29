
const Expenses=(props)=>{
    return(
        <div>
           
            <div title={props.item.title} amount={props.item.amount} date={props.item.date}/>
            <div title={props.item.title} amount={props.item.amount} date={props.item.date}/>
            <div title={props.item.title} amount={props.item.amount} date={props.item.date}/>
            <div title={props.item.title} amount={props.item.amount} date={props.item.date}/>
        </div>
    )
}
export default Expenses;