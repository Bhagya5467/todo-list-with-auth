import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Todo App
      </Typography>
    </Toolbar>
  </AppBar>
);
