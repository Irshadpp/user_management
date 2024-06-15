import  { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileEditor = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john@example.com');

  const handleUpdate = () => {
    // Handle update logic here
    console.log('Profile updated:', { firstName, lastName, email });
  };

  const handleGoBack = () => {
    history.push('/users');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 min-h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Edit Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">First Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center mt-6">
            <Link to='/account'>
          <button
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded shadow-lg focus:outline-none"
            onClick={handleGoBack}
          >
            Go Back
          </button>
            </Link>
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow-lg focus:outline-none"
            onClick={handleUpdate}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditor;
