import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedAdmin = ({children}) => {
    const {token} = useSelector((state)=>state.admin)
  return token ? children : <Navigate to='/admin'/>
}

export default ProtectedAdmin;
