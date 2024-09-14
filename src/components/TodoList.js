import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Checkbox,
  Grid2,
  TextField,
  Paper,
  Typography,
} from '@mui/material';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <ListItem
      sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      secondaryAction={
        <>
          <Checkbox
            checked={todo.completed}
            onChange={() => onToggle(todo.id)} 
            color="primary"
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </Button>
        </>
      }
    >
      <ListItemText primary={todo.title} secondary={todo.description} />
    </ListItem>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Get fruits and vegetables',
      completed: false,
    },
    {
      id: 2,
      title: 'Complete project',
      description: 'Finish the React project',
      completed: true,
    },
    {
      id: 3,
      title: 'Read book',
      description: 'Read Secret Seven book',
      completed: false,
    },
  ]);

  const [newTodo, setNewTodo] = useState({ title: '', description: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.title || !newTodo.description) {
      setError('Both title and description are required!');
      return;
    }

    const newTodoItem = {
      id: todos.length + 1, 
      title: newTodo.title,
      description: newTodo.description,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);

    setNewTodo({ title: '', description: '' });
    setError('');
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Grid2 container justifyContent="center" sx={{ marginTop: 5 }}>
      <Grid2 item xs={12} sm={8} md={6}>
        {/* Form to Add Todo */}
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Add New Todo
          </Typography>
          <form onSubmit={addTodo}>
            <Grid2 container spacing={2}>
              <Grid2 item xs={12}>
                <TextField
                  fullWidth
                  label="Todo Title"
                  name="title"
                  value={newTodo.title}
                  onChange={handleInputChange}
                  required
                />
              </Grid2>
              <Grid2 item xs={12}>
                <TextField
                  fullWidth
                  label="Todo Description"
                  name="description"
                  value={newTodo.description}
                  onChange={handleInputChange}
                  required
                />
              </Grid2>
              {error && (
                <Grid2 item xs={12}>
                  <Typography color="error" variant="body2">
                    {error}
                  </Typography>
                </Grid2>
              )}
              <Grid2 item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Add Todo
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </Paper>

        {/* List of Todos */}
        <List>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </List>
      </Grid2>
    </Grid2>
  );
};

export default TodoList;
