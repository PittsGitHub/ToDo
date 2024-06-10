import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string) => void;
}

/**
 * TodoForm component
 *
 * This component renders a form that allows users to add new tasks to the to-do list.
 * It maintains the input value in its state and updates it as the user types.
 * When the form is submitted, it calls the addTodo function passed via props
 * to add the new task and then resets the input field.
 */
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState<string>(""); // Initialize the state to an empty string and hold the current input value

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Check if the input is not empty
    if (text.trim()) {
      addTodo(text); // Call the addTodo function passed via props with the current input value
      setText(""); // Reset the input field
    }
  };

  return (
    <div className="todo-form">
      <span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text} // Bind the input field value to the text state
            onChange={(e) => setText(e.target.value)} // Update state with the input value
            placeholder="new todo..." // Placeholder text for the input field
            className="todo-input" // Apply CSS class for styling
          />
          <button className="todo-form-add-button">Add</button>
        </form>
      </span>
    </div>
  );
};

export default TodoForm;
