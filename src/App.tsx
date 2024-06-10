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
 * It maintains an array of todo items and provides calls to add,
 * toggle, remove and edit todo items. It renders the TodoForm and TodoList
 * components, passing the necessary props to them.
 */
const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos(addTodo(todos, text)); //
  };

  const handleEditModeToggleTodo = (id: number) => {
    setTodos(toggleEditMode(todos, id));
  };

  const handleCompleteToggleTodo = (id: number) => {
    setTodos(toggleCompleteTodo(todos, id));
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(removeTodo(todos, id));
  };
  const handleEditTodo = (id: number, text: string) => {
    setTodos(editTodo(todos, id, text));
  };

  return (
    <div className="App">
      <h1 className="todo-list-header">Todos</h1>{" "}
      <TodoForm addTodo={handleAddTodo} />{" "}
      <TodoList
        todos={todos}
        toggleEditModeTodo={handleEditModeToggleTodo}
        toggleCompleteTodo={handleCompleteToggleTodo}
        removeTodo={handleRemoveTodo}
        editTodo={handleEditTodo}
      />
    </div>
  );
};

export default App;
