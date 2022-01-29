import './Search.css';
import react,{useState} from 'react';
const Search = (props) => {
    const enteredQueryHandler = (event) => {
        if(event.key==='Enter')
            props.enteredQuery(event.target.value)
        
    }
    
    return (
        
       <react.Fragment>
           <input type="search" placeholder='Search' value={props.value} className='Search_bar' onKeyDown={enteredQueryHandler}></input>
        </react.Fragment>  
        
           
    )
    
}
export default Search;