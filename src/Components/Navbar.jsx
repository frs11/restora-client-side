import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { BsSun, BsMoon } from "react-icons/bs";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, userSignOut } = useContext(AuthContext);
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


  return (
    <div className="navbar shadow-lg w-full dark:bg-slate-600 dark:text-white lg:px-16 mx-auto pb-5">
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
            <span className="block my-1 bg-violet-100 w-full px-2 rounded-md py-1">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-violet-600 underline font-medium"
                    : ""
                }
              >
                Home
              </NavLink>
            </span>
            <span
              className={
                user
                  ? "block my-1 w-full px-2 rounded-md bg-violet-100 py-1"
                  : "hidden"
              }
            >
              <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-violet-800 underline font-medium"
                    : ""
                }
              >
                Add Product
              </NavLink>
            </span>
            <span
              className={
                user
                  ? "block my-1 w-full px-2 rounded-md bg-violet-100 py-1"
                  : "hidden"
              }
            >
              <NavLink
                to="/myCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-violet-800 underline font-medium"
                    : ""
                }
              >
                My Cart
              </NavLink>
            </span>
          </ul>
        </div>
        <Link to="/" className="text-2xl">
          <span className="flex items-center">
            <img
              src="https://i.ibb.co/c6F76Hm/logo.png"
              className="w-10 md:w-12 mr-1"
            />
            <span className="font-medium font-logoFont dark:text-white text-sm md:text-xl">
              Food
              <span className="text-violet-600 dark:text-violet-300">Bank</span>
            </span>
          </span>
        </Link>
      </div>

      {/* Center Content */}
      <div className="navbar-center hidden lg:flex">
        <span className="flex mx-2 py-1 font-semibold hover:text-violet-700">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "isPending"
                : isActive
                ? "text-white px-3 py-1 bg-violet-500 rounded font-medium"
                : ""
            }
          >
            Home
          </NavLink>
        </span>
        <span
          className={
            user
              ? "flex mx-2 py-1 font-semibold hover:text-violet-700"
              : "hidden"
          }
        >
          <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white px-3 py-1 bg-violet-500 rounded font-medium"
                : ""
            }
          >
            Add Product
          </NavLink>
        </span>
        <span
          className={
            user
              ? "flex mx-2 py-1 font-semibold hover:text-violet-700"
              : "hidden"
          }
        >
          <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white px-3 py-1 bg-violet-500 rounded font-medium"
                : ""
            }
          >
            My Cart
          </NavLink>
        </span>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <div onClick={handleTheme} className="mr-2">
          {darkMode ? (
            <BsMoon className="text-xl"></BsMoon>
          ) : (
            <BsSun className="text-xl"></BsSun>
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
