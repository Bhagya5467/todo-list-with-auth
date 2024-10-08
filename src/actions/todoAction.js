import { v4 as uuid } from 'uuid';

export const addTodo = ({ title, description }) => {
  const rawTodos = localStorage.getItem('todos');
  const newTodo = {
    id: uuid(),
    title,
    description,
    status: 'NOT_COMPLETED',
  };

  if (!rawTodos) {
    const todos = [newTodo];
    localStorage.setItem('todos', JSON.stringify(todos));
  } else {
    const todos = JSON.parse(rawTodos);

    todos.unshift(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  return newTodo;
};

export const getTodos = () => {
  const rawTodos = localStorage.getItem('todos');

  if (!rawTodos) {
    return [];
  }

  const todos = JSON.parse(rawTodos);

  return todos;
};

export const getTodo = (id) => {
  const rawTodos = localStorage.getItem('todos');

  if (!rawTodos) {
    return [];
  }

  const todos = JSON.parse(rawTodos);
  const filteredTodo = todos.find((todo) => todo.id === id);

  if (!filteredTodo) {
    throw new Error('Todo is not exists');
  }

  return filteredTodo;
};

export const changeTodoStatus = ({ id, status, setTodos }) => {
  const rawTodos = localStorage.getItem('todos');

  if (!rawTodos) {
    throw new Error('Todos are not exists');
  }

  const todos = JSON.parse(rawTodos);
  const filteredTodo = todos.find((todo) => todo.id === id);

  filteredTodo.status = status;
  setTodos(todos);

  localStorage.setItem('todos', JSON.stringify(todos));

  return filteredTodo;
};

export const updateTodo = ({ title, description, id }) => {
  const rawTodos = localStorage.getItem('todos');

  if (!rawTodos) {
    throw new Error('Todos are not exists');
  }

  const todos = JSON.parse(rawTodos);
  const filteredTodo = todos.find((todo) => todo.id === id);

  if (!filteredTodo) {
    throw new Error('Todo is not exists');
  }

  filteredTodo.title = title;
  filteredTodo.description = description;

  localStorage.setItem('todos', JSON.stringify(todos));

  return filteredTodo;
};

export const deleteTodo = ({ id, setTodos }) => {
  const rawTodos = localStorage.getItem('todos');

  if (!rawTodos) {
    throw new Error('Todos are not exists');
  }

  const todos = JSON.parse(rawTodos);
  const filteredTodos = todos.filter((todo) => todo.id !== id);

  localStorage.setItem('todos', JSON.stringify(filteredTodos));
  setTodos(filteredTodos);

  return filteredTodos;
};
