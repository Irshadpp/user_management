import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useDispatch, useSelector } from "react-redux";
import { removeUser, updateProfilePhoto } from "../utils/userSlice";
import axios from "axios";
import { API_URL, USER_IMG_URL } from "../utils/constants";
// import axiosInstance from "../utils/axiosInstance";

const UserAccount = () => {
  const dispatch = useDispatch();
  const {user, token} = useSelector((state)=>state.user)
  const [selectedFile, setSelectedFile] = useState(null);

  const handlePhotoChange = async (e) =>{
    const file = e.target.files[0];
    setSelectedFile(file);

    try {
      const formData = new FormData();
      formData.append('photo', file)
      const response = await axios.post('http://localhost:3000/api/upload-photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
      },
      });
      dispatch(updateProfilePhoto(response.data.filePath));
      if(response.data?.message){
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }

  }

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
                  dispatch(removeUser());
                  
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
    <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <ToastContainer/>
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-10 py-12">
        <div className="flex items-center justify-center">
      <label htmlFor="upload-photo">
        <input
          type="file"
          id="upload-photo"
          className="hidden"
          onChange={handlePhotoChange}
        />
        <img
          className="h-32 w-32 rounded-full object-cover cursor-pointer"
          src={ user.profilePhoto ? API_URL + user.profilePhoto : USER_IMG_URL }
          alt="Profile"
        />
        {console.log(user.profilePhoto)}
      </label>
    </div>
          <div className="text-center mt-4">
            <h2 className="text-3xl font-semibold text-gray-800">{user.fName+ ' ' +user.lName}</h2>
            <p className="text-sm text-gray-600 mt-1">{user.email}</p>
          </div>
          <div className="mt-6">
            <Link to="/edit">
            <button className="bg-purple-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              Edit Profile
            </button>
            </Link>
            <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
