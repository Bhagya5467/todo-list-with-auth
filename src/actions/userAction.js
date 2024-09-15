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
};
