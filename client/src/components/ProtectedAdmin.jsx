import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedAdmin = ({children}) => {
    const {adminToken} = useSelector((state)=>state.admin)
  return adminToken ? children : <Navigate to='/admin'/>
}

export default ProtectedAdmin;
