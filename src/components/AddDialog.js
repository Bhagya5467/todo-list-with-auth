import { useContext, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  TextField,
} from '@mui/material';
import { addTodo } from '../actions/todoAction';
import TodoContext from '../contexts/TodoContext';

const AddDialog = ({ open, setOpen }) => {
  const { setMessage } = useContext(TodoContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  const changeField = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'description':
        setDescription(value);
        break;

      default:
        throw new Error('Invalid field');
    }
  };

  const validTitle = () => {
    if (!title) {
      setTitleError(true);
      return false;
    }

    setTitleError(false);
    return true;
  };

  const validDescription = () => {
    if (!description) {
      setDescriptionError(true);
      return false;
    }

    setDescriptionError(false);
    return true;
  };

  const resetFields = () => {
    setTitle('');
    setDescription('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validTitle() && validDescription()) {
      addTodo({ title, description });
      setMessage('Todo is added successfully');
      setOpen(false);
      resetFields();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Add New Todo</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid2 container justifyContent="center">
            <Grid2 size={{ sm: 12, md: 12 }}>
              <TextField
                fullWidth
                type="text"
                label={
                  <span>
                    Title{' '}
                    <span style={{ color: '#f92214', fontWeight: 'bold' }}>
                      *
                    </span>
                  </span>
                }
                name="title"
                value={title}
                onChange={changeField}
                sx={{ marginBottom: 2 }}
                error={titleError}
                helperText={titleError && 'Title is required!'}
              />
            </Grid2>
            <Grid2 size={{ sm: 12, md: 12 }}>
              <TextField
                fullWidth
                type="text"
                label={
                  <span>
                    Description{' '}
                    <span style={{ color: '#f92214', fontWeight: 'bold' }}>
                      *
                    </span>
                  </span>
                }
                name="description"
                value={description}
                onChange={changeField}
                sx={{ marginBottom: 2 }}
                error={descriptionError}
                helperText={descriptionError && 'Description is required!'}
              />
            </Grid2>
          </Grid2>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginBottom: 1, marginRight: 2 }}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ marginBottom: 1, marginRight: 2 }}
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddDialog;
