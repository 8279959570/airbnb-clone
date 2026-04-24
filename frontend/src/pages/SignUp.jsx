import React, { useContext, useState } from 'react'
import { FaRegEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { authDataContext } from '../Context/authContext';
import axios from "axios";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUP = async (e) => {
    try {
      e.preventDefault();

      let result = await axios.post(
        serverUrl + "/api/auth/signup",
        { name, email, password },
        { withCredentials: true }
      );

      console.log(result);

      // optional: redirect after signup
      navigate("/login");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-gray-100 relative'>

      {/* Back Button */}
      <div
        onClick={() => navigate("/home")}
        className='absolute top-6 left-6 w-10 h-10 flex items-center justify-center bg-red-500 shadow-md rounded-full cursor-pointer hover:bg-slate-200 transition'
      >
        <FaArrowLeft className='text-red-700' />
      </div>

      {/* Signup Card */}
      <form
        onSubmit={handleSignUP}
        className='bg-white shadow-lg rounded-2xl p-8 w-[90%] max-w-md flex flex-col gap-5'
      >

        <h1 className='text-2xl font-semibold text-center text-gray-800'>
          Create Account
        </h1>

        {/* Username */}
        <div className='flex flex-col gap-2'>
          <label htmlFor="name" className='text-gray-600'>Username</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>

        {/* Email */}
        <div className='flex flex-col gap-2'>
          <label htmlFor="email" className='text-gray-600'>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
          />
        </div>

        {/* Password */}
        <div className='relative flex flex-col gap-2'>
          <label htmlFor="pass" className='text-gray-600'>Password</label>
          <input
            type={show ? "text" : "password"}
            id="pass"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='h-11 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            required
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
          Sign Up
        </button>

        {/* Login Redirect */}
        <p className='text-center text-gray-600'>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className='text-blue-600 cursor-pointer hover:underline'
          >
            Login
          </span>
        </p>

      </form>
    </div>
  )
}

export default SignUp;
