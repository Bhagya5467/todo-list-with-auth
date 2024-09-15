import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { MessageProvider } from './contexts/MessageContext';

const App = () => (
  <AuthProvider>
    <MessageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/todos" element={<TodoList />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </MessageProvider>
  </AuthProvider>
);

export default App;
