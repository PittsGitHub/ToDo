import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import * as TodoServices from "./services/TodoServices";
import { ITodo } from "./interfaces/ITodo";
import { IManageTodoListRender } from "./interfaces/IManageTodoListRender";
import "./styles/collection.style.css";

/**
 * App component
 *
 * This is the main component that manages the state of the to-do list.
 * It maintains separate states for the solid and liquid lists of todo items.
 * The solid list (`solidTodoList`) is updated when todos are added, edited, completed, or removed.
 * The liquid list (`liquidTodoList`) is dynamically rendered based on the filter text and is displayed when `renderLiquidTodoList` is true.
 *
 * The component provides functions to handle adding, editing, completing, removing, and toggling the edit mode of todos.
 * It uses the `useEffect` hook to update the `todos` state based on the `renderLiquidTodoList` flag.
 *
 * It renders the `TodoForm` and `TodoList` components, passing the necessary props to them.
 */
const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todoListRendering, setTodoListRendering] =
    useState<IManageTodoListRender>({
      solidTodoList: todos,
      liquidTodoList: todos,
      renderLiquidTodoList: false,
      textFilterForLiquidTodoList: "",
    });

  const updateSolidList = (updatedList: ITodo[]) => {
    setTodos(updatedList);
    setTodoListRendering((prevState) => ({
      ...prevState,
      renderLiquidTodoList: false,
      solidTodoList: updatedList,
    }));
  };

  const handleAddTodo = (searchAddInput: IManageTodoListRender) => {
    const updatedList = TodoServices.addTodo(
      todoListRendering.solidTodoList,
      searchAddInput
    );
    updateSolidList(updatedList);
  };

  const handleEditModeToggleTodo = (id: number) => {
    const updatedList = TodoServices.toggleEditMode(
      todoListRendering.solidTodoList,
      id
    );
    updateSolidList(updatedList);
  };

  const handleCompleteToggleTodo = (id: number) => {
    const updatedList = TodoServices.toggleCompleteTodo(
      todoListRendering.solidTodoList,
      id
    );
    updateSolidList(updatedList);
  };

  const handleRemoveTodo = (id: number) => {
    const updatedList = TodoServices.removeTodo(
      todoListRendering.solidTodoList,
      id
    );
    updateSolidList(updatedList);
  };

  const handleEditTodo = (id: number, text: string) => {
    const updatedList = TodoServices.editTodo(
      todoListRendering.solidTodoList,
      id,
      text
    );
    updateSolidList(updatedList);
  };

  const handleLiquidTodoListRendering = (text: string) => {
    const updatedRendering = TodoServices.manageLiquidTodoListRendering(
      todoListRendering,
      text
    );
    setTodoListRendering(updatedRendering);
  };

  useEffect(() => {
    if (todoListRendering.renderLiquidTodoList) {
      const filteredList = TodoServices.createFilteredTodoList(
        todoListRendering.solidTodoList,
        todoListRendering.textFilterForLiquidTodoList
      );
      setTodos(filteredList);
    } else {
      setTodos(todoListRendering.solidTodoList);
    }
  }, [todoListRendering]);

  return (
    <div className="App">
      <h1 className="todo-list-header">Todos</h1>
      <TodoForm
        currentSearchAddInput={todoListRendering}
        updateSearchAddInput={handleLiquidTodoListRendering}
        addTodo={handleAddTodo}
      />
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
