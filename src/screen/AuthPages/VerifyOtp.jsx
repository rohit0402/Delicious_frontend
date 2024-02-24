import { useState } from "react"
import { Link } from "react-router-dom"

const VerifyOtp = () => {
    const [otp,setOtp]=useState("");
    const [password,setPassword]=useState("");
  return (
    <div className="flex justify-center items-center h-screen">
    <form
      action=""
      className="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-3 w-[60vw] lg:w-[20vw] text-sm"
    >
      <span className=" text-lg text-gray-600 -mb-1 text-center">Login</span>

      <input
        type="tel"
        name="otp "
        id="otp"
        className="outline-none border rounded-md px-3 py-2 focus:border-yellow-500 text-black "
        autoComplete="off"
        placeholder="enter OTP"
        required
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <input
        type="password"
        name="password "
        id="password"
        className="outline-none border rounded-md px-3 py-2 focus:border-yellow-500 text-black "
        autoComplete="off"
        placeholder="enter password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className=" outline-none border rounded-md px-3 py-2 text-black bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
      >
        Reset Password
      </button>
    </form>
  </div>
  )
}

export default VerifyOtp
