import React, { useState } from "react";
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
 * This component renders a single todo item. It displays the text of the todo
 * and provides functionality to toggle its completion status and to remove it.
 * When the text is clicked, it toggles the completion status of the todo.
 * When the remove button is clicked, it removes the todo.
 */
const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleEditModeTodo,
  toggleCompletedTodo,
  removeTodo,
  editTodo,
}) => {
  const [text, setText] = useState<string>(todo.text);

  const handleSubmit = (e: React.FormEvent) => {
    editTodo(todo.id, text);
  };

  if (todo.editMode) {
    return (
      <div className="todo-item-edit">
        <span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="todo-input"
            />
            <button className="complete-edit-button">Finish Edit</button>
          </form>
        </span>
      </div>
    );
  } else {
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
  }
};

export default TodoItem;
