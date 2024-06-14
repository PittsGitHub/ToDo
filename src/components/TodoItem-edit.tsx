import React, { useState } from "react";
import { ITodo } from "../interfaces/ITodo";

interface TodoEditItemProps {
  todo: ITodo;
  editTodo: (id: number, text: string) => void;
}

/**
 * TodoItemEdit component
 *
 * This component renders a single todo item in edit mode when edit mode is true.
 * It displays the text of the todo and provides functionality to edit the todo
 * once an edit is made and finish is pressed it togglesEditMode back to false
 */
const EditTodoProps: React.FC<TodoEditItemProps> = ({ todo, editTodo }) => {
  const [text, setText] = useState<string>(todo.text);

  const handleSubmit = (e: React.FormEvent) => {
    editTodo(todo.id, text);
  };

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
};

export default EditTodoProps;
