import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import Home from './pages/user/Home.jsx';
import Account from './pages/user/Account.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import Login from './pages/user/Login.jsx';
import SignUp from './pages/user/SignUp.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import UsersList from './pages/admin/UsersList.jsx';
import Edit from './pages/admin/Edit.jsx';
import EditProfile from './pages/user/EditProfile.jsx';
import appStore from './utils/appStore.js';
import { Provider } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import ProtectedAdmin from './components/ProtectedAdmin.jsx';

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="/edit" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedAdmin><Dashboard /></ProtectedAdmin>} />
          <Route path="/admin/users" element={<ProtectedAdmin><UsersList /></ProtectedAdmin>} />
          <Route path="/admin/create_user" element={<ProtectedAdmin><SignUp title={'Create User'}/></ProtectedAdmin>}/>
          <Route path="/admin/edit_user/:userId" element={<ProtectedAdmin><Edit /></ProtectedAdmin>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
