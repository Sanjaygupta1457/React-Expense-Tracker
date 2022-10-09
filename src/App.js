import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./Components/Forms/SignUp";
import Login from "./Components/Forms/Login";
import Dashboard from "./Components/Layout/Dashboard";
import ForgotPassword from "./Components/Forms/ForgotPassword";
import ProtectedRoute from "./Components/Layout/ProtectedRoute";
import { UserAuthContextProvider } from "./Context/UserAuthContext";

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={ <ProtectedRoute><Dashboard/></ProtectedRoute>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
    </UserAuthContextProvider>
  </Router>
  );
}

export default App;
