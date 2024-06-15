import { ISearchAddInput } from "../interfaces/ISearchAddInput";
import { ITodo } from "../interfaces/ITodo";
import { countCharactersWithoutSpaces } from "./HelperServices";

export const addTodo = (
  todos: ITodo[],
  valuesInput: ISearchAddInput
): ITodo[] => {
  const newTodo: ITodo = {
    id: Date.now(),
    text: valuesInput.inputText,
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

export const updateSearchAddInput = (
  currentSearchAddInput: ISearchAddInput,
  newText: string
): ISearchAddInput => {
  currentSearchAddInput = { inputText: newText, filterTodos: false };

  if (countCharactersWithoutSpaces(newText) > 2) {
    currentSearchAddInput.filterTodos = true;
  }

  return currentSearchAddInput;
};

export const filterTodoList = (
  todos: ITodo[],
  textToFilter: string
): ITodo[] => {
  return todos.filter((todo) => textToFilter.includes(todo.text));
};
