import React from 'react';

const AuthorityDashboard = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Authority Dashboard</h1>
      <p>Welcome to the Authority Dashboard. Here you can view and manage disaster reports.</p>
      <ul className="mt-4">
        <li>
          <a href="/authority/reports" className="text-blue-600 hover:underline">View Disaster Reports</a>
        </li>
      </ul>
    </div>
  );
};

export default AuthorityDashboard; 