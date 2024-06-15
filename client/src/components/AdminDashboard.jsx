import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-lg w-full mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Welcome, Admin</h1>
        <p className="text-center text-gray-700 mb-8">
          Manage your application with ease. You can view and manage users, and perform other administrative tasks. Use the buttons below to navigate.
        </p>
        <div className="flex flex-col items-center">
          <Link to="/users" className="w-full">
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white text-lg py-3 px-4 font-semibold rounded mb-4 focus:outline-none focus:shadow-outline">
              Users
            </button>
          </Link>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white text-lg py-3 px-4 font-semibold rounded focus:outline-none focus:shadow-outline">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
