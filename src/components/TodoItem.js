import { useContext } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
  Button,
} from '@mui/material';
import {
  changeTodoStatus,
  deleteTodo as deleteFromStorage,
} from '../actions/todoAction';
import TodoContext from '../contexts/TodoContext';

const TodoItem = ({ title, description, status, setId, id }) => {
  const { setTodos } = useContext(TodoContext);

  const editTodo = () => {
    setId(id);
  };

  const changeStatus = () => {
    let updatedStatus = 'COMPLETED';

    if (status === 'COMPLETED') {
      updatedStatus = 'NOT_COMPLETED';
    }

    changeTodoStatus({ id, status: updatedStatus, setTodos });
  };

  const deleteTodo = () => {
    deleteFromStorage({ id, setTodos });
  };

  return (
    <Grid2 size={{ sm: 12, md: 12 }}>
      <Card sx={{ marginBottom: 1 }}>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: 'text.secondary' }}
          >
            {title}
          </Typography>
          <Typography component="div">{description}</Typography>
        </CardContent>
        <CardActions>
          <Grid2 size={{ sm: 12, md: 12 }} container justifyContent="flex-end">
            <Button
              variant="outlined"
              color="error"
              sx={{ marginBottom: 1, marginRight: 1 }}
              onClick={deleteTodo}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginBottom: 1, marginRight: 1 }}
              onClick={editTodo}
            >
              Edit
            </Button>
            <Button
              variant={status === 'COMPLETED' ? 'contained' : 'outlined'}
              color={status === 'COMPLETED' ? 'inherit' : 'success'}
              sx={{ marginBottom: 1 }}
              onClick={changeStatus}
            >
              {status === 'COMPLETED' ? 'Completed' : 'Not Complete'}
            </Button>
          </Grid2>
        </CardActions>
      </Card>
    </Grid2>
  );
};

export default TodoItem;
