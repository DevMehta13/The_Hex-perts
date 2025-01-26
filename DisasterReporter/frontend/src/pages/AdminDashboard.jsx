import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard. Here you can manage users and view reports.</p>
      <ul className="mt-4">
        <li>
          <a href="/admin/users" className="text-blue-600 hover:underline">Manage Users</a>
        </li>
        <li>
          <a href="/admin/reports" className="text-blue-600 hover:underline">View Reports</a>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard; 