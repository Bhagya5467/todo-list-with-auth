import { createContext, useEffect, useState } from 'react';

const TodoContext = createContext({
  todos: [],
  setTodos: () => {},
  message: undefined,
  setMessage: () => {},
});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(undefined);

  const lsTodos = localStorage.getItem('todos');

  useEffect(() => {
    if (lsTodos) {
      setTodos(JSON.parse(lsTodos));
    }
  }, [lsTodos]);

  return (
    <TodoContext.Provider value={{ todos, setTodos, message, setMessage }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
