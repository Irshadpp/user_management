import { Link } from "react-router-dom";

const UserAccount = () => {
  // Dummy data (replace with actual data later)
  const user = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg" // Example profile photo URL
  };

  return (
    <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-10 py-12">
        <div className="flex items-center justify-center">
      <label htmlFor="upload-photo">
        <input
          type="file"
          id="upload-photo"
          className="hidden"
          // onChange={handlePhotoChange}
        />
        <img
          className="h-32 w-32 rounded-full object-cover cursor-pointer"
          src={user.profilePhoto}
          alt="Profile"
        />
      </label>
    </div>
          <div className="text-center mt-4">
            <h2 className="text-3xl font-semibold text-gray-800">{user.fullName}</h2>
            <p className="text-sm text-gray-600 mt-1">{user.email}</p>
          </div>
          <div className="mt-6">
            <Link to="/edit">
            <button className="bg-purple-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              Edit Profile
            </button>
            </Link>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
