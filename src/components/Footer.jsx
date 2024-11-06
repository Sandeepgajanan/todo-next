'use client'
import React from 'react';
import SortTech from './SortTech';

const Footer = ({ tasks, onClearAll, sortOption, setSortOption }) => {
  const taskCount = tasks?.length || 0;

  return (
    <div className='flex justify-center mt-10'>
      <div className='w-1/2 border-t border-zinc-200 p-2 flex flex-col gap-3 max-sm:w-full max-sm:px-4 max-sm:pt-2'>
        <div className='flex justify-between items-center'>
          <p className='text-zinc-500 max-sm:text-xs'>
            {taskCount} {taskCount === 1 ? 'item' : 'items'}
          </p>
          <SortTech sortOption={sortOption} setSortOption={setSortOption} />
          <button
            onClick={onClearAll}
            className='text-zinc-500 hover:text-zinc-700 transition-colors max-sm:text-xs'
            disabled={taskCount === 0}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
