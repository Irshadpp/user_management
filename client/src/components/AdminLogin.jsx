import React from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  return (
    <>
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Admin Login</h2>
          <form method="post" action="#" onSubmit={() => false}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="username"
                type="text"
                placeholder="Your username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Your password"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
              >
                Login
              </button>
            </div>
            <div className="text-center mt-4">
              <Link to="#" className="text-sm text-gray-600 hover:text-gray-800">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
