import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Body = () => {
  const location = useLocation();
  useEffect(()=>{
    if(location.state?.message){
      toast.success(location.state.message);
    }
  },[]);
  

  return (
    <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <ToastContainer/>
      <div className="max-w-4xl px-8 py-12 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to User Management</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          User management involves the administration of user accounts and access rights in a system. It is crucial for ensuring security, organizing user roles, and optimizing user experience. Our user management system simplifies these processes, offering robust features and customization options.
        </p>
      </div>
    </div>
  );
};

export default Body;
