import { useState } from "react";
import { Link } from "react-router-dom";
const ResetPassword = () => {
    const [email,setEmail]=useState("");
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action=""
        className="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[60vw] lg:w-[25vw] text-sm"
      >
        <span className=" text-lg text-gray-600 -mb-1 text-center">Enter Your Email for Verfication</span>
        <input
          type="email"
          name="email "
          id="email"
          className="outline-none border rounded-md px-3 py-2 focus:border-yellow-500 text-black "
          autoComplete="off"
          placeholder="enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className=" outline-none border rounded-md px-3 py-2 text-black bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
        >
          Send OTP
        </button>
        <p className="text-xs text-gray-600 flex -mt-1 gap-2">
          <span>Or</span>
          <Link
            to="/signup"
            className=" text-black hover:underline hover:text-blue-700 cursor-pointer"
          >
            Create Your Account
          </Link>
        </p>
      </form>
    </div>
  )
}

export default ResetPassword;
