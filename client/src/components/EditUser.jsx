import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { validateEditForm } from '../utils/validation';
import axios from 'axios';
import { API_URL } from '../utils/constants';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const EditUser = () => {
  const location = useLocation();
  const {user} = location.state;
  const {userId} = useParams();
  const [fName, setfName] = useState(user.fName);
  const [lName, setlName] = useState(user.lName);
  const [email, setEmail] = useState(user.email);
  const [errors, setErrors] = useState();

  const {adminToken} = useSelector((state)=>state.admin);

  const handleUpdate = async() => {
    try {
      const validationErrors = validateEditForm(fName, lName, email);
      if(Object.keys(validationErrors).length > 0){
        return setErrors(validationErrors);
      }
      const response = await axios.put(API_URL+`api/admin/edit_user/${userId}`, {fName, lName, email},{
        headers: { 
          'Authorization': `Bearer ${adminToken}`
      },
      });

      setfName(response.data.user.fName);
      setlName(response.data.user.lName);
      setEmail(response.data.user.email);

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
    history.push('/users');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300">
      <ToastContainer/>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Edit User</h2>
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
