import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { removeAdmin } from '../utils/adminSlice';


const AdminDashboard = () => {
  const dispatch = useDispatch()

  const handleLogout = () =>{
    confirmAlert({
      customUI: ({ onClose }) => (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-900">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h1 className="text-xl font-semibold mb-4">Are you sure?</h1>
            <p className="text-gray-700 mb-4">Are you sure you want to logout this account?</p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2"
                onClick={() => {
                  dispatch(removeAdmin());
                  onClose();
                }}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                onClick={onClose}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ),
    });
  }
  return (
    <div className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-lg w-full mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Welcome, Admin</h1>
        <p className="text-center text-gray-700 mb-8">
          Manage your application with ease. You can view and manage users, and perform other administrative tasks. Use the buttons below to navigate.
        </p>
        <div className="flex flex-col items-center">
          <Link to="/admin/users" className="w-full">
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white text-lg py-3 px-4 font-semibold rounded mb-4 focus:outline-none focus:shadow-outline">
              Users
            </button>
          </Link>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white text-lg py-3 px-4 font-semibold rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
