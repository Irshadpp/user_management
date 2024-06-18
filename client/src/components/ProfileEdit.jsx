import  { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../utils/constants';
import axios from 'axios';

const ProfileEditor = () => {
  const navigate = useNavigate()
  const {user, token} = useSelector((state)=>state.user)
  const [fName, setfName] = useState(user.fName);
  const [lName, setlName] = useState(user.lName);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = async() => {
    try {
      const response = await axios.put(API_URL+'api/update_profile', fName, lName, email,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      });
      console.log('Profile updated:', { fName, lName, email });
    } catch (error) {
      console.log()
    }
  };

  const handleGoBack = () => {
    navigate('/account');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Edit Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">First Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
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
