import React, { useState } from "react";
import { IManageTodoListRender } from "../interfaces/IManageTodoListRender";

interface TodoFormProps {
  currentSearchAddInput: IManageTodoListRender;
  updateSearchAddInput: (inputText: string) => void;
  addTodo: (searchAddInputText: IManageTodoListRender) => void;
}

/**
 * TodoForm component
 *
 * This component renders a form that allows users to add new tasks to the to-do list.
 * It maintains the input value in its state and updates it as the user types.
 * When the form is submitted, it calls the addTodo function passed via props
 * to add the new task and then resets the input field.
 */
const TodoForm: React.FC<TodoFormProps> = ({
  currentSearchAddInput,
  updateSearchAddInput,
  addTodo,
}) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && text !== undefined) {
      addTodo(currentSearchAddInput);
      setText("");
    }
  };

  return (
    <div className="todo-form">
      <span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              updateSearchAddInput(e.target.value);
            }}
            placeholder="what is there todo?"
            className="todo-input"
          />
          <button className="todo-form-add-button">Add</button>
        </form>
      </span>
    </div>
  );
};

export default TodoForm;
