import { v4 as uuid } from 'uuid';

export const registerUser = ({ name, email, password }) => {
  const rawUsers = localStorage.getItem('users');
  const newUser = {
    id: uuid(),
    name,
    email,
    password,
  };

  if (!rawUsers) {
    const users = [newUser];
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    const users = JSON.parse(rawUsers);

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  }

  return newUser;
};

export const login = ({ email, password }) => {
  const rawUsers = localStorage.getItem('users');

  if (!rawUsers) {
    return undefined;
  }

  const users = JSON.parse(rawUsers);
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return undefined;
  }

  localStorage.setItem('authUser', JSON.stringify(user));

  return user;
};

export const logout = () => {
  localStorage.removeItem('authUser');
};
