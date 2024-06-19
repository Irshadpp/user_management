import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const EditUser = () => {
  const location = useLocation();
  console.log(location);
  const {user} = location.state;
  const [firstName, setFirstName] = useState(user.fName);
  const [lastName, setLastName] = useState(user.lName);
  const [email, setEmail] = useState(user.email);

  console.log(user.fName);

  const handleUpdate = () => {
    console.log('User details updated:', { firstName, lastName, email });
  };

  const handleGoBack = () => {
    history.push('/users');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Edit User</h2>
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
          <Link to="/admin/users">
          <button
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded shadow-lg focus:outline-none"
            onClick={handleGoBack}
          >
            Go Back
          </button>
          </Link>
          <button
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow-lg focus:outline-none"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
