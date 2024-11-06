'use client'
import React from 'react';

const SortTech = ({ sortOption, setSortOption }) => {
  return (
    <div className='flex items-center max-sm:flex-col max-sm:mt-12 max-sm:gap-2'>
      <p className='text-zinc-500 mr-4 max-sm:text-xs'>Sort by:</p>
      <div className='flex items-center'>
        <input
          type="checkbox"
          id="sortDefault"
          checked={sortOption === 'default'}
          onChange={() => setSortOption('default')}
          className='mr-2 max-sm:text-xs'
        />
        <label htmlFor="sortDefault" className='mr-4 text-zinc-500 max-sm:text-xs'>Default</label>
      </div>
      <div className='flex items-center'>
        <input
          type="checkbox"
          id="sortCompleted"
          checked={sortOption === 'completed'}
          onChange={() => setSortOption('completed')}
          className='mr-2 max-sm:text-xs'
        />
        <label htmlFor="sortCompleted" className='max-sm:text-xs text-zinc-500'>Completed</label>
      </div>
    </div>
  );
};

export default SortTech;
