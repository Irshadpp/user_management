import ProfileEdit from "../../components/ProfileEdit"
import useVerifyUser from "../../hooks/userVerifyUser"

const EditProfile = () => {
  useVerifyUser()
  return (
    <div>
      <ProfileEdit/>
    </div>
  )
}

export default EditProfile
