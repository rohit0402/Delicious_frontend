import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/slices/SearchSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import NavList from "./NavList";
import axios from "axios";
import { loginUser,setUser } from "../../redux/slices/AuthSlice";
import { getCart } from "../../Helper";
import { setCart } from "../../redux/slices/CartSlice";
import toast from "react-hot-toast";
axios.defaults.withCredentials=true;

function Navbar() {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);
  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const auth = useSelector((state) => state.auth.isAuth);
  const user=useSelector((state)=> state.auth.user);
  const getUser = async () => {
    try {
      const res = await axios.get("https://delicious-backend-1.onrender.com/api/getUser", { withCredentials: true });
      const data = res.data;
      dispatch(setUser(data.user));
      dispatch(loginUser());
  
      // Use await with getCart
      const cartData = await getCart(data.user);
      dispatch(setCart(cartData.cartItems));
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Handle error
    }
  };

  const handleLogout=async ()=>{
    const res=await axios.get("https://delicious-backend-1.onrender.com/api/logout");
    const data=await res.data;
    toast.success(data.message);
    window.location.href="/";
  }

useEffect(()=>{
  getUser();
},[]);

  return (
    <div className="fixed top-0 w-[100vw]">
      <nav className="bg-yellow-400 shadow-lg ">
        <div className="max-w-70xl  px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo toggle */}
            <div className="flex-shrink-0 flex items-center mt-2.5 mr-1.5">
              <h3 className={`absolute top-5 left-5 w-auto h-9 cursor-pointer text-lg transition-all ease-in-out duration-500 ${
                  toggle && "hidden"
                }`}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setToggle(true);
                  }
                }}><i><b>DELICIOUS</b></i></h3>
              {/* <img
                className={`absolute top-4.9 left-5 w-auto h-9 cursor-pointer transition-all ease-in-out duration-500 ${
                  toggle && "hidden"
                }`}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setToggle(true);
                  }
                }}
                src="/src/assets/logo.jpg"
                alt="Restaurant Logo"
              /> */}
              <FontAwesomeIcon
                icon={faTimes}
                className={`absolute top-4.9 left-6 w-auto h-9 lg:hidden cursor-pointer transition-all ease-in-out duration-500 ${
                  !toggle && "hidden"
                }`}
                onClick={() => setToggle(false)}
              />
            </div>
            <NavList toggle={toggle} setToggle={setToggle} auth={auth} />
            {/* Navigation Links */}
            {window.innerWidth > 767 && (
              <div className="flex items-center justify-center ml-5 m-0 flex-1 sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex">
                    <Link
                      to="/"
                      className="px-3 py-2 mt-3 text-black text-lg font-bold leading-5 hover:text-black-300 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Home
                    </Link>
                    <Link
                      to="/"
                      className="ml-2 px-3 mt-3 py-2 text-black text-lg font-bold leading-5 hover:text-black-300 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Menu
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* searchbar */}
            <div className="flex items-center justify-center m-auto  flex-1 sm:py-4 sm:px ">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="m-auto ml-5 rounded-xl bg-white py-2 px-4 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* auth */}
            {window.innerWidth > 767 && auth && (
              <div className="hidden sm:block sm:mr-auto">
                <div className="flex items-center">
                  <Link to="/" className="mt-4 mr-5 text-black text-lg font-semibold hover:cursor-pointer hover:underline  hover:text-black-300" onClick={handleLogout}>logout</Link>
                </div>
              </div>
            )}

            {window.innerWidth > 767&&!auth && (
              <div className="hidden sm:block sm:mr-auto">
                <div className="flex items-center">
                  <Link
                    to="/login"
                    className="ml-4 mr-3 mt-4 text-black text-lg font-semibold hover:text-black-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="ml-2 mt-4 mr-5 text-black text-lg font-semibold hover:text-black-300"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
