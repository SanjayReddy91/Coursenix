import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import './App.css'; // New CSS file for global styles

const App = () => {
  return (
    <Router>
      <header className="app-header">
        <div className="logo">
          <h1>CourseNix</h1>
        </div>
        <nav className="nav-links">
          <NavLink to="/" exact className="nav-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/signup/user" className="nav-link" activeClassName="active">
            User Signup
          </NavLink>
          <NavLink to="/signup/admin" className="nav-link" activeClassName="active">
            Admin Signup
          </NavLink>
          <NavLink to="/login/user" className="nav-link" activeClassName="active">
            User Login
          </NavLink>
          <NavLink to="/login/admin" className="nav-link" activeClassName="active">
            Admin Login
          </NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/signup/user" element={<Signup type="user" />} />
          <Route path="/signup/admin" element={<Signup type="admin" />} />
          <Route path="/login/user" element={<Login type="user" />} />
          <Route path="/login/admin" element={<Login type="admin" />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <p>© 2025 CourseNix. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
