import React, { useEffect, useState } from "react";

function TodoFunc() {
  console.log("Constructor: setting up initial state and binding");
  const [currTodo, setCurrTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setCurrTodo(e.target.value);
  };

  const handleAddToDo = () => {
    setTodos([...todos, currTodo]);
    setCurrTodo("");
  };

  useEffect(() => {
    console.log("Component Did Mount: Fetching initial to-do items");
    setTimeout(() => {
      setTodos(["Learn React", "Read a Book"]);
    }, 1000);

    return () => {
        console.log('Component Will Unmount: Cleaning up resources.');
    }
  }, []);

  useEffect(() => {
    console.log("Component Did Update: Checking if new to-do was added");
    console.log("Updated To-dos: ", todos);
  }, [todos]);
  
  console.log("Render: Rendering the to-do list");
  return (
    <div>
      <h1>My To-Do List</h1>
      <input
        type="text"
        placeholder="Enter your tasks..."
        value={currTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddToDo}>Add To-Do</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoFunc;
