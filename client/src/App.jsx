import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/user/Home.jsx';
import Account from './pages/user/Account.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import Login from './pages/user/Login.jsx';
import SignUp from './pages/user/SignUp.jsx';


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
          path:'/admin',
          element: <AdminLogin/>
        }
  ])

  return (
    <RouterProvider router={appRouter}>
    <>
    </>
    </RouterProvider>
  )
}

export default App
