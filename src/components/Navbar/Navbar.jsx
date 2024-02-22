import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/SearchSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const dispatch=useDispatch();
  const handleChange=(e)=>{
    dispatch(setSearch(e.target.value));
  };
  return (
    <div className='fixed top-0 w-[100vw]'>
      <nav className="bg-yellow-400 shadow-lg ">
      <div className="max-w-70xl  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="block lg:hidden h-9 w-auto m-0 mt-2" src="/src/assets/logo.jpg" alt="Restaurant Logo" />
            <img className="hidden lg:block h-9 w-auto m-0 mt-1.5" src="/src/assets/logo.jpg" alt="Restaurant Logo" />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-center m-0 flex-1 sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <Link to="/" className="px-3 py-2 mt-3 text-black text-lg font-bold leading-5 hover:text-black-300 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out">Home</Link>
                <Link to="/" className="ml-4 px-3 mt-3 py-2 text-black text-lg font-bold leading-5 hover:text-black-300 focus:outline-none focus:text-gray-100 transition duration-150 ease-in-out">Menu</Link>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden sm:block sm:mr-auto ">
            <div className="flex items-center">
              {/* Search Bar */}
              <input type="text" placeholder="Search" className=" mt-3 rounded-xl bg-white py-2 px-4 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" 
              onChange={handleChange}
              />
              {/* <button className="bg-gray-800 text-white py-2 px-4 rounded-r-md mt-3 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >Search</button> */}

              {/* Auth Links */}
              <Link to="/" className="ml-4 mr-3 mt-3 text-black text-lg font-semibold hover:text-black-300">Login</Link>
              <Link to="/" className="ml-2 mt-3 mr-5 text-black text-lg font-semibold hover:text-black-300">Sign Up</Link>
              
              <FontAwesomeIcon icon={faBars} className=' size-11'/>
              <FontAwesomeIcon icon={faTimes} />

              {/* Cart Icon */}
              {/* <svg className="ml-4 h-6 w-6 text-black mt-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v2m0 0v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2zm2 0h12v14H6V4z" />
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
