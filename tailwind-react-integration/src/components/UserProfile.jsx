function UserProfile() {
    return (
      <div className="user-profile max-w-xs sm:max-w-sm md:max-w-sm bg-gray-100 sm:p-4 md:p-8 mx-auto my-20 rounded-lg shadow-lg">
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto" />
        <h1 className="text-lg md:text-xl text-blue-800 my-4 ">John Doe</h1>
        <p className="text-gray-600 text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;