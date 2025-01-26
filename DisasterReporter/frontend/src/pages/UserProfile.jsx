import React from 'react';

const UserProfile = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <p>Welcome to your profile. Here you can view your information and reports.</p>
      <ul className="mt-4">
        <li>
          <a href="/user/reports" className="text-blue-600 hover:underline">View My Reports</a>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile; 