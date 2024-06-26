import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addAdmin } from '../utils/adminSlice';

const AdminLogin = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState();
  const {adminToken} = useSelector((state)=>state.admin)

  useEffect(()=>{
    if(adminToken){
      navigate('/admin/dashboard');
    }
  },[adminToken, navigate])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(email)
    try {
      const response = await axios.post(API_URL+'api/admin',{
        email,
        password
      });
      const {admin, adminToken} = response.data;
      console.log(admin, adminToken)
      dispatch(addAdmin({admin, adminToken}));
      navigate('/admin/dashboard');
    } catch (error) {
      if(error.response){
        setErrMsg(error.response.data.message || 'An error occured');
      }else{
        console.log(error)
        setErrMsg('Login faild');
      }
    }
  }

  return (
    <>
      <div className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Admin Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Email Address
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="username"
                type="text"
                placeholder="Your email address"
                onChange={(e)=>setEmail(e.target.value)}
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
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            {errMsg && <p className='text-red-500'>{errMsg}</p> }
            <div className="flex justify-center">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
                onClick={handleSubmit}
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
