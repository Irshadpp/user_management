import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaUserPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../utils/constants';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import appStore from '../utils/appStore';
import { addUser, updateUser } from '../utils/userSlice';


const Users = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('');
  const {adminToken} = useSelector((state)=>state.admin)
  const [users, setUsers] = useState();

  useEffect(() => {
    console.log("Initial Redux state:", appStore.getState());
  }, []);
  

  const fetchData = async() =>{
        try {
          const response = await axios.get(API_URL+'api/admin/users',{
            headers: {
              'Authorization': `Bearer ${adminToken}`
            }
          });
          setUsers(response.data.users);
        } catch (error) {
          console.log(error);
        }
        } 
  
    useEffect(()=>{
        fetchData()
    },[]);

    const handleDeleteUser = async (userId) =>{
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
    
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(API_URL+`api/admin/delete_user/${userId}`,{
            headers:{
              'Authorization':`Bearer ${adminToken}`
            }
        })
          setUsers(response.data.users);
          await Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } catch (error) {
          console.error("Error deleting user:", error);
          await Swal.fire({
            title: "Error!",
            text: "There was an error deleting the user.",
            icon: "error"
          });
        }
      }
    }

    const handleEditUser = (user) =>{
      navigate(`/admin/edit_user/${user._id}`,{state:{user}});
    }
  
    if(!users) return <h1>Loading....</h1>
    
    const  filteredUsers = users.filter(user =>
    user.lName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  return (
    <div className="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 min-h-screen">
    <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between bg-gray-200 px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
        <Link to="/admin/create_user">
          <button className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg focus:outline-none">
            <FaUserPlus className="mr-2" />
            Create User
          </button>
        </Link>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.fName} {user.lName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                        <button className="flex items-center justify-center px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none"
                        onClick={()=>handleEditUser(user)}
                        >
                          <FaEdit className="mr-1" />
                          Edit
                        </button>
                      <button className="flex items-center justify-center px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg focus:outline-none"
                      onClick={()=>handleDeleteUser(user._id)}
                      >
                        <FaTrash className="mr-1" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Users;
