import React from "react";
import { ITodo } from "../interfaces/ITodo";

interface TodoItemProps {
  todo: ITodo;
  toggleCompletedTodo: (id: number) => void;
  toggleEditModeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
}

/**
 * TodoItem component
 *
 * This component renders a single todo item when editMode is false. It displays the text of the todo
 * and provides functionality to toggle its completion status and to remove it.
 * When the remove button is clicked, it removes the todo.
 * When the edit button is clicked it sets the editMode flag to true
 */
const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleEditModeTodo,
  toggleCompletedTodo,
  removeTodo,
}) => {
  return (
    <div className="todo-item-default">
      <span
        className="todo-item-default"
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          wordWrap: "break-word",
        }} //
        onClick={() => toggleCompletedTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="edit-button"
        onClick={() => toggleEditModeTodo(todo.id)}
      >
        Edit
      </button>
      <button className="remove-button" onClick={() => removeTodo(todo.id)}>
        Del
      </button>
    </div>
  );
};

export default TodoItem;
