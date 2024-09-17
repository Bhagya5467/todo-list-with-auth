import { useContext, useState } from 'react';
import {
  Alert,
  Button,
  TextField,
  Grid2,
  Box,
  Typography,
  Paper,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../actions/userAction';
import MessageContext from '../contexts/MessageContext';
import AuthContext from '../contexts/AuthContext';

const Login = () => {
  const messageContext = useContext(MessageContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { message } = messageContext;
  const { setAuthUser } = authContext;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showError, setShowError] = useState(false);

  const changeField = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error('Invalid field');
    }
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

    setPasswordError(false);
    return true;
  };

  const resetFields = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validEmail() && validPassword()) {
      const authUser = login({ email, password });

      if (authUser) {
        setAuthUser(authUser);
        resetFields();

        navigate('/');
      } else {
        setShowError(true);
      }
    }
  };

  return (
    <Box sx={{ marginTop: 5 }}>
      <Grid2 container justifyContent="center" columnSpacing={{ sm: 2, md: 2 }}>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
            <form onSubmit={handleSubmit}>
              <Grid2
                container
                justifyContent="center"
                columnSpacing={{ sm: 2, md: 2 }}
              >
                {showError && (
                  <Grid2 size={{ sm: 12, md: 12 }}>
                    <Alert
                      severity="error"
                      variant="standard"
                      sx={{ marginBottom: 2 }}
                    >
                      Login is failed
                    </Alert>
                  </Grid2>
                )}
                {message && (
                  <Grid2 size={{ sm: 12, md: 12 }}>
                    <Alert
                      severity="success"
                      variant="standard"
                      sx={{ marginBottom: 2 }}
                    >
                      {message}
                    </Alert>
                  </Grid2>
                )}
                <Grid2 size={{ sm: 12, md: 12 }}>
                  <Typography variant="h4" align="center" gutterBottom>
                    Login
                  </Typography>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 12 }}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={changeField}
                    sx={{ marginBottom: 2 }}
                    error={emailError}
                    helperText={emailError && 'Email is not valid!'}
                  />
                </Grid2>
                <Grid2 size={{ sm: 12, md: 12 }}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={changeField}
                    sx={{ marginBottom: 2 }}
                    error={passwordError}
                    helperText={passwordError && 'Password is not valid'}
                  />
                </Grid2>
                <Grid2 size={{ sm: 12, md: 12 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ marginBottom: 2 }}
                  >
                    Login
                  </Button>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 12 }}>
                  <Typography variant="body2" align="center" gutterBottom>
                    Are you a new member?{' '}
                    <Link to="/register">Register here</Link>
                  </Typography>
                </Grid2>
              </Grid2>
            </form>
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Login;
