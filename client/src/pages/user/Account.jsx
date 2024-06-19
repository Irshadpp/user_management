import Navbar from '../../components/Navbar'
import UserAccount from '../../components/UserAccount'
import useVerifyUser from '../../hooks/userVerifyUser'

const Account = () => {
  useVerifyUser()
  return (
    <div>
      <Navbar/>
      <UserAccount/>
    </div>
  )
}

export default Account
