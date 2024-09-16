import { useContext, useEffect, useState } from 'react';
import { Alert, Box, Button, Grid2, Paper, Typography } from '@mui/material';
import AddDialog from '../components/AddDialog';
import TodoContext from '../contexts/TodoContext';
import TodoItem from '../components/TodoItem';
import EditDialog from '../components/EditDialog';

const Home = () => {
  const { message, setMessage, todos: contextTodos } = useContext(TodoContext);

  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(undefined);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(contextTodos);
  }, [contextTodos]);

  useEffect(() => {
    if (selectedId) {
      setOpenEditDialog(true);
    }
  }, [selectedId]);

  const closeAlert = () => {
    setMessage(undefined);
  };

  const renderTodoList = () => {
    if (!todos) {
      return null;
    }

    return todos.map((todo, index) => {
      const { title, description, status, id } = todo;

      return (
        <TodoItem
          key={index}
          title={title}
          description={description}
          status={status}
          id={id}
          setId={setSelectedId}
        />
      );
    });
  };

  return (
    <>
      <Box sx={{ marginTop: 5 }}>
        <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
          <Grid2
            container
            justifyContent="center"
            columnSpacing={{ sm: 2, md: 2 }}
          >
            {message && (
              <Grid2 size={{ sm: 12, md: 12 }}>
                <Alert
                  severity="success"
                  variant="standard"
                  onClose={closeAlert}
                  sx={{ marginBottom: 2 }}
                >
                  {message}
                </Alert>
              </Grid2>
            )}
            <Grid2 size={{ sm: 12, md: 12 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Todo List
              </Typography>
            </Grid2>
            <Grid2
              size={{ sm: 12, md: 12 }}
              container
              justifyContent="flex-end"
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ marginBottom: 2 }}
                onClick={() => setOpenAddDialog(true)}
              >
                Add Todo
              </Button>
            </Grid2>
            <Grid2 size={{ sm: 12, md: 12 }} container justifyContent="center">
              {renderTodoList()}
            </Grid2>
          </Grid2>
        </Paper>
      </Box>
      <AddDialog open={openAddDialog} setOpen={setOpenAddDialog} />
      <EditDialog
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        todoId={selectedId}
        setTodoId={setSelectedId}
      />
    </>
  );
};

export default Home;
