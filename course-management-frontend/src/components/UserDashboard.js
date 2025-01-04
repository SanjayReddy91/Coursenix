import React from 'react';
import './Dashboard.css'; // Shared CSS for both dashboards

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <h2 className="dashboard-title">User Dashboard</h2>
        <p className="dashboard-subtitle">Welcome, User! Here you can browse courses and manage your account.</p>
        <div className="dashboard-actions">
          <button className="dashboard-button">Browse Courses</button>
          <button className="dashboard-button">Manage Account</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
