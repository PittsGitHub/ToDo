import React from "react";
import TodoItemEdit from "./TodoItem-edit";
import TodoItemDefault from "./TodoItem-default";
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
      {todos.map((todo) =>
        todo.editMode ? (
          <TodoItemEdit
            key={todo.id}
            todo={todo}
            toggleEditModeTodo={toggleEditModeTodo}
            toggleCompletedTodo={toggleCompleteTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ) : (
          <TodoItemDefault
            key={todo.id}
            todo={todo}
            toggleEditModeTodo={toggleEditModeTodo}
            toggleCompletedTodo={toggleCompleteTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ),
      )}
    </div>
  );
};

export default TodoList;
