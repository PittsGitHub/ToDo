import { ITodo } from "../interfaces/ITodo";

export const addTodo = (todos: ITodo[], text: string): ITodo[] => {
  //Create a new todo, using the date time now as a number, the passed text and set completed to false
  const newTodo: ITodo = {
    id: Date.now(),
    text,
    completed: false,
    editMode: false,
  };
  // Return our collection of todos with the new todo added to the end
  return [...todos, newTodo];
};

export const toggleEditMode = (todos: ITodo[], id: number): ITodo[] => {
  return todos.map(
    // Toggle the edit mode status of the matching todo item
    (todo) => (todo.id === id ? { ...todo, editMode: !todo.editMode } : todo),
  );
};

export const toggleCompleteTodo = (todos: ITodo[], id: number): ITodo[] => {
  return todos.map(
    // Toggle the completed status of the matching todo item
    (todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo),
  );
};

export const removeTodo = (todos: ITodo[], id: number): ITodo[] => {
  // Return a new array that includes everything that doesn't match the current todo id
  return todos.filter((todo) => todo.id !== id);
};
export const editTodo = (todos: ITodo[], id: number, text: string): ITodo[] => {
  return todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, text, editMode: !todo.editMode }; // Return a new object with updated text
    }
    return todo; // Return the original todo if the id does not match
  });
};
