import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { BsSun, BsMoon } from "react-icons/bs";
import useTheme from "../Contexts/themeHook";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, userSignOut } = useContext(AuthContext);
  const { toggleTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    userSignOut()
      .then(navigate("/login"))
      .catch((err) => console.log(err.message));
  };
  const handleTheme = () => {
    toggleTheme();
    setDarkMode(!darkMode);
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white px-3 py-1 bg-violet-500 rounded font-medium"
            : "flex mx-2 py-1 font-semibold hover:text-violet-700"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allFoodItems"
        className={({ isActive }) =>
          isActive
            ? "text-white px-3 py-1 bg-violet-500 rounded font-medium"
            : "flex mx-2 py-1 font-semibold hover:text-violet-700"
        }
      >
        All Foods
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive
            ? "text-white px-3 py-1 bg-violet-500 rounded font-medium"
            : "flex mx-2 py-1 font-semibold hover:text-violet-700"
        }
      >
        Blogs
      </NavLink>
    </>
  );

  const dropdownLinks = (
    <>
      <span
        className={
          "block my-1 w-full px-2 rounded-md bg-violet-100 dark:bg-violet-300 text-white py-1"
        }
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-2 text-violet-800  font-bold underline"
              : "px-2 font-medium rounded-md text-violet-700 "
          }
        >
          Home
        </NavLink>
      </span>
      <span
        className={
          "block my-1 w-full px-2 rounded-md bg-violet-100 dark:bg-violet-300 text-white py-1"
        }
      >
        <NavLink
          to="/allFoodItems"
          className={({ isActive }) =>
            isActive
              ? "px-2 text-violet-800  font-bold underline"
              : "px-2 font-medium rounded-md text-violet-700 "
          }
        >
          Food Items
        </NavLink>
      </span>
      <span
        className={
          "block my-1 w-full px-2 rounded-md bg-violet-100 dark:bg-violet-300 text-white py-1"
        }
      >
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "px-2 text-violet-800  font-bold underline"
              : "px-2 font-medium rounded-md text-violet-700 "
          }
        >
          Blogs
        </NavLink>
      </span>
    </>
  );

  return (
    <div className="navbar shadow-lg w-full dark:bg-slate-600 dark:text-white lg:px-12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown" onClick={() => setOpen(!open)}>
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={` dropdown-content mt-3 p-2 z-[1] ${
              open ? "" : "hidden"
            } shadow bg-base-100 rounded-lg w-52`}
          >
            {dropdownLinks}
          </ul>
        </div>

        <Link to="/" className="text-2xl">
          <span className="flex items-center">
            <img
              src="https://i.ibb.co/mJMVqgY/Restora-Logo.png"
              className="w-10 md:w-12 lg:w-20 mr-1"
            />
            <span className="font-medium font-logoFont dark:text-white text-sm md:text-xl lg:text-3xl">
              Res
              <span className="text-violet-600 dark:text-violet-300">tora</span>
            </span>
          </span>
        </Link>
      </div>

      {/* Center Content */}
      <div className="navbar-center hidden lg:flex">{links}</div>

      {/* Navbar End */}
      <div className="navbar-end">
        <div
          onClick={handleTheme}
          className="mr-2 md:mr-6 cursor-pointer"
          title={darkMode ? "Dark Mode" : "Light Mode"}
        >
          {darkMode ? (
            <BsSun className="text-xl"></BsSun>
          ) : (
            <BsMoon className="text-xl"></BsMoon>
          )}
        </div>
        {user ? (
          <div className="flex items-center space-x-3">
            <div className="">
              <img
                className="w-7 lg:w-10 h-7 lg:h-10 rounded-full ml-4 lg:ml-2"
                src={user?.photoURL}
                alt=""
              />
              <p className="text-xs font-logoFont text-center">
                {user?.displayName}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-2 py-1 text-sm lg:text-base lg:px-5 lg:py-2 border hover:border-red-700 border-red-300 hover:bg-red-400 hover:text-black font-medium rounded-md"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <img
              className="w-7 lg:w-10 h-7 lg:h-10 rounded-full mr-3"
              src="https://i.ibb.co/By0YFNn/default-profile-picture-grey-male-icon.png"
              alt=""
            />
            <button
              onClick={handleLogin}
              className="px-2 py-1 text-sm lg:text-base lg:px-5 lg:py-2 bg-violet-600 hover:bg-violet-400 hover:text-black text-white rounded-md"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
