import React from 'react'

const SignUp = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-start'>
   <form action="" className='flex-col md:item-start gap-[10px] max-w-[900px] w-[90%] h-[600px] flex items-center justify-center'>
    <h1 className='text-[30px] text-[black]'>Welcome To Airbnb</h1>
    <div className='w-[90%] flex items-start justify-start gap-[10px] mt-[30px] flex-col'>
      <label htmlFor="name" className='text-[30px]'>UserName:</label>
      <input type="text" id="name" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]'/>
      </div>
      
      <div className='w-[90%] flex items-start justify-start gap-[10px] flex-col'>
      <label htmlFor="email" className='text-[20px]'>Email:</label>
      <input type="text" id="email" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]'/>
      </div>
      <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
      <label htmlFor="pass" className='text-[20px]'>Password:</label>
      <input type="password" id="pass" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]'/>
      </div>
      <button className='px-[50px] py-[10px] bg-blue-600 rounded-lg text-[white] text-[18px]'>SignUp</button>
   </form>

    </div>
  )
}

export default SignUp