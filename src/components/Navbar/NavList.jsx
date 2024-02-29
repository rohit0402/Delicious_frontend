import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const NavList = ({ toggle, setToggle, auth }) => {

  const handleLogout=async ()=>{
    const res=await axios.get("https://delicious-backend-1.onrender.com/api/logout");
    const data=await res.data;
    toast.success(data.message);
    window.location.href="/";
  }
  return (
    <div
      className={`${
        toggle ? "-left-0" : "-left-full"
      } fixed top-12 p-3 w-fit bg-white bg-opacity-10 backdrop-blur-sm flex flex-col justify-center items-start rounded-lg shadow-md border border-r-white font-bold text-black transition-all duration-500 ease-in-out`}
    >
      {auth ? (
        <div className="flex flex-col">
          <Link to="/" className="hover:text-yellow-500 select-none">
            Home
          </Link>
          <Link to="/" className="hover:text-yellow-500 select-none">
            Menu
          </Link>
          <li onClick={handleLogout} className="hover:text-yellow-500 select-none list-none">logout</li>
        </div>
      ) : (
        <div className="flex flex-col">
          <Link to="/" className="hover:text-yellow-500 select-none">
            Home
          </Link>
          <Link to="/" className="hover:text-yellow-500 select-none">
            Menu
          </Link>
          <Link to="/login" className="hover:text-yellow-500 select-none">
            login
          </Link>
          <Link to="/signup" className="hover:text-yellow-500 select-none">
            signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavList;
