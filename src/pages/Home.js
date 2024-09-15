import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Grid2,
  Card,
  CardContent,
  Snackbar,
  Alert,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  // const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  // const [snackbarMessage, setSnackbarMessage] = React.useState(
  //   'Welcome to the Todo App!'
  // );

  // const handleSnackbarClose = () => {
  //   setSnackbarOpen(false);
  // };

  return (
    <div>Home</div>
    // <>
    //   {/* AppBar for Navigation */}
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography variant="h6" sx={{ flexGrow: 1 }}>
    //         Todo App
    //       </Typography>
    //       <Button component={Link} to="/login" color="inherit">
    //         Login
    //       </Button>
    //       <Button component={Link} to="/register" color="inherit">
    //         Register
    //       </Button>
    //     </Toolbar>
    //   </AppBar>

    //   {/* Hero Section */}
    //   <Box
    //     sx={{
    //       backgroundColor: '#f5f5f5',
    //       py: 8,
    //       textAlign: 'center',
    //     }}
    //   >
    //     <Container maxWidth="md">
    //       <Typography variant="h2" gutterBottom>
    //         Welcome to Your Todo App
    //       </Typography>
    //       <Button
    //         component={Link}
    //         to="/todos"
    //         variant="contained"
    //         color="primary"
    //         size="large"
    //         onClick={() => setSnackbarOpen(true)}
    //       >
    //         Get Started
    //       </Button>
    //     </Container>
    //   </Box>

    //   {/* Feature Section with Cards */}
    //   <Container maxWidth="lg" sx={{ py: 8 }}>
    //     <Grid2 container spacing={4}>
    //       <Grid2 item xs={12} sm={6} md={4}>
    //         <Card
    //           sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    //         >
    //           <CardContent>
    //             <Typography gutterBottom variant="h5">
    //               Manage Todos
    //             </Typography>
    //             <Typography>
    //               Easily add, edit, and delete your tasks. 
    //             </Typography>
    //           </CardContent>
    //         </Card>
    //       </Grid2>
    //     </Grid2>
    //   </Container>

    //   {/* Footer */}
    //   <Box
    //     sx={{
    //       py: 4,
    //       backgroundColor: '#1976d2',
    //       color: 'white',
    //       textAlign: 'center',
    //     }}
    //   >
    //     <Container maxWidth="md">
    //       <Typography variant="body1">
    //         &copy; 2024 Todo App. All Rights Reserved.
    //       </Typography>
    //     </Container>
    //   </Box>

    //   {/* Snackbar for feedback */}
    //   <Snackbar
    //     open={snackbarOpen}
    //     autoHideDuration={3000}
    //     onClose={handleSnackbarClose}
    //   >
    //     <Alert
    //       onClose={handleSnackbarClose}
    //       severity="success"
    //       sx={{ width: '100%' }}
    //     >
    //       {snackbarMessage}
    //     </Alert>
    //   </Snackbar>
    // </>
  );
};

export default Home;
