import React from "react";
import TodoItem from "./TodoItem";
import { ITodo } from "../interfaces/ITodo";

interface TodoListProps {
  todos: ITodo[];
  toggleCompleteTodo: (id: number) => void;
  toggleEditModeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
}

/**
 * TodoList component
 *
 * This component renders a list of todo items. It takes an array of todo items
 * and functions to toggle and remove todos as props. For each todo item, it
 * renders a TodoItem component, passing the necessary props to it.
 */
const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleEditModeTodo,
  toggleCompleteTodo,
  removeTodo,
  editTodo,
}) => {
  return (
    <div className="todo-list">
      {/* Apply CSS class for styling */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // Unique key for each todo item
          todo={todo} // The todo item object
          toggleEditModeTodo={toggleEditModeTodo} // Function to edit the todo item
          toggleCompletedTodo={toggleCompleteTodo} // Function to toggle the todo item
          removeTodo={removeTodo} // Function to remove the todo item
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
