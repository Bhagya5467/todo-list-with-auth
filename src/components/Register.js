import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid2,
  Box,
  Typography,
  Paper,
  Alert,
} from '@mui/material';
import { registerUser } from '../actions/userAction';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(undefined);

  const changeField = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'confirmPassword':
        setConfirmPassword(value);
        break;

      default:
        throw new Error('Invalid field');
    }
  };

  const validName = () => {
    if (!name) {
      setNameError(true);
      return false;
    }

    setNameError(false);
    return true;
  };

  const validEmail = () => {
    if (!email) {
      setEmailError(true);
      return false;
    }

    setEmailError(false);
    return true;
  };

  const validPassword = () => {
    if (!password) {
      setPasswordError(true);
      return false;
    }

    if (password !== confirmPassword) {
      setPasswordError(true);
      return false;
    }

    setPasswordError(false);
    return true;
  };

  const resetFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validName() && validEmail() && validPassword()) {
      registerUser({ name, email, password });
      setSuccessMessage('User is successfully added!');
      resetFields();
    }
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 5 }}>
      <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
        <form onSubmit={handleSubmit}>
          <Grid2
            container
            justifyContent="center"
            columnSpacing={{ sm: 2, md: 2 }}
          >
            {successMessage && (
              <Grid2 size={{ sm: 12, md: 12 }}>
                <Alert
                  variant="standard"
                  severity="success"
                  sx={{ marginBottom: 2 }}
                >
                  {successMessage}
                </Alert>
              </Grid2>
            )}
            <Grid2 size={{ sm: 12, md: 12 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Register
              </Typography>
            </Grid2>
            <Grid2 size={{ sm: 12, md: 3 }}>
              <TextField
                fullWidth
                type="text"
                label={
                  <span>
                    Name{' '}
                    <span style={{ color: '#f92214', fontWeight: 'bold' }}>
                      *
                    </span>
                  </span>
                }
                name="name"
                value={name}
                onChange={changeField}
                sx={{ marginBottom: 2 }}
                error={nameError}
                helperText={nameError && 'Name is not valid!'}
              />
            </Grid2>
            <Grid2 size={{ sm: 12, md: 3 }}>
              <TextField
                fullWidth
                type="email"
                label={
                  <span>
                    Email{' '}
                    <span style={{ color: '#f92214', fontWeight: 'bold' }}>
                      *
                    </span>
                  </span>
                }
                name="email"
                value={email}
                onChange={changeField}
                sx={{ marginBottom: 2 }}
                error={emailError}
                helperText={emailError && 'Email is not valid!'}
              />
            </Grid2>
            <Grid2 size={{ sm: 12, md: 3 }}>
              <TextField
                fullWidth
                type="password"
                label={
                  <span>
                    Password{' '}
                    <span style={{ color: '#f92214', fontWeight: 'bold' }}>
                      *
                    </span>
                  </span>
                }
                name="password"
                value={password}
                onChange={changeField}
                sx={{ marginBottom: 2 }}
                error={passwordError}
                helperText={
                  passwordError &&
                  'Password is not valid or not match with confirm password'
                }
              />
            </Grid2>
            <Grid2 size={{ sm: 12, md: 3 }}>
              <TextField
                fullWidth
                type="password"
                label={
                  <span>
                    Confirm password{' '}
                    <span style={{ color: '#f92214', fontWeight: 'bold' }}>
                      *
                    </span>
                  </span>
                }
                name="confirmPassword"
                value={confirmPassword}
                onChange={changeField}
                sx={{ marginBottom: 2 }}
                error={passwordError}
                helperText={
                  passwordError &&
                  'Password is not valid or not match with confirm password'
                }
              />
            </Grid2>
            <Grid2 size={{ sm: 12, md: 3 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{ marginBottom: 2 }}
              >
                Register
              </Button>
            </Grid2>
            <Grid2 size={{ sm: 12, md: 12 }}>
              <Typography variant="body2" align="center" gutterBottom>
                Already have an account? <a href="/login">Login here</a>
              </Typography>
            </Grid2>
          </Grid2>
        </form>
      </Paper>
    </Box>
  );
};

export default RegisterForm;
