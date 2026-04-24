import React from 'react';
import Nav from '../Component/Nav';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=' min-h-[100vh] bg-gradient-to-b from-[#fff] via-[#fff] to-[#fff5f7]'>
      <Nav />

      <main className='max-w-[1200px] mx-auto px-4'>
        <section className='py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <div className='flex flex-col gap-5'>
            <span className='inline-flex w-fit items-center px-3 py-1 rounded-full bg-black/5 text-[13px] text-black'>
              Beginner-friendly Airbnb clone 
            </span>
            <h1 className='text-[38px] md:text-[54px] leading-[1.05] font-bold text-black'>
              Find your next stay.
              <br />
              Simple, fast, and user-friendly.
            </h1>
            <p className='text-[16px] md:text-[18px] text-black/70 max-w-[520px]'>
              Explore places to stay, save favorites, and book with confidence. This project is built to be easy to
              understand and extend for beginners.
            </p>

            <div className='flex flex-wrap gap-3'>
              <Link
                to='/signup'
                className='px-5 py-3 rounded-xl bg-[#ff385c] text-white text-[16px] font-medium hover:opacity-90'
              >
                Create account
              </Link>
              <Link
                to='/login'
                className='px-5  py-3 rounded-xl bg-[#ff385c] text-white text-[16px] font-medium border border-black/10 hover:bg-black/5'
              >
                Log in
              </Link>
            </div>

            
          </div>

          <div className='w-full '>
            <div className='bg-white rounded-2xl border border-black/10 shadow-sm p-5 md:p-6'>
              <h2 className='text-[18px] font-semibold text-black'>Quick Search here</h2>
              

              <div className='mt-4 grid grid-cols-1 gap-3'>
                <div className='flex flex-col gap-2'>
                  <label className='text-[13px] text-black/70'>Where</label>
                  <input
                    placeholder='Search destinations'
                    className='h-[44px] rounded-xl border border-black/10 px-4 outline-none focus:ring-2 focus:ring-[#ff385c]/30'
                  />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-[13px] text-black/70'>Check in</label>
                    <input
                      type='date'
                      className='h-[44px] rounded-xl border border-black/10 px-4 outline-none focus:ring-2 focus:ring-[#ff385c]/30'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-[13px] text-black/70'>Check out</label>
                    <input
                      type='date'
                      className='h-[44px] rounded-xl border border-black/10 px-4 outline-none focus:ring-2 focus:ring-[#ff385c]/30'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-[13px] text-black/70'>Guests</label>
                    <select className='h-[44px] rounded-xl border border-black/10 px-4 outline-none focus:ring-2 focus:ring-[#ff385c]/30'>
                      <option>1 guest</option>
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                      <option>5+ guests</option>
                    </select>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-[13px] text-black/70'>Type</label>
                    <select className='h-[44px] rounded-xl border border-black/10 px-4 outline-none focus:ring-2 focus:ring-[#ff385c]/30'>
                      <option>Any</option>
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Room</option>
                    </select>
                  </div>
                </div>

                <Link to='/listings' className='mt-1'>
                  <button className='w-full h-[46px] rounded-xl bg-black text-white font-medium hover:opacity-90'>
                  Search
                  </button>
                </Link>
              </div>
            </div>

            
          </div>
        </section>

        
      </main>

      <footer className='border-t border-black/10'>
        <div className='max-w-[1200px] mx-auto px-4 py-8 text-[13px] text-black/60 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between'>
          <span>© Airbnb Clone (learning project is here)</span>
         
        </div>
      </footer>
    </div>
  );
};

export default Home;
