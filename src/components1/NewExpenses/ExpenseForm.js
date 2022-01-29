
const ExpenseForm=()=>{
    const dataHandler=()=>{
        
    }
    return(
        <div>
            <form>
                <div>
                <label>Title</label>
                <input type="text" />
                <label>Amount</label>
                <input type="number" step="0.05" />
                <label>Date</label>
                <input type="date" max="02-03-2022" min="02-03-2019" />
                </div>
                <button onSubmit={dataHandler}>Submit</button>
            </form>
        </div>
    )
}
export default ExpenseForm;