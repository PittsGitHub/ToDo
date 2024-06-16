import { IManageTodoListRender } from "../interfaces/IManageTodoListRender";
import { ITodo } from "../interfaces/ITodo";
import { countCharactersWithoutSpaces } from "./HelperServices";

export const addTodo = (
  todos: ITodo[],
  valuesInput: IManageTodoListRender
): ITodo[] => {
  const newTodo: ITodo = {
    id: Date.now(),
    text: valuesInput.textFilterForLiquidTodoList,
    completed: false,
    editMode: false,
  };
  return [...todos, newTodo];
};

export const toggleEditMode = (todos: ITodo[], id: number): ITodo[] => {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, editMode: !todo.editMode } : todo
  );
};

export const toggleCompleteTodo = (todos: ITodo[], id: number): ITodo[] => {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
};

export const removeTodo = (todos: ITodo[], id: number): ITodo[] => {
  return todos.filter((todo) => todo.id !== id);
};

export const editTodo = (todos: ITodo[], id: number, text: string): ITodo[] => {
  return todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, text, editMode: !todo.editMode };
    }
    return todo;
  });
};

export const manageLiquidTodoListRendering = (
  todoListRendering: IManageTodoListRender,
  newText: string
): IManageTodoListRender => {
  todoListRendering = {
    solidTodoList: todoListRendering.solidTodoList,
    liquidTodoList: todoListRendering.solidTodoList,
    textFilterForLiquidTodoList: newText,
    renderLiquidTodoList: false,
  };

  if (countCharactersWithoutSpaces(newText) > 2) {
    todoListRendering.renderLiquidTodoList = true;
  }

  return todoListRendering;
};

export const createFilteredTodoList = (
  todos: ITodo[],
  textToFilter: string
): ITodo[] => {
  const lowerCaseFilter = textToFilter.toLowerCase();
  return todos.filter((todo) =>
    todo.text.toLowerCase().includes(lowerCaseFilter)
  );
};
