import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import Form from './component/Form'
import TodosList from './component/TodosList';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const initial = JSON.parse(localStorage.getItem("todos"))||[];
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState(initial);
  const [editTodo,setEditTodo] = useState(null);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  )
}

export default App