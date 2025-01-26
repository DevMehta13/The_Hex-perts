import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();
  const [reportedDisasters, setReportedDisasters] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/user/${user.id}`); // Adjust the endpoint as necessary
        const data = await response.json();

        if (response.ok) {
          setReportedDisasters(data.reportedDisasters); // Assuming the API returns reported disasters
        } else {
          setError(data.error || 'Failed to fetch user data.');
        }
      } catch (error) {
        setError('An error occurred while fetching user data.');
      }
    };

    fetchUserData();
  }, [user.id]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <img src={user.profilePic || 'default-profile-pic.png'} alt="Profile" className="w-32 h-32 rounded-full" />
      </div>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <h2 className="text-xl font-semibold mt-4">Reported Disasters</h2>
      <ul className="mt-2">
        {reportedDisasters.length > 0 ? (
          reportedDisasters.map((disaster, index) => (
            <li key={index} className="text-blue-600 hover:underline">{disaster.title}</li> // Assuming disaster has a title
          ))
        ) : (
          <p>No reported disasters found.</p>
        )}
      </ul>
    </div>
  );
};

export default UserProfile;
