import { useContext, useState } from "react";


import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// import logo from "../../assets/logo.png";
const Navbar = () => {
  // dark mode
//  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="">

      <div className="mx-auto px-4 sm:px-6 text-lg">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* logout and profile */}
            <div className=" flex items-center mb-3">
              <div className="">
                {user ? (
                  <Link to="/login">
                    <button
                      onClick={handleLogOut}
                      className=" mt-3 relative flex items-center justify-center  mr-4 gap-2 px-2 py-1.5  bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-gradient-to-r hover:red-pink-500 font-bold hover:to-red-500"
                    >
                      LogOut
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="group relative h-12 w-24 overflow-hidden rounded-lg bg-white text-lg shadow">
                      <div className="absolute inset-0 w-3 bg-gradient-to-r from-red-500 to-indigo-500 text-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                      <span className="relative text-black group-hover:text-white">
                        Login
                      </span>
                    </button>
                  </Link>
                )}
              </div>
              <div className="avatar placeholder mt-3 mr-2">
                {user && (
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <img
                      className="cursor-pointer rounded-full"
                      title={user.displayName}
                      src={user?.photoURL}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
