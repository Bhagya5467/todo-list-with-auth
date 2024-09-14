import React, { useState } from 'react';
import { Button, Link, TextField, Grid2, AppBar, Toolbar, snackbarOpen, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); 

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    console.log('Registering:', { username, email, password });

    navigate('/login');

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Your ToDo App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid2 container justifyContent="center" sx={{ marginTop: 5 }}>
        <Grid2 item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Register
            </Typography>
            <form onSubmit={handleRegister}>
              <Grid2 container spacing={2}>
                <Grid2 item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Grid2>
                <Grid2 item xs={12}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Grid2>

                {/* Show error if passwords don't match */}
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
                    Register
                  </Button>
                </Grid2>
              </Grid2>
              <Grid2 item xs={12}>
                <Box textAlign="center">
                  <Typography variant="body2">
                    Already have an account? <a href="/login">Login here</a>
                  </Typography>
                </Box>
              </Grid2>
            </form>
          </Paper>
        </Grid2>
      </Grid2>
    </>
  );
};

export default RegisterForm;
