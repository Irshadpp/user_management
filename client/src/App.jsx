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
import appStore, {persistor} from './utils/appStore.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ProtectedRoute from './components/ProtectedRoute.jsx';


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
          element: <ProtectedRoute><Home/></ProtectedRoute> 
        },
        {
          path:'/account',
          element: <ProtectedRoute><Account/></ProtectedRoute>
        },
        {
          path:'/edit',
          element: <ProtectedRoute><EditProfile/></ProtectedRoute>
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
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={appRouter}>
    </RouterProvider>
    </PersistGate>
    </Provider>
  )
}

export default App
