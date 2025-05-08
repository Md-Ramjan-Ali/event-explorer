import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthContext";
import { toast } from "react-toastify";
import logo from '../../assets/event-logo.png'

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  // console.log(user);
  const handleLogOut = () => {
    logOut();
    toast.success("Successfully logout!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav className="navbar bg-base-100 shadow-sm px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex gap-1 items-center cursor-pointer">
          <img className="w-16 " src={logo} alt="" />
          <h2 className=" text-2xl font-bold ">Eventora</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        <div
          className="cursor-pointer tooltip tooltip-left"
          data-tip={user?.displayName}
        >
          {user ? (
            <img
              className="rounded-full w-12 h-12 border card shadow-sm"
              src={`${user ? user?.photoURL : ""}`}
              alt=""
            />
          ) : (
            ""
          )}
        </div>
        {user ? (
          <button onClick={handleLogOut} className="btn bg-primary text-white">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn bg-primary text-white">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
