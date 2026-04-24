import React, { useMemo, useState } from 'react';
import Nav from '../Component/Nav';

const demoListings = [
  {
    id: 'l1',
    title: 'Cozy in City Center',
    location: 'Delhi',
    type: 'Apartment',
    pricePerNight: 2100,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'l2',
    title: 'Sunny Home with Balcony',
    location: 'Mumbai',
    type: 'House',
    pricePerNight: 3500,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'l3',
    title: 'Budget Room Near Metro',
    location: 'Bengaluru',
    type: 'Room',
    pricePerNight: 1200,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=60',
    
  },
  {
    id: 'l4',
    title: 'Budget Room near ganga',
    location: 'Rishikesh',
    type: 'Room',
    pricePerNight: 1200,
    rating: 7.7,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=60',
  },
];

const ListingCard = ({ item }) => {
  return (
    <div className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition'>
      <img src={item.image} className='h-[180px] w-full object-cover' />

      <div className='p-4 flex flex-col gap-2'>
        <div className='flex justify-between'>
          <h2 className='font-semibold text-[16px]'>{item.title}</h2>
          <span className='text-sm'>⭐ {item.rating}</span>
        </div>

        <p className='text-sm text-gray-500'>
          {item.location} • {item.type}
        </p>

        <div className='flex justify-between items-center mt-2'>
          <p className='font-semibold'>
            ₹{item.pricePerNight} / night
          </p>

          <button className='bg-pink-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-pink-600'>
            View
          </button>
        </div>
      </div>
    </div>
  );
};

const ListingPage = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');

  const filtered = useMemo(() => {
    return demoListings.filter((item) => {
      const q = query.toLowerCase();

      const matchSearch =
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q);

      const matchType = type === 'All' || item.type === type;

      return matchSearch && matchType;
    });
  }, [query, type]);

  return (
    <div className='min-h-screen bg-gray-50'>
      <Nav />

      <div className='max-w-5xl mx-auto px-4 py-6'>

        {/* Header */}
        <h1 className='text-2xl font-bold'>Find Your Stay</h1>
        <p className='text-gray-500 text-sm'>
          Simple listings page
        </p>

        {/* Search */}
        <div className='mt-4 flex flex-col md:flex-row gap-3'>
          <input
            type='text'
            placeholder='Search city or place...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='w-full border px-4 py-2 rounded-lg'
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className='border px-4 py-2 rounded-lg'
          >
            <option value='All'>All</option>
            <option value='Apartment'>Apartment</option>
            <option value='House'>House</option>
            <option value='Room'>Room</option>
          </select>
        </div>

        {/* Listings */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
          {filtered.map((item) => (
            <ListingCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ListingPage;
