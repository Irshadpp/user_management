import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../utils/constants';
import axios from 'axios';
import { validateEditForm } from '../utils/validation';
import { updateUser } from '../utils/userSlice';
import { ToastContainer,toast } from 'react-toastify';

const ProfileEditor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user, token} = useSelector((state)=>state.user)
  const [fName, setfName] = useState(user ? user.fName : '');
const [lName, setlName] = useState(user ? user.lName : '');
const [email, setEmail] = useState(user ? user.email : '');
  const [errors, setErrors] = useState();

  useEffect(() => {
    setfName(user.fName);
    setlName(user.lName);
    setEmail(user.email);
}, [user]);

  const handleUpdate = async() => {
    try {
      const validationErrors = validateEditForm(fName, lName, email);
      if(Object.keys(validationErrors).length > 0){
        return setErrors(validationErrors);
      }
      const response = await axios.put(API_URL+'api/update_profile', {fName, lName, email},{
        headers: { 
          'Authorization': `Bearer ${token}`
      },
      });
      console.log(response.data.user);
       dispatch(updateUser(response.data.user));
        if(response.data.message){
          toast.success(response.data.message);
        }
     
    } catch (error) {
      if(error.response){
        toast.error(error.response.data.message)
      }else{
        toast.error("An error occured")
      }
    }
  };

  const handleGoBack = () => {
    navigate('/account');
  };



  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
      <ToastContainer/>
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Edit Profile</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">First Name</label>
        <input
          type="text"
          className={`w-full px-4 py-2 border ${errors && errors.fName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`}
          value={fName}
          onChange={(e) => setfName(e.target.value)}
        />
        {errors && errors.fName && <p className="text-red-500 text-sm mt-1">{errors && errors.fName}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
        <input
          type="text"
          className={`w-full px-4 py-2 border ${errors && errors.lName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`}
          value={lName}
          onChange={(e) => setlName(e.target.value)}
        />
        {errors && errors.lName && <p className="text-red-500 text-sm mt-1">{errors && errors.lName}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          className={`w-full px-4 py-2 border ${errors && errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-blue-500`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors && errors.email && <p className="text-red-500 text-sm mt-1">{errors && errors.email}</p>}
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
