import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
