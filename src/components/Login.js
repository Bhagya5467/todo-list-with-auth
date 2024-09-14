import React, { useState } from 'react';
import { Button, TextField, Grid2, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault(); 

    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }

    console.log('Logging in with:', { email, password });

    navigate('/todos'); 
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <Grid2 container justifyContent="center" sx={{ marginTop: 5 }}>
      <Grid2 item xs={12} sm={8} md={6}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <Grid2 container spacing={2}>
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

              {/* Show error message if login is invalid */}
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
                  Login
                </Button>
              </Grid2>
            </Grid2>
            <Grid2 item xs={12}>
              <Box textAlign="center" sx={{ marginTop: 2 }}>
                <Typography variant="body2">
                  Don't have an account? <a href="/register">Register here</a>
                </Typography>
              </Box>
            </Grid2>
          </form>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default LoginForm;
