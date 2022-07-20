import { useState, useCallback } from 'react';
import { FEATURE_FLAGS } from '../../Mock/featureFlags';
import { useFilterContext } from '../../Context/filter_context';

export default function Search() {
  const {
    filters: { userInput },
    updateFilters,
  } = useFilterContext();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFilters(name, value);
  };

  return (
    <section className='mb-2 sm:w-96  flex justify-center items-center'>
      <input
        type='text'
        className='
        flex
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-xl
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        placeholder-gray-300::placeholder
        placeholder-opacity-25
      '
        name='userInput'
        value={userInput}
        onChange={handleInputChange}
        placeholder='Search issues by Name, Createdby, Repository...'
      />
    </section>
  );
}
