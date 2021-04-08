import React from 'react';
 const TodoFinal=({name,todo,setTodos,todos})=>{
     const deleteHandler = ()=>{
          setTodos(todos.filter(el => el.id!==todo.id));
     }
     const completeHandler = ()=>{
         setTodos(todos.map((item)=>{
             if(item.id===todo.id){
                 return {
                    ...item, completed : !item.completed
                 }    
             }
             return item;
         })
         );
     }
     return(
         <div>
             <ul>
                 <li className={`${todo.completed? "completed" : ""}`}>{name}</li>
                 <button onClick={completeHandler}><i className="fa fa-check"></i></button>
                 <button onClick={deleteHandler}><i className="fa fa-trash"></i></button>
             </ul>
         </div>
     )
 }
 export default TodoFinal