import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/user/Home.jsx';
import Account from './pages/user/Account.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import Login from './pages/user/Login.jsx';
import SignUp from './pages/user/SignUp.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import UsersList from './pages/admin/UsersList.jsx';
import Edit from './pages/admin/Edit.jsx';
import EditProfile from './pages/user/EditProfile.jsx';


function App() {

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <Login/>
      },
        {
          path:'/register',
          element: <SignUp/>
        },
        {
          path:'/home',
          element: <Home/>
        },
        {
          path:'/account',
          element: <Account/>
        },
        {
          path:'/edit',
          element: <EditProfile/>
        },
        {
          path:'/admin',
          element: <AdminLogin/>
        },
        {
          path:'/admin/dashboard',
          element: <Dashboard/>
        },
        {
          path:'/admin/users',
          element: <UsersList/>
        },
        {
          path: '/admin/edit_user',
          element: <Edit/>
        }
  ])

  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  )
}

export default App
