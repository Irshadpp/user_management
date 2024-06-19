import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {userToken} = useSelector((state)=>state.user);

  return userToken ? children : <Navigate to='/'/>
}

export default ProtectedRoute
