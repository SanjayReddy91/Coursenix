import React from 'react';
import './Dashboard.css'; // Shared CSS for both dashboards

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <h2 className="dashboard-title">Admin Dashboard</h2>
        <p className="dashboard-subtitle">Welcome, Admin! Here you can manage courses and users.</p>
        <div className="dashboard-actions">
          <button className="dashboard-button">Manage Courses</button>
          <button className="dashboard-button">Manage Users</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
