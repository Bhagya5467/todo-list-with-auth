import { AppBar, Grid2, IconButton, Typography } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { logout } from '../actions/userAction';

export const Header = () => {
  const localStorageAuthUser = localStorage.getItem('authUser');
  const authContext = useContext(AuthContext);
  const { setAuthUser } = authContext;

  const lououtUser = () => {
    logout();
    setAuthUser(undefined);
  };

  return (
    <AppBar position="static">
      <Grid2
        container
        justifyContent="space-between"
        columnSpacing={{ sm: 2, md: 2 }}
      >
        <Grid2 size={{ sm: 6, md: 6 }}>
          <Typography variant="h6" sx={{ margin: 2 }}>
            Todo App
          </Typography>
        </Grid2>
        {localStorageAuthUser && (
          <Grid2 size={{ sm: 6, md: 6 }} container justifyContent="flex-end">
            <IconButton
              sx={{
                color: '#fff',
                '&:hover': { backgroundColor: 'transparent' },
              }}
              size="small"
              onClick={lououtUser}
            >
              <Logout sx={{ margin: 2, cursor: 'pointer' }} />
            </IconButton>
          </Grid2>
        )}
      </Grid2>
    </AppBar>
  );
};
