import './App.css';
import data from "./data.json";
import Form from "./Form";
import Display from './Display';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import ClearComplete from './ClearComplete';

function App() {
  const [todos, setTodos] = useState(data);

  function addTodo(newTask) {
    setTodos([...todos, {
      id: uuidv4,
      task: newTask,
      complete: false
    }])
  }

  function clear() {
    setTodos(
      todos.filter(todo => !todo.complete)
    )
  }

  const toggleComplete = (id) => {
    const newTodo = todos.map(todo =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    )
    setTodos(newTodo);
  }


  return (
    <div className='App'>
      <Form addTodo={addTodo} />
      <Display todos={todos} toggleComplete={toggleComplete} />
      <ClearComplete clear={clear} />
    </div>
  );
}

export default App;
