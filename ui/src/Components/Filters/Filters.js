import React, { useState } from 'react';
import { useFilterContext } from '../../Context/filter_context';

export default function Filters() {
  const {
    filterByEnabled,
    filters: { status },
    updateFilters,
  } = useFilterContext();

  const handleValueChange = (event) => {
    const { name, value } = event.target;
    updateFilters(name, value);
  };

  return (
    <div className='mb-2 xl:w-96'>
      <select
        className='form-select form-select-sm
    appearance-none
    block
    w-24
    px-2
    py-1
    text-md
    font-normal
    m-4
    placeholder:text-xl
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        aria-label='.form-select-sm example'
        value={status}
        name='status'
        onChange={handleValueChange}
      >
        <option value='all'>Both</option>
        <option value={true}>Enabled</option>
        <option value={false}>Disabled</option>
      </select>
    </div>
  );
}
