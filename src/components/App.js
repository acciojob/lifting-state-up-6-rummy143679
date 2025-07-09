
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Build a React App",
      completed: false,
    },
    {
      id: 3,
      title: "Deploy React App",
      completed: false,
    }
  ]);
  function handleComplete(id) {
    const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: true } : todo);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
