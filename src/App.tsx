import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {
  addTodo,
  toggleEditMode,
  toggleCompleteTodo,
  removeTodo,
  editTodo,
} from "./services/TodoServices";
import { ITodo } from "./interfaces/ITodo";
import "./styles/collection.style.css";

/**
 * App component
 *
 * This is the main component that manages the state of the to-do list.
 * It maintains an array of todo items and provides functions to add,
 * toggle, and remove todo items. It renders the TodoForm and TodoList
 * components, passing the necessary props to them.
 */
const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]); // Initialize the state to hold an array of Todo items, initially an empty array

  const handleAddTodo = (text: string) => {
    setTodos(addTodo(todos, text)); // Update the state with the new list of todo items after adding a new todo
  };

  const handleEditModeToggleTodo = (id: number) => {
    setTodos(toggleEditMode(todos, id)); // Update the state with the new list of todo items after editing a todo
  };

  const handleCompleteToggleTodo = (id: number) => {
    setTodos(toggleCompleteTodo(todos, id)); // Update the state with the new list of todo items after setting a todo to complete or not completed
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(removeTodo(todos, id)); // Update the state with the new list of todo items after removing a todo
  };
  const handleEditTodo = (id: number, text: string) => {
    setTodos(editTodo(todos, id, text)); // Update the state with the new list of todo items after removing a todo
  };

  return (
    <div className="App">
      {/* Apply CSS class for styling */}
      <h1 className="todo-list-header">Todos</h1>{" "}
      {/* Apply CSS class for styling */}
      <TodoForm addTodo={handleAddTodo} />{" "}
      {/* Render the form for adding new todo items */}
      <TodoList
        todos={todos}
        toggleEditModeTodo={handleEditModeToggleTodo}
        toggleCompleteTodo={handleCompleteToggleTodo}
        removeTodo={handleRemoveTodo}
        editTodo={handleEditTodo}
      />
      {/* Render the list of todo items */}
    </div>
  );
};

export default App;
