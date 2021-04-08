import './App.css';
import React, {useState,useEffect} from 'react'
import Form from  './components/form'
import TodoList from './components/TodoList';
function App() {
  const[inputText,setText] = useState("");
  const[todos,setTodos] = useState([]);
  const[status,setStatus] = useState("");
  const[filteredTodos,setFilteredTodos] = useState([]);
  useEffect(()=>{
    getLocal();
  },[]);
   useEffect(()=>{
     saveLocal();
     switch(status){
      case 'Completed' :
        setFilteredTodos(todos.filter(todo =>todo.completed===true));
        break;
        case 'Not' :
          setFilteredTodos(todos.filter(todo=>todo.completed===false));
          break;
          default:
            setFilteredTodos(todos);
            break;
    }
   },[todos,status]);
   const saveLocal = ()=>{
     localStorage.setItem('todo',JSON.stringify(todos));
   }
   const getLocal = ()=>{
     if(localStorage.getItem('todo')===null){
       localStorage.setItem('todo',JSON.stringify([]));
     }
     else{
       setTodos(JSON.parse(localStorage.getItem('todo',JSON.stringify(todos))));
     }
   }
  return (
    <div>
      <center>Bhavani Prasad Form</center>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setText= {setText} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
