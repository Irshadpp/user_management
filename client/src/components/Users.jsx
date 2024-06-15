import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
    // Add more users as needed
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 min-h-screen">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Management</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-gray-800 font-semibold text-left">Name</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-800 font-semibold text-left">Email</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-800 font-semibold text-left">Role</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-800 font-semibold text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">
                  <select
                    className="bg-blue-200 border border-gray-300 rounded-lg py-1 px-2 focus:outline-none focus:border-blue-500"
                    defaultValue={user.role}
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </td>
                <td className="py-2 px-4 flex items-center space-x-2">
                    <Link to="/edit_user">
                  <button className="flex items-center justify-center p-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow-lg focus:outline-none">
                    <FaEdit />
                  </button>
                    </Link>
                  <button className="flex items-center justify-center p-2 bg-red-500 hover:bg-red-600 text-white rounded shadow-lg focus:outline-none">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
