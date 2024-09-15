import { useContext, useEffect, useState } from 'react';
import { Alert, Box, Button, Grid2, Paper, Typography } from '@mui/material';
import AddDialog from '../components/AddDialog';
import TodoContext from '../contexts/TodoContext';
import TodoItem from '../components/TodoItem';

const Home = () => {
  const { message, setMessage, todos } = useContext(TodoContext);

  const [openAddDialog, setOpenAddDialog] = useState(false);

  const closeAlert = () => {
    setMessage(undefined);
  };

  const renderTodoList = () => {
    if (!todos) {
      return null;
    }

    return todos.map((todo) => {
      const { title, description, status, id } = todo;

      return (
        <TodoItem
          title={title}
          description={description}
          status={status}
          id={id}
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
    </>
  );
};

export default Home;
