import React from 'react';
import TodoFinal from './TodoFinal'
 const TodoList=({todos,setTodos,filteredTodos})=>{
     return(
         <div>
             {filteredTodos.map(todo=>
                <TodoFinal todos={todos} setTodos = {setTodos} name={todo.name} key={todo.id} todo={todo} completed={todo.completed}/>
                )}
         </div>
     )
 }
 export default TodoList;