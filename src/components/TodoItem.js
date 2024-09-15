import {
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
  Button,
} from '@mui/material';

const TodoItem = ({ title, description, status }) => {
  return (
    <Grid2 size={{ sm: 12, md: 12 }}>
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: 'text.secondary', fontSize: 14 }}
          >
            {title}
          </Typography>
          <Typography variant="h5" component="div">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid2
            container
            justifyContent="space-between"
            size={{ sm: 12, md: 12 }}
            columnSpacing={2}
          >
            <Grid2 size={{ sm: 4, md: 4 }}>
              <Button
                fullWidth
                variant="contained"
                color="error"
                sx={{ marginBottom: 1 }}
              >
                Delete
              </Button>
            </Grid2>
            <Grid2 size={{ sm: 4, md: 4 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ marginBottom: 1 }}
              >
                Edit
              </Button>
            </Grid2>
            <Grid2 size={{ sm: 4, md: 4 }}>
              <Button
                fullWidth
                variant="contained"
                color={status === 'COMPLETED' ? 'inherit' : 'success'}
                sx={{ marginBottom: 1 }}
              >
                {status === 'COMPLETED' ? 'Completed' : 'Complete'}
              </Button>
            </Grid2>
          </Grid2>
        </CardActions>
      </Card>
    </Grid2>
  );
};

export default TodoItem;
