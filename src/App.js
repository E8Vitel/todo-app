import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]); //Actualiza la lista de tareas
  }
  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
