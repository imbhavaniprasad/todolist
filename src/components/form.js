import React from 'react';
// import TodoList from './TodoList'
const Form = ({setText,todos,setTodos,inputText,setStatus}) =>{


    const handleChange = (e)=>{
        console.log(e.target.value);
            setText(e.target.value);  
    }
 const handleSubmit = (e)=>{
     e.preventDefault();
     if(inputText!==""){
        setTodos([
            ...todos,
            {
            name: inputText,
            completed : false,
            id: Math.random()*1000
        }]);
     }
     else{
        alert("Enter Something");
     }
     
     setText("");
 }
 const handleStatus = (e)=>{
     setStatus(e.target.value);
 }
    return(
        <div>
           <form>
               <input value={inputText} onChange = {handleChange} type="text" name="todo"/>
               <button onClick={handleSubmit} type="submit"><i className='fa fa-plus-square'></i></button>
               <select onChange={handleStatus}>
                   <option value="All">All</option>
                   <option value="Completed">Completed</option>
                   <option value="Not">Not Completed</option>
               </select>
           </form>
           
        </div>
    )
}
export default Form;