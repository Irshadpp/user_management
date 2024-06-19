import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
import useVerifyUser from '../../hooks/userVerifyUser'

const Home = () => {
  useVerifyUser()
  return (
    <div>
      <Navbar/>
      <Body/>
    </div>
  )
}

export default Home
