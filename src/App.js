import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './components/AuthContext';
import Home from './pages/Home';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Register from './components/Register';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
