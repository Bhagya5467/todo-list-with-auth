import {
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
  Button,
} from '@mui/material';

const TodoItem = ({ title, description, status, setId, id }) => {
  const editTodo = () => {
    setId(id);
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
              variant="outlined"
              color={status === 'COMPLETED' ? 'inherit' : 'success'}
              sx={{ marginBottom: 1 }}
            >
              {status === 'COMPLETED' ? 'Completed' : 'Complete'}
            </Button>
          </Grid2>
        </CardActions>
      </Card>
    </Grid2>
  );
};

export default TodoItem;
