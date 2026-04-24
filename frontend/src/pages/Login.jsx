import React, { useState } from 'react'
import { FaRegEye, FaArrowLeft } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-slate-100 relative'>

      {/* Back Button */}
      <div 
        onClick={() => navigate("/")}
        className='absolute top-6 left-6 w-10 h-10 flex items-center justify-center bg-red-500 shadow-md rounded-full cursor-pointer hover:bg-slate-200 transition'
      >
        <FaArrowLeft className='text-red-700' />
      </div>

      {/* Login Card */}
      <form className='bg-white shadow-lg rounded-2xl p-8 w-[90%] max-w-md flex flex-col gap-6'>

        <h1 className='text-2xl font-semibold text-center text-gray-800'>
          Welcome Back
        </h1>

        {/* Email */}
        <div className='flex flex-col gap-2'>
          <label htmlFor="email" className='text-black-600'>Email</label>
          <input 
            type="text" 
            id="email"
            placeholder="Enter your email"
            className='h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>

        {/* Password */}
        <div className='relative flex flex-col gap-2'>
          <label htmlFor="pass" className='text-gray-600'>Password</label>
          <input 
            type={show ? "text" : "password"} 
            id="pass"
            placeholder="Enter your password"
            className='h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          />

          <div 
            className='absolute right-3 top-[38px] cursor-pointer text-gray-500'
            onClick={() => setShow(prev => !prev)}
          >
            {show ? <FaEyeSlash /> : <FaRegEye />}
          </div>
        </div>

        {/* Button */}
        <button className='h-11 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
          Login
        </button>

        {/* Signup */}
        <p className='text-center text-gray-600'>
          Don’t have an account?{" "}
          <span 
            onClick={() => navigate("/signup")}
            className='text-blue-600 cursor-pointer hover:underline'
          >
            Sign Up
          </span>
        </p>

      </form>
    </div>
  )
}

export default Login;
