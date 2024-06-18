import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { addUser } from '../utils/userSlice';

const SignIn = () => {
  const {token} = useSelector((state)=>state.user)
  const  dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState();

  useEffect(()=>{
    if(location.state?.message){
      toast.success(location.state.message);
    }                               
    console.log()
  },[location.state]);

  useEffect(()=>{
    if(token){
      navigate('/home');
    }
  },[token, navigate])

  const handleSubmit = async () =>{
    try {
      const response = await axios.post('http://localhost:3000/api/login',{
        email,
        password
      });
      const {token, user} = response.data;
      dispatch(addUser({user, token}));
      navigate('/home', {state:{message:response?.data?.message}});
    } catch (error) {
      if(error.response){
        setErrMsg(error?.response?.data?.message || 'Login faild')
      }
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
        <ToastContainer/>
        <div className="container max-w-md mx-auto my-16 xl:max-w-3xl h-full flex bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="relative hidden xl:block xl:w-1/2 h-full">
            <img
              className="absolute h-auto w-full object-cover"
              src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
              alt="my zomato"
            />
          </div>
          <div className="w-full xl:w-1/2 p-8">
            <form>
              <h1 className="text-2xl font-bold">Sign in to your account</h1>
              <div>
                <span className="text-gray-600 text-sm">
                  Dont have an account?
                </span>
                <span className="text-gray-700 text-sm font-semibold">
                  <Link to="/register">Register Now</Link>
                </span>
              </div>
              {errMsg && (
              <div>
                <span className="text-red-500 text-sm">
                  {errMsg}
                </span>
              </div>
              )}
              <div className="mb-4 mt-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                onChange={(e)=>setEmail(e.target.value)}
                  className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                  id="email"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-6 mt-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                onChange={(e)=>setPassword(e.target.value)}
                  className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                  id="password"
                  type="password"
                  placeholder="Your password"
                />
                <a
                  className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex w-full mt-8">
                <button
                onClick={() => handleSubmit()}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                  type="button"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
