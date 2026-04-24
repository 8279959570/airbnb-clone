import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/airbnd.png';

const Nav = () => {
  const { pathname } = useLocation();
  const isAuthRoute = pathname === '/login' || pathname === '/signup';

  return (
    <header className=' bg-[red] w-[100vw] bg-white/80 backdrop-blur border-b border-black/10 sticky top-0 z-50'>
      <div className='  max-w-[1200px] mx-auto px-4 h-[72px] flex items-center justify-between'>
        <Link to='/' className='flex items-center gap-3'>
          <img src={logo} alt='Airbnb clone logo' className='w-[34px] h-[34px] object-contain' />
          <span className='  text-[18px] font-semibold text-black'>airbnb</span>
        </Link>

        {!isAuthRoute && (
          <nav className=' flex items-center gap-2'>
            <Link
              to='/login'
              className='px-4 py-2 rounded-lg text-[15px] bg-[#ff385c] text-black hover:bg-black/5'
            >
              Log in here
            </Link>
            <Link
              to='/signup'
              className='px-4 py-2 rounded-lg text-[15px] text-black bg-[#ff385c] hover:bg-black/5'
            >
              Sign up here
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
