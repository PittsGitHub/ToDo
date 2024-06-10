import { ITodo } from "../interfaces/ITodo";

export const addTodo = (todos: ITodo[], text: string): ITodo[] => {
  const newTodo: ITodo = {
    id: Date.now(),
    text,
    completed: false,
    editMode: false,
  };
  return [...todos, newTodo];
};

export const toggleEditMode = (todos: ITodo[], id: number): ITodo[] => {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, editMode: !todo.editMode } : todo,
  );
};

export const toggleCompleteTodo = (todos: ITodo[], id: number): ITodo[] => {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
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
